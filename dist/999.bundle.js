"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[999],{999:(n,a,e)=>{e.r(a),e.d(a,{default:()=>c});var r=e(6540),t=e(7987),i=e(8753),o=e(6345),l=e(5072),s=e.n(l),p=e(6426);s()(p.A,{insert:"head",singleton:!1}),p.A.locals;const c=function(){return r.createElement("div",{className:"sales-flow-container"},r.createElement(t.A,null),r.createElement(i.A,null),r.createElement(o.A,null))}},5807:(n,a,e)=>{e.d(a,{A:()=>i});var r=e(6314),t=e.n(r)()((function(n){return n[1]}));t.push([n.id,'.pagination {\n  margin: 3rem 0;\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  /* .page-navi, */\n  /* .page-navi { border: 1px solid var(--gray-15); } */\n}\n.pagination .page-navi {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  font-size: 1.6rem;\n}\n.pagination .page-navi:hover {\n  color: var(--gray-90);\n}\n.pagination .page-link {\n  width: 4rem;\n  height: 4rem;\n  padding: 1rem 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid transparent;\n  transition: 0.2s;\n}\n.pagination .page-link:hover, .pagination .page-link:focus {\n  text-decoration: none;\n  background-color: var(--gray-5);\n  color: var(--gray-90);\n}\n.pagination .page-links {\n  margin: 0 0.5rem;\n  display: flex;\n  gap: 0.2rem;\n  font-size: 1.5rem;\n}\n.pagination .link-dot:hover, .pagination .link-dot:focus {\n  border-color: transparent;\n}\n.pagination .prev::before {\n  content: "\\ea64";\n  font-family: var(--icon);\n  font-size: 2rem;\n  display: block;\n}\n.pagination .next::before {\n  content: "\\ea6e";\n  font-family: var(--icon);\n  font-size: 2rem;\n  display: block;\n}\n.pagination .link-dot::before {\n  content: "\\ef79";\n  font-family: var(--icon);\n  font-size: 2rem;\n  display: block;\n}\n.pagination .next {\n  flex-direction: row-reverse;\n}\n.pagination .active {\n  background-color: var(--white);\n  color: var(--gray-90);\n  font-weight: 600;\n  border-color: var(--gray-90);\n}\n\n@media (max-width: 767.98px) {\n  .pagination {\n    position: relative;\n    padding-top: 5rem;\n  }\n  .pagination .page-navi {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    translate: -50% 0;\n    transition: 0.2s;\n  }\n  .pagination .page-navi.prev {\n    translate: -100% 0;\n  }\n  .pagination .page-navi.next {\n    translate: 50% 0;\n  }\n  /* .paging {\n  \t.page-none { display: none; }\n  \t.page-now { display: flex; }\n  }\n  .board-pager {\n  \t.group a { display: none; \n  \t\t&.active { display: flex; }\n  \t}\n  }\n  .last_page { @include flex(1rem, center, center); } */\n}',""]);const i=t},6345:(n,a,e)=>{e.d(a,{A:()=>l});var r=e(6540),t=e(5072),i=e.n(t),o=e(5807);function l(){return r.createElement("div",{className:"pagination"},r.createElement("a",{href:"#",className:"page-navi prev"},"이전"),r.createElement("div",{className:"page-links"},r.createElement("a",{href:"#",className:"page-link"},"1"),r.createElement("a",{href:"#",className:"page-link"},"2"),r.createElement("a",{href:"#",className:"page-link"},"3"),r.createElement("a",{href:"#",className:"page-link active"},"4"),r.createElement("a",{href:"#",className:"page-link"},"5"),r.createElement("a",{href:"#",className:"page-link"},"6")),r.createElement("a",{href:"#",className:"page-navi next"},"다음"))}i()(o.A,{insert:"head",singleton:!1}),o.A.locals},6426:(n,a,e)=>{e.d(a,{A:()=>i});var r=e(6314),t=e.n(r)()((function(n){return n[1]}));t.push([n.id,"/* SalesFlow specific styles */\r\n.sales-flow-container {\r\n    padding: var(--spacing-lg);\r\n}\r\n\r\n.flow-chart {\r\n    margin: var(--spacing-lg) 0;\r\n}\r\n\r\n.flow-stats {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    gap: var(--spacing-md);\r\n    margin-bottom: var(--spacing-lg);\r\n}\r\n\r\n.flow-card {\r\n    background: var(--white);\r\n    border-radius: var(--border-radius);\r\n    padding: var(--spacing-lg);\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-container {\r\n    margin-bottom: var(--spacing-lg);\r\n}\r\n\r\n.table-container {\r\n    margin-bottom: var(--spacing-lg);\r\n} ",""]);const i=t}}]);