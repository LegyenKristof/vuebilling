(function(t){function e(e){for(var n,s,a=e[0],u=e[1],l=e[2],p=0,d=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var u=i[a];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuebilling/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Tablazat",{attrs:{sorok:t.rows,osszertek:t.osszertek},on:{hozzaad:t.hozzaad,torol:t.torol,mentes:t.mentes}})],1)},o=[],s=(i("4de4"),i("d3b7"),i("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",[t._m(0),t._l(t.sorok,(function(e){return i("Sor",{key:e.title,attrs:{sor:e},on:{torol:t.torol,mentes:t.mentes}})})),i("tr",[i("td",{attrs:{colspan:"3"}},[t._v("A raktárban tárolt tételek összértéke:")]),i("td",[t._v(t._s(t.osszertek))])]),i("tr",[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),i("td"),i("td",[i("button",{on:{click:t.hozzaad}},[t._v("Hozzáad")])])])],2)])}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("Title")]),i("th",[t._v("Price")]),i("th",[t._v("Quantity")]),i("th",[t._v("Összérték")]),i("th",[t._v("Operations")])])}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[t.edit?t._e():i("td",[t._v(t._s(t.sor.title))]),t.edit?t._e():i("td",[t._v(t._s(t.sor.price))]),t.edit?t._e():i("td",[t._v(t._s(t.sor.quantity))]),t.edit?t._e():i("td",[t._v(t._s(t.sor.quantity*t.sor.price))]),t.edit?t._e():i("td",[i("button",{on:{click:t.torol}},[t._v("X")]),i("button",{on:{click:t.modosit}},[t._v("Edit")])]),t.edit?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]):t._e(),t.edit?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]):t._e(),t.edit?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]):t._e(),t.edit?i("td"):t._e(),t.edit?i("td",[i("button",{on:{click:t.mentes}},[t._v("Save")])]):t._e()])},l=[],c={props:["sor"],methods:{torol:function(){this.$emit("torol",this.sor.title)},modosit:function(){this.edit=!0},mentes:function(){this.edit=!1,this.$emit("mentes",{old:this.sor,new:{title:this.title,price:this.price,quantity:this.quantity}})}},data:function(){return{edit:!1,title:this.sor.title,price:this.sor.price,quantity:this.sor.quantity}}},p=c,d=i("2877"),m=Object(d["a"])(p,u,l,!1,null,null,null),f=m.exports,v={props:["sorok","osszertek"],components:{Sor:f},data:function(){return{title:null,price:null,quantity:null}},methods:{hozzaad:function(){this.$emit("hozzaad",{title:this.title,price:this.price,quantity:this.quantity}),this.title=null,this.price=null,this.quantity=null},torol:function(t){this.$emit("torol",t)},mentes:function(t){this.$emit("mentes",t)}}},h=v,y=Object(d["a"])(h,s,a,!1,null,null,null),_=y.exports,b={name:"App",components:{Tablazat:_},data:function(){return{rows:[{title:"Kerék",price:100,quantity:12},{title:"Teleszkóp",price:1e3,quantity:300},{title:"Kormány",price:230,quantity:5},{title:"Ajtó",price:45120,quantity:321}],osszertek:10}},methods:{hozzaad:function(t){this.rows.push({title:t.title,price:t.price,quantity:t.quantity}),this.osszertekKiszamol()},torol:function(t){this.rows=this.rows.filter((function(e){return e.title!=t})),this.osszertekKiszamol()},mentes:function(t){this.rows.map((function(e){return e.title!=t.old.title||(e.title=t.new.title,e.price=t.new.price,e.quantity=t.new.quantity),e})),this.osszertekKiszamol()},osszertekKiszamol:function(){this.osszertek=0;for(var t=0;t<this.rows.length;t++)this.osszertek+=this.rows[t].price*this.rows[t].quantity}},created:function(){this.osszertekKiszamol()}},z=b,g=(i("034f"),Object(d["a"])(z,r,o,!1,null,null,null)),w=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.2ee46078.js.map