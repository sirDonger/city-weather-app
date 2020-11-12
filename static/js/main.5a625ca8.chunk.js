(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('[{"id":2759794,"name":"Amsterdam","state":"","country":"NL","coord":{"lon":4.88969,"lat":52.374031}},{"id":2756253,"name":"Eindhoven","state":"","country":"NL","coord":{"lon":5.47778,"lat":51.44083}},{"id":2758186,"name":"Bruinisse","state":"","country":"NL","coord":{"lon":4.09444,"lat":51.661671}},{"id":2758838,"name":"Bleiswijk","state":"","country":"NL","coord":{"lon":4.53194,"lat":52.01083}},{"id":2745912,"name":"Utrecht","state":"","country":"NL","coord":{"lon":5.12222,"lat":52.090832}}]')},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),c=a.n(r),i=a(16),o=a.n(i),s=a(21),d=a(17),u=a(58),l=a(52),j=a(41),b=a(15),h="ADD_CITY",p="REMOVE_CITY",O="FETCH_WEATHER_DATA",f="FETCH_WEATHER_DATA_SUCCESS",m="FETCH_WEATHER_DATA_FAILURE",y="REMOVE_WEATHER_DATA",x=function(e,t){return e.filter((function(e){return e!==t}))},v=function(e,t){return e.filter((function(e){return e.lat!==+t.lat.toFixed(2)&&e.lon!==+t.lon.toFixed(2)}))},w={weatherData:[],cities:["Amsterdam"],error:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:return Object(b.a)(Object(b.a)({},e),{},{cities:[].concat(Object(j.a)(e.cities),[n])});case p:return Object(b.a)(Object(b.a)({},e),{},{cities:x(e.cities,n)});case f:return Object(b.a)(Object(b.a)({},e),{},{weatherData:[].concat(Object(j.a)(e.weatherData),[n])});case m:return Object(b.a)(Object(b.a)({},e),{},{error:n});case y:return Object(b.a)(Object(b.a)({},e),{},{weatherData:v(e.weatherData,n)});default:return e}},C=a(28),D=a.n(C),E=a(29),T=a(53),S=a.n(T);function A(e){return S.a.get("".concat("https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,hourly,alerts","&lat=").concat(e.lat,"&lon=").concat(e.lon,"&appid=").concat("4bcb36b65a133c9e168dec0b9c709f65")).then((function(e){var t=e.data;return{lat:t.lat,lon:t.lon,daily:t.daily.map((function(e){return{temp:e.temp.day,windSpeed:e.wind_speed,weather:e.weather[0].main}})).slice(0,7)}}))}var W=D.a.mark(F),_=D.a.mark(N);function F(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(E.a)(A,t);case 4:return a=n.sent,n.next=7,Object(E.b)({type:f,payload:a});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(E.b)({type:m,payload:n.t0});case 13:case"end":return n.stop()}}),W,null,[[1,9]])}function N(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(O,F);case 2:case"end":return e.stop()}}),_)}var R=Object(u.a)(),k=Object(d.createStore)(g,Object(l.composeWithDevTools)(Object(d.applyMiddleware)(R)));R.run(N);var L=k,H=(a(90),a(54)),B=a(39),I=a(117),M=a(119),J=a(107),U=a(27),q=a(118),P=a(116),V=function(e){var t=e.info,a=e.activeCity,c=e.addCity,i=e.removeCity,o=e.fetchWeatherData,s=e.removeWeatherData,d=Object(r.useState)(a),u=Object(U.a)(d,2),l=u[0],j=u[1];return Object(n.jsx)(q.a,{control:Object(n.jsx)(P.a,{checked:l,onChange:function(){j(!l),l?(i(t.name),s(t.coord)):(c(t.name),o(t.coord))}}),label:t.name})},Y=function(e){var t=e.cities,a=e.addCity,c=e.removeCity,i=e.fetchWeatherData,o=e.removeWeatherData;return Object(r.useEffect)((function(){var e,a=Object(H.a)(B);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.includes(n.name)&&i(n.coord)}}catch(r){a.e(r)}finally{a.f()}}),[]),Object(n.jsxs)(I.a,{component:"fieldset",className:"mr-5",children:[Object(n.jsx)(M.a,{component:"legend",children:"Netherlands cities"}),Object(n.jsx)(J.a,{children:B.map((function(e){return Object(n.jsx)(V,{info:e,addCity:a,removeCity:c,fetchWeatherData:i,removeWeatherData:o,activeCity:t.includes(e.name)},e.id)}))})]})},z={addCity:function(e){return{type:h,payload:e}},removeCity:function(e){return{type:p,payload:e}},fetchWeatherData:function(e){return{type:O,payload:e}},removeWeatherData:function(e){return{type:y,payload:e}}},G=Object(s.b)((function(e){return{cities:e.cities}}),z)(Y),K=a(108),Q=a(109),X=a(110),Z=a(120),$=a(111),ee=a(112),te=a(113),ae=a(114),ne=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],re=[{label:"City",id:"city",numeric:!1,sort:!1},{label:"Temperature",id:"temp",numeric:!0,sort:!0},{label:"Wind speed",id:"windSpeed",numeric:!0,sort:!0},{label:"Weather",id:"weather",numeric:!1,sort:!1}],ce=function(e){var t=e.order,a=e.orderBy,r=e.onRequestSort;return Object(n.jsx)(K.a,{children:Object(n.jsx)(Q.a,{children:re.map((function(e){return Object(n.jsx)(X.a,{align:e.numeric?"right":"left",children:e.sort?Object(n.jsx)(Z.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:function(){return r(e.id)},children:e.label}):e.label},e.id)}))})})},ie=function(e){var t=e.cities,a=e.data,c=Object(r.useState)("asc"),i=Object(U.a)(c,2),o=i[0],s=i[1],d=Object(r.useState)(""),u=Object(U.a)(d,2),l=u[0],j=u[1];return Object(n.jsx)($.a,{component:ee.a,children:Object(n.jsxs)(te.a,{children:[Object(n.jsx)(ce,{order:o,orderBy:l,onRequestSort:function(e){s(l===e&&"asc"===o?"desc":"asc"),j(e)}}),Object(n.jsx)(ae.a,{children:a.map((function(e,a){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q.a,{children:Object(n.jsx)(X.a,{children:t[a]})}),e.daily.map((function(e,t){return Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(X.a,{align:"right",children:ne[t]}),Object(n.jsx)(X.a,{align:"right",children:e.temp}),Object(n.jsx)(X.a,{align:"right",children:e.windSpeed}),Object(n.jsx)(X.a,{align:"right",children:e.weather})]})}))]})}))})]})})},oe=Object(s.b)((function(e){return{cities:e.cities,data:e.weatherData}}))(ie),se=function(){return Object(n.jsxs)("div",{className:"container pt-5 d-flex",children:[Object(n.jsx)(G,{}),Object(n.jsx)(oe,{})]})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s.a,{store:L,children:Object(n.jsx)(se,{})})}),document.getElementById("root")),de()}},[[91,1,2]]]);
//# sourceMappingURL=main.5a625ca8.chunk.js.map