(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-514d0c92"],{1800:function(t,e,i){"use strict";i("4de4");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,s=void 0===n?[]:n;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var o=s.filter((function(t){return!1===t.isComment&&" "!==t.text}));return o.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,s)}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}})},"4d63":function(t,e,i){var n=i("83ab"),s=i("da84"),o=i("94ca"),a=i("7156"),r=i("9112"),c=i("9bf2").f,l=i("241c").f,h=i("44e7"),u=i("577e"),d=i("ad6d"),p=i("9f7f"),v=i("6eeb"),f=i("d039"),m=i("1a2d"),g=i("69f3").enforce,b=i("2626"),S=i("b622"),O=i("fce3"),y=i("107c"),x=S("match"),A=s.RegExp,_=A.prototype,w=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,B=/a/g,$=new A(j)!==j,C=p.UNSUPPORTED_Y,T=n&&(!$||C||O||y||f((function(){return B[x]=!1,A(j)!=j||A(B)==B||"/a/i"!=A(j,"i")}))),k=function(t){for(var e,i=t.length,n=0,s="",o=!1;n<=i;n++)e=t.charAt(n),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),s+=e):s+="[\\s\\S]":s+=e+t.charAt(++n);return s},M=function(t){for(var e,i=t.length,n=0,s="",o=[],a={},r=!1,c=!1,l=0,h="";n<=i;n++){if(e=t.charAt(n),"\\"===e)e+=t.charAt(++n);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:w.test(t.slice(n+1))&&(n+=2,c=!0),s+=e,l++;continue;case">"===e&&c:if(""===h||m(a,h))throw new SyntaxError("Invalid capture group name");a[h]=!0,o.push([h,l]),c=!1,h="";continue}c?h+=e:s+=e}return[s,o]};if(o("RegExp",T)){for(var E=function(t,e){var i,n,s,o,c,l,p=this instanceof E,v=h(t),f=void 0===e,m=[],b=t;if(!p&&v&&f&&t.constructor===E)return t;if((v||t instanceof E)&&(t=t.source,f&&(e="flags"in b?b.flags:d.call(b))),t=void 0===t?"":u(t),e=void 0===e?"":u(e),b=t,O&&"dotAll"in j&&(n=!!e&&e.indexOf("s")>-1,n&&(e=e.replace(/s/g,""))),i=e,C&&"sticky"in j&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,""))),y&&(o=M(t),t=o[0],m=o[1]),c=a(A(t,e),p?this:_,E),(n||s||m.length)&&(l=g(c),n&&(l.dotAll=!0,l.raw=E(k(t),i)),s&&(l.sticky=!0),m.length&&(l.groups=m)),t!==b)try{r(c,"source",""===b?"(?:)":b)}catch(S){}return c},I=function(t){t in E||c(E,t,{configurable:!0,get:function(){return A[t]},set:function(e){A[t]=e}})},R=l(A),H=0;R.length>H;)I(R[H++]);_.constructor=E,E.prototype=_,v(s,"RegExp",E)}b("RegExp")},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return _})),i.d(e,"b",(function(){return w}));var n=i("80d2"),s=i("8860"),o=i("5530"),a=i("ade3"),r=(i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("db42"),i("9d26")),c=i("da13"),l=i("34c3"),h=i("7e2b"),u=i("9d65"),d=i("a9ad"),p=i("f2e7"),v=i("3206"),f=i("5607"),m=i("0789"),g=i("58df"),b=Object(g["a"])(h["a"],u["a"],d["a"],Object(v["a"])("list"),p["a"]),S=b.extend().extend({name:"v-list-group",directives:{ripple:f["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(r["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(c["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(a["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(o["a"])(Object(o["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(n["m"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m["a"],this.genItems())])}}),O=i("1baa"),y=i("1800"),x=i("8270"),A=Object(n["h"])("v-list-item__action-text","span"),_=Object(n["h"])("v-list-item__content","div"),w=Object(n["h"])("v-list-item__title","div"),j=Object(n["h"])("v-list-item__subtitle","div");s["a"],c["a"],y["a"],x["a"],O["a"],l["a"]},"5e23":function(t,e,i){},7958:function(t,e,i){},8270:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("3408"),i("a9ad")),o=i("24b2"),a=i("a236"),r=i("80d2"),c=i("58df"),l=Object(c["a"])(s["a"],o["a"],a["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(r["g"])(this.size),minWidth:Object(r["g"])(this.size),width:Object(r["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),h=l;e["a"]=h.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-list-item__avatar--horizontal":this.horizontal},h.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=h.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},"8b0d":function(t,e,i){},b5b6:function(t,e,i){},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},db42:function(t,e,i){},ea2a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:"",elevation:"1"}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}}),i("v-spacer"),i("v-icon",[t._v("mdi-account")])],1),i("v-navigation-drawer",{attrs:{app:"","mini-variant":t.mini},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[i("v-list",{attrs:{dense:"",color:"primary",dark:""}},[i("v-list-item",[i("v-list-item-action",[i("v-icon",{on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}},[t._v("mdi-chevron-left")])],1),i("v-list-item-title",[i("h3",[t._v("Menu Principal")])])],1)],1),i("v-list-item",{staticClass:"px=2",on:{click:function(e){t.mini=!t.mini}}},[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[t._v(t._s(t.estaDefinido)+" "+t._s(t.nome)+" "+t._s(t.sobrenome))]),i("v-btn",{attrs:{icon:"",small:""}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1),i("v-divider"),i("v-list",t._l(t.itens,(function(e){return i("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1),i("v-main",[i("router-view")],1),i("v-footer",{attrs:{app:""}},[i("span",[t._v("MyTodoList ©2021")])])],1)},s=[],o=i("1da1"),a=(i("96cf"),i("4ee7")),r={data:function(){return{sidebar:!0,mini:!1,estaDefinido:"Usuário Indefinido",nome:"",sobrenome:"",itens:[{title:"Lista",icon:"mdi-account",to:"/"},{title:"Perfil",icon:"mdi-account-cog",to:"/perfil"},{title:"Sair",icon:"mdi-exit-to-app",to:"/login"}]}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.uid=a["a"].currentUser.uid,e.next=3,a["c"].where("uid","==",t.uid).get();case 3:i=e.sent,i.docs.length>0&&(n=i.docs[0],t.profileId=n.id,t.estaDefinido="",t.nome=n.data().nome,t.sobrenome=n.data().sobrenome),""==t.nome&&""==t.sobrenome&&(t.estaDefinido="Usuário Indefinido");case 6:case"end":return e.stop()}}),e)})))()}},c=r,l=i("2877"),h=i("6544"),u=i.n(h),d=i("7496"),p=i("5530"),v=(i("c7cd"),i("a9e3"),i("8b0d"),i("3835")),f=(i("0481"),i("5e23"),i("8dd9")),m=i("adda"),g=i("80d2"),b=i("d9bd"),S=f["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(p["a"])(Object(p["a"])({},this.measurableStyles),{},{height:Object(g["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(v["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(b["a"])(n,s,t)}))},methods:{genBackground:function(){var t={height:Object(g["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(m["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(g["g"])(this.computedContentHeight)}},Object(g["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(g["g"])(this.extensionHeight)}},Object(g["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),O=i("53ca");function y(t,e){var i=e.modifiers||{},n=i.self,s=void 0!==n&&n,o=e.value,a="object"===Object(O["a"])(o)&&o.options||{passive:!0},r="function"===typeof o||"handleEvent"in o?o:o.handler,c=s?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",r,a),t._onScroll={handler:r,options:a,target:s?void 0:c})}function x(t){if(t._onScroll){var e=t._onScroll,i=e.handler,n=e.options,s=e.target,o=void 0===s?t:s;o.removeEventListener("scroll",i,n),delete t._onScroll}}var A={inserted:y,unbind:x},_=A,w=i("fe6c"),j=i("58df");function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(j["a"])(Object(w["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var $=i("2b0e"),C=$["a"].extend({name:"scrollable",directives:{Scroll:A},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(b["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),T=i("d10f"),k=i("f2e7"),M=Object(j["a"])(S,C,T["a"],k["a"],B("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),E=M.extend({name:"v-app-bar",directives:{Scroll:_},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return C.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(p["a"])(Object(p["a"])({},S.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return S.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=S.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:S.options.computed.isCollapsed.call(this)},isProminent:function(){return S.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(p["a"])(Object(p["a"])({},S.options.computed.styles.call(this)),{},{fontSize:Object(g["g"])(this.computedFontSize,"rem"),marginTop:Object(g["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(g["g"])(this.computedTransform),")"),left:Object(g["g"])(this.computedLeft),right:Object(g["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=S.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=S.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),I=(i("498a"),i("9d26")),R=i("8336"),H=$["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,s=e.props,o=e.data,a=Object.assign(o,{staticClass:"v-app-bar__nav-icon ".concat(o.staticClass||"").trim(),props:Object(p["a"])(Object(p["a"])({},s),{},{icon:!0}),on:n}),r=i().default;return t(R["a"],a,r||[t(I["a"],"$menu")])}}),P=i("ce7e"),V=(i("b5b6"),Object(j["a"])(f["a"],B("footer",["height","inset"]),T["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(g["g"])(t),left:Object(g["g"])(this.computedLeft),right:Object(g["g"])(this.computedRight),bottom:Object(g["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})),N=i("132d"),L=i("8860"),X=i("da13"),z=i("1800"),U=i("8270"),Y=i("5d23"),D=i("34c3"),W=i("f6c4"),F=(i("99af"),i("7958"),i("a9ad")),G=i("b848"),q=(i("caad"),i("b0c0"),$["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,s=t.mobileBreakpoint;if(s===this.mobileBreakpoint)return e;var o=parseInt(this.mobileBreakpoint,10),a=!isNaN(o);return a?i<o:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(b["d"])("mobile-break-point","mobile-breakpoint",this)}})),J=i("e707"),Z=i("7560"),K=i("a293"),Q=i("dc22"),tt=(i("159b"),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,o=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))});function et(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function it(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),tt(e)}function nt(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function st(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return et(t,e)},touchend:function(t){return it(t,e)},touchmove:function(t){return nt(t,e)}}}function ot(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,o=n.options||{passive:!0};if(s){var a=st(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=a,Object(g["r"])(a).forEach((function(t){s.addEventListener(t,a[t],o)}))}}function at(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];Object(g["r"])(s).forEach((function(t){n.removeEventListener(t,s[t])})),delete n._touchHandlers[i.context._uid]}}var rt={inserted:ot,unbind:at},ct=rt,lt=Object(j["a"])(B("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),F["a"],G["a"],q,J["a"],T["a"],Z["a"]),ht=lt.extend({name:"v-navigation-drawer",directives:{ClickOutside:K["a"],Resize:Q["a"],Touch:ct},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(p["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&q.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(g["g"])(this.height),top:this.isBottom?"auto":Object(g["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(g["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(g["g"])(this.computedTransform,"%"),")"),width:Object(g["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(m["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(g["m"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(g["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),ut=i("2fa4"),dt=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=dt.exports;u()(dt,{VApp:d["a"],VAppBar:E,VAppBarNavIcon:H,VBtn:R["a"],VDivider:P["a"],VFooter:V,VIcon:N["a"],VList:L["a"],VListItem:X["a"],VListItemAction:z["a"],VListItemAvatar:U["a"],VListItemContent:Y["a"],VListItemIcon:D["a"],VListItemTitle:Y["b"],VMain:W["a"],VNavigationDrawer:ht,VSpacer:ut["a"]})},f6c4:function(t,e,i){"use strict";i("bd0c");var n=i("d10f");e["a"]=n["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,s=t.footer,o=t.insetFooter,a=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(s+o+a,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-514d0c92.3c889fca.js.map