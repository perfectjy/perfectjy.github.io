"use strict";(self["webpackChunkjyTemp01"]=self["webpackChunkjyTemp01"]||[]).push([[338],{6338:function(t,l,a){a.r(l),a.d(l,{default:function(){return E}});var e=a(641),o=a(953),s=a(3751);const d=["data-id","data-type","aria-hidden"],i={class:"modal-wrap"},n={key:0,class:"modal-header"},r={class:"modal-content"},c={key:1,class:"modal-footer"},u=(0,e.Lk)("div",{class:"modal-dim"},null,-1);var m={__name:"ModalItem",props:{modalPopup:Object,dataList:Object},emits:["close"],setup(t,{emit:l}){const a=t,m=l,b=(0,o.KR)(a.dataList);(0,e.wB)((()=>b.value.visible),(()=>{}));const p=()=>{m("close"),a.modalPopup.layer.hide()};return(0,e.sV)((()=>{})),(t,l)=>((0,e.uX)(),(0,e.CE)("div",null,[((0,e.uX)(),(0,e.Wv)(e.Im,{to:".base-layer"},[(0,e.bF)(s.eB,{name:"fade"},{default:(0,e.k6)((()=>[(0,e.Lk)("section",{class:"modal","data-id":b.value.id,"data-type":b.value.type,"aria-hidden":b.value.visible},[(0,e.Lk)("div",i,[(0,e.Lk)("button",{type:"button",class:"modal-close","data-icon":"close","aria-label":"창닫기",onClick:p}),t.$slots.head?((0,e.uX)(),(0,e.CE)("div",n,[(0,e.RG)(t.$slots,"head")])):(0,e.Q3)("",!0),(0,e.Lk)("div",r,[(0,e.RG)(t.$slots,"body")]),t.$slots.foot?((0,e.uX)(),(0,e.CE)("div",c,[(0,e.RG)(t.$slots,"foot")])):(0,e.Q3)("",!0),(0,e.Lk)("button",{type:"button",class:"modal-close-hide","data-icon":"close",onClick:p},"닫기")]),u],8,d)])),_:3})]))]))}};const b=m;var p=b;class k{constructor(t){this.opt=t,this.modal=null}show(){this.modal=document.querySelector('.modal[data-id="'+this.opt.id+'"]');const t=document.querySelector(".base-layer"),l=document.querySelector(".wrapper");if(t.dataset.layer="true",l.inert="true",!this.modal)return void console.error(`modal with id '${this.opt.id}' not found`);const a=this.modal.querySelector(".modal-close"),e=this.modal.closest(".base-layer"),o=this.modal.querySelector(".modal-content");o.scrollTo({top:0}),e&&document.body.classList.add("is-modal"),this.modal.setAttribute("aria-hidden",!1),setTimeout((()=>{this.opt.callback&&this.opt.callback()}),0);const s=document.querySelector('.modal[aria-hidden="false"]'),d=window.getComputedStyle(s),i=d.zIndex;s&&(s.style.zIndex=1*i),a&&a.focus()}hide(){const t=document.querySelector(".base-layer"),l=document.querySelector(".wrapper");t.dataset.layer="false",l.inert="",this.modal&&(document.body.classList.remove("is-modal"),this.modal.removeAttribute("aria-hidden"),this.modal.setAttribute("aria-hidden",!0),this.modal.removeAttribute("data-current"),this.modal.removeAttribute("style"))}}var y=k;const h={class:"subpage"},L={class:"btn-list"},v=(0,e.Lk)("h1",{class:"modal-tit"},"개인정보 수집 및 이용 동의(필수)",-1),f=(0,e.Lk)("div",{class:"terms-wrap"},[(0,e.Lk)("div",{class:"mdl-box"},[(0,e.Lk)("h2",{class:"tit-terms"},"1. 수집ㆍ이용 목적"),(0,e.Lk)("p",null,"건강정보 조회/분석결과 및 예측서비스"),(0,e.Lk)("h2",{class:"tit-terms"},"2. 수집ㆍ이용 항목"),(0,e.Lk)("strong",null,"검진결과[(검진일, 검진기관명), 신체계측(신장, 체중, 허리둘레, 체질량지수(BMI), 수축/이완기 혈압, 시력, 청력), 혈액검사(혈색소, 공복시혈당), 상복부검사(AST, ALT, 감마지티피), 신장요로계검사(요단백, 혈청크레아티닌, 신사구체여과율), 순환기계검사(총콜레스테롤, HDL콜레스테롤, LDL콜레스테롤), 폐결핵흉부질환검사(흉부방사선촬영), 근골격계검사(골다공증)], 진료 및 투약정보(병원명, 방문일수, 처방횟수, 투약횟수, 처방약품정보), 뇌졸중/당뇨병/심내혈관질환 예측결과 "),(0,e.Lk)("p",{class:"mdl-bul-star"},"나이마다 검진결과 항목이 상이할 수 있음"),(0,e.Lk)("h2",{class:"tit-terms"},"3. 보유 및 이용기간"),(0,e.Lk)("strong",null,"건강정보결과 창 종료 또는 로그아웃 시 파기")]),(0,e.Lk)("div",{class:"mdl-bul-care"},[(0,e.Lk)("div",null," 민감정보 수집 및 이용동의를 거부할 권리가 있으며, 거부할 경우에는 건강정보 조회/분석결과 및 예측서비스가 제한됩니다. ")])],-1),w=(0,e.Lk)("span",null,"미동의",-1),C=[w],S=(0,e.Lk)("button",{type:"button",class:"btn","data-style":"base"},[(0,e.Lk)("span",null,"동의")],-1),q=(0,e.Lk)("h1",{class:"modal-tit"},"알림",-1),_=(0,e.Lk)("p",null,"기상하셨나요?",-1),g=(0,e.Lk)("span",null,"취소",-1),A=[g],R=(0,e.Lk)("button",{type:"button",class:"btn","data-style":"base"},[(0,e.Lk)("span",null,"확인")],-1),T=(0,e.Lk)("h1",null,"혈당 관리를 위한 식단 관리법",-1),$=(0,e.Lk)("p",null," 간헐적 단식은 단순히 식사를 걸러서 하는 것이 아니다. 일정한 시간 동안 금식을 통하여 인슐린 분비를 조절하는 것이다. 하루 금식 시간을 12시간에서 16시간 이상 유지하여 인슐린의 과도한 분비를 억제하면, 인슐린으로 인한 혈당의 지방전환을 억제할 뿐 아니라, 필요한 에너지를 포도당이 아닌 지방을 분해하여 에너지원으로 사용하게 되어 체중조절 등에 도움이 된다. ",-1),F=(0,e.Lk)("div",{class:"info-txt-wrap"},[(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,"공복혈당과 식사 시작 후 2시간 혈당을 확인하세요."),(0,e.Lk)("li",null,"혈당 관리를 시작한 경우, 아침, 점심, 저녁의 식전과 식후 혈당을 모두 확인하세요.")])],-1),I=(0,e.Lk)("span",null,"확인",-1),X=[I];var j={__name:"ModalView01",setup(t){const l={term:{layer:new y({id:"term"}),visible:!0,callback:()=>{console.log("modal Show 111111111")}},alarm:{layer:new y({id:"alarm"}),visible:!0,callback:()=>{console.log("modal Show 22222222")}},info:{layer:new y({id:"info"}),visible:!0,callback:()=>{console.log("modal Show 33333333")}}},a=t=>{const a=l[t];a&&a.layer.show()},s=t=>{const a=l[t];a&&a.layer.hide()};return(t,d)=>((0,e.uX)(),(0,e.CE)("div",h,[(0,e.Lk)("div",L,[(0,e.Lk)("button",{type:"button",onClick:d[0]||(d[0]=t=>a("term")),class:"btn","data-btn":"modal"},"Full 팝업"),(0,e.Lk)("button",{type:"button",onClick:d[1]||(d[1]=t=>a("alarm")),class:"btn","data-btn":"modal"},"alert 팝업"),(0,e.Lk)("button",{type:"button",onClick:d[2]||(d[2]=t=>a("info")),class:"btn","data-btn":"modal"},"bottom 팝업")]),(0,e.bF)((0,o.R1)(p),{"data-list":{id:"term",type:"full",visible:l.alarm.visible},"modal-popup":l.term,onClose:d[4]||(d[4]=t=>s("term"))},{head:(0,e.k6)((()=>[v])),body:(0,e.k6)((()=>[f])),foot:(0,e.k6)((()=>[(0,e.Lk)("button",{type:"button",class:"btn","data-style":"base-line",onClick:d[3]||(d[3]=t=>s("term"))},C),S])),_:1},8,["data-list","modal-popup"]),(0,e.bF)((0,o.R1)(p),{"data-list":{id:"alarm",type:"alert",visible:l.alarm.visible},"modal-popup":l.alarm,onClose:d[6]||(d[6]=t=>s("alarm"))},{head:(0,e.k6)((()=>[q])),body:(0,e.k6)((()=>[_])),foot:(0,e.k6)((()=>[(0,e.Lk)("button",{type:"button",class:"btn","data-style":"base-line",onClick:d[5]||(d[5]=t=>s("alarm"))},A),R])),_:1},8,["data-list","modal-popup"]),(0,e.bF)((0,o.R1)(p),{"data-list":{id:"info",type:"bottom",visible:l.alarm.visible},"modal-popup":l.info,onClose:d[8]||(d[8]=t=>s("info"))},{head:(0,e.k6)((()=>[T])),body:(0,e.k6)((()=>[$,F])),foot:(0,e.k6)((()=>[(0,e.Lk)("button",{type:"button",class:"btn","data-style":"base",onClick:d[7]||(d[7]=t=>s("info"))},X)])),_:1},8,["data-list","modal-popup"])]))}};const x=j;var E=x}}]);
//# sourceMappingURL=338.e3b55237.js.map