(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Fuel = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * The MIT License (MIT)
 * Copyright (c) Taketoshi Aono
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @fileoverview
 * @author Taketoshi Aono
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var benchmark = _dereq_(5);
var fueldom_1 = _dereq_(2);
var NAME = 'Fuel';
var VERSION = '0.1.2';
function renderTree(nodes) {
    var children = [];
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (n.children !== null) {
            children.push((fueldom_1.React.createElement("div", { key: n.key }, renderTree(n.children))));
        }
        else {
            children.push((fueldom_1.React.createElement("span", { key: n.key }, n.key)));
        }
    }
    return children;
}
function BenchmarkImpl(container, a, b) {
    this.container = container;
    this.a = a;
    this.b = b;
}
BenchmarkImpl.prototype.setUp = function () {
};
BenchmarkImpl.prototype.tearDown = function () {
    fueldom_1.Fuel.unmountComponentAtNode(this.container);
};
BenchmarkImpl.prototype.render = function () {
    fueldom_1.FuelDOM.render(fueldom_1.React.createElement("div", null, renderTree(this.a)), this.container);
};
BenchmarkImpl.prototype.update = function () {
    fueldom_1.FuelDOM.render(fueldom_1.React.createElement("div", null, renderTree(this.b)), this.container);
};
document.addEventListener('DOMContentLoaded', function (e) {
    benchmark(NAME, VERSION, BenchmarkImpl);
}, false);

},{"2":2,"5":5}],2:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Fuel=e()}}(function(){var e;return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof _dereq_&&_dereq_;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof _dereq_&&_dereq_,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){return 1==(1&e.g)}function o(e){return 2==(2&e.g)}function a(e){return 4==(4&e.g)}function i(e){return 8==(8&e.g)}function u(e){return 16==(16&e.g)}function l(e,t){if(null===e)return!t&&void 0!==t;var n=typeof e;return"number"!==n||isFinite(e)?"object"!==n&&"object"!=typeof t&&e===t:!isFinite(t)&&(e!==1/0||t===1/0)}function c(e,t){var n={},r={},o=0;for(var a in t){var i=t[a];a in e&&l(e[a],i)?r[a]=1:(n[a]=i,o++)}for(var u=Object.keys(e),c=0,f=u.length;c<f;c++)n[u[c]]||r[u[c]]||(n[u[c]]="",o++);return[n,o]}function f(e,t,n){var r=t.name,o=t.value;if(e[r])if("style"===r){var a=c(e[r].value,o),i=a[0],u=a[1];u&&(e[r]={state:3,value:i})}else l(e[r].value,o)?e[r].state=4:e[r]={state:3,value:o};else e[r]={state:n?2:1,value:o}}function s(e,t){var n=e?e.props:null,r=t?t.props:null,o={h:[],g:0},a={};if(!e&&t)return o.g|=2,o;if(!t&&e)return o.g|=4,o;if(p.j.i(e)&&p.j.i(t))return p.j.k(e)!==p.j.k(t)&&(o.g|=16),o;if(e.type!==t.type)o.g|=8;else{for(var i=r.length,u=n.length,l=0,c=u>i?u:i;l<c;l++)void 0!==n[l]&&f(a,n[l],!0),void 0!==r[l]&&f(a,r[l],!1);for(var s in a){var d=a[s];switch(d.state){case 4:break;default:3===d.state&&"style"===s&&(d.state=5),o.h.push({key:s,value:d.value,state:d.state})}}}var h=p.j.l(t),y=p.j.l(e);return h&&!y&&(o.g|=1),o}Object.defineProperty(n,"__esModule",{value:!0});var p=e(3);n.m=r,n.o=o,n.p=a,n.q=i,n.s=u,n.t=s},{3:3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(9),o=e(3),a=e(8);n.FuelDOM={render:function(e,t,n){void 0===n&&(n=function(e){}),r.v.u||(r.v.u=new a.A),e.B||(e.B=new r.v),o.j.C(t,e),e.B.render(e,function(e){t.appendChild(e),n&&n(e)})}},n.D=n.FuelDOM},{3:3,8:8,9:9}],3:[function(e,t,n){"use strict";function r(e){return"function"==typeof e}function o(e,t,n){n?e[t]=t:e.removeAttribute(t)}function a(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r].name]=r;for(var a in t)n[a]?e[n[a]].value=t[a]:e.push({name:a,value:t[a]});return e}function i(e,t,r){void 0===t&&(t={}),void 0===r&&(r=e.children),s.F(!n.j.G(e),"cloneElement only clonable FuelElement but got = "+e);var o=l(e.type,e.key,a(e.props.slice(),t),r);return o.B=e.B,o.H=e.H,o.I=e.I,o.J=e.J,o}function u(e,t,n,r){n.subscribe&&(e.J||(e.J=[]),e.J.push(n.subscribe(function(n){e.props.some(function(e){return e.name===t&&(e.value=n,!0)})||e.props.push({name:t,value:n}),e.B.render(e)})),e.B=r(),e.B.K(e))}function l(e,t,n,r){return void 0===t&&(t=null),void 0===r&&(r=[]),o={},o[d]=c.M.L,o.type=e,o.key=t,o.props=n,o.children=r,o.N=null,o.O=null,o.P=!1,o.B=null,o.H=null,o.I=null,o.R=null,o.J=null,o;var o}Object.defineProperty(n,"__esModule",{value:!0});var c=e(11),f=e(7),s=e(12),p=e(4),d=s.Symbol("__fuel_element"),h=s.Symbol("__fuel_element_link"),y={map:{},count:1};y.map[String(y.map.S=0)]="SYNTHETIC_TEXT",n.T=s.Symbol("__fuelelement"),n.j={U:function(){return 0},V:function(e){var t=y.map[e.toLowerCase()];return t?t:(y.map[String(y.map[e]=y.count)]=e,y.count++)},W:function(e){return"number"!=typeof e.type},X:function(e){return r(e.type)&&!r(e.type.prototype.render)},Y:function(e){return r(e.type)&&r(e.type.prototype.render)},Z:function(e){return y.map[String(e.type)]},l:function(e){return e.children.length>0},$:function(e){e=n.j._(e),e.N&&(e.N[h]=null,e.N.aa&&e.O.B.ca().ba(e.N),e.N=null),e.J&&e.J.forEach(function(e){return e.unsubscribe()})},C:function(e,t){e[h]=t},da:function(e){return e[h]?e[h]:null},G:function(e){return e&&e[d]===c.M.L},i:function(e){return 0===e.type},k:function(e){return e.props[0].value},ea:function(e){return e.I},fa:function(e,t){var n=e.props,r=e.children;void 0===t&&(t=!1);for(var o={},a=0,i=n.length;a<i;a++){var u=n[a],l=u.name,c=u.value;o[l]=c}return t&&(o.children=r.length?r:null),o},ga:function(e){e.H&&e.H.componentDidMount()},ha:function(e){e.H&&e.H.componentDidUpdate()},ia:function(e){e.H&&e.H.ja()},_:function(e){for(;e&&n.j.W(e);)e=e.I;return e},ka:function(e,t,r){var o=(t.props,n.j.fa(t,!0)),a=r?n.j.fa(r):null;if(n.j.X(t))return[t.type(o,e),e];if(n.j.Y(t)){var i=t.H,u=!!i;i?i.la&&(i.la=e):i=t.H=new t.type(o,e),i[n.T]=t;var l=s.ma(e,i.getChildContext());if(t.I&&!i.shouldComponentUpdate(o,a))return u&&t.B.na(function(){i.componentWillReceiveProps(o),i.oa=o}),[t.I,l];u&&t.B.na(function(){i.componentWillReceiveProps(o),i.oa=o}),t.I?i.componentWillUpdate():i.componentWillMount();var c=t.I=i.render();return c&&(c.O=t,n.j.W(c)||(c.H=i),c.B=t.B),t.B.K(t),[c,l]}s.F(!0,"factory element requried but got "+n.j.Z(t)+".")},pa:function(e,t,r,o){var a=e.B.ca();a||(a=new p.qa,e.B.ra(a));var i=n.j._(e);a.pa(i.N,t.N,r,o)},sa:function(e,t,r,a){if(0===t.type)return t.N=r.createTextNode(n.j.k(t));var i=t.props,l=(t.type,n.j.Z(t)),p=r.createElement(l);t.N=p;for(var d=!1,y=0,v=i.length;y<v;y++){var m=i[y],g=m.name,b=m.value;if(c.ta[g])n.j.pa(e,t,g,b);else if("checked"!==g&&"selected"!==g){if("scoped"===g)d=!0;else{if((b.ua||b.subscribe)&&d){u(t,g,b,a);continue}if("style"===g){for(var j in b)f.va(p,j,b[j]);continue}if("ref"===g){var _=typeof b;"string"===_?n.j.W(e)&&(e.H.refs[b]=p):"function"===_&&b(p);continue}}"htmlFor"===g&&(g="for"),s.F(!c.wa[g]&&g.indexOf("data-")===-1,g+" is not a valid dom attributes."),p[g]=b}else o(p,g,b)}return p[h]=t,p}},n.cloneElement=i,n.xa=l},{11:11,12:12,4:4,7:7}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),o=r.Symbol("__fuelevent"),a=r.Symbol("__root_events"),i=function(){function e(){this.ya={},this.id=1}return e.prototype.pa=function(e,t,n,r){var i=this;n=n.replace(/^on/,"").toLowerCase(),e[a]||(e[a]={}),"INPUT"===t.nodeName&&"change"===n&&(n="keyup");var u=String(this.id++);if(e[a][n])this.ya[n][String(this.ya[n].count++)]=r;else{e[a][n]=!0;var l=function(e){var t=e.target[o];if(t&&t[e.type]&&t[e.type]===u){var n=i.ya[e.type][u];n&&n(e)}};this.ya[n]={count:1,0:l,root:e},e.addEventListener(n,l,!1)}this.ya[n][u]=r,t[o]?t[o][n]=u:t[o]=(c={},c[n]=u,c);var c},e.prototype.za=function(e,t){if(e[o]){var n=e[o];if(n[t]){this.ya[t][n[t]]=null,this.ya[t].count--,n[t]=null;var r=this.ya[t].root;0===this.ya[t].count&&(r.removeEventListener(t,this.ya[t][0]),r[a][t]=!1,this.ya[t].root=null)}}},e.prototype.Aa=function(e,t,n){if(e[o]){var r=e[o];r[t]&&(this.ya[t][r[t]]=n)}},e.prototype.ba=function(e){if(e[o]){var t=e[o];for(var n in t)this.za(e,n)}},e}();n.qa=i},{12:12}],5:[function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=!1);for(var n=[],a=0,i=e.length;a<i;a++){var c=e[a];if(null!==c)if(l.F(void 0===c,"Undefined passed as element, it's seem to misstakes."),u.j.G(c))n.push(c);else if(!t&&Array.isArray(c))n=r(c,!0).concat(n);else{var f=o(c.toString());n.push(f)}}return n}function o(e){return u.xa(u.j.U(),null,[{name:"value",value:e}])}Object.defineProperty(n,"__esModule",{value:!0});var a=e(13),i=e(9),u=e(3),l=e(12),c={string:1,function:1},f=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),this.oa=e,this.la=t,this.refs={}}return Object.defineProperty(e.prototype,"props",{get:function(){return this.oa},Ba:!0,Ca:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this.la},Ba:!0,Ca:!0}),e.prototype.ja=function(){},e.prototype.componentWillMount=function(){},e.prototype.componentDidMount=function(){},e.prototype.componentWillUpdate=function(){},e.prototype.componentDidUpdate=function(){},e.prototype.componentWillReceiveProps=function(e){},e.prototype.shouldComponentUpdate=function(e,t){return!0},e.prototype.render=function(){return null},e.prototype.getChildContext=function(){return{}},e.prototype.setState=function(e,t){this.state=l.ma(this.state,e),this.componentWillUpdate();var n=l.ma(this.context||{},this.getChildContext()),r=this.render(),o=this[u.T];r.H=this,o.B.render(r,function(){o.I=r,t&&t()},n,!1)},e}();n.Da=f;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.shouldComponentUpdate=function(e,t){for(var n in e){if(!(n in t))return!0;if(t[n]!==e[n])return!0}return Object.keys(e).length!==Object.keys(t).length},t}(f);n.Ea=s;var p=function(){function e(){}return e.createElement=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];l.F(!c[typeof e],"Fuel element only accept one of 'string' or 'function' but got "+e),t||(t={}),n.length&&(n=r(n));var a=[];for(var f in t)if("key"!==f){var s=t[f];a.push({name:f,value:s})}var p=u.xa("string"==typeof e?u.j.V(e):e,t.key,a,n);return(u.j.W(p)||t.scoped)&&(p.B=new i.v),p},e.unmountComponentAtNode=function(e){var t=u.j.da(e);t&&(t.B.Fa(t),e.innerHTML="")},e}();p.Component=f,p.PureComponent=s,p.isValidElement=function(e){return!!e&&u.j.G(e)},p.cloneElement=u.cloneElement,p.createFactory=function(e){return function(){return p.createElement(e,{})}},p.Children={map:function(e,t){return e?e.map(t):[]},forEach:function(e,t){e&&e.forEach(t)},count:function(e){return e?e.length:0},toArray:function(e){return e?e:[]}},p.Ga={},n.Fuel=p,"array bool func number object string symbol node".split(" ").forEach(function(e){return p.Ga[e]={}}),"instanceOf oneOf, oneOfType, arrayOf objectOf shape".split(" ").forEach(function(e){return p.Ga[e]=function(){return{}}}),n.React=p},{12:12,13:13,3:3,9:9}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(5);n.Fuel=r.Fuel,n.React=r.React,function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(e(2))},{2:2,5:5}],7:[function(e,t,n){"use strict";function r(e,t,r){e.style[t]="number"==typeof r&&n.Ha[t]?r+"px":String(r)}Object.defineProperty(n,"__esModule",{value:!0}),n.Ha={width:1,height:1,fontSize:1,lineHeight:1,strokeWidth:1,backgroundPositionX:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderImageWidth:1,borderLeftWidth:1,borderRightWidth:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,columnWidth:1,columnRuleWidth:1,fontKerning:1,letterSpacing:1,margin:1,marginBottom:1,marginLeft:1,marginRight:1,marginTop:1,maxFontSize:1,maxHeight:1,maxWidth:1,minHeight:1,minWidth:1,padding:1,paddingBottom:1,paddingLeft:1,paddingRight:1,paddingTop:1,top:1,left:1,right:1,bottom:1,textHeight:1,textIndent:1},n.va=r},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){this.id=0}return e.prototype.Ia=function(){this.id++},e.prototype.createElement=function(e){var t=document.createElement(e);return t.setAttribute("data-id",""+this.id),t},e.prototype.createTextNode=function(e){return document.createTextNode(e)},e}();n.A=r},{}],9:[function(e,t,n){"use strict";function r(){return new m}function o(e,t,n,o,a,i){var u=h.j.sa(e,o,i,r),l=n.N;if(1===l.nodeType&&1===u.nodeType)for(var c=0,f=l.children.length;c<f;c++)o.N.appendChild(l.children[c]);var s=t.N;a?(s.removeChild(l),s.appendChild(u)):(s.replaceChild(u,l),d.Ja(e,n)),n.N=null}function a(e,t,n,r){n.N=t.N,t.N=null,r&&n.N.parentNode.appendChild(n.N)}function i(e,t,n){for(var r=n.N,o=h.j._(t),a=0,i=e.h.length;a<i;a++){var u=e.h[a],l=u.key,c=u.value;switch(u.state){case 1:case 3:if(s.ta[l]){var f=l.slice(2).toLowerCase();o.B.ca().Aa(n.N,f,c)}else r[l]=c;break;case 5:for(var d in c){var y=c[d];p.va(r,d,y)}break;case 2:if(s.ta[l]){var f=l.slice(2).toLowerCase();o.B.ca().za(n.N,f)}else r.removeAttribute(l)}}}function u(e){var t=e.parent,n=e.Ka,u=e.La,l=e.Ma,c=e.Na,f=e.root,s=e.context,p=m.u;if(y.o(c))if(t)t.N.appendChild(d.Oa(s,f,n,p,r)),h.j.ga(n);else{var v=d.Oa(s,f,n,p,r);u&&(t.N.appendChild(v),h.j.ga(n),h.j.ia(u),d.Ja(f,u))}else y.p(c)?(h.j.ia(u),u.N.parentNode.removeChild(u.N),u.B=null,d.Ja(f,u)):y.q(c)?(h.j.ia(u),o(f,t,u,n,l,p),h.j.ga(n)):y.s(c)?(n.N=u.N,n.N.textContent=h.j.k(n),h.j.ha(n)):(a(f,u,n,l),i(c,f,n),h.j.ha(n));y.m(c)&&d.Oa(s,f,n,p,r)}function l(e,t,n){return[{Ka:t,La:n,Pa:null,Qa:null,Ra:!1,Na:null,context:e,root:t,Ma:!1}]}function c(e,t,n){var r,o=t.Pa.shift(),a=!1;if(n&&n.R&&o&&n.R[o.key]){r=n.R[o.key],o.R||(o.R={}),o.R[o.key]=o;var i=t.Qa.indexOf(r);t.Qa.splice(i,1),a=!0}else r=t.Qa.shift(),a=!1;var u=t.root;return o&&(o.P?o=null:o.B&&(u=o)),o&&!o.O&&(o.O=t.Ka.O),{Ka:o,La:r,Pa:null,Qa:null,Ra:!1,Na:null,root:u,context:e,Ma:a}}function f(e,t,n){if(t&&h.j.W(t))if(n&&n.type!==t.type)for(;t&&h.j.W(t);)u=h.j.ka(e,t),t=u[0],e=u[1];else for(;t&&h.j.W(t);){t&&n&&t.type===n.type&&(t.H=n.H);var r=n;n&&h.j.W(n)&&(r=h.j.ea(n));var o=h.j.ka(e,t,n),a=o[0],i=o[1];e=i,n=r,t=a}return n&&h.j.W(n)&&(n=h.j._(n)),[e,t,n];var u}Object.defineProperty(n,"__esModule",{value:!0});var s=e(11),p=e(7),d=e(10),h=e(3),y=e(1),v=e(12),m=function(){function e(e){void 0===e&&(e=null),this.Sa=e,this.Ta=!0,this.Ua=[],this.Va=null}return e.prototype.na=function(e){this.Ta=!1,e(),this.Ta=!0},e.prototype.K=function(e){this.Sa=e},e.prototype.Wa=function(){return this.Sa},e.prototype.ra=function(e){this.Xa=e},e.prototype.ca=function(){return this.Xa},e.prototype.Ya=function(){var e=this;v.requestAnimationFrame(function(){e.Ua.length&&(e.Ua.forEach(function(e){return u(e)}),e.Ua.length=0,e.Va&&e.Va(),e.Va=null)})},e.prototype.Fa=function(e){d.Ja(e,e)},e.prototype.render=function(t,n,r,o){var a=this;if(void 0===n&&(n=function(e){}),void 0===r&&(r={}),void 0===o&&(o=!0),!this.Ta)return void n(this.Sa.N);e.u.Ia(),this.Sa?(this.Za(t,r),this.Va=function(){o&&(a.Sa=t),n(a.Sa.N)},this.Ya()):n(this.$a(t,o))},e.prototype.$a=function(t,n){var o=d.Oa({},t,t,e.u,r);return n&&(this.Sa=t),o},e.prototype.Za=function(e,t){this.Ua.length&&(this.Ua.length=0);for(var n=l(t,e,this.Sa),r=null;n.length;){var o=n.pop(),a=o.Ka,i=o.La,u=o.context,s=o.Ma,p=void 0,d=o.root;if(!o.Ra){if(h=f(u,a,i),u=h[0],a=h[1],i=h[2],!a&&!i)continue;a&&i&&(a.B=i.B),o.Ka=a,o.La=i,o.context=u,a&&a.B&&(d=o.Ka),p=y.t(i,a),o.Na=p,this.Ua.push({root:d,parent:r?r.Ka:null,Ka:a,La:i,Ma:s,Na:p,context:o.context}),o.Pa=a?a.children.slice():[],o.Qa=i?i.children.slice():[],o.Ra=!0}!o.Pa.length&&!o.Qa.length||o.Na&&0!==o.Na.g&&8!==o.Na.g||(r=o,n.push(o),n.push(c(u,o,i)))}var h},e}();n.v=m},{1:1,10:10,11:11,12:12,3:3,7:7}],10:[function(e,t,n){"use strict";function r(e,t,n){return[{_a:n,parentElement:null,children:n.children.slice(),N:n.N,parent:null,root:t,context:e}]}function o(e,t,n,o,i){for(var u;n&&l.j.W(n);)b=a(e,n,i),n=b[0],e=b[1];if(n){var f=r(e||{},t,n);e:for(;f.length;){var s=f.pop(),p=!!s.children.length;if(!s.N){var d=s._a,h=s.parentElement,y=s.parent;d.key&&s.parentElement&&(h.R||(h.R={}),c.F(h.R[d.key],"Duplicate key found: key = "+d.key),h.R[d.key]=d),s.N=l.j.sa(s.root,d,o,i),u||(u=s.N),y&&(y.appendChild(s.N),l.j.ga(s._a))}var v=s.root;if(p){f.push(s);var m=s.children.shift();m.B&&(v=m);for(var g=s.context;l.j.W(m);)if(v=m,m.O=s._a.O,j=a(g,m,i),m=j[0],g=j[1],!m)continue e;m.O||(m.O=s._a.O),f.push({_a:m,children:m.children.slice(),N:null,parent:s.N,parentElement:s._a,root:v,context:g})}}return u;var b,j}}function a(e,t,n){var r=l.j.ka(e,t,null),o=r[0],a=r[1];return o&&t.B.K(t),[o,a]}function i(e,t){c.requestIdleCallback(function(){return u(e,t)})}function u(e,t){for(var n=[{_a:t,children:t.children.slice()}];n.length;){var r=n.pop();if(l.j.$(r._a),r.children.length){var o=r.children.shift();n.push(r),o&&n.push({_a:o,children:o.children.slice()})}}}Object.defineProperty(n,"__esModule",{value:!0});var l=e(3),c=e(12);n.Oa=o,n.Ja=i},{12:12,3:3}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e){e[e.ab=2]="CHILDREN"}(n.bb||(n.bb={})),n.cb={className:"class"};!function(e){e[e.L=1e4*Math.random()<<1]="FUEL_ELEMENT_MARK"}(n.M||(n.M={})),n.ta=(r=["Copy Cut Paste CompositionEnd CompositionStart CompositionUpdate Focus Blur Change Input Submit Load Error KeyDown KeyPress KeyUp Abort CanPlay CanPlayThrough DurationChange Emptied Encrypted Ended LoadedData LoadedMetadata LoadStart Pause Play Playing Progress RateChange Seeked Seeking Stalled Suspend TimeUpdate VolumeChange Waiting Click ContextMenu DoubleClick Drag DragEnd DragEnter DragExit DragLeave DragOver DragStart Drop MouseDown MouseEnter MouseLeave MouseMove MouseOut MouseOver MouseUp Select TouchCancel TouchEnd TouchMove TouchStart Scroll Wheel"],r.raw=["Copy Cut Paste CompositionEnd CompositionStart CompositionUpdate Focus Blur Change Input Submit Load Error KeyDown KeyPress KeyUp Abort CanPlay CanPlayThrough DurationChange Emptied Encrypted Ended LoadedData LoadedMetadata LoadStart Pause Play Playing Progress RateChange Seeked Seeking Stalled Suspend TimeUpdate VolumeChange Waiting Click ContextMenu DoubleClick Drag DragEnd DragEnter DragExit DragLeave DragOver DragStart Drop MouseDown MouseEnter MouseLeave MouseMove MouseOut MouseOver MouseUp Select TouchCancel TouchEnd TouchMove TouchStart Scroll Wheel"],function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e[0].split(" ").reduce(function(e,t){return e["on"+t]=!0,e},{})}(r)),n.wa=(o=["defaultChecked defaultValue accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing charSet challenge checked classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable"],o.raw=["defaultChecked defaultValue accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing charSet challenge checked classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable"],function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e[0].split(" ").reduce(function(e,t){return e[t]=!0,e},{})}(o));var r,o},{}],12:[function(e,t,n){(function(e){"use strict";function t(e,t,n){if(void 0===n&&(n=!1),e){if(!n)throw new Error(t);console.warn(t)}}function r(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}Object.defineProperty(n,"__esModule",{value:!0});var o="object"==typeof e?e:"object"==typeof window?window:this||{};n.Symbol="function"==typeof o.Symbol?o.Symbol:function(){function e(e){return"@@"+e}var t={};e.for=function(n){return t[n]?t[n]:t[n]=e(n)}}(),n.F=t,n.ma=r;var a="function"==typeof o.requestAnimationFrame;n.requestAnimationFrame=a?function(e){return o.requestAnimationFrame(e)}:function(e){return setTimeout(e,60)};var i="function"==typeof o.requestIdleCallback;n.requestIdleCallback=i?function(e){return o.requestIdleCallback(e)}:function(e){return e()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(t,n,r){(function(t){var r,o,a,i,u,l,c,f,s,p,d,h,y,v,m;!function(r){function o(e,t){return function(n,r){return e[n]=t?t(n,r):r}}var a="object"==typeof t?t:"object"==typeof self?self:"object"==typeof this?this:{};"function"==typeof e&&e.amd?e("tslib",["exports"],function(e){r(o(a,o(e)))}):r("object"==typeof n&&"object"==typeof n.exports?o(a,o(n.exports)):o(a))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};r=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},i=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.eb)i=Reflect.eb(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){return function(n,r){t(n,r,e)}},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.fb)return Reflect.fb(e,t)},c=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})},f=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,a=n[1],n=[0];continue;case 7:n=l.gb.pop(),l.hb.pop();continue;default:if(i=l.hb,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){l.label=n[1];break}if(6===n[0]&&l.label<i[1]){l.label=i[1],i=n;break}if(i&&l.label<i[2]){l.label=i[2],l.gb.push(n);break}i[2]&&l.gb.pop(),l.hb.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,u,l={label:0,ib:function(){if(1&i[0])throw i[1];return i[1]},hb:[],gb:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},s=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},p=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},d=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},h=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e},y=function(e,t,n){function r(e){return function(t){return new Promise(function(n,r){h.push([e,t,n,r]),o()})}}function o(){!s&&h.length&&a((s=h.shift())[0],s[1])}function a(e,t){try{i(d[e](t))}catch(e){f(s[3],e)}}function i(e){e.done?f(s[2],e):"yield"===e.value[0]?f(s[2],{value:e.value[1],done:!1}):Promise.resolve(e.value[1]).then("delegate"===e.value[0]?u:l,c)}function u(e){i(e.done?e:{value:["yield",e.value],done:!1})}function l(e){a("next",e)}function c(e){a("throw",e)}function f(e,t){s=void 0,e(t),o()}if(!Symbol.jb)throw new TypeError("Symbol.asyncIterator is not defined.");var s,p,d=n.apply(e,t||[]),h=[];return p={next:r("next"),throw:r("throw"),return:r("return")},p[Symbol.jb]=function(){return this},p},v=function(e){function t(t,n){return function(r){return{value:["delegate",(e[t]||n).call(e,r)],done:!1}}}var n={next:t("next"),throw:t("throw",function(e){throw e}),return:t("return",function(e){return{value:e,done:!0}})};return e=m(e),n[Symbol.iterator]=function(){return this},n},m=function(e){if(!Symbol.jb)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.jb];return t?t.call(e):"function"==typeof p?p(e):e[Symbol.iterator]()},e("__extends",r),e("__assign",o),e("__rest",a),e("__decorate",i),e("__param",u),e("__metadata",l),e("__awaiter",c),e("__generator",f),e("__exportStar",s),e("__values",p),e("__read",d),e("__spread",h),e("__asyncGenerator",y),e("__asyncDelegator",v),e("__asyncValues",m)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[6])(6)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(_dereq_,module,exports){
'use strict';

var Executor = _dereq_(4);

function Benchmark() {
  this.running = false;
  this.impl = null;
  this.tests = null;
  this.reportCallback = null;
  this.enableTests = false;

  this.container = document.createElement('div');

  this._runButton = document.getElementById('RunButton');
  this._iterationsElement = document.getElementById('Iterations');
  this._reportElement = document.createElement('pre');

  document.body.appendChild(this.container);
  document.body.appendChild(this._reportElement);

  var self = this;

  this._runButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (!self.running) {
      var iterations = parseInt(self._iterationsElement.value);
      if (iterations <= 0) {
        iterations = 10;
      }

      self.run(iterations);
    }
  }, false);

  this.ready(true);
}

