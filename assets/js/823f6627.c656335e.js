"use strict";(self.webpackChunkkikhot_blog=self.webpackChunkkikhot_blog||[]).push([[9135],{8753:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2","title":"\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2","description":"\u9762\u8bd5\u5b98\u53ef\u80fd\u4f1a\u95ee\u9053\u7684\u95ee\u9898\uff1a","source":"@site/docs/interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2.md","sourceDirName":"interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7","slug":"/interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2","permalink":"/docs/interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"InterviewSidebar","previous":{"title":"Redis\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46\u4e3a\u4ec0\u4e48\u8fd8\u662f\u90a3\u4e48\u5feb","permalink":"/docs/interview-questions/redis\u7bc7/Redis\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46\u4e3a\u4ec0\u4e48\u8fd8\u662f\u90a3\u4e48\u5feb"},"next":{"title":"\u4f18\u5316-\u5982\u4f55\u4f18\u5316SQL\u6162\u67e5\u8be2","permalink":"/docs/interview-questions/\u6570\u636e\u5e93\u7bc7/MySQL\u7bc7/\u4f18\u5316-\u5982\u4f55\u4f18\u5316SQL\u6162\u67e5\u8be2"}}');var r=s(4848),t=s(8453);const l={sidebar_position:1},c=void 0,d={},o=[{value:"\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2\uff1f",id:"\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2",level:2},{value:"\u65b9\u6848\u4e00\uff1a\u5f00\u6e90\u5de5\u5177",id:"\u65b9\u6848\u4e00\u5f00\u6e90\u5de5\u5177",level:3},{value:"\u65b9\u6848\u4e8c\uff1aMySQL\u81ea\u5e26\u6162\u65e5\u5fd7",id:"\u65b9\u6848\u4e8cmysql\u81ea\u5e26\u6162\u65e5\u5fd7",level:3},{value:"\u9762\u8bd5\u573a\u666f",id:"\u9762\u8bd5\u573a\u666f",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u9762\u8bd5\u5b98\u53ef\u80fd\u4f1a\u95ee\u9053\u7684\u95ee\u9898\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u753b\u677f",src:s(5522).A+"",width:"780",height:"158"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6162\u67e5\u8be2\u51fa\u73b0\u7684\u60c5\u51b5\u6709\u8fd9\u4e9b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u805a\u5408\u67e5\u8be2"}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u8868\u67e5\u8be2"}),"\n",(0,r.jsx)(n.li,{children:"\u8868\u6570\u636e\u91cf\u8fc7\u5927\u67e5\u8be2"}),"\n",(0,r.jsx)(n.li,{children:"\u6df1\u5ea6\u5206\u9875\u67e5\u8be2"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u7684\u8868\u73b0\u5f62\u5f0f\u4e3a\uff1a\u9875\u9762\u52a0\u8f7d\u8fc7\u6162\u3001\u63a5\u53e3\u538b\u6d4b\u54cd\u5e94\u65f6\u95f4\u8fc7\u957f\uff08\u8d85\u8fc7 1s\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u5982\u4f60\u7684\u4e1a\u52a1\u5c31\u662f\u6bd4\u8f83\u6162\uff0c\u90a3\u4f60\u5982\u4f55\u786e\u5b9a\u662f SQL \u67e5\u8be2\u6162\u8fd8\u662f\u4e1a\u52a1\u5176\u4ed6\u64cd\u4f5c\u5bfc\u81f4\u7f13\u6162\u7684\u5462\uff1f\u5c31\u7b97\u662f SQL \u95ee\u9898\uff0c\u5982\u4f55\u80fd\u591f\u627e\u51fa\u6267\u884c\u6162\u7684 SQL \u5462\uff1f"}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2",children:"\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5f00\u6e90\u7684\u5de5\u5177\u6765\u505a\u8c03\u8bd5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u65b9\u6848\u4e00\u5f00\u6e90\u5de5\u5177",children:"\u65b9\u6848\u4e00\uff1a\u5f00\u6e90\u5de5\u5177"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8c03\u8bd5\u5de5\u5177\uff1a"})," ",(0,r.jsx)(n.strong,{children:"Arthas\uff08\u963f\u5c14\u8428\u65af\uff09"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8fd0\u7ef4\u5de5\u5177\uff1a"})," ",(0,r.jsx)(n.strong,{children:"Prometheus\uff08\u666e\u7f57\u7c73\u4fee\u65af\uff09"})," ",(0,r.jsx)(n.strong,{children:"\u3001"})," ",(0,r.jsx)(n.strong,{children:"Skywalking"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Skywalking \u53ef\u4ee5\u5b9e\u65f6\u67e5\u770b\u63a5\u53e3\u7684\u60c5\u51b5\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(6853).A+"",width:"1413",height:"541"})}),"\n",(0,r.jsx)(n.h3,{id:"\u65b9\u6848\u4e8cmysql\u81ea\u5e26\u6162\u65e5\u5fd7",children:"\u65b9\u6848\u4e8c\uff1aMySQL\u81ea\u5e26\u6162\u65e5\u5fd7"}),"\n",(0,r.jsx)(n.p,{children:"\u6162\u67e5\u8be2\u65e5\u5fd7\u8bb0\u5f55\u4e86\u6240\u6709\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u6307\u5b9a\u53c2\u6570\uff08log_query_time\uff0c\u5355\u4f4d\uff1a\u79d2\uff0c\u9ed8\u8ba4 10 \u79d2\uff09\u7684\u6240\u6709 SQL \u8bed\u53e5\u7684\u65e5\u5fd7\u3002\u5982\u679c\u8981\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7\uff0c\u9700\u8981\u5728 MySQL \u7684\u914d\u7f6e\u6587\u4ef6\uff08/etc/my.cnf\uff09\u4e2d\u914d\u7f6e\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5f00\u542fMySQL\u6162\u65e5\u5fd7\u67e5\u8be2\u5f00\u5173\nslow_query_log = 1\n# \u8bbe\u7f6e\u6162\u65e5\u5fd7\u7684\u65f6\u95f4\u4e3a2\u79d2\uff0cSQL \u8bed\u53e5\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u79d2\uff0c\u5c31\u4f1a\u89c6\u4e3a\u6162\u67e5\u8be2\uff0c\u8bb0\u5f55\u6162\u67e5\u8be2\u65e5\u5fd7\nlong_query_time = 2\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u5b8c\u6bd5\u4e4b\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u91cd\u65b0\u542f\u52a8 MySQL \u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5\uff0c\u67e5\u770b\u6162\u65e5\u5fd7\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u4fe1\u606f /var/lib/mysql/localhost-slow.log\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(6022).A+"",width:"1363",height:"193"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9762\u8bd5\u573a\u666f",children:"\u9762\u8bd5\u573a\u666f"}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udde8\ufe0f",(0,r.jsx)(n.strong,{children:"\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2\uff1f"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ecb\u7ecd\u4ee5\u4e0b\u5f53\u65f6\u4ea7\u751f\u95ee\u9898\u7684\u573a\u666f\uff08\u6211\u4eec\u5f53\u65f6\u7684\u4e00\u4e2a\u63a5\u53e3\u6d4b\u8bd5\u7684\u65f6\u5019\u975e\u5e38\u7684\u6162\uff0c\u538b\u6d4b\u7684\u7ed3\u679c\u5927\u69825\u79d2\u949f\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u6211\u4eec\u7cfb\u7edf\u4e2d\u5f53\u65f6\u91c7\u7528\u4e86\u8fd0\u7ef4\u5de5\u5177\uff08Skywalking\uff09\uff0c\u53ef\u4ee5\u68c0\u6d4b\u51fa\u54ea\u4e2a\u63a5\u53e3\uff0c\u6700\u7ec8\u662f sql \u7684\u95ee\u9898"}),"\n",(0,r.jsx)(n.li,{children:"\u5728 mysql \u4e2d\u5f00\u542f\u4e86\u6162\u65e5\u5fd7\u67e5\u8be2\uff0c\u6211\u4eec\u8bbe\u7f6e\u7684\u503c\u5c31\u662f2\u79d2\uff0c\u4e00\u65e6 sql \u6267\u884c\u8d85\u8fc72\u79d2\u5c31\u4f1a\u8bb0\u5f55\u5230\u65e5\u5fd7\u4e2d\uff08\u8c03\u8bd5\u9636\u6bb5\uff09"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u9762\u8bd5\u9898\u7684\u53c2\u8003\u56de\u7b54"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u9762\u8bd5\u5b98\uff1a"})," MySQL\u4e2d\uff0c\u5982\u4f55\u5b9a\u4f4d\u6162\u67e5\u8be2\uff1f"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5019\u9009\u4eba\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:"\u55ef~\uff0c\u6211\u4eec\u5f53\u65f6\u505a\u538b\u6d4b\u7684\u65f6\u5019\u6709\u7684\u63a5\u53e3\u975e\u5e38\u7684\u6162\uff0c\u63a5\u53e3\u7684\u54cd\u5e94\u65f6\u95f4\u8d85\u8fc7\u4e86 2 \u79d2\u4ee5\u4e0a\uff0c\u56e0\u4e3a\u6211\u4eec\u5f53\u65f6\u7684\u7cfb\u7edf\u90e8\u7f72\u4e86\u8fd0\u7ef4\u7684\u76d1\u63a7\u7cfb\u7edf Skywalking\uff0c\u5728\u5c55\u793a\u7684\u62a5\u8868\u4e2d\u53ef\u4ee5\u770b\u5230\u662f\u54ea\u4e00\u4e2a\u63a5\u53e3\u6bd4\u8f83\u6162\uff0c\u5e76\u4e14\u53ef\u4ee5\u5206\u6790\u8fd9\u4e2a\u63a5\u53e3\u54ea\u90e8\u5206\u6bd4\u8f83\u6162\uff0c\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230 SQL \u7684\u5177\u4f53\u7684\u6267\u884c\u65f6\u95f4\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b9a\u4f4d\u662f\u54ea\u4e2a sql \u51fa\u4e86\u95ee\u9898"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\uff0c\u9879\u76ee\u4e2d\u6ca1\u6709\u8fd9\u79cd\u8fd0\u7ef4\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u5176\u5b9e\u5728 MySQL \u4e2d\u4e5f\u63d0\u4f9b\u4e86\u6162\u65e5\u5fd7\u67e5\u8be2\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u5728 MySQL \u7684\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f00\u542f\u8fd9\u4e2a\u6162\u65e5\u5fd7\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u4e5f\u53ef\u4ee5\u8bbe\u7f6e SQL \u6267\u884c\u8d85\u8fc7\u591a\u5c11\u65f6\u95f4\u6765\u8bb0\u5f55\u5230\u4e00\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u6211\u8bb0\u5f97\u4e0a\u4e00\u4e2a\u9879\u76ee\u914d\u7f6e\u7684\u662f 2 \u79d2\uff0c\u53ea\u8981 SQL \u6267\u884c\u7684\u65f6\u95f4\u8d85\u8fc7\u4e86 2 \u79d2\u5c31\u4f1a\u8bb0\u5f55\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u65e5\u5fd7\u6587\u4ef6\u4e2d\u627e\u5230\u6267\u884c\u6bd4\u8f83\u6162\u7684 SQL \u4e86\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6022:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image_2988fb01-e6e6-4c98-9e62-69ed8bdcbfbd-3a178c5774aeb3bd5bcf7d2e72fdfb15.png"},5522:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image_47e5c57c-4d66-4ae5-acc2-28794dd15d0e-cf48743023fc950613377ed2b98fcbf7.jpeg"},6853:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image_84768192-874c-447f-a943-9b28ba079e1a-4ed3d5622b1d11c49a017e37b48a9744.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);