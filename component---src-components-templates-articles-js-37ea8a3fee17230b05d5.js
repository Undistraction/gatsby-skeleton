webpackJsonp([0x5b8586d29f7f],{472:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(6),r=a(l),n=u(4),i=a(n),d=u(3),o=a(d),f=u(91),s=u(20),c=u(54),p=u(513),_=a(p),v=u(45),m=a(v),x=u(97),g=a(x),h=u(64),y=a(h),M=o.default.header.withConfig({displayName:"ArticlesPage__Meta"})(["text-align:center;"]),w=function(e){var t=e.data,u=e.pathContext,a=u.previousPath,l=u.nextPath,r=i.default.createElement(g.default,{previousLabel:"Newer",previousPath:a,nextLabel:"Older",nextPath:l});return i.default.createElement(y.default,{title:(0,f.pluralise)((0,c.articlesResourceTitle)(t)),nav:r},i.default.createElement(m.default,(0,c.articlesPageMetadata)(t)),i.default.createElement(M,null,(0,f.pagination)(u)),i.default.createElement(_.default,{articles:(0,s.markdownItemNodes)(t),pagination:u}))};w.propTypes={data:r.default.object.isRequired,pathContext:r.default.object.isRequired},t.default=w,e.exports=t.default},473:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(472),r=a(l);t.default=r.default,e.exports=t.default},93:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(129),r=a(l);t.default=r.default,e.exports=t.default},94:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(6),r=a(l),n=u(4),i=a(n),d=u(92),o=a(d),f=u(101),s=a(f),c=u(95),p=a(c),_=function(e){var t=e.articles;return i.default.createElement(s.default,null,(0,o.default)(p.default,"article",t))};_.propTypes={articles:r.default.array.isRequired},t.default=_,e.exports=t.default},95:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(7),r=u(116),n=a(r),i=u(117),d=a(i),o=u(6),f=a(o),s=u(4),c=a(s),p=u(3),_=a(p),v=u(20),m=u(22),x=a(m),g=u(100),h=a(g),y=u(133),M=a(y),w=u(56),E=a(w),b=u(66),L=a(b),N=u(93),P=a(N),k=u(130),C=a(k),q=_.default.ul.withConfig({displayName:"ArticlesListItem__Layout"})(["display:flex;",";",";",";> *:first-child{",""],(0,l.api)({flexDirection:["column","column","row"]}),(0,E.default)([0,0,"1ru"]),(0,L.default)(["1ru","1ru",0]),(0,l.api)({flex:["0 0 100%","0 0 100%","0 0 33.3%"]})),T=function(e){var t=e.article,u=(0,v.fieldsTitle)(t);return c.default.createElement(q,null,c.default.createElement(d.default,{to:(0,v.fieldsSlug)(t),title:u},c.default.createElement(n.default,{sizes:(0,v.frontmatterImageSizes)(t)})),c.default.createElement(x.default,{spacing:"small"},c.default.createElement(h.default,{to:(0,v.fieldsSlug)(t),title:u,underlineType:"left"},c.default.createElement(M.default,null,u)),c.default.createElement(C.default,{article:t}),c.default.createElement("p",null,t.excerpt),c.default.createElement(P.default,{article:t})))};T.propTypes={article:f.default.object.isRequired},t.default=T,e.exports=t.default},96:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(6),r=a(l),n=u(1),i=u(4),d=a(i),o=u(94),f=a(o),s=function(e){var t=e.articles;return d.default.createElement(d.default.Fragment,null,(0,n.isEmpty)(t)?d.default.createElement("div",null,"No Articles Yet"):d.default.createElement(f.default,{articles:t}))};s.propTypes={articles:r.default.array.isRequired},t.default=s,e.exports=t.default},513:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(96),r=a(l);t.default=r.default,e.exports=t.default},97:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0,t.LayoutNext=t.LayoutPrevious=void 0;var r=l(["calc(50% - 0.5ru)"],["calc(50% - 0.5ru)"]),n=u(7),i=u(6),d=a(i),o=u(4),f=a(o),s=u(3),c=a(s),p=u(98),_=a(p),v=u(99),m=a(v),x=u(48),g=a(x),h=t.LayoutPrevious=c.default.div.withConfig({displayName:"NextPreviousNav__LayoutPrevious"})([""]),y=t.LayoutNext=c.default.div.withConfig({displayName:"NextPreviousNav__LayoutNext"})([""]),M=c.default.nav.withConfig({displayName:"NextPreviousNav__Layout"})(["",";justify-content:space-between;",",","{",";}"],g.default,y,h,(0,n.api)({width:(0,n.scope)(r)})),w=function(e,t){return e?f.default.createElement(_.default,{to:e,direction:"left"},t):f.default.createElement(m.default,{direction:"left"},t)},E=function(e,t){return e?f.default.createElement(_.default,{to:e,direction:"right"},t):f.default.createElement(m.default,{direction:"right"},t)},b=function(e){var t=e.previousPath,u=e.nextPath,a=e.previousLabel,l=e.nextLabel;return f.default.createElement(M,null,f.default.createElement(h,null,w(t,a)),f.default.createElement(y,null,E(u,l)))};b.propTypes={previousPath:d.default.string,nextPath:d.default.string,previousLabel:d.default.string,nextLabel:d.default.string},b.defaultProps={previousPath:null,nextPath:null,previousLabel:"Previous",nextLabel:"Next"},t.default=b},98:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0;var r=l(["0.6ru"],["0.6ru"]),n=l(["0.5ru 1ru"],["0.5ru 1ru"]),i=u(7),d=u(1),o=u(4),f=a(o),s=u(3),c=a(s),p=u(102),_=a(p),v=u(47),m=a(v),x=u(103),g=a(x),h=u(55),y=a(h),M=c.default.div.withConfig({displayName:"ArrowButtonLink__Wrapper"})(["position:relative;z-index:1;text-align:center;",":0;",";&:hover{animation:"," 0.3s ease-in-out;}"],(0,d.prop)("direction"),(0,m.default)((0,i.scope)(r),"g:backgroundInverted"),function(e){var t=e.direction;return(0,_.default)(t)}),w=(0,c.default)(y.default).withConfig({displayName:"ArrowButtonLink__Link"})(["display:block;",";",";"],g.default,(0,i.api)({padding:(0,i.scope)(n)})),E=function(e){return f.default.createElement(M,e,f.default.createElement(w,e))};t.default=E,e.exports=t.default},55:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(7),r=u(3),n=a(r),i=u(38),d=a(i),o=u(46),f=a(o),s=(0,n.default)(f.default).withConfig({displayName:"ButtonLink__Button"})(["",";font-weight:normal;display:block;",";"],(0,d.default)("c:textInverted","c:highlight"),(0,l.api)({color:"c:textInverted",background:"g:backgroundInverted"}));t.default=s,e.exports=t.default},99:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0;var r=l(["0.6ru"],["0.6ru"]),n=l(["0.5ru 1ru"],["0.5ru 1ru"]),i=u(7),d=u(3),o=a(d),f=u(47),s=a(f),c=o.default.div.withConfig({displayName:"DisabledArrowButtonLink"})(["z-index:1;position:relative;display:block;cursor:default;color:transparent;user-select:none;",";",";"],(0,s.default)((0,i.scope)(r),"c:disabled"),(0,i.api)({padding:(0,i.scope)(n),backgroundColor:"c:disabled"}));t.default=c,e.exports=t.default},101:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(3),r=a(l),n=u(104),i=a(n),d=u(22),o=a(d),f=(0,r.default)(o.default.withComponent("ul")).withConfig({displayName:"VList"})(["",";"],i.default);t.default=f,e.exports=t.default},102:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=u(3),r=u(65),n=a(r),i=function(e){var t,u;return(0,l.keyframes)(["0%{",":0;}60%{","}85%{","}100%{",":0;}"],e,(0,n.default)((t={},t[e]="-0.5rem",t)),(0,n.default)((u={},u[e]="0.2rem",u)),e)};t.default=i,e.exports=t.default},47:function(e,t,u){"use strict";t.__esModule=!0;var a=u(7),l=u(3),r=function(e,t){return function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"16",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"red",r="right"===t.direction?"50%":"-50%";return(0,l.css)(["::after{content:'';z-index:-1;position:absolute;bottom:50%;transform:translate(",",50%) rotate(45deg);",":0;",";}"],r,t.direction,e({width:u,height:u,background:a}))}};t.default=(0,a.mixin)(r),e.exports=t.default},103:function(e,t,u){"use strict";t.__esModule=!0;var a=u(3),l=(0,a.css)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);t.default=l,e.exports=t.default},536:function(e,t,u){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=u(32),r=(a(l),u(473)),n=a(r);t.default=n.default;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-components-templates-articles-js-37ea8a3fee17230b05d5.js.map