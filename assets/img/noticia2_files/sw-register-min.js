"serviceWorker"in navigator&&navigator.serviceWorker.register(sw_register_vars.home+"/sw.js").then(function(e){console.log("Service Worker registration success: ",e)}).catch(function(e){console.log("Service Worker registration failed: ",e)});