this.wp=this.wp||{},this.wp.plugins=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=332)}({0:function(t,e){!function(){t.exports=this.wp.element}()},12:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},13:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},14:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(31),o=n(7);function u(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(o.a)(t):e}},16:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},17:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},2:function(t,e){!function(){t.exports=this.lodash}()},28:function(t,e){!function(){t.exports=this.wp.hooks}()},31:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return o}))},332:function(t,e,n){"use strict";n.r(e);var r=n(14),o=n(13),u=n(15),i=n(16),c=n(7),l=n(17),s=n(0),a=n(2),f=n(28),p=n(12),g=n(8),b=Object(s.createContext)({name:null,icon:null}),d=b.Consumer,y=b.Provider,m=function(t){return Object(g.createHigherOrderComponent)((function(e){return function(n){return Object(s.createElement)(d,null,(function(r){return Object(s.createElement)(e,Object(p.a)({},n,t(r,n)))}))}}),"withPluginContext")},O=n(6),j=n(31),v={};function h(t,e){return"object"!==Object(j.a)(e)?(console.error("No settings object provided!"),null):"string"!=typeof t?(console.error("Plugin names must be strings."),null):/^[a-z][a-z0-9-]*$/.test(t)?(v[t]&&console.error('Plugin "'.concat(t,'" is already registered.')),e=Object(f.applyFilters)("plugins.registerPlugin",e,t),Object(a.isFunction)(e.render)?(v[t]=Object(O.a)({name:t,icon:"admin-plugins"},e),Object(f.doAction)("plugins.pluginRegistered",e,t),e):(console.error('The "render" property must be specified and must be a valid function.'),null)):(console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null)}function P(t){if(v[t]){var e=v[t];return delete v[t],Object(f.doAction)("plugins.pluginUnregistered",e,t),e}console.error('Plugin "'+t+'" is not registered.')}function w(t){return v[t]}function S(){return Object.values(v)}var x=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(i.a)(e).apply(this,arguments))).setPlugins=t.setPlugins.bind(Object(c.a)(t)),t.state=t.getCurrentPluginsState(),t}return Object(l.a)(e,t),Object(o.a)(e,[{key:"getCurrentPluginsState",value:function(){return{plugins:Object(a.map)(S(),(function(t){var e=t.icon,n=t.name;return{Plugin:t.render,context:{name:n,icon:e}}}))}}},{key:"componentDidMount",value:function(){Object(f.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),Object(f.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}},{key:"componentWillUnmount",value:function(){Object(f.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),Object(f.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}},{key:"setPlugins",value:function(){this.setState(this.getCurrentPluginsState)}},{key:"render",value:function(){return Object(s.createElement)("div",{style:{display:"none"}},Object(a.map)(this.state.plugins,(function(t){var e=t.context,n=t.Plugin;return Object(s.createElement)(y,{key:e.name,value:e},Object(s.createElement)(n,null))})))}}]),e}(s.Component);n.d(e,"PluginArea",(function(){return x})),n.d(e,"withPluginContext",(function(){return m})),n.d(e,"registerPlugin",(function(){return h})),n.d(e,"unregisterPlugin",(function(){return P})),n.d(e,"getPlugin",(function(){return w})),n.d(e,"getPlugins",(function(){return S}))},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(9);function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){Object(r.a)(t,e,n[e])}))}return t}},7:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},8:function(t,e){!function(){t.exports=this.wp.compose}()},9:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}});