Benchmark.prototype.ready = function(v) {
  if (v) {
    this._runButton.disabled = '';
  } else {
    this._runButton.disabled = 'true';
  }
};

Benchmark.prototype.run = function(iterations) {
  var self = this;
  this.running = true;
  this.ready(false);

  new Executor(self.impl, self.container, self.tests, 1, function() { // warmup
    new Executor(self.impl, self.container, self.tests, iterations, function(samples) {
      self._reportElement.textContent = JSON.stringify(samples, null, ' ');
      self.running = false;
      self.ready(true);
      if (self.reportCallback != null) {
        self.reportCallback(samples);
      }
    }, undefined, false).start();
  }, undefined, this.enableTests).start();
};

module.exports = Benchmark;

},{"4":4}],4:[function(_dereq_,module,exports){
'use strict';

function render(nodes) {
  var children = [];
  var j;
  var c;
  var i;
  var e;
  var n;

  for (i = 0; i < nodes.length; i++) {
    n = nodes[i];
    if (n.children !== null) {
      e = document.createElement('div');
      c = render(n.children);
      for (j = 0; j < c.length; j++) {
        e.appendChild(c[j]);
      }
      children.push(e);
    } else {
      e = document.createElement('span');
      e.textContent = n.key.toString();
      children.push(e);
    }
  }

  return children;
}

function testInnerHtml(testName, nodes, container) {
  var c = document.createElement('div');
  var e = document.createElement('div');
  var children = render(nodes);
  for (var i = 0; i < children.length; i++) {
    e.appendChild(children[i]);
  }
  c.appendChild(e);
  if (c.innerHTML !== container.innerHTML) {
    console.log('error in test: ' + testName);
    console.log('container.innerHTML:');
    console.log(container.innerHTML);
    console.log('should be:');
    console.log(c.innerHTML);
  }
}


function Executor(impl, container, tests, iterations, cb, iterCb, enableTests) {
  if (iterCb === void 0) iterCb = null;

  this.impl = impl;
  this.container = container;
  this.tests = tests;
  this.iterations = iterations;
  this.cb = cb;
  this.iterCb = iterCb;
  this.enableTests = enableTests;

  this._currentTest = 0;
  this._currentIter = 0;
  this._renderSamples = [];
  this._updateSamples = [];
  this._result = [];

  this._tasksCount = tests.length * iterations;

  this._iter = this.iter.bind(this);
}

Executor.prototype.start = function() {
  this._iter();
};

Executor.prototype.finished = function() {
  this.cb(this._result);
};

Executor.prototype.progress = function() {
  if (this._currentTest === 0 && this._currentIter === 0) {
    return 0;
  }

  var tests = this.tests;
  return (this._currentTest * tests.length + this._currentIter) / (tests.length * this.iterataions);
};

Executor.prototype.iter = function() {
  if (this.iterCb != null) {
    this.iterCb(this);
  }

  var tests = this.tests;

  if (this._currentTest < tests.length) {
    var test = tests[this._currentTest];

    if (this._currentIter < this.iterations) {
      var e, t;
      var renderTime, updateTime;

      e = new this.impl(this.container, test.data.a, test.data.b);
      e.setUp();

      t = window.performance.now();
      e.render();
      renderTime = window.performance.now() - t;

      if (this.enableTests) {
        testInnerHtml(test.name + 'render()', test.data.a, this.container);
      }

      t = window.performance.now();
      e.update();
      updateTime = window.performance.now() - t;

      if (this.enableTests) {
        testInnerHtml(test.name + 'update()', test.data.b, this.container);
      }

      e.tearDown();

      this._renderSamples.push(renderTime);
      this._updateSamples.push(updateTime);

      this._currentIter++;
    } else {
      this._result.push({
        name: test.name + ' ' + 'render()',
        data: this._renderSamples.slice(0)
      });

      this._result.push({
        name: test.name + ' ' + 'update()',
        data: this._updateSamples.slice(0)
      });

      this._currentTest++;

      this._currentIter = 0;
      this._renderSamples = [];
      this._updateSamples = [];
    }

    setTimeout(this._iter, 0);
  } else {
    this.finished();
  }
};

module.exports = Executor;

},{}],5:[function(_dereq_,module,exports){
'use strict';

var Benchmark = _dereq_(3);
var benchmark = new Benchmark();

function initFromScript(scriptUrl, impl) {
  var e = document.createElement('script');
  e.src = scriptUrl;

  e.onload = function() {
    benchmark.tests = window.generateBenchmarkData().units;
    benchmark.ready(true);
  };

  document.head.appendChild(e);
}

function initFromParentWindow(parent, name, version, id) {
  window.addEventListener('message', function(e) {
    var data = e.data;
    var type = data.type;

    if (type === 'tests') {
      benchmark.tests = data.data;
      benchmark.reportCallback = function(samples) {
        parent.postMessage({
          type: 'report',
          data: {
            name: name,
            version: version,
            samples: samples
          },
          id: id
        }, '*');
      };
      benchmark.ready(true);

      parent.postMessage({
        type: 'ready',
        data: null,
        id: id
      }, '*');
    } else if (type === 'run') {
      benchmark.run(data.data.iterations);
    }
  }, false);

  parent.postMessage({
    type: 'init',
    data: null,
    id: id
  }, '*');
}

function init(name, version, impl) {
  // Parse Query String.
  var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p=a[i].split('=', 2);
      if (p.length == 1) {
        b[p[0]] = "";
      } else {
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      }
    }
    return b;
  })(window.location.search.substr(1).split('&'));

  if (qs['name'] !== void 0) {
    name = qs['name'];
  }

  if (qs['version'] !== void 0) {
    version = qs['version'];
  }

  var type = qs['type'];

  if (qs['test'] !== void 0) {
    benchmark.enableTests = true;
    console.log('tests enabled');
  }

  var id;
  if (type === 'iframe') {
    id = qs['id'];
    if (id === void 0) id = null;
    initFromParentWindow(window.parent, name, version, id);
  } else if (type === 'window') {
    if (window.opener != null) {
      id = qs['id'];
      if (id === void 0) id = null;
      initFromParentWindow(window.opener, name, version, id);
    } else {
      console.log('Failed to initialize: opener window is NULL');
    }
  } else {
    var testsUrl = qs['data']; // url to the script generating test data
    if (testsUrl !== void 0) {
      initFromScript(testsUrl);
    } else {
      console.log('Failed to initialize: cannot load tests data');
    }
  }

  benchmark.impl = impl;
}

// performance.now() polyfill
// https://gist.github.com/paulirish/5438650
// prepare base perf object
if (typeof window.performance === 'undefined') {
  window.performance = {};
}
if (!window.performance.now){
  var nowOffset = Date.now();
  if (performance.timing && performance.timing.navigationStart) {
    nowOffset = performance.timing.navigationStart;
  }
  window.performance.now = function now(){
    return Date.now() - nowOffset;
  };
}

module.exports = init;

},{"3":3}]},{},[1])(1)
});