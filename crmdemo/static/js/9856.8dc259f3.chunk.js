"use strict";(self.webpackChunkcrmdemo1=self.webpackChunkcrmdemo1||[]).push([[9856],{9856:function(e,t,n){n.d(t,{V:function(){return T}});var r=n(2791),o=n(7890),i=n(5106),l=n(2062),a=n(8718),u=n(5036);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(s){c=!0,o=s}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"equals",value:function(e,t,n){return n&&e&&"object"===p(e)&&t&&"object"===p(t)?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&"object"==p(e)&&"object"==p(t)){var n,r,o,i=Array.isArray(e),l=Array.isArray(t);if(i&&l){if((r=e.length)!==t.length)return!1;for(n=r;0!==n--;)if(!this.deepEquals(e[n],t[n]))return!1;return!0}if(i!==l)return!1;var a=e instanceof Date,u=t instanceof Date;if(a!==u)return!1;if(a&&u)return e.getTime()===t.getTime();var c=e instanceof RegExp,s=t instanceof RegExp;if(c!==s)return!1;if(c&&s)return e.toString()===t.toString();var f=Object.keys(e);if((r=f.length)!==Object.keys(t).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(t,f[n]))return!1;for(n=r;0!==n--;)if(o=f[n],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(t,n){if(t&&Object.keys(t).length&&n){if(this.isFunction(n))return n(t);if(e.isNotEmpty(t[n]))return t[n];if(-1===n.indexOf("."))return t[n];for(var r=n.split("."),o=t,i=0,l=r.length;i<l;++i){if(null==o)return null;o=o[r[i]]}return o}return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return null!==e&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return e&&t?Object.keys(e).filter((function(e){return!t.hasOwnProperty(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):{}}},{key:"reduceKeys",value:function(e,t){var n={};return e&&t&&0!==t.length?(Object.keys(e).filter((function(e){return t.some((function(t){return e.startsWith(t)}))})).forEach((function(t){n[t]=e[t],delete e[t]})),n):n}},{key:"reorderArray",value:function(e,t,n){e&&t!==n&&(n>=e.length&&(n%=e.length,t%=e.length),e.splice(n,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,n){var r=this;return t?n?t.findIndex((function(t){return r.equals(t,e,n)})):t.findIndex((function(t){return t===e})):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,n):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e?e[t]:void 0;return void 0===r?n[t]:r}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,n):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,n):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,n){if(e){var r=(this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0))===t;return r}return!1}},{key:"getRefElement",value:function(e){return e?"object"===p(e)&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&("function"===typeof t?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&"string"===typeof e?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return null===e||void 0===e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"===p(e)&&0===Object.keys(e).length}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=e.compare(t,n,o,r),a=r;return(e.isEmpty(t)||e.isEmpty(n))&&(a=1===i?r:i),a*l}},{key:"compare",value:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=e.isEmpty(t),l=e.isEmpty(n);return i&&l?0:i?o:l?-o:"string"===typeof t&&"string"===typeof n?t.localeCompare(n,r,{numeric:!0}):t<n?-1:t>n?1:0}}],(n=null)&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),g=0;var v=r.memo(r.forwardRef((function(e,t){var n=u.A.getPTI(e),o=f(r.useState(e.id),2),i=o[0],l=o[1];return r.useEffect((function(){y.isEmpty(i)&&l(function(){return g++,"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pr_id_").concat(g)}("pr_icon_clip_"))}),[i]),r.createElement("svg",c({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("g",{clipPath:"url(#".concat(i,")")},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"})),r.createElement("defs",null,r.createElement("clipPath",{id:i},r.createElement("rect",{width:"14",height:"14",fill:"white"}))))})));function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(s){c=!0,o=s}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function E(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}v.displayName="WindowMaximizeIcon";var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"equals",value:function(e,t,n){return n&&e&&"object"===x(e)&&t&&"object"===x(t)?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&"object"==x(e)&&"object"==x(t)){var n,r,o,i=Array.isArray(e),l=Array.isArray(t);if(i&&l){if((r=e.length)!==t.length)return!1;for(n=r;0!==n--;)if(!this.deepEquals(e[n],t[n]))return!1;return!0}if(i!==l)return!1;var a=e instanceof Date,u=t instanceof Date;if(a!==u)return!1;if(a&&u)return e.getTime()===t.getTime();var c=e instanceof RegExp,s=t instanceof RegExp;if(c!==s)return!1;if(c&&s)return e.toString()===t.toString();var f=Object.keys(e);if((r=f.length)!==Object.keys(t).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(t,f[n]))return!1;for(n=r;0!==n--;)if(o=f[n],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(t,n){if(t&&Object.keys(t).length&&n){if(this.isFunction(n))return n(t);if(e.isNotEmpty(t[n]))return t[n];if(-1===n.indexOf("."))return t[n];for(var r=n.split("."),o=t,i=0,l=r.length;i<l;++i){if(null==o)return null;o=o[r[i]]}return o}return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return null!==e&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return e&&t?Object.keys(e).filter((function(e){return!t.hasOwnProperty(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):{}}},{key:"reduceKeys",value:function(e,t){var n={};return e&&t&&0!==t.length?(Object.keys(e).filter((function(e){return t.some((function(t){return e.startsWith(t)}))})).forEach((function(t){n[t]=e[t],delete e[t]})),n):n}},{key:"reorderArray",value:function(e,t,n){e&&t!==n&&(n>=e.length&&(n%=e.length,t%=e.length),e.splice(n,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,n){var r=this;return t?n?t.findIndex((function(t){return r.equals(t,e,n)})):t.findIndex((function(t){return t===e})):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,n):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e?e[t]:void 0;return void 0===r?n[t]:r}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.isFunction(e)?e.apply(void 0,n):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,n):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,n){if(e){var r=(this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0))===t;return r}return!1}},{key:"getRefElement",value:function(e){return e?"object"===x(e)&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&("function"===typeof t?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&"string"===typeof e?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return null===e||void 0===e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"===x(e)&&0===Object.keys(e).length}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=e.compare(t,n,o,r),a=r;return(e.isEmpty(t)||e.isEmpty(n))&&(a=1===i?r:i),a*l}},{key:"compare",value:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=e.isEmpty(t),l=e.isEmpty(n);return i&&l?0:i?o:l?-o:"string"===typeof t&&"string"===typeof n?t.localeCompare(n,r,{numeric:!0}):t<n?-1:t>n?1:0}}],(n=null)&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=0;var S=r.memo(r.forwardRef((function(e,t){var n=u.A.getPTI(e),o=C(r.useState(e.id),2),i=o[0],l=o[1];return r.useEffect((function(){k.isEmpty(i)&&l(function(){return O++,"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pr_id_").concat(O)}("pr_icon_clip_"))}),[i]),r.createElement("svg",h({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("g",{clipPath:"url(#".concat(i,")")},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"})),r.createElement("defs",null,r.createElement("clipPath",{id:i},r.createElement("rect",{width:"14",height:"14",fill:"white"}))))})));S.displayName="WindowMinimizeIcon";var P=n(9022),D=n(9411),j=n(5854);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function A(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===I(t)?t:String(t)}function z(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){if(e){if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function N(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(s){c=!0,o=s}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=n(5388).V.extend({defaultProps:{__TYPE:"Dialog",appendTo:null,ariaCloseIconLabel:null,baseZIndex:0,blockScroll:!1,breakpoints:null,className:null,closable:!0,closeIcon:null,closeOnEscape:!0,contentClassName:null,contentStyle:null,dismissableMask:!1,draggable:!0,focusOnShow:!0,footer:null,header:null,headerClassName:null,headerStyle:null,icons:null,id:null,keepInViewport:!0,maskClassName:null,maskStyle:null,maximizable:!1,maximizeIcon:null,maximized:!1,minX:0,minY:0,minimizeIcon:null,modal:!0,onClick:null,onDrag:null,onDragEnd:null,onDragStart:null,onHide:null,onMaskClick:null,onMaximize:null,onResize:null,onResizeEnd:null,onResizeStart:null,onShow:null,position:"center",resizable:!0,rtl:!1,showHeader:!0,style:null,transitionOptions:null,visible:!1,children:void 0}});function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=r.forwardRef((function(e,t){var n=r.useContext(o.Ou),u=V.getProps(e,n),c=u.id?u.id:(0,j.Th)(),s=H(r.useState(c),2),f=s[0];s[1];var p=H(r.useState(!1),2),d=p[0],m=p[1],y=H(r.useState(!1),2),g=y[0],h=y[1],b=H(r.useState(u.maximized),2),C=b[0],x=b[1],E=r.useRef(null),w=r.useRef(null),k=r.useRef(null),O=r.useRef(null),I=r.useRef(null),A=r.useRef(null),F=r.useRef(null),R=r.useRef(!1),T=r.useRef(!1),_=r.useRef(null),Z=r.useRef(null),X=r.useRef(null),q=r.useRef(c),B=u.onMaximize?u.maximized:C,L=V.setMetaData({props:u,state:{id:f,maximized:B,containerVisible:d}}).ptm,Y=H((0,l.OR)({type:"keydown",listener:function(e){return fe(e)}}),2),K=Y[0],G=Y[1],J=H((0,l.OR)({type:"mousemove",target:function(){return window.document},listener:function(e){return ve(e)}}),2),U=J[0],W=J[1],$=H((0,l.OR)({type:"mouseup",target:function(){return window.document},listener:function(e){return he(e)}}),2),Q=$[0],ee=$[1],te=H((0,l.OR)({type:"mousemove",target:function(){return window.document},listener:function(e){return de(e)}}),2),ne=te[0],re=te[1],oe=H((0,l.OR)({type:"mouseup",target:function(){return window.document},listener:function(e){return me(e)}}),2),ie=oe[0],le=oe[1],ae=function(e){u.onHide(),e.preventDefault()},ue=function(e){k.current=e.target,u.onPointerDown&&u.onPointerDown(e)},ce=function(e){u.dismissableMask&&u.modal&&w.current===e.target&&!k.current&&ae(e),u.onMaskClick&&u.onMaskClick(e),k.current=null},se=function(e){u.onMaximize?u.onMaximize({originalEvent:e,maximized:!B}):x((function(e){return!e})),e.preventDefault()},fe=function(e){var t=e.currentTarget;if(t&&t.primeDialogParams){var n=t.primeDialogParams,r=n.length,o=n[r-1]?n[r-1].id:void 0;if(o===f){var i=document.getElementById(o);if(u.closable&&u.closeOnEscape&&"Escape"===e.key)ae(e),e.stopImmediatePropagation(),n.splice(r-1,1);else if("Tab"===e.key){e.preventDefault();var l=j.p7.getFocusableElements(i);if(l&&l.length>0)if(document.activeElement){var a=l.indexOf(document.activeElement);e.shiftKey?-1===a||0===a?l[l.length-1].focus():l[a-1].focus():-1===a||a===l.length-1?l[0].focus():l[a+1].focus()}else l[0].focus()}}}},pe=function(e){j.p7.hasClass(e.target,"p-dialog-header-icon")||j.p7.hasClass(e.target.parentElement,"p-dialog-header-icon")||u.draggable&&(R.current=!0,_.current=e.pageX,Z.current=e.pageY,E.current.style.margin="0",j.p7.addClass(document.body,"p-unselectable-text"),u.onDragStart&&u.onDragStart(e))},de=function(e){if(R.current){var t=j.p7.getOuterWidth(E.current),n=j.p7.getOuterHeight(E.current),r=e.pageX-_.current,o=e.pageY-Z.current,i=E.current.getBoundingClientRect(),l=i.left+r,a=i.top+o,c=j.p7.getViewport();E.current.style.position="fixed",u.keepInViewport?(l>=u.minX&&l+t<c.width&&(_.current=e.pageX,E.current.style.left=l+"px"),a>=u.minY&&a+n<c.height&&(Z.current=e.pageY,E.current.style.top=a+"px")):(_.current=e.pageX,E.current.style.left=l+"px",Z.current=e.pageY,E.current.style.top=a+"px"),u.onDrag&&u.onDrag(e)}},me=function(e){R.current&&(R.current=!1,j.p7.removeClass(document.body,"p-unselectable-text"),u.onDragEnd&&u.onDragEnd(e))},ye=function(e){u.resizable&&(T.current=!0,_.current=e.pageX,Z.current=e.pageY,j.p7.addClass(document.body,"p-unselectable-text"),u.onResizeStart&&u.onResizeStart(e))},ge=function(e,t,n){!n&&(n=j.p7.getViewport());var r=parseInt(e);return/^(\d+|(\.\d+))(\.\d+)?%$/.test(e)?r*(n[t]/100):r},ve=function(e){if(T.current){var t=e.pageX-_.current,n=e.pageY-Z.current,r=j.p7.getOuterWidth(E.current),o=j.p7.getOuterHeight(E.current),i=E.current.getBoundingClientRect(),l=j.p7.getViewport(),a=!parseInt(E.current.style.top)||!parseInt(E.current.style.left),c=ge(E.current.style.minWidth,"width",l),s=ge(E.current.style.minHeight,"height",l),f=r+t,p=o+n;a&&(f+=t,p+=n),(!c||f>c)&&i.left+f<l.width&&(E.current.style.width=f+"px"),(!s||p>s)&&i.top+p<l.height&&(E.current.style.height=p+"px"),_.current=e.pageX,Z.current=e.pageY,u.onResize&&u.onResize(e)}},he=function(e){T.current&&(T.current=!1,j.p7.removeClass(document.body,"p-unselectable-text"),u.onResizeEnd&&u.onResizeEnd(e))},be=function(){E.current.style.position="",E.current.style.left="",E.current.style.top="",E.current.style.margin=""},Ce=function(){E.current.setAttribute(q.current,"")},xe=function(){u.onShow&&u.onShow(),u.focusOnShow&&function(){var e=document.activeElement;!(e&&E.current&&E.current.contains(e))&&u.closable&&u.showHeader&&F.current.focus()}(),ke()},Ee=function(){u.modal&&j.p7.addClass(w.current,"p-component-overlay-leave"),u.blockScroll&&j.p7.removeClass(document.body,"p-overflow-hidden")},we=function(){R.current=!1,j.P9.clear(w.current),m(!1),Oe()},ke=function(){Se(),(u.blockScroll||u.maximizable&&B)&&j.p7.addClass(document.body,"p-overflow-hidden")},Oe=function(){Pe();var e=u.maximizable&&B;u.modal?(document.primeDialogParams&&document.primeDialogParams.some((function(e){return e.hasBlockScroll}))||e)&&j.p7.removeClass(document.body,"p-overflow-hidden"):(u.blockScroll||e)&&j.p7.removeClass(document.body,"p-overflow-hidden")},Se=function(){u.draggable&&(ne(),ie()),u.resizable&&(U(),Q()),K();var e={id:f,hasBlockScroll:u.blockScroll};document.primeDialogParams=document.primeDialogParams?[].concat(N(document.primeDialogParams),[e]):[e]},Pe=function(){re(),le(),W(),ee(),G(),document.primeDialogParams=document.primeDialogParams&&document.primeDialogParams.filter((function(e){return e.id!==f}))};(0,l.nw)((function(){u.visible&&m(!0),u.breakpoints&&function(){X.current=j.p7.createInlineStyle(n&&n.nonce||o.ZP.nonce);var e="";for(var t in u.breakpoints)e+="\n                @media screen and (max-width: ".concat(t,") {\n                    .p-dialog[").concat(q.current,"] {\n                        width: ").concat(u.breakpoints[t]," !important;\n                    }\n                }\n            ");X.current.innerHTML=e}()})),(0,l.rf)((function(){u.visible&&!d&&m(!0),u.visible!==g&&d&&h(u.visible)})),(0,l.rf)((function(){d&&(j.P9.set("modal",w.current,n&&n.autoZIndex||o.ZP.autoZIndex,u.baseZIndex||n&&n.zIndex.modal||o.ZP.zIndex.modal),h(!0))}),[d]),(0,l.rf)((function(){!function(){if(!u.blockScroll){var e=B&&g?"addClass":"removeClass";j.p7[e](document.body,"p-overflow-hidden")}}()}),[u.maximized,C,g]),(0,l.zq)((function(){Oe(),j.p7.removeInlineStyle(X.current),j.P9.clear(w.current)})),r.useImperativeHandle(t,(function(){return{props:u,resetPosition:be,getElement:function(){return E.current},getMask:function(){return w.current},getContent:function(){return O.current},getHeader:function(){return I.current},getFooter:function(){return A.current},getCloseButton:function(){return F.current}}}));var De=function(){if(u.closable){var e=u.ariaCloseIconLabel||(0,o.qJ)("close"),t=(0,j.dG)({className:"p-dialog-header-close-icon","aria-hidden":!0},L("closeButtonIcon")),n=u.closeIcon||r.createElement(a.q,t),i=j.Cz.getJSXIcon(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),{props:u}),l=(0,j.dG)({ref:F,type:"button",className:"p-dialog-header-icon p-dialog-header-close p-link","aria-label":e,onClick:ae},L("closeButton"));return r.createElement("button",l,i,r.createElement(D.H,null))}return null},je=function(){if(u.showHeader){var e=De(),t=function(){var e,t=(0,j.dG)({className:"p-dialog-header-maximize-icon"},L("maximizableIcon"));e=B?u.minimizeIcon||r.createElement(S,t):u.maximizeIcon||r.createElement(v,t);var n=j.Cz.getJSXIcon(e,t,{props:u});if(u.maximizable){var o=(0,j.dG)({type:"button",className:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:se},L("maximizableButton"));return r.createElement("button",o,n,r.createElement(D.H,null))}return null}(),n=j.gb.getJSXElement(u.icons,u),o=j.gb.getJSXElement(u.header,u),i=f+"_header",l=(0,j.AK)("p-dialog-header",u.headerClassName),a=(0,j.dG)({ref:I,style:u.headerStyle,className:l,onMouseDown:pe},L("header")),c=(0,j.dG)({id:i,className:"p-dialog-title"},L("headerTitle")),s=(0,j.dG)({className:"p-dialog-header-icons"},L("headerIcons"));return r.createElement("div",a,r.createElement("div",c,o),r.createElement("div",s,n,t,e))}return null},Ie=function(){var e=(0,j.AK)("p-dialog p-component",u.className,{"p-dialog-rtl":u.rtl,"p-dialog-maximized":B,"p-dialog-default":!B,"p-input-filled":n&&"filled"===n.inputStyle||"filled"===o.ZP.inputStyle,"p-ripple-disabled":n&&!1===n.ripple||!1===o.ZP.ripple}),t=(0,j.AK)("p-dialog-mask",function(){var e=["center","left","right","top","top-left","top-right","bottom","bottom-left","bottom-right"].find((function(e){return e===u.position||e.replace("-","")===u.position}));return e?"p-dialog-".concat(e):""}(),{"p-component-overlay p-component-overlay-enter":u.modal,"p-dialog-visible":d,"p-dialog-draggable":u.draggable,"p-dialog-resizable":u.resizable},u.maskClassName),l=je(),a=function(){var e=(0,j.AK)("p-dialog-content",u.contentClassName),t=f+"_content",n=(0,j.dG)({id:t,ref:O,style:u.contentStyle,className:e},L("content"));return r.createElement("div",n,u.children)}(),c=function(){var e=j.gb.getJSXElement(u.footer,u),t=(0,j.dG)({ref:A,className:"p-dialog-footer"},L("footer"));return e&&r.createElement("div",t,e)}(),s=u.resizable?r.createElement("span",{className:"p-resizable-handle",style:{zIndex:90},onMouseDown:ye}):null,p=f+"_header",m=f+"_content",y={enter:"center"===u.position?150:300,exit:"center"===u.position?150:300},v=(0,j.dG)({ref:w,style:u.maskStyle,className:t,onPointerUp:ce},L("mask")),h=(0,j.dG)({ref:E,id:f,className:e,style:u.style,onClick:u.onClick,role:"dialog","aria-labelledby":p,"aria-describedby":m,"aria-modal":u.modal,onPointerDown:ue},V.getOtherProps(u),L("root"));return r.createElement("div",v,r.createElement(i.K,{nodeRef:E,classNames:"p-dialog",timeout:y,in:g,options:u.transitionOptions,unmountOnExit:!0,onEnter:Ce,onEntered:xe,onExiting:Ee,onExited:we},r.createElement("div",h,l,a,c,s)))};return d&&function(){var e=Ie();return r.createElement(P.h,{element:e,appendTo:u.appendTo,visible:!0})}()}));T.displayName="Dialog"}}]);
//# sourceMappingURL=9856.8dc259f3.chunk.js.map