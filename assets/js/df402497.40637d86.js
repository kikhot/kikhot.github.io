"use strict";(self.webpackChunkkikhot_blog=self.webpackChunkkikhot_blog||[]).push([[5723],{3551:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"interview-questions/redis\u7bc7/\u54e8\u5175\u6a21\u5f0f","title":"\u54e8\u5175\u6a21\u5f0f","description":"Redis\u63d0\u4f9b\u4e86\u54e8\u5175\uff08Sentinel\uff09\u673a\u5236\u6765\u5b9e\u73b0\u4e3b\u4ece\u96c6\u7fa4\u7684\u81ea\u52a8\u6545\u969c\u6062\u590d\u3002\u54e8\u5175\u7684\u7ed3\u6784\u548c\u4f5c\u7528\u5982\u4e0b\uff1a","source":"@site/docs/interview-questions/redis\u7bc7/\u54e8\u5175\u6a21\u5f0f.md","sourceDirName":"interview-questions/redis\u7bc7","slug":"/interview-questions/redis\u7bc7/\u54e8\u5175\u6a21\u5f0f","permalink":"/docs/interview-questions/redis\u7bc7/\u54e8\u5175\u6a21\u5f0f","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview-questions/redis\u7bc7/\u54e8\u5175\u6a21\u5f0f.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"InterviewSidebar","previous":{"title":"Redis\u96c6\u7fa4","permalink":"/docs/interview-questions/redis\u7bc7/Redis\u96c6\u7fa4"},"next":{"title":"\u5206\u7247\u96c6\u7fa4","permalink":"/docs/interview-questions/redis\u7bc7/\u5206\u7247\u96c6\u7fa4"}}');var r=n(4848),t=n(8453);const d={sidebar_position:10},l=void 0,c={},a=[{value:"\u670d\u52a1\u72b6\u6001\u76d1\u63a7",id:"\u670d\u52a1\u72b6\u6001\u76d1\u63a7",level:2},{value:"Redis\u96c6\u7fa4\uff08\u54e8\u5175\u6a21\u5f0f\uff09\u8111\u88c2",id:"redis\u96c6\u7fa4\u54e8\u5175\u6a21\u5f0f\u8111\u88c2",level:2},{value:"\u9762\u8bd5\u573a\u666f",id:"\u9762\u8bd5\u573a\u666f",level:2}];function o(e){const s={admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Redis\u63d0\u4f9b\u4e86\u54e8\u5175\uff08Sentinel\uff09\u673a\u5236\u6765\u5b9e\u73b0\u4e3b\u4ece\u96c6\u7fa4\u7684\u81ea\u52a8\u6545\u969c\u6062\u590d\u3002\u54e8\u5175\u7684\u7ed3\u6784\u548c\u4f5c\u7528\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u76d1\u63a7\uff1a"})," Sentinel \u4f1a\u4e0d\u65ad\u68c0\u67e5\u60a8\u7684 master \u548c slave \u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u81ea\u52a8\u6545\u969c\u6062\u590d\uff1a"})," \u5982\u679c master \u6545\u969c\uff0cSentinel \u4f1a\u5c06\u4e00\u4e2a slave \u63d0\u5347\u4e3a master\u3002\u5f53\u6545\u969c\u5b9e\u4f8b\u6062\u590d\u540e\u4e5f\u4ee5\u65b0\u7684 master \u4e3a\u4e3b"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u901a\u77e5\uff1a"})," Sentinel \u5145\u5f53 Redis \u5ba2\u6237\u7aef\u7684\u670d\u52a1\u53d1\u73b0\u6765\u6e90\uff0c\u5f53\u96c6\u7fa4\u53d1\u751f\u6545\u969c\u8f6c\u79fb\u65f6\uff0c\u4f1a\u5c06\u6700\u65b0\u4fe1\u606f\u63a8\u9001\u7ed9 Redis \u5ba2\u6237\u7aef"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(6305).A+"",width:"886",height:"682"})}),"\n",(0,r.jsx)(s.h2,{id:"\u670d\u52a1\u72b6\u6001\u76d1\u63a7",children:"\u670d\u52a1\u72b6\u6001\u76d1\u63a7"}),"\n",(0,r.jsx)(s.p,{children:"Sentinel \u57fa\u4e8e\u5fc3\u8df3\u673a\u5236\u76d1\u6d4b\u670d\u52a1\u72b6\u6001\uff0c\u6bcf\u96941\u79d2\u5411\u96c6\u7fa4\u7684\u6bcf\u4e2a\u5b9e\u4f8b\u53d1\u9001 ping \u547d\u4ee4\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["\u4e3b\u89c2\u4e0b\u7ebf\uff1a",(0,r.jsx)(s.strong,{children:"\u5982\u679c\u67d0 sentinel \u8282\u70b9\u53d1\u73b0\u67d0\u5b9e\u4f8b\u672a\u5728\u89c4\u5b9a\u65f6\u95f4\u54cd\u5e94\uff0c\u5219\u8ba4\u4e3a\u8be5\u5b9e\u4f8b"}),"\u4e3b\u89c2\u4e0b\u7ebf"]}),"\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["\u5ba2\u89c2\u4e0b\u7ebf\uff1a",(0,r.jsx)(s.strong,{children:"\u82e5\u8d85\u8fc7\u6307\u5b9a\u6570\u91cf\uff08quorum\uff09\u7684 sentinel \u90fd\u8ba4\u4e3a\u8be5\u5b9e\u4f8b\u4e3b\u89c2\u4e0b\u7ebf\uff0c\u5219\u8be5\u5b9e\u4f8b"}),"\u5ba2\u89c2\u4e0b\u7ebf"]}),"\u3002quorum \u503c\u6700\u597d\u8d85\u8fc7 Sentinel \u5b9e\u4f8b\u6570\u91cf\u7684\u4e00\u534a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(5828).A+"",width:"776",height:"495"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u54e8\u5175\u9009\u4e3b\u89c4\u5219"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u9996\u5148\u5224\u65ad\u4e3b\u4e0e\u4ece\u8282\u70b9\u65ad\u5f00\u65f6\u95f4\u957f\u77ed\uff0c\u5982\u8d85\u8fc7\u6307\u5b9a\u503c\u5c31\u6392\u8be5\u4ece\u8282\u70b9"}),"\n",(0,r.jsx)(s.li,{children:"\u7136\u540e\u5224\u65ad\u4ece\u8282\u70b9\u7684 slave-priority \u503c\uff0c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8"}),"\n",(0,r.jsx)(s.li,{children:"\u5982\u679c slave-prority \u4e00\u6837\uff0c\u5219\u5224\u65ad slave \u8282\u70b9\u7684 offset \u503c\uff0c\u8d8a\u5927\u4f18\u5148\u7ea7\u8d8a\u9ad8"}),"\n",(0,r.jsx)(s.li,{children:"\u6700\u540e\u662f\u5224\u65ad slave \u8282\u70b9\u7684\u8fd0\u884c id \u5927\u5c0f\uff0c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"redis\u96c6\u7fa4\u54e8\u5175\u6a21\u5f0f\u8111\u88c2",children:"Redis\u96c6\u7fa4\uff08\u54e8\u5175\u6a21\u5f0f\uff09\u8111\u88c2"}),"\n",(0,r.jsx)(s.p,{children:"\u5f53 sentinel \u4e0e master \u7f51\u7edc\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u800c\u5ba2\u6237\u7aef RedisClient \u8fd8\u80fd\u6b63\u5e38\u8fde\u63a5\uff0c\u5c31\u4f1a\u51fa\u73b0\u8111\u88c2\u73b0\u8c61\uff0c\u4e5f\u5c31\u662f\u5ba2\u6237\u7aef\u5199\u5165\u6570\u636e\u662f\u5728 master \u4e2d\uff0c\u800c sentinel \u56e0\u4e3a\u7f51\u7edc\u95ee\u9898\u76d1\u63a7\u4e0d\u5230\u8001\u7684 master\uff0c\u4f1a\u63a8\u51fa\u4e00\u4e2a\u65b0\u7684 master\u3002\u8fd9\u6837\u5c31\u4f1a\u51fa\u73b0\u4e24\u4e2a master\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u800c\u5f53\u7f51\u7edc\u6062\u590d\u4e4b\u540e\uff0c\u54e8\u5175\u4f1a\u5c06\u8001\u7684 master \u5f3a\u5236\u964d\u4e3a slave\uff0c\u8fd9\u65f6\u964d\u4e3a slave \u7684\u8282\u70b9\u4f1a\u540c\u6b65 master \u6570\u636e\uff0c\u4ece\u800c\u5c06\u4e4b\u524d\u5ba2\u6237\u7aef\u5199\u5165\u7684\u6570\u636e\u4e22\u5931"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(1210).A+"",width:"1248",height:"660"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(4605).A+"",width:"1213",height:"669"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u89e3\u51b3\u65b9\u6cd5\uff1a"})}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4fee\u6539 redis \u4e2d\u7684\u4e24\u4e2a\u914d\u7f6e\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"min-replicas-to-write 1\t\t\u8868\u793a\u6700\u5c11\u7684slave\u8282\u70b9\u4e3a1\u4e2a\uff08\u5373\u4e3b\u8282\u70b9\u81f3\u5c11\u6709\u4e00\u4e2aslave\u624d\u80fd\u63a5\u6536\u65b0\u7684\u6570\u636e\uff09"}),"\n",(0,r.jsx)(s.li,{children:"min-replicas-max-lag 5\t\t\u8868\u793a\u6570\u636e\u590d\u5236\u548c\u540c\u6b65\u7684\u5ef6\u8fdf\u4e0d\u80fd\u8d85\u8fc75\u79d2"}),"\n"]}),"\n",(0,r.jsxs)(s.admonition,{title:"\u9762\u8bd5\u573a\u666f",type:"tip",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u600e\u4e48\u4fdd\u8bc1 Redis \u7684\u9ad8\u5e76\u53d1\u9ad8\u53ef\u7528"})}),(0,r.jsx)(s.p,{children:"\u54e8\u5175\u6a21\u5f0f\uff1a\u5b9e\u73b0\u4e3b\u4ece\u96c6\u7fa4\u7684\u81ea\u52a8\u6545\u969c\u6062\u590d\uff08\u76d1\u63a7\u3001\u81ea\u52a8\u6545\u969c\u6062\u590d\u3001\u901a\u77e5\uff09"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u4f60\u4eec\u4f7f\u7528 redis \u662f\u5355\u70b9\u8fd8\u662f\u96c6\u7fa4\uff0c\u54ea\u79cd\u96c6\u7fa4"})}),(0,r.jsx)(s.p,{children:"\u4e3b\u4ece\uff081\u4e3b1\u4ece\uff09+ \u54e8\u5175\u5c31\u53ef\u4ee5\u4e86\u3002\u5355\u8282\u70b9\u4e0d\u8d85\u8fc7 10G \u5185\u5b58\uff0c\u5982\u679c Redis \u5185\u5b58\u4e0d\u8db3\u5219\u53ef\u4ee5\u7ed9\u4e0d\u540c\u670d\u52a1\u5206\u914d\u72ec\u7acb\u7684 Redis \u4e3b\u4ece\u8282\u70b9"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"redis \u96c6\u7fa4\u8111\u88c2\uff0c\u8be5\u600e\u4e48\u89e3\u51b3\u5462\uff1f"})}),(0,r.jsx)(s.p,{children:"\u96c6\u7fa4\u8111\u88c2\u662f\u7531\u4e8e\u4e3b\u8282\u70b9\u548c\u4ece\u8282\u70b9\u548c sentinel \u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u5206\u533a\uff0c\u4f7f\u5f97 sentinel \u6ca1\u6709\u80fd\u591f\u5fc3\u8df3\u611f\u77e5\u5230\u4e3b\u8282\u70b9\uff0c\u6240\u4ee5\u901a\u8fc7\u9009\u4e3e\u7684\u65b9\u5f0f\u63d0\u5347\u4e86\u4e00\u4e2a\u4ece\u8282\u70b9\u4e3a\u4e3b\uff0c\u8fd9\u6837\u5c31\u5b58\u5728\u4e86\u4e24\u4e2a master\uff0c\u5c31\u50cf\u5927\u8111\u5206\u88c2\u4e86\u4e00\u6837\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5ba2\u6237\u7aef\u8fd8\u5728\u8001\u7684\u4e3b\u8282\u70b9\u90a3\u91cc\u5199\u5165\u6570\u636e\uff0c\u65b0\u8282\u70b9\u65e0\u6cd5\u540c\u6b65\u6570\u636e\uff0c\u5f53\u7f51\u7edc\u6062\u590d\u540e\uff0csentinel \u4f1a\u5c06\u8001\u7684\u4e3b\u8282\u70b9\u964d\u4e3a\u4ece\u8282\u70b9\uff0c\u8fd9\u65f6\u518d\u4ece\u65b0 master \u540c\u6b65\u6570\u636e\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931"}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u89e3\u51b3\ufe30"})," \u6211\u4eec\u53ef\u4ee5\u4fee\u6539 redis \u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5c11\u7684\u4ece\u8282\u70b9\u6570\u91cf\u4ee5\u53ca\u7f29\u77ed\u4e3b\u4ece\u6570\u636e\u540c\u6b65\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u8fbe\u4e0d\u5230\u8981\u6c42\u5c31\u62d2\u7edd\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u6570\u636e\u4e22\u5931"]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u9762\u8bd5\u573a\u666f",children:"\u9762\u8bd5\u573a\u666f"}),"\n",(0,r.jsxs)(s.admonition,{title:"\u9762\u8bd5\u573a\u666f",type:"tip",children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u9762\u8bd5\u5b98\uff1a"})," \u600e\u4e48\u4fdd\u8bc1 redis \u7684\u9ad8\u5e76\u53d1\u9ad8\u53ef\u7528"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5019\u9009\u4eba\uff1a"})," \u9996\u5148\u53ef\u4ee5\u642d\u5efa\u4e3b\u4ece\u96c6\u7fa4\uff0c\u518d\u52a0\u4e0a\u4f7f\u7528 redis \u4e2d\u7684\u54e8\u5175\u6a21\u5f0f\uff0c\u54e8\u5175\u6a21\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u4e3b\u4ece\u96c6\u7fa4\u7684\u81ea\u52a8\u6545\u969c\u6062\u590d\uff0c\u91cc\u9762\u5c31\u5305\u542b\u4e86\u5bf9\u4e3b\u4ece\u670d\u52a1\u7684\u76d1\u63a7\u3001\u81ea\u52a8\u6545\u969c\u6062\u590d\u3001\u901a\u77e5\uff1b\u5982\u679c master \u6545\u969c\uff0cSentinel \u4f1a\u5c06\u4e00\u4e2a slave \u63d0\u5347\u4e3a\u63d0\u5347\u4e3a master\u3002\u5f53\u6545\u969c\u5b9e\u4f8b\u6062\u590d\u540e\u4e5f\u4ee5\u65b0 master \u7684\u4e3a\u4e3b\uff1b\u540c\u65f6 Sentinel \u4e5f\u5145\u5f53 redis \u5ba2\u6237\u7aef\u7684\u670d\u52a1\u53d1\u73b0\u6765\u6e90\uff0c\u5f53\u96c6\u7fa4\u53d1\u751f\u6545\u969c\u8f6c\u79fb\u65f6\uff0c\u4f1a\u5c06\u6700\u65b0\u4fe1\u606f\u63a8\u9001\u7ed9 Redis \u7684\u5ba2\u6237\u7aef\uff0c\u6240\u4ee5\u4e00\u822c\u9879\u76ee\u90fd\u4f1a\u91c7\u7528\u54e8\u5175\u7684\u6a21\u5f0f\u6765\u4fdd\u8bc1 redis \u7684\u9ad8\u5e76\u53d1\u9ad8\u53ef\u7528"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u9762\u8bd5\u5b98\uff1a"})," \u4f60\u4eec\u4f7f\u7528 redis \u662f\u5355\u70b9\u8fd8\u662f\u96c6\u7fa4\uff0c\u54ea\u79cd\u96c6\u7fa4"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5019\u9009\u4eba\uff1a"})," \u55ef\uff01\uff0c\u6211\u4eec\u5f53\u65f6\u4f7f\u7528\u7684\u662f\u4e3b\u4ece(1\u4e3b1\u4ece)\u52a0\u54e8\u5175\u3002\u4e00\u822c\u5355\u8282\u70b9\u4e0d\u8d85\u8fc7 10G \u5185\u5b58\uff0c\u5982\u679c redis \u5185\u5b58\u4e0d\u8db3\u5219\u53ef\u4ee5\u7ed9\u4e0d\u540c\u670d\u52a1\u5206\u914d\u72ec\u7acb\u7684 Redis \u4e3b\u4ece\u8282\u70b9\u3002\u5c3d\u91cf\u4e0d\u505a\u5206\u7247\u96c6\u7fa4\u3002\u56e0\u4e3a\u96c6\u7fa4\u7ef4\u62a4\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e4b\u95f4\u7684\u5fc3\u8df3\u68c0\u6d4b\u548c\u6570\u636e\u901a\u4fe1\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u7f51\u7edc\u5e26\u5bbd\uff0c\u4e5f\u6ca1\u6709\u529e\u6cd5\u4f7f\u7528 lua \u811a\u672c\u548c\u4e8b\u52a1"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u9762\u8bd5\u5b98\uff1a"})," redis \u96c6\u7fa4\u8111\u88c2\uff0c\u8be5\u600e\u4e48\u89e3\u51b3\u5462\uff1f"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5019\u9009\u4eba\uff1a"})," \u55ef\uff01\u8fd9\u4e2a\u5728\u9879\u76ee\u5f88\u5c11\u89c1\uff0c\u4e0d\u8fc7\u8111\u88c2\u7684\u95ee\u9898\u662f\u8fd9\u6837\u7684\uff0c\u6211\u4eec\u73b0\u5728\u7528\u7684\u662f redis \u7684\u54e8\u5175\u6a21\u5f0f\u96c6\u7fa4\u7684\u6709\u7684\u65f6\u5019\u7531\u4e8e\u7f51\u7edc\u7b49\u539f\u56e0\u53ef\u80fd\u4f1a\u51fa\u73b0\u8111\u88c2\u7684\u60c5\u51b5\uff0c\u5c31\u662f\u8bf4\uff0c\u7531\u4e8e redis master \u8282\u70b9\u548c redis salve \u8282\u70b9\u548c Sentinel \u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u5206\u533a\uff0c\u4f7f\u5f97 Sentinel \u6ca1\u6709\u80fd\u591f\u5fc3\u8df3\u611f\u77e5\u5230 Master\uff0c\u6240\u4ee5\u901a\u8fc7\u9009\u4e3e\u7684\u65b9\u5f0f\u63d0\u5347\u4e86\u4e00\u4e2a salve \u4e3a Master\uff0c\u8fd9\u6837\u5c31\u5b58\u5728\u4e86\u4e24\u4e2a Master\uff0c\u5c31\u50cf\u5927\u8111\u5206\u88c2\u4e86\u4e00\u6837\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5ba2\u6237\u7aef\u8fd8\u5728\u8001\u4e3b\u4eba\u90a3\u91cc\u5199\u5165\u6570\u636e\uff0c\u65b0\u8282\u70b9\u65e0\u6cd5\u540c\u6b65\u6570\u636e\uff0c\u5f53\u7f51\u7edc\u6062\u590d\u540e\uff0c\u54e8\u5175\u4f1a\u5c06\u8001\u4e3b\u4eba\u964d\u4e3a Salve\uff0c\u8fd9\u65f6\u518d\u4ece\u65b0\u5927\u5e08\u540c\u6b65\u6570\u636e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u8001\u4e3b\u4eba\u4e2d\u7684\u5927\u91cf\u6570\u636e\u4e22\u5931\u3002"]}),(0,r.jsx)(s.p,{children:"\u5173\u4e8e\u89e3\u51b3\u7684\u8bdd\uff0c\u6211\u8bb0\u5f97\u5728 redis \u7684\u914d\u7f6e\u4e2d\u53ef\u4ee5\u8bbe\u7f6e\uff1a\u7b2c\u4e00\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5c11\u7684 salve \u8282\u70b9\u4e2a\u6570\uff0c\u6bd4\u5982\u8bbe\u7f6e\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u4ece\u8282\u70b9\u624d\u80fd\u540c\u6b65\u6570\u636e\uff0c\u7b2c\u4e8c\u4e2a\u53ef\u4ee5\u8bbe\u7f6e\u4e3b\u4ece\u6570\u636e\u590d\u5236\u548c\u540c\u6b65\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u8fbe\u4e0d\u5230\u8981\u6c42\u5c31\u62d2\u7edd\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u5927\u91cf\u7684\u6570\u636e\u4e22\u5931"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1210:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/image_3e4f7be6-0966-4c20-8da6-59d686eb40a2-e57b9687fa30e8a8dee192a0a9b55df9.png"},5828:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/image_67076457-b50a-49c8-a22c-8dad91cda615-68e16e12f550d57f384138110e0b918d.png"},6305:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/image_78a9cff8-4b39-4e7a-af91-6ecd3498912d-03048842cc01f4d87f4eb588e27ed44c.png"},4605:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/image_ea3341ad-3f49-47f6-b6d6-68ea86a09a1e-f929989a16a41aa9cddda7c06c4b2dc1.png"},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var i=n(6540);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);