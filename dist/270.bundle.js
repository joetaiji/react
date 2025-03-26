"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[270],{3223:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6314),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,'/* =======================================================================================\r\n03.매출관리 & 04.지출관리 \r\n======================================================================================= */\r\n.amount-target {\r\n\tborder-radius: 1.2rem;\r\n\tcolor: var(--white);\r\n\tpadding: 1.6rem 6rem;\r\n\tbackground: linear-gradient(92deg, var(--secondary-30) 6.24%, var(--primary-30) 84.83%);\r\n\tmargin-bottom: 1.2rem;\r\n\tfont-size: 2rem;\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n\talign-items: center;\r\n  }\r\n  .amount-target strong {\r\n\tfont-weight: 700;\r\n  }\r\n  .amount-target > div {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n  }\r\n  .amount-target .ri-bar-chart-fill {\r\n\topacity: 0.5;\r\n\tmargin-right: 0.8rem;\r\n\tfont-size: 2.2rem;\r\n\tfont-weight: 400;\r\n  }\r\n  .amount-target .amount {\r\n\tcolor: inherit;\r\n\tfont-weight: 700;\r\n\tfont-size: 2rem;\r\n  }\r\n  .amount-target .amount small {\r\n\tcolor: inherit;\r\n  }\r\n  .amount-target .target-slogan {\r\n\tposition: relative;\r\n\tpadding-left: 3rem;\r\n  }\r\n  .amount-target .target-slogan::before {\r\n\tcontent: "";\r\n\tbackground-color: rgba(255, 255, 255, 0.3);\r\n\twidth: 1px;\r\n\theight: 1.6rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 50%;\r\n\ttranslate: 0 -50%;\r\n  }\r\n  .amount-target .target-slogan button {\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tpadding: 0.6rem 0.8rem;\r\n\tfont-size: 1.5rem;\r\n\tborder-radius: 0.6rem;\r\n\tmargin-left: auto;\r\n\ttransition: 0.2s;\r\n  }\r\n  .amount-target .target-slogan button i {\r\n\tmargin-right: 0.4rem;\r\n  }\r\n  .amount-target .target-slogan button:hover {\r\n\tbackground: rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  .amount-stat {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\tmargin-bottom: 4rem;\r\n  }\r\n  .amount-stat .amount {\r\n\tfont-size: 2rem;\r\n\tfont-weight: 700;\r\n  }\r\n  .amount-stat .amount-area {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem 1rem;\r\n\talign-items: center;\r\n  }\r\n  .amount-stat .amount-area .graph-percent {\r\n\tcolor: #00062c;\r\n\tfont-size: 1.4rem;\r\n\tfont-weight: 500;\r\n\tdisplay: flex;\r\n\tgap: 0.4rem;\r\n\talign-items: center;\r\n  }\r\n  .amount-stat > div {\r\n\tflex: 1;\r\n\tmin-width: 73.5rem;\r\n\tpadding: 2rem;\r\n\tborder-radius: 1.2rem;\r\n\tdisplay: grid;\r\n\tgap: 1rem;\r\n\tgrid-template-columns: 1fr 1fr;\r\n  }\r\n  .amount-stat > div .group {\r\n\tbackground: var(--white);\r\n\tpadding: 2rem 3rem;\r\n\tborder-radius: 1.2rem;\r\n  }\r\n  .amount-stat > div .group .title {\r\n\tfont-size: 1.8rem;\r\n\tfont-weight: 600;\r\n\tcolor: var(--gray-90);\r\n  }\r\n  .amount-stat > div .group .list-dot {\r\n\tmargin-top: 2rem;\r\n  }\r\n  .amount-stat > div .group .list-dot li {\r\n\tdisplay: flex;\r\n\tgap: 0.8rem;\r\n\talign-items: center;\r\n\tborder-bottom: 1px solid var(--gray-10);\r\n\tpadding-bottom: 0.6rem;\r\n  }\r\n  .amount-stat > div .group .list-dot li .dept {\r\n\tfont-size: 1.5rem;\r\n\tcolor: #00062C;\r\n\tmin-width: 8rem;\r\n  }\r\n  .amount-stat > div .group .list-dot li .subject {\r\n\tfont-size: 1.6rem;\r\n\tcolor: var(--gray-70);\r\n  }\r\n  .amount-stat > div .group .list-dot li .amount {\r\n\tfont-size: 1.8rem;\r\n\tfont-weight: 500;\r\n\tmargin-left: auto;\r\n  }\r\n  .amount-stat > div .group .list-dot li:last-child {\r\n\tborder-bottom: 0;\r\n  }\r\n  .amount-stat-confirm-area {\r\n\tbackground: var(--secondary-5);\r\n  }\r\n  .amount-stat-confirm .title {\r\n\tdisplay: flex;\r\n\tgap: 0.6rem;\r\n\talign-items: center;\r\n  }\r\n  .amount-stat-confirm .row {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n  }\r\n  .amount-stat-confirm .row2 {\r\n\tborder-top: 1px solid var(--gray-10);\r\n\tmargin-top: 1rem;\r\n\tpadding-top: 1rem;\r\n  }\r\n  .amount-stat-confirm .row2 .amount {\r\n\tcolor: var(--primary-30);\r\n  }\r\n  .amount-stat-confirm .row2 .date {\r\n\tcolor: var(--gray-70);\r\n\tfont-size: 1.5rem;\r\n\tpadding: 0.4rem 0.6rem;\r\n\tborder-radius: 0.4rem;\r\n\ttransition: 0.2s;\r\n  }\r\n  .amount-stat-confirm .row2 .date:hover {\r\n\tbackground-color: var(--gray-5);\r\n\tcolor: var(--gray-90);\r\n  }\r\n  .amount-stat-confirm .row2 .date i {\r\n\tfont-size: 1.6rem;\r\n\tcolor: var(--gray-40);\r\n  }\r\n  .amount-stat-confirm-detail {\r\n\tdisplay: grid;\r\n\tgap: 1rem 8rem;\r\n\tgrid-template-columns: 1fr 1fr;\r\n  }\r\n  .amount-stat-confirm-detail .group-item {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n  }\r\n  .amount-stat-confirm-detail .group-item .s-title {\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 500;\r\n  }\r\n  .amount-stat-confirm-detail .group-item .amount {\r\n\tfont-size: 1.8rem;\r\n\tfont-weight: 500;\r\n  }\r\n  .amount-stat-actual {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n  }\r\n  .amount-stat-actual .amount {\r\n\tcolor: var(--secondary-30);\r\n  }\r\n  .amount-stat-actual .amount-area {\r\n\tmargin-left: auto;\r\n\tflex-direction: column;\r\n\talign-items: flex-end;\r\n  }\r\n  .amount-stat-outstand {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n  }\r\n  .amount-stat-outstand .amount {\r\n\tcolor: #FF5555;\r\n  }\r\n  .amount-stat-outstand .amount-area {\r\n\tmargin-left: auto;\r\n\tflex-direction: column;\r\n\talign-items: flex-end;\r\n  }\r\n  .amount-stat-recent {\r\n\tpadding-top: 3rem !important;\r\n\tpadding-bottom: 3rem !important;\r\n  }\r\n  .amount-stat-expect-area {\r\n\tbackground: var(--primary-5);\r\n  }\r\n  .amount-stat-expect-area .amount-area {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n  }\r\n  .amount-stat-expect-cal {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n  }\r\n  .amount-stat-expect-cal button {\r\n\tfont-size: 2.8rem;\r\n\tcolor: var(--gray-90);\r\n  }\r\n  .amount-stat-expect-cal button i {\r\n\tdisplay: block;\r\n\ttransition: 0.2s;\r\n  }\r\n  .amount-stat-expect-cal .prev-month:hover i {\r\n\ttransform: translateX(-1rem);\r\n  }\r\n  .amount-stat-expect-cal .next-month:hover i {\r\n\ttransform: translateX(1rem);\r\n  }\r\n  .amount-stat-expect-sum {\r\n\tflex: 1;\r\n\tpadding-top: 3rem !important;\r\n\tpadding-bottom: 3rem !important;\r\n  }\r\n  .amount-stat-expect-sum .title {\r\n\tdisplay: block;\r\n\tborder-bottom: 1px solid var(--gray-10);\r\n\tpadding-bottom: 2rem;\r\n\tmargin-bottom: 2rem;\r\n  }\r\n  .amount-stat-expect-sum .compare-month {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n\talign-items: center;\r\n  }\r\n  .amount-stat-expect-sum .compare-month .label {\r\n\tfont-size: 1.5rem;\r\n\tcolor: var(--gray-40);\r\n\tfont-weight: 500;\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value {\r\n\tfont-size: 1.5rem;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value::before {\r\n\tcontent: "";\r\n\tfont-size: 2rem;\r\n\tdisplay: block;\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value.up {\r\n\tcolor: var(--point-30);\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value.up::before {\r\n\tcontent: "\\ea77";\r\n\tfont-family: "remixicon";\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value.down {\r\n\tcolor: var(--secondary-30);\r\n  }\r\n  .amount-stat-expect-sum .compare-month .value.down::before {\r\n\tcontent: "\\ea4d";\r\n\tfont-family: "remixicon";\r\n  }\r\n  .amount-stat-expect-dept {\r\n\tflex: 1;\r\n\tpadding-top: 3rem !important;\r\n\tpadding-bottom: 3rem !important;\r\n  }\r\n  .amount-stat-expect-dept .title {\r\n\tdisplay: block;\r\n\tborder-bottom: 1px solid var(--gray-10);\r\n\tpadding-bottom: 2rem;\r\n\tmargin-bottom: 2rem;\r\n  }\r\n  .amount-stat-expect-dept .form-control {\r\n\twidth: 12rem;\r\n  }\r\n  .amount-stat-expect-dept > div {\r\n\tdisplay: none;\r\n  }\r\n  .amount-stat-expect-dept > div.active {\r\n\tdisplay: block;\r\n  }\r\n  \r\n  .amount-stat-detail {\r\n\tborder-radius: 1.2rem;\r\n\tborder: 1px solid #EAEAEA;\r\n\tbackground: var(--white);\r\n\tpadding: 3rem;\r\n  }\r\n  .amount-stat-detail .graph-area {\r\n\theight: 50rem;\r\n  }\r\n  \r\n  .ifrs-item {\r\n\tdisplay: flex;\r\n\tgap: 0.8rem;\r\n\talign-items: center;\r\n\tjustify-content: flex-end;\r\n  }\r\n  .ifrs-item small {\r\n\tfont-size: 1.2rem;\r\n\tbackground: var(--primary-5);\r\n\tcolor: var(--primary-30);\r\n\tpadding: 0.4rem 0.6rem;\r\n\tborder-radius: 0.4rem;\r\n  }\r\n  .ifrs-item span {\r\n\tpadding-right: 0.8rem;\r\n  }\r\n  ',""]);const l=r},8270:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(6540),r=n(7987),l=n(4768),s=n(9777),m=n(6345),o=n(6440),c=n(4089),i=n(6611),u=n(437),p=n(937),d=n(3692),g=n(7716),E=n(9071),f=n(7863),v=n(4628),N=n(1553),h=n(2736),b=n(3639),x=n(5017);const y=function(){var e=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t=o.b.new(e.current);t.setThemes([x.A.new(t)]);var n=t.container.children.push(E.C.new(t,{paddingTop:40,paddingBottom:0,layout:t.verticalLayout})),a=n.children.push(c.s.new(t,{centerX:i.Q2,x:i.Q2,dx:50,y:0})),r=[{month:"1월",sales:12e8,income:6e8},{month:"2월",sales:24e8,income:12e8},{month:"3월",sales:8e8,income:4e8},{month:"4월",sales:16e8,income:12e8},{month:"5월",sales:4e8,income:1e8},{month:"6월",sales:2e8,income:5e7},{month:"7월",sales:12e8,income:7e8},{month:"8월",sales:28e8,income:2e9},{month:"9월",sales:13e8,income:5e8},{month:"10월",sales:7e8,income:4e8},{month:"11월",sales:28e8,income:2e9,planned:!0},{month:"12월",sales:13e8,income:5e8,planned:!0}],l=f.j.new(t,{minGridDistance:30,minorGridEnabled:!1}),s=n.xAxes.push(v.a.new(t,{categoryField:"month",renderer:l,tooltip:u.m.new(t,{})}));l.grid.template.setAll({location:1,stroke:p.yW(16777215)}),l.labels.template.setAll({fontSize:15,fill:"#777",paddingTop:10}),s.data.setAll(r);var m=n.yAxes.push(N.F.new(t,{renderer:h.Q.new(t,{strokeOpacity:.1})})),y=m.get("renderer");function w(e,l,o,c){var u=n.series.push(b.k.new(t,{name:e,xAxis:s,yAxis:m,valueYField:l,categoryXField:"month",fill:o}));u.columns.template.setAll({tooltipText:"[fontSize:14px]{name}, {categoryX}:{valueY}",width:i.KN(90),tooltipY:0,cornerRadiusTL:4,cornerRadiusTR:4,cornerRadiusBL:4,cornerRadiusBR:4,stroke:p.yW(16777215),strokeWidth:1,fillOpacity:1}),u.columns.template.adapters.add("fill",(function(e,t){return t.dataItem.dataContext.planned?p.yW(16777215):e})),u.columns.template.adapters.add("stroke",(function(e,t){return t.dataItem.dataContext.planned?c:e})),u.columns.template.adapters.add("strokeDasharray",(function(e,t){return t.dataItem.dataContext.planned?[4,4]:e})),u.data.setAll(r),u.appear(),u.bullets.push((function(){return d.D.new(t,{locationY:0,sprite:g.J.new(t,{text:"{valueY}",fill:t.interfaceColors.get("alternativeText"),centerY:0,centerX:i.yP,populateText:!0})})})),a.data.push(u),a.labels.template.setAll({fontSize:14,fill:"#777"})}return y.labels.template.setAll({fontSize:15,fill:"#777"}),y.grid.template.setAll({stroke:p.yW(11184810)}),w("매출","sales",p.yW(3165295),p.yW(3165295)),w("이익","income",p.yW(309375),p.yW(309375)),n.appear(1e3,100),function(){t.dispose()}}),[]),a.createElement("div",{ref:e,className:"chart-container"})};var w=n(5072),k=n.n(w),A=n(3223);k()(A.A,{insert:"head",singleton:!1}),A.A.locals;const z=function(){return a.createElement("div",{className:"sales-container"},a.createElement("div",{className:"amount-target"},a.createElement("div",{className:"target-amount"},a.createElement("strong",{className:"title"},a.createElement("i",{className:"ri-bar-chart-fill"}),"매출 목표"),a.createElement("span",{className:"amount"},"6,400,000,000",a.createElement("small",null,"원"))),a.createElement("div",{className:"target-slogan"},a.createElement("strong",null,"사업 견고화 및 내부역량 업-스케일링으로 기업가치를 높이자!"),a.createElement("button",null,a.createElement("i",{className:"ri-settings-3-fill"}),"목표설정"))),a.createElement("div",{className:"amount-stat scroll"},a.createElement("div",{className:"amount-stat-confirm-area"},a.createElement("div",{className:"group amount-stat-confirm colspan2"},a.createElement("div",{className:"row row1"},a.createElement("strong",{className:"title"},"확정매출",a.createElement("small",{className:"desc"},"세금계산서 기준")),a.createElement("div",{className:"amount-area"},a.createElement("div",{className:"graph-percent"},a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},a.createElement("circle",{cx:"10",cy:"10",r:"9.4",fill:"white",stroke:"#04B87F",strokeWidth:"1"}),a.createElement("circle",{className:"circle",r:"5",cx:"10",cy:"10",fill:"transparent",stroke:"#04B87F",strokeWidth:"10",strokeDasharray:"",transform:"rotate(-90) translate(-20)"})),a.createElement("span",{className:"percent"},"15%")),a.createElement("span",{className:"amount"},"3,230,000,000",a.createElement("small",null,"원")))),a.createElement("div",{className:"row row2"},a.createElement("button",{type:"button",onClick:function(){return window.location.reload()},className:"date"},a.createElement("i",{className:"ri-restart-line"}),a.createElement("span",null,"2025-03-17")),a.createElement("div",{className:"amount-area"},a.createElement("span",{className:"desc"},"IFRS 적용 매출"),a.createElement("span",{className:"amount"},"4,800,000,000",a.createElement("small",null,"원"))))),a.createElement("div",{className:"group amount-stat-actual"},a.createElement("strong",{className:"title"},"실매출"),a.createElement("span",{className:"amount-area"},a.createElement("span",{className:"amount"},"5,000,000,000",a.createElement("small",null,"원")),a.createElement("small",{className:"desc"},"세금계산서 기준(VAT 별도)"))),a.createElement("div",{className:"group amount-stat-outstand"},a.createElement("strong",{className:"title"},"미수"),a.createElement("span",{className:"amount-area"},a.createElement("span",{className:"amount"},"3,000,000,000",a.createElement("small",null,"원")),a.createElement("small",{className:"desc"},"계산서 발행"))),a.createElement("div",{className:"group amount-stat-recent colspan2"},a.createElement("strong",{className:"title"},"최근 매출 실적"),a.createElement("ul",{className:"list-dot"},a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"홍"),"홍길동"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원"))),a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"길"),"길기전"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원"))),a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"동"),"동치미"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원")))))),a.createElement("div",{className:"amount-stat-expect-area"},a.createElement("div",{className:"group colspan2 amount-stat-expect-cal"},a.createElement("button",{className:"prev-month"},a.createElement("i",{className:"ri-arrow-left-s-line"})),a.createElement("strong",{className:"ic-cal"},"2024 년 9월"),a.createElement("button",{className:"next-month"},a.createElement("i",{className:"ri-arrow-right-s-line"}))),a.createElement("div",{className:"group amount-stat-expect-sum"},a.createElement("strong",{className:"title"},"예상 매출 합계"),a.createElement("span",{className:"amount-area"},a.createElement("span",{className:"compare-month"},a.createElement("span",{className:"label"},"전월대비 "),a.createElement("span",{className:"value down"},"50.0%")),a.createElement("span",{className:"amount"},"2,416,000,000",a.createElement("small",null,"원")))),a.createElement("div",{className:"group amount-stat-expect-dept"},a.createElement("div",{className:"dept-expect-sales active"},a.createElement("strong",{className:"title"},"부서별 예상 매출"),a.createElement("span",{className:"amount-area"},a.createElement("select",{className:"form-control"},a.createElement("option",{value:""},"EX"),a.createElement("option",{value:""},"MX"),a.createElement("option",{value:""},"CX"),a.createElement("option",{value:""},"DX"),a.createElement("option",{value:""},"AX"),a.createElement("option",{value:""},"PX"),a.createElement("option",{value:""},"지최일만"),a.createElement("option",{value:""},"아누타")),a.createElement("span",{className:"amount"},"416,000,000",a.createElement("small",null,"원")))),a.createElement("div",{className:"project-expect-sales"},a.createElement("strong",{className:"title"},"프로젝트별 매출"),a.createElement("span",{className:"amount-area"},a.createElement("select",{className:"form-control"},a.createElement("option",{value:""},"구축"),a.createElement("option",{value:""},"유지보수"),a.createElement("option",{value:""},"솔루션"),a.createElement("option",{value:""},"아누타")),a.createElement("span",{className:"amount"},"6,100,000",a.createElement("small",null,"원"))))),a.createElement("div",{className:"group amount-stat-recent colspan2"},a.createElement("strong",{className:"title"},"이 달의 예정 매출"),a.createElement("ul",{className:"list-dot"},a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"홍"),"홍길동"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원"))),a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"길"),"길기전"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원"))),a.createElement("li",null,a.createElement("strong",{className:"dept"},"CX영업부"),a.createElement("span",{className:"subject"},"전체 사업부 최근 매출 프로젝트명 표출"),a.createElement("span",{className:"user"},a.createElement("span",{className:"user-icon"},"동"),"동치미"),a.createElement("span",{className:"amount"},"299,999,999",a.createElement("small",null,"원"))))))),a.createElement("div",{className:"amount-stat-detail"},a.createElement(r.A,null),a.createElement(l.A,null),a.createElement("div",{className:"graph-area graph-type1"},a.createElement(y,null)),a.createElement(s.A,null),a.createElement(m.A,null)))}}}]);