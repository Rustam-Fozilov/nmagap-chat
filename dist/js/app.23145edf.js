(function(){var t={4729:function(t,e,n){"use strict";var o=n(9242),i=n(3396);const s={class:"container"};function a(t,e,n,o,a,r){const c=(0,i.up)("the-navbar"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c),(0,i._)("div",s,[(0,i.Wm)(l)])],64)}const r=t=>((0,i.dD)("data-v-3279705e"),t=t(),(0,i.Cn)(),t),c={class:"nav-wrapper"},l=r((()=>(0,i._)("div",{class:"nav-title"},"Mini clone of Twitter",-1))),m={class:"nav-items"};function d(t,e,n,o,s,a){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",c,[l,(0,i._)("div",m,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(r,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("HOME")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(r,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("ABOUT")])),_:1})])])])])}var u={name:"TheNavbar"},p=n(89);const w=(0,p.Z)(u,[["render",d],["__scopeId","data-v-3279705e"]]);var v=w,g={name:"App",components:{TheNavbar:v}};const h=(0,p.Z)(g,[["render",a]]);var f=h,b=n(678),C=n(7139);const k=t=>((0,i.dD)("data-v-06d888d9"),t=t(),(0,i.Cn)(),t),_={class:"home-container"},j={key:0,class:"loader"},T={class:"tweets-block"},x={key:2,class:"post-modal"},D=k((()=>(0,i._)("div",{class:"post-title"},"Post new tweet",-1))),y={key:0,class:"error"},O={class:"post-text"},M={class:"post-send-btn"},A=k((()=>(0,i._)("div",{style:{clear:"both"}},null,-1)));function E(t,e,n,s,a,r){const c=(0,i.up)("the-tweet");return(0,i.wg)(),(0,i.iD)("div",_,[a.loading?((0,i.wg)(),(0,i.iD)("div",j)):(0,i.kq)("",!0),(0,i._)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.allTweets,(t=>((0,i.wg)(),(0,i.j4)(c,{onLoadTweet:r.loadTweets,key:t.id,tweet:t,comments:t.comments},null,8,["onLoadTweet","tweet","comments"])))),128))]),(0,i._)("button",{onClick:e[0]||(e[0]=t=>a.postModal=!0),class:"btn-make-tweet"},"MAKE TWEET"),a.postModal?((0,i.wg)(),(0,i.iD)("div",{key:1,onClick:e[1]||(e[1]=t=>a.postModal=!1),class:"modal-container"})):(0,i.kq)("",!0),a.postModal?((0,i.wg)(),(0,i.iD)("div",x,[D,0!==a.errorText.length?((0,i.wg)(),(0,i.iD)("p",y,(0,C.zw)(a.errorText),1)):(0,i.kq)("",!0),(0,i._)("div",O,[(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.tweetText=t),rows:"5",placeholder:"Type here..."},null,512),[[o.nr,a.tweetText]])]),(0,i._)("div",M,[(0,i._)("button",{onClick:e[3]||(e[3]=(...t)=>r.sendTweet&&r.sendTweet(...t))},"TWEET")])])):(0,i.kq)("",!0),A])}const H=t=>((0,i.dD)("data-v-7b54b32a"),t=t(),(0,i.Cn)(),t),L={class:"tweet-container"},F={class:"tweet-post"},Z={class:"tweet-avatar"},q=["src"],z={class:"tweet-info"},P={class:"tweet-date"},U={class:"tweet-text"},W={class:"tweet-actions"},I=H((()=>(0,i._)("div",{class:"action-icon"},[(0,i._)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M5.95 1C3.21625 1 1 3.15216 1 5.80685C1 10.6137 6.85 14.9836 10 16C13.15 14.9836 19 10.6137 19 5.80685C19 3.15216 16.7837 1 14.05 1C12.376 1 10.8955 1.80712 10 3.04248C9.54356 2.41112 8.93717 1.89586 8.23219 1.54033C7.52721 1.1848 6.74438 0.999456 5.95 1Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))),V={class:"action-count"},B=H((()=>(0,i._)("div",{class:"action-icon"},[(0,i._)("svg",{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M15.2222 1H2.77778C2.30628 1 1.8541 1.18592 1.5207 1.51687C1.1873 1.84782 1 2.29668 1 2.76471V16L4.08178 13.7059C4.3895 13.4768 4.76379 13.3529 5.14844 13.3529H15.2222C15.6937 13.3529 16.1459 13.167 16.4793 12.8361C16.8127 12.5051 17 12.0563 17 11.5882V2.76471C17 2.29668 16.8127 1.84782 16.4793 1.51687C16.1459 1.18592 15.6937 1 15.2222 1Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))),N={key:0,class:"action-count"},S={key:1,class:"action-count"},K={key:0,class:"tweet-comments"},Y={class:"comment-field"},G=H((()=>(0,i._)("path",{d:"M0.930446 0.0679051C0.822829 0.0140803 0.702266 -0.00846139 0.582471 0.00284431C0.462676 0.01415 0.348459 0.0588492 0.252812 0.131857C0.157165 0.204865 0.0839273 0.303251 0.0414301 0.415824C-0.001067 0.528396 -0.0111177 0.650636 0.0124215 0.768638L1.81633 7.00452C1.84996 7.12073 1.91571 7.22509 2.006 7.3056C2.0963 7.38612 2.20748 7.43952 2.32677 7.45967L9.64268 8.68499C9.98726 8.75314 9.98726 9.24686 9.64268 9.31501L2.32677 10.5403C2.20748 10.5605 2.0963 10.6139 2.006 10.6944C1.91571 10.7749 1.84996 10.8793 1.81633 10.9955L0.0124215 17.2314C-0.0111177 17.3494 -0.001067 17.4716 0.0414301 17.5842C0.0839273 17.6967 0.157165 17.7951 0.252812 17.8681C0.348459 17.9412 0.462676 17.9858 0.582471 17.9972C0.702266 18.0085 0.822829 17.9859 0.930446 17.9321L17.6452 9.57473C17.7518 9.52128 17.8415 9.43922 17.9041 9.33772C17.9668 9.23622 18 9.11928 18 9C18 8.88071 17.9668 8.76378 17.9041 8.66228C17.8415 8.56078 17.7518 8.47872 17.6452 8.42527L0.930446 0.0679051Z",fill:"black"},null,-1))),R=[G],$={class:"comments-info"},J={class:"tweet-avatar"},Q=["src"],X={class:"comment-text"},tt={class:"comment-date"},et={key:1,class:"comment-text"};function nt(t,e,s,a,r,c){return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",F,[(0,i._)("div",Z,[(0,i._)("img",{src:n(6863)("./"+s.tweet.avatar.image),alt:"avatar"},null,8,q)]),(0,i._)("div",z,[(0,i._)("div",P,(0,C.zw)(s.tweet.date),1),(0,i._)("div",U,(0,C.zw)(s.tweet.text),1),(0,i._)("div",W,[(0,i._)("div",{onClick:e[0]||(e[0]=(...t)=>c.like&&c.like(...t)),class:"tweet-action"},[I,(0,i._)("div",V,(0,C.zw)(s.tweet.likes),1)]),(0,i._)("div",{onClick:e[1]||(e[1]=t=>c.toggleComment()),class:"tweet-action"},[B,s.tweet.comments?((0,i.wg)(),(0,i.iD)("div",N,(0,C.zw)(s.tweet.comments.length),1)):(0,i.kq)("",!0),s.tweet.comments?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",S,"0"))])])])]),r.isCommentOpened?((0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("div",Y,[(0,i.wy)((0,i._)("input",{onKeyup:e[2]||(e[2]=(0,o.D2)(((...t)=>c.sendComment&&c.sendComment(...t)),["enter"])),"onUpdate:modelValue":e[3]||(e[3]=t=>r.commentText=t),type:"text",placeholder:"Write a comment..."},null,544),[[o.nr,r.commentText]]),((0,i.wg)(),(0,i.iD)("svg",{onClick:e[4]||(e[4]=(...t)=>c.sendComment&&c.sendComment(...t)),width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R))]),s.tweet.comments?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(s.tweet.comments,(t=>((0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",J,[(0,i._)("img",{src:n(6863)("./"+t.avatar),alt:"avatar"},null,8,Q)]),(0,i._)("div",X,[(0,i._)("div",tt,(0,C.zw)(t.date),1),(0,i.Uk)(" "+(0,C.zw)(t.comment),1)])])))),256)):(0,i.kq)("",!0),s.tweet.comments?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",et,"No comments yet, write first"))])):(0,i.kq)("",!0)])}n(7658);var ot=n(6943);const it={name:"TheTweet",emits:["load-tweet"],props:{tweet:{required:!1,type:Object}},data(){return{isCommentOpened:!1,commentText:""}},methods:{like(){ot.Z.patch("https://vue-mini-twitter-default-rtdb.firebaseio.com/tweets/"+this.tweet.id+".json",{likes:this.tweet.likes+1}).then((t=>{this.$emit("load-tweet")})).catch((t=>{console.log(t)}))},toggleComment(){this.isCommentOpened=!this.isCommentOpened},sendComment(){const t=new Date,e=["emoji-01.png","emoji-02.png","emoji-03.png","emoji-04.png","emoji-05.png","emoji-06.png"],n=Math.floor(Math.random()*e.length);this.tweet.comments?this.tweet.comments.push({date:t.toLocaleDateString()+", "+t.getHours()+":"+t.getMinutes(),comment:this.commentText,avatar:e[n]}):this.tweet.comments=[{date:t.toLocaleDateString()+", "+t.getHours()+":"+t.getMinutes(),comment:this.commentText,avatar:e[n]}],ot.Z.patch("https://vue-mini-twitter-default-rtdb.firebaseio.com/tweets/"+this.tweet.id+".json",{comments:this.tweet.comments}).then((t=>{this.commentText=""})).catch((t=>{console.log(t)}))}}},st=()=>{(0,o.sj)((t=>({"1c558d0b":t.tweet.avatar.color})))},at=it.setup;it.setup=at?(t,e)=>(st(),at(t,e)):st;var rt=it;const ct=(0,p.Z)(rt,[["render",nt],["__scopeId","data-v-7b54b32a"]]);var lt=ct,mt={name:"HomeView",components:{TheTweet:lt},data(){return{allTweets:[],postModal:!1,tweetText:"",loading:!1,errorText:""}},created(){this.loadTweets()},methods:{loadTweets(){this.loading=!0;try{ot.Z.get("https://vue-mini-twitter-default-rtdb.firebaseio.com/tweets.json").then((t=>{this.loading=!1,this.allTweets=Object.keys(t.data).map((e=>({id:e,...t.data[e]})))}))}catch(t){this.loading=!1,console.log(t)}},sendTweet(){const t=new Date,e=["#F1D900","#3CC3EE","#50D93A","#A864DD","#FF3535","#FF7B1C","#3D3D3D","#2F4FF8","#C27A36","#D9D9D9"],n=["emoji-01.png","emoji-02.png","emoji-03.png","emoji-04.png","emoji-05.png","emoji-06.png","emoji-07.png","emoji-08.png","emoji-09.png","emoji-10.png"],o=Math.floor(Math.random()*n.length),i=Math.floor(Math.random()*e.length);if(""===this.tweetText)return this.errorText="Please enter tweet";try{ot.Z.post("https://vue-mini-twitter-default-rtdb.firebaseio.com/tweets.json",{avatar:{image:n[o],color:e[i]},date:t.toLocaleDateString()+", "+t.getHours()+":"+t.getMinutes(),likes:0,text:this.tweetText,comments:[]}).then((t=>{this.postModal=!1,this.tweetText="",this.errorText="",this.loadTweets()}))}catch(s){console.log(s)}}}};const dt=(0,p.Z)(mt,[["render",E],["__scopeId","data-v-06d888d9"]]);var ut=dt;const pt={class:"about-block"},wt=(0,i.uE)('<div class="title" data-v-0855ba97>In this app:</div><div class="items" data-v-0855ba97><ul data-v-0855ba97><li class="item" data-v-0855ba97>🔥 Options API + Axios</li><li class="item" data-v-0855ba97>Using Firebase over REST API</li><li class="item" data-v-0855ba97>Handling GET, POST, PATCH requests</li></ul><div class="title" data-v-0855ba97>And little things:</div><ul data-v-0855ba97><li class="item" data-v-0855ba97>Write a comment on a tweet</li><li class="item" data-v-0855ba97>Generating images and colors randomly</li></ul></div><a href="https://github.com/rustam-fozilov" target="_blank" data-v-0855ba97>Developer: Rustam Fozilov</a>',3),vt=[wt];function gt(t,e,n,o,s,a){return(0,i.wg)(),(0,i.iD)("div",pt,vt)}var ht={name:"AboutView"};const ft=(0,p.Z)(ht,[["render",gt],["__scopeId","data-v-0855ba97"]]);var bt=ft;const Ct=[{path:"/",name:"Home",component:ut},{path:"/about",name:"About",component:bt}],kt=(0,b.p7)({history:(0,b.PO)("/"),routes:Ct,linkExactActiveClass:"active",linkActiveClass:"active"});var _t=kt;(0,o.ri)(f).use(_t).mount("#app")},6863:function(t,e,n){var o={"./emoji-01.png":2417,"./emoji-02.png":5313,"./emoji-03.png":756,"./emoji-04.png":7657,"./emoji-05.png":5394,"./emoji-06.png":3587,"./emoji-07.png":8994,"./emoji-08.png":6374,"./emoji-09.png":3203,"./emoji-10.png":1395};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id=6863},2417:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-01.577edb36.png"},5313:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-02.b9931d4b.png"},756:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-03.fd402c76.png"},7657:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-04.eef373f6.png"},5394:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-05.cac01f79.png"},3587:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-06.93f631fc.png"},8994:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-07.6764785c.png"},6374:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-08.2c029954.png"},3203:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-09.8da4f51d.png"},1395:function(t,e,n){"use strict";t.exports=n.p+"img/emoji-10.5274923c.png"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var a=1/0;for(m=0;m<t.length;m++){o=t[m][0],i=t[m][1],s=t[m][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,s<a&&(a=s));if(r){t.splice(m--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var m=t.length;m>0&&t[m-1][2]>s;m--)t[m]=t[m-1];t[m]=[o,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var m=c(n)}for(e&&e(o);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(m)},o=self["webpackChunkvue_realtime_chat"]=self["webpackChunkvue_realtime_chat"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4729)}));o=n.O(o)})();
//# sourceMappingURL=app.23145edf.js.map