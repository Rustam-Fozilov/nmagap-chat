(function(){"use strict";var e={1979:function(e,t,s){var n=s(9242),a=s(3396),r=s(7139);const o=(0,a._)("h1",{style:{"text-align":"center"}},"Realtime chat app",-1),i={class:"wrapper"},l={class:"chat"},u={class:"chat-messages"},c={class:"messages",ref:"autoScroll"};function f(e,t,s,f,m,g){return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("div",i,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.allMessages,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:(0,r.C_)(["message",this.username===e.username?"right":""])},[(0,a._)("p",{class:(0,r.C_)(this.username===e.username?"my-message":"")},(0,r.zw)(e.text),3),(0,a._)("div",null,[(0,a._)("span",null,(0,r.zw)(e.username),1)])],2)))),128))],512),(0,a._)("form",null,[(0,a.wy)((0,a._)("textarea",{onKeyup:t[0]||(t[0]=(0,n.D2)(((...e)=>g.sendMessage&&g.sendMessage(...e)),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=e=>m.message=e),placeholder:"Type message and click Enter to send",class:"form-control",rows:"3"},null,544),[[n.nr,m.message]])])])])])],64)}var m=s(6943),g={name:"App",data(){return{allMessages:[],message:"",username:localStorage.getItem("username")}},beforeMount(){localStorage.getItem("username")||(this.username=prompt("Ismingizni kiriting"),localStorage.setItem("username",this.username)),this.getAllMessages()},updated(){this.$refs["autoScroll"].scrollTop=9999999999},methods:{getAllMessages(){try{m.Z.get("https://vue-realtime-chat-a5aec-default-rtdb.firebaseio.com/messages.json").then((e=>{this.allMessages=Object.keys(e.data).map((t=>({id:t,...e.data[t]})))}))}catch(e){console.log(e)}},sendMessage(){try{m.Z.post("https://vue-realtime-chat-a5aec-default-rtdb.firebaseio.com/messages.json",{text:this.message,username:this.username}).then((e=>{this.message=""}))}catch(e){console.log(e)}}},watch:{allMessages(){this.getAllMessages()}}},h=s(89);const d=(0,h.Z)(g,[["render",f]]);var p=d;(0,n.ri)(p).mount("#app")}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,r){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<o&&(o=r));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,o=n[0],i=n[1],l=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var c=l(s)}for(t&&t(n);u<o.length;u++)r=o[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},n=self["webpackChunkvue_realtime_chat"]=self["webpackChunkvue_realtime_chat"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1979)}));n=s.O(n)})();
//# sourceMappingURL=app.5de76afe.js.map