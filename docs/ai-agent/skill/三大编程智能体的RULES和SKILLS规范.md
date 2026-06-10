# 三大编程智能体的 RULES 和 SKILLS 规范！

RULES 和 SKILL 是编程智能体的两个重要概念，用好了可以大幅节省 tokens 和时间，关键是可以大幅提升效率，降低出错的概率。

目前几乎所有的主流编程工具，比如 Claude Code 和 Codex 都已经支持 Rules 和 Skills。

但是，各家的命名和规范五花八门。

Rules 这里主要用来表达项目规范，或者说项目上下文。在 Claude Code 一般叫 `CLAUDE.md`，在 Codex 中叫 `AGENTS.md`。

Skills 虽然基本的规则相同，但是不同智能体中放置的路径是完全不同的。

如果你同时用很多编程工具，很容易搞混。项目一多完全就搞不清楚，哪些规则哪些技能在哪些项目里有效了。

接下来我会汇总 Claude Code、OpenAI Codex CLI、Gemini CLI 三大终端智能体的规则（Rules）和技能（Skills）文件的命名及存放路径。

---

# 〇、Agent Skills 开放标准

官方网站：

* agentskills.io

规范文档：

* agentskills.io/specification

Agent Skills 是一个开放标准格式，由 Anthropic 发起并维护，用于给 AI 代理添加新能力和专业知识。

该标准已被多个平台采用，包括：

* Claude Code
* OpenAI Codex CLI
* Gemini CLI
* Cursor
* VS Code
* GitHub Copilot

---

## 核心规范

### 目录结构

```text
skill-name/
├── SKILL.md           # 必需：指令和元数据
├── scripts/           # 可选：可执行脚本
├── references/        # 可选：参考文档
└── assets/            # 可选：模板和资源
```

### SKILL.md 格式（YAML Frontmatter + Markdown）

```yaml
---
name: skill-name
description: 技能描述和使用场景

license: Apache-2.0
compatibility: Requires git, docker
allowed-tools: Bash(git:*) Read

metadata:
  author: example-org
  version: "1.0"
---

技能指令内容...
```

---

## Frontmatter 字段规范

| 字段            | 必需 | 约束                  |
| ------------- | -- | ------------------- |
| name          | 是  | 最多64字符，仅小写字母、数字、连字符 |
| description   | 是  | 最多1024字符            |
| license       | 否  | 许可证名称               |
| compatibility | 否  | 最多500字符             |
| metadata      | 否  | 任意键值对               |
| allowed-tools | 否  | 预授权工具列表（实验性）        |

---

## 渐进式披露（Progressive Disclosure）

技能采用三层加载策略：

### 1. 元数据

约 100 Tokens

仅加载：

* name
* description

### 2. 指令

建议小于 5000 Tokens

激活后加载：

* 完整 SKILL.md

### 3. 资源

按需加载：

* scripts/
* references/
* assets/

---

# 一、Claude Code

## 官方文档

* code.claude.com/docs/en/settings
* code.claude.com/docs/en/skills

---

## 1. Rules 文件

Claude Code 的规则文件叫：

```text
CLAUDE.md
```

### 存放位置

| 级别      | 路径                               | 说明         |
| ------- | -------------------------------- | ---------- |
| 用户级     | ~/.claude/CLAUDE.md              | 全局规则       |
| 项目级     | <project-root>/CLAUDE.md         | 项目共享       |
| 项目级（替代） | <project-root>/.claude/CLAUDE.md | 放在 .claude |
| 本地覆盖    | <project-root>/CLAUDE.local.md   | Git Ignore |
| 子目录     | <subdir>/CLAUDE.md               | 子目录专属规则    |

### 加载顺序

全局 → 项目 → 本地 → 子目录

后者优先级更高。

---

## 2. Skills 文件

### 用户级

```text
~/.claude/skills/<skill-name>/SKILL.md
```

### 项目级

```text
<project-root>/.claude/skills/<skill-name>/SKILL.md
```

