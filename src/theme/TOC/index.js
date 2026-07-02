import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useFilteredAndTreeifiedTOC,
  useTOCHighlight,
} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

const LINK_CLASS_NAME = 'kikhot-toc-link';
const LINK_ACTIVE_CLASS_NAME = 'kikhot-toc-link--active';

function getInitialCollapsedGroups(toc) {
  const collapsedGroups = new Set();

  function collect(items, depth = 0) {
    items.forEach((item) => {
      if (depth > 0 && item.children?.length) {
        collapsedGroups.add(item.id);
      }

      collect(item.children ?? [], depth + 1);
    });
  }

  collect(toc);
  return collapsedGroups;
}

function getAnchorScrollOffset() {
  const navbar = document.querySelector('.navbar');
  return (navbar?.getBoundingClientRect().height ?? 0) + 24;
}

function handleAnchorClick(event, id) {
  event.preventDefault();

  const heading = document.getElementById(id);
  if (!heading) {
    return;
  }

  const top =
    heading.getBoundingClientRect().top +
    window.scrollY -
    getAnchorScrollOffset();

  window.history.pushState(null, '', `#${id}`);
  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}

function OutlineTree({toc, collapsedGroups, onToggle, isChild = false}) {
  if (!toc.length) {
    return null;
  }

  return (
    <ul className={isChild ? styles.childList : styles.list}>
      {toc.map((heading) => {
        const hasChildren = heading.children?.length > 0;
        const isCollapsed = collapsedGroups.has(heading.id);

        return (
          <li className={styles.item} key={heading.id}>
            <div className={styles.row}>
              {hasChildren ? (
                <button
                  aria-expanded={!isCollapsed}
                  aria-label={isCollapsed ? 'Expand section' : 'Collapse section'}
                  className={styles.foldButton}
                  onClick={() => onToggle(heading.id)}
                  type="button">
                  {isCollapsed ? '▸' : '▾'}
                </button>
              ) : (
                <span className={styles.foldSpacer} />
              )}
              <Link
                className={clsx(styles.link, LINK_CLASS_NAME)}
                dangerouslySetInnerHTML={{__html: heading.value}}
                onClick={(event) => handleAnchorClick(event, heading.id)}
                to={`#${heading.id}`}
              />
            </div>
            {hasChildren && !isCollapsed ? (
              <OutlineTree
                collapsedGroups={collapsedGroups}
                isChild
                onToggle={onToggle}
                toc={heading.children}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function TOC({
  className,
  toc,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
}) {
  const themeConfig = useThemeConfig();
  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });
  const [isOutlineCollapsed, setIsOutlineCollapsed] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState(() =>
    getInitialCollapsedGroups(tocTree),
  );

  const tocHighlightConfig = useMemo(
    () => ({
      linkClassName: LINK_CLASS_NAME,
      linkActiveClassName: LINK_ACTIVE_CLASS_NAME,
      minHeadingLevel,
      maxHeadingLevel,
    }),
    [maxHeadingLevel, minHeadingLevel],
  );

  useTOCHighlight(tocHighlightConfig);

  function toggleGroup(id) {
    setCollapsedGroups((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  if (!tocTree.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        styles.outline,
        isOutlineCollapsed && styles.outlineCollapsed,
        className,
      )}>
      <div className={styles.header}>
        <span>On this page</span>
        <button
          aria-expanded={!isOutlineCollapsed}
          aria-label={isOutlineCollapsed ? 'expand outline' : 'toggle outline'}
          className={styles.collapseButton}
          onClick={() => setIsOutlineCollapsed((value) => !value)}
          type="button">
          {isOutlineCollapsed ? '▸' : '▾'}
        </button>
      </div>
      {!isOutlineCollapsed ? (
        <nav className={styles.scrollArea} aria-label="On this page">
          <OutlineTree
            collapsedGroups={collapsedGroups}
            onToggle={toggleGroup}
            toc={tocTree}
          />
        </nav>
      ) : null}
    </div>
  );
}
