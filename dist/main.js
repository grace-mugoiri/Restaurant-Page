!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){const n=document.createElement("button");n.setAttribute("id",t);const o=document.createElement("span");return o.textContent=e,n.appendChild(o),n.classList.add("tab"),n}function c(t,e){const n=document.createElement("section");n.classList.add("section");const o=document.createElement("h2");return o.classList.add("section-title"),o.textContent=t,n.appendChild(o),e.forEach(t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)}),n}n.r(e);var a=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("contact");const e=c("Phones",["0720 000 000","0730 000 000"]),n=c("address",["Nairobi, Kenya"]);t.appendChild(e),t.appendChild(n)};var i=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="Home",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Tamu Sana is a Modern Restaraunt based on the shores of Mombasa County which is a city in Kenya.\n\tThe beaty of Tamu Sana is you get to enjoy your meals as you catch the waves from the comfort of\n\tyour chair.\n\tAs it is close to the ocean, you get fresher and moist sea foods hence why it is the number one\n\tspot in the area.",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("home"),t.appendChild(e)};function s(t,e,n,o){const c=document.createElement("div");c.classList.add("food");const a=document.createElement("div");a.setAttribute("src",t),a.setAttribute("alt",o);const i=document.createElement("div");i.classList.add("description");const s=document.createElement("h3");s.textContent=e;const d=document.createElement("h2");return d.textContent=n,i.appendChild(s),i.appendChild(d),c.appendChild(a),c.appendChild(i),c}var d=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("menu"),[s("https://i.ytimg.com/vi/L1arsLxKgeg/maxresdefault.jpg","Githeri","Kshs 300","githeri"),s("https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg","ugali/mboga","Kshs 200","Ugali Mboga"),s("https://i.ytimg.com/vi/mfnu2Y3w1c8/maxresdefault.jpg","pilau","Kshs 700","Beef Pilau"),s("https://netstorage-tuko.akamaized.net/images/0fgjhs6l0cfs0lpse.jpg","bhajia","Kshs 400","Bhajias"),s("https://www.mygorgeousrecipes.com/wp-content/uploads/2019/01/Indian-Chicken-Curry-with-Coconut-Milk-u0.jpg","chicken curry","Kshs 1020","Rice Chicken Curry"),s("https://i.ytimg.com/vi/jX6Wanu0PkU/maxresdefault.jpg","kienyeji","Kshs 900","Kienyeji Beef")].forEach(e=>{t.appendChild(e)})};(function(){const t=document.getElementById("content"),e=function(t,e){const n=document.createElement("header");n.setAttribute("id",t);const o=document.createElement("h1");return o.textContent=e,n.appendChild(o),n}("header","Tamu Sana Lounge");t.appendChild(e);const n=function(t){const e=document.createElement("nav");e.setAttribute("id",t);const n=o("home","home"),c=o("menu","menu"),a=o("contact","contact");return e.appendChild(n),e.appendChild(c),e.appendChild(a),e}("nav");t.appendChild(n);const c=function(t){const e=document.createElement("main");return e.setAttribute("id",t),e}("tab-content");t.appendChild(c);const a=function(t,e){const n=document.createElement("footer");n.setAttribute("id",t);const o=document.createElement("h3");return o.textContent=e,n.appendChild(o),n}("footer"," Epitomy Of Happiness © 2019 ");t.appendChild(a)})(),i(),function(){const t=document.getElementById("home"),e=document.getElementById("contact"),n=document.getElementById("menu");t.addEventListener("click",i),e.addEventListener("click",a),n.addEventListener("click",d)}()}]);