var InfoMoney=InfoMoney||{};InfoMoney.LazyLoading=function(){var e=[],o={},t=function(){try{e.forEach(e=>{"wait"===e.status&&a(e)&&(s(e.ref,"process"),setTimeout(n,e.sleep,e))})}catch(e){console.warn("InfoMoney.LazyLoading.starter: ERROR = "+e)}},n=function(e){try{var o=document.head,t=document.createElement("script");t.type=e.type,t.src=e.path,t.onload=function(){if(s(e.ref,"ok"),"function"==typeof e.callback)try{e.callback()}catch(o){console.warn("InfoMoney.LazyLoading.loader: ERRO! O callback falhou ao ser executado (item.ref: "+e.ref+") "+o.message)}else null!==e.callback&&console.warn("InfoMoney.LazyLoading.loader.script.onload: ERRO! O callback informando não é uma função (item.ref: "+e.ref+")")},t.onerror=function(o){s(e.ref,"error"),console.warn("InfoMoney.LazyLoading.loader.script.onerror: (item.ref: "+e.ref+")")},o.appendChild(t)}catch(o){s(e.ref,"error"),console.warn("InfoMoney.LazyLoading.loader: (item.ref: "+e.ref+") "+o.message)}},a=function(o){var t=!0;for(let n=0;n<e.length;n++)if(o.dependence===e[n].ref&&"ok"!==e[n].status){t=!1;break}return t},s=function(o,t){e.forEach(function(e,n,a){o===e.ref&&(a[n].status=t)})};return{init:function(){tasks=[{ref:"somaCore1",path:"https://cdn.xpi.com.br/soma/somahtml/2.3.1/soma-html/soma-html.esm.js",type:"module",dependence:null,callback:null,sleep:1e4,status:"wait"},{ref:"somaIM",path:o.js_path+"/soma-min.js",type:"module",dependence:"somaCore1",callback:null,sleep:0,status:"wait"},{ref:"somaLGPD1",path:"https://cdn.xpi.com.br/cookies-policy/3.0.0/cookiespolicy/cookiespolicy.esm.js",type:"module",dependence:"somaIM",callback:null,sleep:0,status:"wait"},{ref:"somaLGPD2",path:"https://cdn.xpi.com.br/cookies-policy/3.0.0/cookiespolicy/cookiespolicy.js",type:"text/javascript",dependence:"somaLGPD1",callback:function(){InfoMoney.Soma.lgpd()},sleep:0,status:"wait"},{ref:"somaTerm1",path:"https://cdn.xpi.com.br/terms-policy/3.0.0/termspolicy/termspolicy.esm.js",type:"module",dependence:"somaIM",callback:null,sleep:0,status:"wait"},{ref:"somaTerm2",path:"https://cdn.xpi.com.br/terms-policy/3.0.0/termspolicy/termspolicy.js",type:"text/javascript",dependence:"somaTerm1",callback:function(){InfoMoney.Soma.terms()},sleep:0,status:"wait"},{ref:"menuHeader",path:o.js_path+"/menu-min.js",type:"text/javascript",dependence:null,callback:null,sleep:0,status:"wait"},{ref:"widgetTicker",path:o.js_path+"/ticker-min.js",type:"text/javascript",dependence:null,callback:null,sleep:0,status:"wait"}],e=e.concat(tasks),setInterval(t,300)},addSettings:function(e){if(null!=e){var t=Object.keys(e);for(let n=0;n<t.length;n++)Object.defineProperty(o,t[n],{enumerable:!1,configurable:!1,writable:!1,value:e[t[n]]})}},addRepostirory:function(o){if(null!=o)for(let t=0;t<o.length;t++)e.push(o[t])}}}(),document.addEventListener("DOMContentLoaded",function(){InfoMoney.LazyLoading.addSettings(config);new Promise((e,o)=>{try{InfoMoney.LazyLoading.init(),e()}catch(e){o(e)}}).then(()=>{console.log("InfoMoney.LazyLoading starting")}).catch(e=>{console.warn("InfoMoney.LazyLoading error in starting | "+e.message)})});