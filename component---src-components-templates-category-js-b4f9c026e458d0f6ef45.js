webpackJsonp([0x8634b55b5b4c],{474:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(6),r=a(u),d=l(4),f=a(d),n=l(91),i=l(20),s=l(178),c=l(54),o=l(45),_=a(o),p=l(132),m=a(p),M=l(181),E=a(M),y=function(e){var t=e.data,l=e.pathContext,a=(0,c.categoryPageMetadata)(t),u=l.category,r=(0,i.markdownItemNodes)(t);return f.default.createElement(m.default,{title:(0,n.categoryTitle)(u)},f.default.createElement(_.default,(0,s.addTitleToMetadata)(a,u)),f.default.createElement(E.default,{articles:r,title:[(0,n.pluraliseWithNumber)((0,c.articlesResourceTitle)(t),r.length)+" filed in",u]}))};y.propTypes={data:r.default.object.isRequired,pathContext:r.default.object.isRequired},t.default=y,e.exports=t.default},475:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(474),r=a(u);t.default=r.default,e.exports=t.default},178:function(e,t,l){"use strict";t.__esModule=!0,t.addTitleToMetadata=void 0;var a=l(1);t.addTitleToMetadata=function(e,t){return(0,a.over)((0,a.lensProp)("title"),(0,a.concat)(t),e)}},93:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(129),r=a(u);t.default=r.default,e.exports=t.default},94:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(6),r=a(u),d=l(4),f=a(d),n=l(92),i=a(n),s=l(101),c=a(s),o=l(95),_=a(o),p=function(e){var t=e.articles;return f.default.createElement(c.default,null,(0,i.default)(_.default,"article",t))};p.propTypes={articles:r.default.array.isRequired},t.default=p,e.exports=t.default},95:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(7),r=l(116),d=a(r),f=l(117),n=a(f),i=l(6),s=a(i),c=l(4),o=a(c),_=l(3),p=a(_),m=l(20),M=l(22),E=a(M),y=l(100),v=a(y),g=l(133),x=a(g),T=l(56),h=a(T),q=l(66),b=a(q),R=l(93),w=a(R),C=l(130),N=a(C),S=p.default.ul.withConfig({displayName:"ArticlesListItem__Layout"})(["display:flex;",";",";",";> *:first-child{",""],(0,u.api)({flexDirection:["column","column","row"]}),(0,h.default)([0,0,"1ru"]),(0,b.default)(["1ru","1ru",0]),(0,u.api)({flex:["0 0 100%","0 0 100%","0 0 33.3%"]})),j=function(e){var t=e.article,l=(0,m.fieldsTitle)(t);return o.default.createElement(S,null,o.default.createElement(n.default,{to:(0,m.fieldsSlug)(t),title:l},o.default.createElement(d.default,{sizes:(0,m.frontmatterImageSizes)(t)})),o.default.createElement(E.default,{spacing:"small"},o.default.createElement(v.default,{to:(0,m.fieldsSlug)(t),title:l,underlineType:"left"},o.default.createElement(x.default,null,l)),o.default.createElement(N.default,{article:t}),o.default.createElement("p",null,t.excerpt),o.default.createElement(w.default,{article:t})))};j.propTypes={article:s.default.object.isRequired},t.default=j,e.exports=t.default},96:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(6),r=a(u),d=l(1),f=l(4),n=a(f),i=l(94),s=a(i),c=function(e){var t=e.articles;return n.default.createElement(n.default.Fragment,null,(0,d.isEmpty)(t)?n.default.createElement("div",null,"No Articles Yet"):n.default.createElement(s.default,{articles:t}))};c.propTypes={articles:r.default.array.isRequired},t.default=c,e.exports=t.default},180:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(6),r=a(u),d=l(4),f=a(d),n=l(3),i=a(n),s=l(96),c=a(s),o=i.default.header.withConfig({displayName:"SearchResults__Meta"})(["text-align:center;"]),_=function(e){var t=e.articles,l=e.title;return f.default.createElement(f.default.Fragment,null,f.default.createElement(f.default.Fragment,null,f.default.createElement(o,null,l[0]," ",f.default.createElement("i",null,l[1])),f.default.createElement(c.default,{articles:t})))};_.propTypes={articles:r.default.array,title:r.default.array.isRequired},_.defaultProps={articles:[]},t.default=_,e.exports=t.default},181:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(180),r=a(u);t.default=r.default,e.exports=t.default},101:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(3),r=a(u),d=l(104),f=a(d),n=l(22),i=a(n),s=(0,r.default)(i.default.withComponent("ul")).withConfig({displayName:"VList"})(["",";"],f.default);t.default=s,e.exports=t.default},537:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var u=l(32),r=(a(u),l(475)),d=a(r);t.default=d.default;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-components-templates-category-js-b4f9c026e458d0f6ef45.js.map