### 插件级

```text
<plugin>/skills/<skill-name>/SKILL.md
```

### 企业级

组织托管配置

---

### 技能目录结构

```text
my-skill/
├── SKILL.md
├── template.md
├── examples/
├── references/
├── assets/
└── scripts/
```

---

### Claude 扩展 Frontmatter

```yaml
---
name: my-skill
description: 技能描述

argument-hint: "[filename] [format]"

disable-model-invocation: false

user-invocable: true

allowed-tools: Read, Grep

model: sonnet

context: fork

agent: Explore

hooks:
  pre-invoke: "./scripts/setup.sh"
---

技能指令内容...
```

---

### 支持变量

```text
$ARGUMENTS
${CLAUDE_SESSION_ID}
```

---

### 调用方式

#### 用户调用

```text
/skill-name [arguments]
```

#### 自动调用

Claude 根据 description 自动匹配。

---

# 二、OpenAI Codex CLI

## 官方文档

* developers.openai.com/codex/guides
* developers.openai.com/codex/skills

---

## 1. Rules 文件

Codex 使用：

```text
AGENTS.md
```

---

### 存放位置

| 级别   | 路径                            |
| ---- | ----------------------------- |
| 用户级  | ~/.codex/AGENTS.md            |
| 用户覆盖 | ~/.codex/AGENTS.override.md   |
| 项目级  | <git-root>/AGENTS.md          |
| 项目覆盖 | <git-root>/AGENTS.override.md |
| 子目录级 | <subdir>/AGENTS.md            |

---

### 加载顺序

1. ~/.codex
2. 项目根目录
3. 当前目录

越接近当前目录优先级越高。

---

### config.toml

```toml
project_doc_max_bytes = 32768

project_doc_fallback_filenames = [
  "TEAM_GUIDE.md"
]
```

---

## 2. Skills 文件

Codex 于 2025 年 12 月正式支持 Agent Skills。

### 技能路径

| 级别    | 路径                       | 优先级 |
| ----- | ------------------------ | --- |
| 当前目录  | $CWD/.codex/skills       | 最高  |
| 父目录   | $CWD/../.codex/skills    | 高   |
| 仓库根目录 | $REPO_ROOT/.codex/skills | 中   |
| 用户级   | ~/.codex/skills          | 低   |
| 管理员级  | /etc/codex/skills        | 更低  |
| 系统级   | 内置技能                     | 最低  |

---

### 技能结构

```text
my-skill/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

---

### Codex Frontmatter

```yaml
---
name: skill-name

description: 帮助 Codex 选择技能的描述

metadata:
  short-description: UI 显示
  author: your-name
  version: "1.0"
---

