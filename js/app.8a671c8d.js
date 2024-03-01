(function(){"use strict";var e={7170:function(e,t,n){var a=n(5130),o=n(6768),A=n(4232);const r={class:"version"};function i(e,t){const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(n,{class:"prevent-select"}),(0,o.Lk)("p",r," v"+(0,A.v_)(e.$store.getters.appVersion),1)],64)}var c=n(1241);const s={},u=(0,c.A)(s,[["render",i]]);var m=u,l=n(1387);const d={class:"home"};function p(e,t,n,a,r,i){const c=(0,o.g2)("FortuneMachine");return(0,o.uX)(),(0,o.CE)("div",d,[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.loadedComponent),(0,A._B)((0,o.Ng)(e.componentProps)),null,16))])),_:1})])}var g=n(782),v=n.p+"img/fortune-machine.3fa66edc.svg",f=n.p+"img/fortune-machine-monitor.10fa7d92.svg";const h=e=>((0,o.Qi)("data-v-09c1a98a"),e=e(),(0,o.jt)(),e),O=h((()=>(0,o.Lk)("img",{alt:"Fortune machine image",class:"image",src:v},null,-1))),C={class:"monitor"},Q={class:"monitor-background"},B=h((()=>(0,o.Lk)("img",{alt:"Fortune machine monitor border image",class:"monitor-border-image",src:f},null,-1)));function I(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",{class:(0,A.C4)([{zoom:e.zoom.animation},"fortune-machine"])},[(0,o.Lk)("a",{onClick:t[0]||(t[0]=(...t)=>e.zoomMachine&&e.zoomMachine(...t)),class:"component"},[O,(0,o.Lk)("div",C,[(0,o.Lk)("div",Q,[e.zoom.animation?((0,o.uX)(),(0,o.CE)("div",{key:0,class:(0,A.C4)([{on:e.zoom.animation},"monitor-content"])},[(0,o.RG)(e.$slots,"default",{},void 0,!0)],2)):(0,o.Q3)("",!0)]),B])])],2)}var b=(0,o.pM)({name:"FortuneMachine",data(){return{zoom:{animation:!1,timing:1200},machine:{started:!1,timing:1e3}}},methods:{zoomMachine(){this.zoom.animation||(this.zoom.animation=!0,setTimeout((()=>{this.startMachine()}),this.zoom.timing))},startMachine(){this.machine.started||(this.machine.started=!0)}}});const E=(0,c.A)(b,[["render",I],["__scopeId","data-v-09c1a98a"]]);var T=E;const G={class:"game-selection"},M={key:0,class:"menu"},y={class:"cover"},D={class:"options"};function H(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",G,[e.gameOptions?.length?((0,o.uX)(),(0,o.CE)("div",M,[(0,o.Lk)("div",y,[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.gameOptions[e.gameIndex].cover_compont)))]),(0,o.Lk)("div",D,[(0,o.Lk)("a",{onClick:t[0]||(t[0]=(...t)=>e.previousGame&&e.previousGame(...t)),class:"option"},(0,A.v_)("<")),(0,o.Lk)("a",{onClick:t[1]||(t[1]=(...t)=>e.handleSelectGame&&e.handleSelectGame(...t)),class:"option"},(0,A.v_)(e.gameOptions[e.gameIndex].translate),1),(0,o.Lk)("a",{onClick:t[2]||(t[2]=(...t)=>e.nextGame&&e.nextGame(...t)),class:"option"},(0,A.v_)(">"))])])):(0,o.Q3)("",!0)])}var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAEsCAYAAACIbGpMAAAK00lEQVR4nO3dS27tNhYF0HLhNd1008gwMoQMOkPIMDIRFwzHgVKO/MhLbulQWqsVPLhs6nMLG2dfSk8vz69v/wEACPrv2QsAAK5P4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4gQOACBO4AAA4n6cvQDu5Y8/f//7v3/95bcTVwLAkUw4AIA4gQMAiFOpEKdGmWt7Po/k2gEjTDgAgDiBAwCIe3p5fn07exHch3rle2fVJbO4psAeEw4AIE7gAADiVCrEqVG+OrI6GTnns9bpugMmHABAnMABAMSpVIhQo3xYfdfJ1t51HDnGO98bcDcmHABAnMABAMSpVGCyajXKtrZIr23kb6lX4NpMOACAOIEDAIhTqTDEbpQPe+ehQr0ysrvkrGO5870EV2XCAQDECRwAQJxKhWnuVq+sWKO0qLD+rTvcS3AHJhwAQJzAAQDEqVQYokb5+u9nSdcoFY73DvcYXJUJBwAQJ3AAAHE/zl4Aa9sbs19p9L3Kce3VHInXyp9llWsBfGXCAQDECRwAQJxdKkSsPvruXf8q9cSsnSYVdqxsrXiPwd2YcAAAcQIHABCnUoG/jNRAFWqFI83a+ZLYQaNegZpMOACAOIEDAIjz4C+4iAo7R1RRwB4TDgAgTuAAAOJUKsRVfgjYrLUdWWdUO4e90uen2v1WbT1wFhMOACBO4AAA4lQqHMp4eVzLOUxUPCPXK1GjVNiV08J9Dh9MOACAOIEDAIhTqRBXbfR91VonXVtU03K81a51tfXAkUw4AIA4gQMAiFOpEGeMnJPegTLrdfNp1Wq7Fj4X3I0JBwAQJ3AAAHEqFeL2xt1XHSNXHu/vrW3WOhPXt/L5bLHimiHBhAMAiBM4AIC4p5fn17ezFwFpZ1U5xukfRmqRlutVbTdNtfVABSYcAECcwAEAxNmlwmnsWGHPSI2y4jm/w2cBTDgAgDiBAwCIU6lwKKPje+qtNlrqEmAtJhwAQJzAAQDEqVTotleLGIN/b8XdEwkj52GV89Z7jD4j3IEJBwAQJ3AAAHEqFYbM2nXS+xAnI+h1rVKLzHKle9VnkBEmHABAnMABAMSpVBgyq/LY+z1njd/To2M7Vtiq9jp7O85IMOEAAOIEDgAgTqXCNL01wV5tUaFuMDpeV4WKqnfXVYv0ji01CmkmHABAnMABAMSpVIjYG8PujW3v/EChChXSLFc6lhbpY6zwWbjzZ5O5TDgAgDiBAwCIU6nQbdZYtdrDvvYcOVK+UiXRW6utouV+GDnGyrWFeoURJhwAQJzAAQDEqVTgX1TYTbNKvdJyHiqvv8WsGqX3gWBH1hYt95sahREmHABAnMABAMSpVCgnUSX0jqwrjLi3Ktcr1cbvZ71zpFdvFXVWvQKzmHAAAHECBwAQp1KhnGqVQbXxcuV6ZeustR35fpOWv9Wyq2X7M9Wub4VKkWsw4QAA4gQOACBOpUK39Ii12ki5l4eDHe/I89B7fSu8V6V3DascF2sx4QAA4gQOACBOpUK39Dh0b2R91kPAWoysbdYa1Ctfpa9p5VohcV/t/Xvvw9/sfLknEw4AIE7gAADiVCrQoXeE3vvellnuUK/c4Rh7jdRALfXHHrUILUw4AIA4gQMAiFOp0G3kG+a9O0TOei/GyDfz91R71fiKNUTLeTPe/yqx48YOFHqZcAAAcQIHABCnUuFQ6Yd6HWnkwUcVrFK1rLLOO6h8P1OfCQcAECdwAABxKhWG9H4jvXKNMusdK70/X+1b/elXk4/83cT/tvf3V7tvZ7nDMXIuEw4AIE7gAADiVCoMGakhKo9wRx4INmKV3S5nrada/QS0M+EAAOIEDgAgTqXCkJER9yoPAZu1e2Vr1iu/71AxHHmM1e69hMqfNa7NhAMAiBM4AIA4lQpDrrpLZU/v8e79zKz3g6hRckYe+Day2yh97Ed+1ipcR+ow4QAA4gQOACBOpcI/9I5AW3aa3LleSb+H5UoqjN9nVV2JNSR+/yqfNa7BhAMAiBM4AIA4lQpDEg/FWpHz8Bjn6sNVz8OVjoVxJhwAQJzAAQDEqVSIvw/lSmPV3m/12wXQbtb7ZaqptvMl/XdXvEYcw4QDAIgTOACAOJXKTSXGqletVxLnasXz0CI9rl/9XmrRcoxXPXauzYQDAIgTOACAOJUKEVetV1pc9bhaVNiRUUH6Hpj1zqO9n0msAUw4AIA4gQMAiFOp8A+JMenqo9fehyb1jqZbRtwVzltLTZZW4TzMMnIOR87DrOt1pWvBMUw4AIA4gQMAiFOpsEu98tWRa652fjyE6nsjtciK53D1zzLHM+EAAOIEDgAgTqVyUy3fkE+MSa/6ELDeByuteB4Su1RWPA9b6fX3/s7eh4DBkUw4AIA4gQMAiFOp0F0B9I6Lt79nxbH5njvUKFst65/1Po5Vzs+s89C7AyhRY0GaCQcAECdwAABxKpWLS4xMR8bFq49w71aj7FGvfJh1Hlp2iqV3A63+2aQ+Ew4AIE7gAADiVCoXNDIyHXm40N7vrzwS3zPrNfQt5+RKZh1X73mrfF8ldpqM/N1qVvz/Bx5jwgEAxAkcAECcSuVGWka7d36g0KzdN8bCH47cDbHK+e/d5TTrAWJQgQkHABAncAAAcSoVhh5gtffzaekReu/vNMr+qvf9ICMqPOBulgr3UoU1cD0mHABAnMABAMSpVC4iMf5N7CxIPLhplR0K1Nf7cLwK9eKexIPptsd+VjXmM74uEw4AIE7gAADinl6eX9/OXsSd9T4I6A7SD4lqGcne7Zyv7kqfnZEHyl3peEd+z5bKtQ4TDgAgTuAAAOJUKgBAnAkHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcQIHABAncAAAcT/OXgAAsI4//vz9pz/z6y+/ffk3gQMA6PJvgeLTXiBRqQAAD/sMGD+bfAgcAMBDtmHju6nHO4EDAHjIZ8j4Wdh45zscAEC3bYXy+d/fBQ8TDgDgIT0TDoEDAHhI6xdG36lUAIBun1ONli+MvjPhAADiBA4A4CGt0413AgcA8JDWsPHOdzgAgC4tXxL9f08vz69vgbUAAPxNpQIAxAkcAECcwAEAxAkcAEDa0/8AjXSD9jgWCmEAAAAASUVORK5CYII=";const w=e=>((0,o.Qi)("data-v-0b006fc6"),e=e(),(0,o.jt)(),e),V={class:"fortune-game-cover"},X=w((()=>(0,o.Lk)("img",{alt:"Fortune Game Cover",class:"image",src:k},null,-1))),L=[X];function j(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",V,L)}var S=(0,o.pM)({name:"FortuneGameCover",data(){return{loading:!1}}});const _=(0,c.A)(S,[["render",j],["__scopeId","data-v-0b006fc6"]]);var x=_,K=n.p+"img/tarot_pixel.6151321a.png";const z=e=>((0,o.Qi)("data-v-25ce940a"),e=e(),(0,o.jt)(),e),F={class:"tarot-daily-game-cover"},N=z((()=>(0,o.Lk)("img",{alt:"Tarot Daily Game Cover",class:"image",src:K},null,-1))),q=[N];function R(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",F,q)}var P=(0,o.pM)({name:"TarotDailyGameCover",data(){return{loading:!1}}});const U=(0,c.A)(P,[["render",R],["__scopeId","data-v-25ce940a"]]);var W=U;const J=e=>((0,o.Qi)("data-v-b9de9a02"),e=e(),(0,o.jt)(),e),Y={class:"tarot-three-cards-game-cover"},Z=J((()=>(0,o.Lk)("img",{alt:"Tarot Daily Game Cover",class:"image",src:K},null,-1))),$=[Z];function ee(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",Y,$)}var te=(0,o.pM)({name:"TarotThreeCardsGameCover",data(){return{loading:!1}}});const ne=(0,c.A)(te,[["render",ee],["__scopeId","data-v-b9de9a02"]]);var ae=ne;const oe=e=>((0,o.Qi)("data-v-19f3a234"),e=e(),(0,o.jt)(),e),Ae={class:"tarot-yes-no-game-cover"},re=oe((()=>(0,o.Lk)("img",{alt:"Tarot Daily Game Cover",class:"image",src:K},null,-1))),ie=[re];function ce(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",Ae,ie)}var se=(0,o.pM)({name:"TarotYesNoGameCover",data(){return{loading:!1}}});const ue=(0,c.A)(se,[["render",ce],["__scopeId","data-v-19f3a234"]]);var me=ue,le=(0,o.pM)({name:"GameSelection",components:{FortuneGameCover:x,TarotDailyGameCover:W,TarotThreeCardsGameCover:ae,TarotYesNoGameCover:me},data(){return{loading:!1,loadingGame:!1,gameIndex:0,showFortuneAnswerModal:!1}},methods:{...(0,g.PY)("fortune_machine/general",["setGameSelection"]),nextGame(){this.gameIndex==this.gameOptions.length-1?this.gameIndex=0:this.gameIndex++},previousGame(){0==this.gameIndex?this.gameIndex=this.gameOptions.length-1:this.gameIndex--},handleSelectGame(){this.loadingGame||(this.loadingGame=!0,setTimeout((()=>{this.setGameSelection(this.gameOptions[this.gameIndex].value),this.loadingGame=!1}),1e3))}},computed:{...(0,g.L8)("fortune_machine/general",{gameOptions:"getGameOptions"})}});const de=(0,c.A)(le,[["render",H],["__scopeId","data-v-2f067ff0"]]);var pe=de,ge=n(2262);const ve=e=>((0,o.Qi)("data-v-06ddadd8"),e=e(),(0,o.jt)(),e),fe={class:"tarot-daily-game"},he=ve((()=>(0,o.Lk)("div",{class:"menu"},[(0,o.Lk)("h1",{class:"title"}," Tarot Diário ")],-1))),Oe=[he];function Ce(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",fe,Oe)}var Qe=(0,o.pM)({name:"TarotDailyGame",data(){return{loading:!1}}});const Be=(0,c.A)(Qe,[["render",Ce],["__scopeId","data-v-06ddadd8"]]);var Ie=Be;const be=e=>((0,o.Qi)("data-v-2a73d37a"),e=e(),(0,o.jt)(),e),Ee={class:"tarot-three-cards-game"},Te=be((()=>(0,o.Lk)("div",{class:"menu"},[(0,o.Lk)("h1",{class:"title"}," Tarot 3 cartas: Situação, Orientação e Resultado ")],-1))),Ge=[Te];function Me(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",Ee,Ge)}var ye=(0,o.pM)({name:"TarotThreeCardsGame",data(){return{loading:!1}}});const De=(0,c.A)(ye,[["render",Me],["__scopeId","data-v-2a73d37a"]]);var He=De;const ke=e=>((0,o.Qi)("data-v-0d32fdb8"),e=e(),(0,o.jt)(),e),we={class:"tarot-yes-no-game"},Ve=ke((()=>(0,o.Lk)("div",{class:"menu"},[(0,o.Lk)("h1",{class:"title"}," Tarot Sim ou Não ")],-1))),Xe=[Ve];function Le(e,t,n,a,A,r){return(0,o.uX)(),(0,o.CE)("div",we,Xe)}var je=(0,o.pM)({name:"TarotYesNoGame",data(){return{loading:!1}}});const Se=(0,c.A)(je,[["render",Le],["__scopeId","data-v-0d32fdb8"]]);var _e=Se,xe=(0,o.pM)({name:"HomeView",components:{FortuneMachine:T,GameSelection:pe,FortuneTellerGame:ge.A,TarotDailyGame:Ie,TarotThreeCardsGame:He,TarotYesNoGame:_e},data(){return{defaultComponent:"GameSelection"}},created(){const e="pt-br",t="7301d4f663msh15a9f50059b65d5p1be896jsnb7d35a4d4915";this.setGameOptions([{cover_compont:"FortuneGameCover",translate:"Jogo da Fortuna",value:"FortuneTellerGame",props:{locale:e,rapidApiKey:t}},{cover_compont:"TarotDailyGameCover",translate:"Jogo de Tarot Diário",value:"TarotDailyGame",props:{locale:e,rapidApiKey:t}},{cover_compont:"TarotYesNoGameCover",translate:"Jogo de Tarot Sim ou Não",value:"TarotYesNoGame",props:{locale:e,rapidApiKey:t}},{cover_compont:"TarotThreeCardsGameCover",translate:"Jogo de Tarot 3 cartas: Situação, Orientação e Resultado",value:"TarotThreeCardsGame",props:{locale:e,rapidApiKey:t}}])},methods:{...(0,g.PY)("fortune_machine/general",["setGameOptions"])},computed:{...(0,g.L8)("fortune_machine/general",{gameOptions:"getGameOptions",selectedGame:"getGameSelection"}),loadedComponent(){return this.selectedGame||this.defaultComponent},componentProps(){return this.selectedGame?this.gameOptions.find((e=>e.value==this.selectedGame)).props:null}}});const Ke=(0,c.A)(xe,[["render",p],["__scopeId","data-v-a1af7bbe"]]);var ze=Ke;const Fe=[{path:"/",name:"home",component:ze},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,5609))}],Ne=(0,l.aE)({history:(0,l.Bt)(),routes:Fe});var qe=Ne,Re={getGameOptions:e=>e.game_options,getGameSelection:e=>e.game_selection},Pe=n(8355);const Ue={ENDPOINTS:{TRANSLATE:"https://opentranslator.p.rapidapi.com/translate"}};for(const ut in Ue)Ue[ut]=Object.freeze(Ue[ut]);var We=Ue;var Je={translate({commit:e},t=null){return new Promise(((n,a)=>{Pe.A.post(We.ENDPOINTS.TRANSLATE,t,{headers:{"Content-Type":"application/json","X-RapidAPI-Host":"opentranslator.p.rapidapi.com","X-RapidAPI-Key":"7301d4f663msh15a9f50059b65d5p1be896jsnb7d35a4d4915"}}).then((t=>{e(n(t.data[0].result.text))})).catch((e=>{a(e)}))}))}},Ye={reset(e){e.game_options=[],e.game_selection=null},setGameOptions(e,t){e.game_options=t||[]},setGameSelection(e,t){e.game_selection=t}};const Ze=()=>({game_options:[],game_selection:null});var $e={namespaced:!0,state:Ze,getters:Re,actions:Je,mutations:Ye},et={namespaced:!0,state:{},getters:{},mutations:{},actions:{},modules:{general:$e}},tt=(0,g.y$)({state:{packageVersion:"0.2.1"},getters:{appVersion:e=>e.packageVersion},mutations:{},actions:{},modules:{fortune_machine:et}}),nt=n(5384);const at={choose_topic:"Choose a topic to predict your future.",fortune_game:"Fortune Game",fortune_machine_error:"There was a problem with the machine.",friends:"Friends",love:"Love",money:"Money",random:"Random",try_again_later:"Try again later!"},ot={general:at},At={choose_topic:"Escolha um tópico para prever seu futuro.",fortune_game:"Jogo do Futuro",fortune_machine_error:"Aconteceu um problema com a máquina.",friends:"Amigos",love:"Amor",money:"Dinheiro",random:"Aleatório",try_again_later:"Tente novamente mais tarde!"},rt={general:At},it={en:ot,"pt-br":rt};var ct=(0,nt.hU)({locale:"pt-br",fallbackLocale:"en",legacy:!1,messages:it}),st=n(6942);a.Ef(m).use(tt).use(qe).use(ct).use(st.A,Pe.A).mount("#app")},7113:function(e,t,n){e.exports=n.p+"img/black-hole.ba6942bb.png"},9573:function(e,t,n){e.exports=n.p+"img/crystal-ball.b7646859.png"},4452:function(e,t,n){e.exports=n.p+"img/hand-left-bottom.95af0ea5.png"},2520:function(e,t,n){e.exports=n.p+"img/hand-left-top.1ed831f9.png"},7579:function(e,t,n){e.exports=n.p+"img/hand-right-bottom.0dee7094.png"},1041:function(e,t,n){e.exports=n.p+"img/hand-right-top.06b9aec7.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var A=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(A.exports,A,A.exports,n),A.loaded=!0,A.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,o,A){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],A=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&A||r>=A)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,A<r&&(r=A));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}A=A||0;for(var u=e.length;u>0&&e[u-1][2]>A;u--)e[u]=e[u-1];e[u]=[a,o,A]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.3fc24ac9.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fortune-machine:";n.l=function(a,o,A,r){if(e[a])e[a].push(o);else{var i,c;if(void 0!==A)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var m=s[u];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+A){i=m;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+A),i.src=a),e[a]=[o];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(d);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/fortune-machine/"}(),function(){var e={524:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var A=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=A);var r=n.p+n.u(t),i=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var A=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+A+": "+r+")",i.name="ChunkLoadError",i.type=A,i.request=r,o[1](i)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,A,r=a[0],i=a[1],c=a[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(a);s<r.length;s++)A=r[s],n.o(e,A)&&e[A]&&e[A][0](),e[A]=0;return n.O(u)},a=self["webpackChunkfortune_machine"]=self["webpackChunkfortune_machine"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(7170)}));a=n.O(a)})();
//# sourceMappingURL=app.8a671c8d.js.map