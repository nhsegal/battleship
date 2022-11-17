(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"*, *::after, *::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 30px;\n  --mark-size: calc(var(--cell-size)*.4);\n}\n\nbody{\n  margin: 0;\n}\n\nh1{\n  margin: 1rem;\n}\n\n.border{\n width: 100vw;\n height: 100vh;\n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);;\n  border: 1px solid black; \n}\n\n#top{\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n#middle{\n  display: flex;\n  justify-items: center;\n  gap: 2rem;\n  justify-content: center;\n  align-content: center;\n}\n\n#player-board-title, #cpu-board-title{\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#center{\n  text-align: center;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n\n#hit-or-miss{\n  font-size: 2rem;\n}\n\n#announcements{\n  font-size: 2rem;\n}\n\n.cell{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color:  rgb(106, 199, 242);\n  font-size: 15px;\n  padding: 0;\n  font-family: Courier, monospace;\n  text-align: center;\n  color: white;\n  border: .5px solid rgb(100,100,100);\n  position: relative;\n  cursor: pointer;\n}\n\n.cell.hit, .cell.miss {\n\n  cursor: not-allowed;\n}\n#playerGB>.cell.gameOn{\n  cursor: not-allowed;\n}\n\n\n.cell.hit::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.hit::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: red;\n  border-radius: 50%;\n}\n.cell.miss::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.miss::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: white;\n  border-radius: 50%;\n}\n\n.cell.hasShip{\n background-color: rgb(150, 150, 150);\n}\n\n.end-game-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.8);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 5rem;\n  gap: 1rem;\n}\n\n.end-game-message.show {\n  display: flex;\n}\n\n#restart-button {\n  font-size: 2rem;\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 0.8rem;\n  padding: 10px 20px;\n}\n\n.ship {\n  display: flex;\n}\n\n.ship>div {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: rgb(150, 150, 150);\n  border: .5px solid rgb(100,100,100);\n}\n\n.cell.hasShip.set {\n  background-color:  rgb(80,80,80);\n}\n\n.head::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(240,240,150);\n  border-radius: 50%;\n}\n\n#bottom{\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\nbutton {\n  margin: 1rem;\n  border: 1px solid #0066cc;\n  background-color: #0099cc;\n  color: #ffffff;\n  padding: 5px 10px;\n  font-size: 1.5rem;\n  border-radius: .4rem;\n}\n\nbutton:hover {\n  border: 1px solid #0099cc;\n  background-color: #00aacc;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n\n#announcements{\n text-align: center;\n font-size: 2rem;\n}\n\n\n#announcements.instructions {\n  text-align: left;\n  font-size: 1.2rem;\n\n}\n\n#restart-button {\n  color: black;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,qCAAqC;EACrC,eAAe;EACf,UAAU;EACV,+BAA+B;EAC/B,kBAAkB;EAClB,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;CACC,kBAAkB;CAClB,eAAe;AAChB;;;AAGA;EACE,gBAAgB;EAChB,iBAAiB;;AAEnB;;AAEA;EACE,YAAY;AACd",sourcesContent:["*, *::after, *::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 30px;\n  --mark-size: calc(var(--cell-size)*.4);\n}\n\nbody{\n  margin: 0;\n}\n\nh1{\n  margin: 1rem;\n}\n\n.border{\n width: 100vw;\n height: 100vh;\n}\n\n.gameboard{\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);;\n  border: 1px solid black; \n}\n\n#top{\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n#middle{\n  display: flex;\n  justify-items: center;\n  gap: 2rem;\n  justify-content: center;\n  align-content: center;\n}\n\n#player-board-title, #cpu-board-title{\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#center{\n  text-align: center;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n\n#hit-or-miss{\n  font-size: 2rem;\n}\n\n#announcements{\n  font-size: 2rem;\n}\n\n.cell{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color:  rgb(106, 199, 242);\n  font-size: 15px;\n  padding: 0;\n  font-family: Courier, monospace;\n  text-align: center;\n  color: white;\n  border: .5px solid rgb(100,100,100);\n  position: relative;\n  cursor: pointer;\n}\n\n.cell.hit, .cell.miss {\n\n  cursor: not-allowed;\n}\n#playerGB>.cell.gameOn{\n  cursor: not-allowed;\n}\n\n\n.cell.hit::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.hit::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: red;\n  border-radius: 50%;\n}\n.cell.miss::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(50,50,50);\n  border-radius: 50%;\n}\n.cell.miss::after {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size)*.93);\n  height: calc(var(--mark-size)*.93);\n  background-color: white;\n  border-radius: 50%;\n}\n\n.cell.hasShip{\n background-color: rgb(150, 150, 150);\n}\n\n.end-game-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.8);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 5rem;\n  gap: 1rem;\n}\n\n.end-game-message.show {\n  display: flex;\n}\n\n#restart-button {\n  font-size: 2rem;\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 0.8rem;\n  padding: 10px 20px;\n}\n\n.ship {\n  display: flex;\n}\n\n.ship>div {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: rgb(150, 150, 150);\n  border: .5px solid rgb(100,100,100);\n}\n\n.cell.hasShip.set {\n  background-color:  rgb(80,80,80);\n}\n\n.head::before {\n  content: '';\n  position: absolute;\n  width: calc(var(--mark-size));\n  height: calc(var(--mark-size));\n  background-color: rgb(240,240,150);\n  border-radius: 50%;\n}\n\n#bottom{\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\nbutton {\n  margin: 1rem;\n  border: 1px solid #0066cc;\n  background-color: #0099cc;\n  color: #ffffff;\n  padding: 5px 10px;\n  font-size: 1.5rem;\n  border-radius: .4rem;\n}\n\nbutton:hover {\n  border: 1px solid #0099cc;\n  background-color: #00aacc;\n  color: #ffffff;\n  padding: 5px 10px;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n\n#announcements{\n text-align: center;\n font-size: 2rem;\n}\n\n\n#announcements.instructions {\n  text-align: left;\n  font-size: 1.2rem;\n\n}\n\n#restart-button {\n  color: black;\n}"],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var A=[].concat(e[c]);r&&i[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),n.push(A))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],A=o[c]||0,d="".concat(c," ").concat(A);o[c]=A+1;var u=t(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var l=r(e,a),c=0;c<o.length;c++){var A=t(o[c]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),l=t.n(s),c=t(216),A=t.n(c),d=t(589),u=t.n(d),h=t(28),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=A(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const p=t.p+"b5a3330e50459dd80658.mp3",f=t.p+"25ff6f54a1f7a59bf296.mp3",g=t.p+"e980c078329d82398e99.mp3",b=new Audio(p),C=new Audio(f),y=new Audio(g);async function B(e){await new Promise((e=>{b.play(),b.onended=e})),!0===e?C.play():y.play()}b.load(),C.load(),y.load();const E=(e,n=null,t=null,r=null,a="x")=>{let o=0;const i=e;return{length:i,name:n,x:t,y:r,axis:a,get hitNumber(){return o},set setHits(e){o=e},hit:()=>(o+=1,o),isSunk:()=>o>=i}};function x(e,n,t,r,a){const o=[];if("x"===n)for(let n=0;n<e.length;n++)o.push({x:parseInt(t,10)+n,y:parseInt(r,10)});else if("y"===n)for(let n=0;n<e.length;n++)o.push({x:parseInt(t,10),y:parseInt(r,10)+n});for(let n=0;n<o.length;n++)if(a.filter((t=>t.x==o[n].x&&t.y==o[n].y&&null!==t.x&&null!==t.y&&t.name!==e.name)).length>0)return!0;return!1}const k=(e=null)=>{const n=e,t=(()=>{const e=[E(5,"Carrier"),E(4,"Battleship"),E(3,"Cruiser"),E(3,"Submarine"),E(2,"Destroyer")],n=[],t=[];return{boardLength:10,fleet:e,occupiedSquares:n,placeShip:(t,r,a,o)=>{const i=e.filter((e=>e.name===t))[0];if(r<0||r>9||a<0||a>9)throw new Error("Location out of bounds");if("x"===o&&r>10-i.length||"y"===o&&a>10-i.length)throw new Error("Ship partially out of bounds");if("x"===o)for(let e=0;e<i.length;e++)if(n.filter((n=>n.x===r+e&&n.y===a)).length>0)throw new Error("Another ship is in the way");if("y"===o)for(let e=0;e<i.length;e++)if(n.filter((n=>n.x===r&&n.y===a+e)).length>0)throw new Error("Another ship is in the way");if(i.x=parseInt(r,10),i.y=parseInt(a,10),i.axis=o,n.filter((e=>e.name===i.name)).length>0){const e=n.filter((e=>e.name===i.name))[0];for(let n=0;n<i.length;n++)"x"===o?(e.x=i.x+1,e.y=i.y):(e.x=i.x,e.y=i.y+1);return i}for(let e=0;e<i.length;e++)"x"===o?n.push({x:i.x+e,y:i.y,name:i.name}):n.push({x:i.x,y:i.y+e,name:i.name});return i},shotRecord:t,receiveAttack:(n,r)=>{n=parseInt(n,10),r=parseInt(r,10);let a=!1;for(const o of e)if("x"===o.axis){if(n>=o.x&&n<o.x+o.length&&r===o.y)return o.hit(),a=!0,B(!0),t.push({x:n,y:r,success:a}),a}else if("y"===o.axis&&n===o.x&&r>=o.y&&r<o.y+o.length)return o.hit(),a=!0,B(!0),t.push({x:n,y:r,success:a}),a;return B(!1),t.push({x:n,y:r,success:a}),a},allSunk:()=>e.every((e=>e.isSunk()))}})();return{name:n,gameboard:t,attack:(e,n,t)=>{const r=parseInt(n,10),a=parseInt(t,10);if(r<0||r>=e.gameboard.boardLength||a<0||a>=e.gameboard.boardLength)throw new Error("Attack out of bounds");if(0!==e.gameboard.shotRecord.filter((e=>e.x===r&&e.y===a)).length)throw new Error("Attack redundant");return{success:e.gameboard.receiveAttack(r,a),x:r,y:a}},randomlyPlaceShips:()=>{t.fleet.forEach((e=>{let n=Math.random(),r=null,a=null,o=null;for(n>.5?(o="x",r=Math.floor(Math.random()*(t.boardLength-e.length)),a=Math.floor(Math.random()*t.boardLength)):(o="y",r=Math.floor(Math.random()*t.boardLength),a=Math.floor(Math.random()*(t.boardLength-e.length)));x(e,o,r,a,t.occupiedSquares);)n=Math.random(),n>.5?(o="x",r=Math.floor(Math.random()*(t.boardLength-e.length)),a=Math.floor(Math.random()*t.boardLength)):(o="y",r=Math.floor(Math.random()*t.boardLength),a=Math.floor(Math.random()*(t.boardLength-e.length)));t.placeShip(e.name,r,a,o)}))}}},v=k("You"),w=k("Computer");w.randomAttack=e=>{let n=Math.floor(Math.random()*e.gameboard.boardLength),t=Math.floor(Math.random()*e.gameboard.boardLength);for(;0!=e.gameboard.shotRecord.filter((e=>e.x===n&&e.y===t)).length;)n=Math.floor(Math.random()*e.gameboard.boardLength),t=Math.floor(Math.random()*e.gameboard.boardLength);return w.attack(e,n,t)},w.strategicAttack=e=>{const n=e=>e.x>=0&&e.x<10&&e.y>=0&&e.y<10,t=n=>{for(let t=0;t<r;t++)if(e.gameboard.shotRecord[t].x===n.x&&e.gameboard.shotRecord[t].y===n.y)return!1;return!0};let r=e.gameboard.shotRecord.length,a=e.gameboard.shotRecord.filter((e=>e.success)),o=a[a.length-1];if(0===r||0===a.length)return w.randomAttack(e);let i=[{x:parseInt(o.x,10)-1,y:parseInt(o.y,10)},{x:parseInt(o.x,10)+1,y:parseInt(o.y,10)},{x:parseInt(o.x,10),y:parseInt(o.y,10)-1},{x:parseInt(o.x,10),y:parseInt(o.y,10)+1}],s=i.filter(n).filter(t),l=a.length-1;for(;s.length<1&&l>0;)l--,o=a[l],i=[{x:parseInt(o.x,10)-1,y:parseInt(o.y,10)},{x:parseInt(o.x,10)+1,y:parseInt(o.y,10)},{x:parseInt(o.x,10),y:parseInt(o.y,10)-1},{x:parseInt(o.x,10),y:parseInt(o.y,10)+1}],s=i.filter(n).filter(t);if(s.length>0){let n=s[s.length*Math.random()|0];return w.attack(e,n.x,n.y)}return w.randomAttack(e)},w.randomlyPlaceShips();const S=document.getElementById("playerGB"),z=document.getElementById("cpuGB"),L=document.getElementById("cpuGBcontainer"),I=document.getElementById("hit-or-miss"),M=document.getElementById("announcements"),q=document.querySelector("[data-end-game-message]"),j=document.getElementById("end-game-message"),$=(document.getElementById("fleet"),(e,n=null)=>{for(let t=0;t<100;t++){let r=document.createElement("div"),a=t;r.setAttribute("data-x",a%10),r.setAttribute("data-y",Math.floor(a/10)),t<10&&(a="0"+String(a)),r.classList.add("cell"),r.id=e.id+a,n&&r.addEventListener("click",n),e.append(r)}}),Y=(e,n,t)=>{[...e.querySelectorAll(`#${e.id}> .cell`)].forEach((e=>{e.addEventListener(t,n)}))},T=(e,n,t)=>{[...e.querySelectorAll(`#${e.id}> .cell`)].forEach((e=>{e.removeEventListener(t,n)}))},R=(e,n,t,r)=>{let a=null;"computer"===e&&(a="playerGB"),"human"===e&&(a="cpuGB");let o=document.getElementById(`${a}`).querySelector(`[data-x="${n}"][data-y="${t}"]`);r?o.classList.add("hit"):o.classList.add("miss")};let W=!1;const G=document.getElementById("changeShip");let O=0,P=v.gameboard.fleet[O];const Z=e=>{((e,n)=>{const t=e.target.getAttribute("data-x"),r=e.target.getAttribute("data-y");if(W){if(t!=n.x||r!=n.y)return;W=!1,G.disabled=!0;for(let e=0;e<n.length;e++)v.gameboard.occupiedSquares.pop();[...document.querySelectorAll(".cell")].forEach((e=>{e.dataset.ship===`${n.name}`&&e.classList.remove("set")}))}else if(!("x"===n.axis&&t>10-n.length||"y"===n.axis&&r>10-n.length))if(x(n,n.axis,t,r,v.gameboard.occupiedSquares))console.log("blocked");else{W=!0,v.gameboard.placeShip(n.name,t,r,n.axis);for(let e=0;e<n.length;e++){let t=null;if("x"===n.axis){const r=parseInt(n.x)+e;t=document.querySelector(`[data-x="${r}"][data-y="${n.y}"]`)}if("y"===n.axis){const r=parseInt(n.y)+e;t=document.querySelector(`[data-x="${n.x}"][data-y="${r}"]`)}0===e&&t.classList.add("head"),t.classList.add("hasShip"),t.classList.add("set"),t.dataset.ship=`${n.name}`}W=!0,G.disabled=!1}})(e,P)},X=e=>{((e,n)=>{if(e.target.getAttribute("data-x")==n.x&&e.target.getAttribute("data-y")==n.y&&!0===W){W=!1,G.disabled=!0;for(let e=0;e<n.length;e++)v.gameboard.occupiedSquares.pop()}[...document.querySelectorAll(".cell")].forEach((e=>{e.dataset.ship===`${n.name}`&&(e.classList.remove("set"),e.classList.remove("hasShip"))})),"x"===n.axis&&n.y<=10-n.length?n.axis="y":"y"===n.axis&&n.x<=10-n.length&&(n.axis="x");for(let e=0;e<n.length;e++){if("x"===n.axis){const t=parseInt(n.x)+e,r=document.querySelector(`[data-x="${t}"][data-y="${n.y}"]`);0===e&&r.classList.add("head"),r.classList.add("hasShip"),r.dataset.ship=`${n.name}`}if("y"===n.axis){const t=parseInt(n.y)+e,r=document.querySelector(`[data-x="${n.x}"][data-y="${t}"]`);0===e&&r.classList.add("head"),r.classList.add("hasShip"),r.dataset.ship=`${n.name}`}}})(e,P)},N=e=>{((e,n)=>{if(W)return;const t=e.target.getAttribute("data-x"),r=e.target.getAttribute("data-y");if(!("x"===n.axis&&t>10-n.length||"y"===n.axis&&r>10-n.length||x(n,n.axis,t,r,v.gameboard.occupiedSquares))){[...document.querySelectorAll(`[data-ship=${n.name}]`)].forEach((e=>{e.dataset.ship===`${n.name}`&&(delete e.dataset.ship,e.classList.remove("hasShip"),e.classList.remove("head"))})),n.x=e.target.getAttribute("data-x"),n.y=e.target.getAttribute("data-y");for(let e=0;e<n.length;e++){if("x"===n.axis){const t=parseInt(n.x)+e,r=document.querySelector(`[data-x="${t}"][data-y="${n.y}"]`);0===e&&r.classList.add("head"),r.classList.add("hasShip"),r.dataset.ship=`${n.name}`}if("y"===n.axis){const t=parseInt(n.y)+e,r=document.querySelector(`[data-x="${n.x}"][data-y="${t}"]`);0===e&&r.classList.add("head"),r.classList.add("hasShip"),r.dataset.ship=`${n.name}`}}}})(e,P)};G.addEventListener("click",(()=>{if(T(S,Z,"click"),T(S,X,"dblclick"),T(S,N,"mouseover"),O++,O==v.gameboard.fleet.length-1&&(G.textContent="Finish"),O==v.gameboard.fleet.length)return M.textContent="",M.classList.remove("instructions"),G.style.display="none",L.style.display="block",[...document.querySelectorAll(".cell")].forEach((e=>{e.classList.remove("head"),e.classList.add("gameOn")})),void(()=>{let e=!1,n=!1;const t=function(e){let n=0;const t=[];return e.gameboard.fleet.forEach((e=>{e.isSunk()&&(t.push(e.name),n++)})),{count:n,list:t}},r=function(){const r=t(v),a=w.strategicAttack(v);setTimeout((()=>{if(a.success){I.textContent="You've been hit!",R("computer",a.x,a.y,!0);const n=t(v);if(n.count>r.count){const e=n.list.filter((e=>!r.list.includes(e)))[0].toLowerCase();M.textContent=`They sunk your ${e}!`}if(v.gameboard.allSunk())return q.textContent="You lost!",j.classList.add("show"),void(e=!0)}else I.textContent="They missed!",R("computer",a.x,a.y,!1);n=!1}),1e3)};$(z,(function(a){if(e)return;if(a.target.matches(".hit")||a.target.matches(".miss"))return;if(n)return;n=!0,M.textContent="";const o=a.target.getAttribute("data-x"),i=a.target.getAttribute("data-y"),s=t(w),l=v.attack(w,o,i);setTimeout((()=>{if(l.success){I.textContent="You hit the enemy!",R("human",l.x,l.y,!0);const n=t(w);if(n.count>s.count){const e=n.list.filter((e=>!s.list.includes(e)))[0].toLowerCase();M.textContent=`You sunk a ${e}!`}if(w.gameboard.allSunk())return q.textContent="You won!",j.classList.add("show"),void(e=!0)}else I.textContent="You missed!",R("human",l.x,l.y,!1)}),1e3),setTimeout(r,2500)}))})();P=v.gameboard.fleet[O],G.disabled=!0,Y(S,Z,"click"),Y(S,X,"dblclick"),Y(S,N,"mouseover"),W=!1}));const U=()=>{L.style.display="none",M.innerHTML="Click on a cell to place a ship. Clicking on the head of the most recently placed ship allows you to move it again. <br/> &nbsp <br/> Double-clicking changes the ship's oriention. <br/> &nbsp <br/>When you finish placing ships, attack your opponent by clicking on their board.",M.classList.add("instructions"),$(S),Y(S,Z,"click"),Y(S,X,"dblclick"),Y(S,N,"mouseover")};document.getElementById("restart-button").addEventListener("click",(()=>{for(v.gameboard.occupiedSquares.length=0,v.gameboard.shotRecord.length=0,w.gameboard.occupiedSquares.length=0,w.gameboard.shotRecord.length=0,v.gameboard.fleet.forEach((e=>{e.x=null,e.y=null,e.setHits=0})),w.gameboard.fleet.forEach((e=>{e.x=null,e.y=null,e.setHits=0}));z.firstChild;)z.removeChild(z.lastChild);for(;S.firstChild;)S.removeChild(S.lastChild);w.randomlyPlaceShips(),j.classList.remove("show"),q.textContent="",I.textContent="",W=!1,O=0,P=v.gameboard.fleet[O],G.style.display="block",G.disabled=!0,G.textContent="Get next ship",U()})),U()})()})();
//# sourceMappingURL=bundle60433a9ebfd8fe5a7b72.js.map