技能指令内容...
```

---

### 调用方式

#### 显式调用

```text
$skill-name
```

例如：

```text
$skill-installer
```

#### 自动调用

根据 description 自动匹配。

---

### 内置技能

```text
$skill-creator
$skill-installer
$create-plan
```

---

### 禁用技能

```toml
[[skills.config]]
path = "/path/to/skill"
enabled = false
```

---

## 3. Rules 权限文件（实验性）

位置：

```text
~/.codex/rules/*.rules
```

示例：

```python
prefix_rule(
    pattern = ["gh", "pr", ["view", "list"]],
    decision = "allow",
    justification = "允许查看 GitHub PR"
)
```

---

# 三、Gemini CLI

## 官方文档

* geminicli.com/docs/cli/skills
* geminicli.com/docs/get-started

---

## 1. Rules 文件

Gemini 使用：

```text
GEMINI.md
```

---

### 存放位置

| 级别   | 路径                       |
| ---- | ------------------------ |
| 用户级  | ~/.gemini/GEMINI.md      |
| 项目级  | <project-root>/GEMINI.md |
| 祖先目录 | 向上搜索                     |
| 子目录级 | <subdir>/GEMINI.md       |

---

### 加载顺序

```text
全局
 ↓
项目根
 ↓
祖先目录
 ↓
子目录
```

---

### 特性

支持：

```text
@file.md
```

导入其他文件。

添加全局记忆：

```bash
/memory add <text>
```

---

## 2. Skills 文件

### 开启方式

#### 设置界面

```text
/settings
```

启用：

```text
Agent Skills
```

#### settings.json

```json
{
  "experimental": {
    "skills": true
  }
}
```

---

### 技能路径

| 级别   | 路径               |
| ---- | ---------------- |
| 工作区级 | .gemini/skills   |
| 用户级  | ~/.gemini/skills |
| 扩展级  | extension/skills |

---

### 技能结构

```text
my-skill/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

---

### Gemini Frontmatter

```yaml
---
name: api-auditor

description: >
  API 端点审计专家。
  当用户要求检查、
  测试或审计 URL 或 API 时使用。
---

技能指令内容...
```

---

### 激活流程

#### 发现

仅加载：

```text
name
description
```

#### 激活

调用：

```text
activate_skill
```

用户确认后加载完整技能。

#### 执行

技能目录加入允许访问路径。

---

### 管理命令

```bash
/skills list
/skills enable <name>
/skills disable <name>
/skills reload
```

---

### CLI 命令

```bash
gemini skills install <path-or-url>

gemini skills uninstall <name>

gemini skills enable <name> --scope user|workspace

gemini skills disable <name>
```

---

# 四、对比汇总表

## Rules 文件

| 智能体         | 文件名       | 用户级                 | 项目级                 |
| ----------- | --------- | ------------------- | ------------------- |
| Claude Code | CLAUDE.md | ~/.claude/CLAUDE.md | <project>/CLAUDE.md |
| Codex CLI   | AGENTS.md | ~/.codex/AGENTS.md  | <project>/AGENTS.md |
| Gemini CLI  | GEMINI.md | ~/.gemini/GEMINI.md | <project>/GEMINI.md |

---

## Skills 文件

| 智能体         | 文件名      | 用户级路径            | 项目级路径          | 状态   |
| ----------- | -------- | ---------------- | -------------- | ---- |
| Claude Code | SKILL.md | ~/.claude/skills | .claude/skills | 正式支持 |
| Codex CLI   | SKILL.md | ~/.codex/skills  | .codex/skills  | 正式支持 |
| Gemini CLI  | SKILL.md | ~/.gemini/skills | .gemini/skills | 实验性  |

---

## Frontmatter 字段对比

| 字段                       | Agent Skills | Claude | Codex | Gemini |
| ------------------------ | ------------ | ------ | ----- | ------ |
| name                     | 必需           | 必需     | 必需    | 必需     |
| description              | 必需           | 必需     | 必需    | 必需     |
| license                  | 可选           | -      | -     | -      |
| compatibility            | 可选           | -      | -     | -      |
| metadata                 | 可选           | -      | 可选    | -      |
| allowed-tools            | 可选           | 可选     | -     | -      |
| disable-model-invocation | -            | 可选     | -     | -      |
| user-invocable           | -            | 可选     | -     | -      |
| context                  | -            | 可选     | -     | -      |
| agent                    | -            | 可选     | -     | -      |
| argument-hint            | -            | 可选     | -     | -      |
| model                    | -            | 可选     | -     | -      |
| hooks                    | -            | 可选     | -     | -      |

---

# 五、技能复用

由于三者都支持 Agent Skills 开放标准，因此技能可以跨平台复用。

推荐：

1. 使用标准目录结构
2. 使用标准字段（name、description）
3. 平台扩展字段作为增强功能

例如：

```text
my-skill/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

这样同一个 Skill 可以同时运行在：

* Claude Code
* OpenAI Codex CLI
* Gemini CLI

而 Claude 特有字段（如 `context: fork`）会被其他平台自动忽略。

有了统一的规范之后，就可以很好地管理不同智能体的规则和技能，并进一步将这些管理逻辑本身做成一个 Skill，实现自动创建和维护。
