var personalizedAdsDisabled=!0,isBrowsi=!0;let parsed,userNonIdentified=window.localStorage.getItem("xalM2-cookies-policy-0000"),userIdentified=window.localStorage.getItem("xalM2-cookies-policy-"+config.id_minha_conta),loadFormat={RETANGULO_AF:!1,RETANGULO_BF:!1,SUPER:"home"==adsConfigData.key_value_page,SUPER_BTF:!1,VERTICAL_AF:!1,VERTICAL_AF_2:!1,VERTICAL_BF:!1,VERTICAL_BF_2:!1,RETANGULO_AF_MOBILE:!1,VERTICAL_AF_2_MOBILE:!1,RETANGULO_BF_MOBILE:!1,MobileLeaderboard:"home"==adsConfigData.key_value_page,MOBILELEADERBOARD_BF:!1,VERTICAL_AF_MOBILE:!1,VERTICAL_BF_MOBILE:!1,VERTICAL_BF_2_MOBILE:!1,OutOfPage:"home"!=adsConfigData.key_value_page,Ticker:!0,Slider_1:"home"==adsConfigData.key_value_page,Native_Ultimas_Noticias:"ultimas-noticias"==adsConfigData.key_value_category};const customConfigObject={buckets:[{precision:2,max:5,increment:.01},{max:8,increment:.05},{max:40,increment:.5}]};void 0!==typeof userIdentified&&""!==userIdentified&&null!==userIdentified?(parsed=JSON.parse(userIdentified)).forEach(e=>{"promocional"==e.name&&10==e.state&&(personalizedAdsDisabled=!1,naveggScript(),SeedTagScript())}):void 0!==typeof userNonIdentified&&""!==userNonIdentified&&null!==userNonIdentified&&(parsed=JSON.parse(userNonIdentified)).forEach(e=>{"promocional"==e.name&&10==e.state&&(personalizedAdsDisabled=!1,naveggScript(),SeedTagScript())});var PREBID_TIMEOUT=3e3,FAILSAFE_TIMEOUT=3e3,teads_placementId=132063,teads_pageId=121682,adUnits=[],googletag=googletag||{};googletag.cmd=googletag.cmd||[];var pbjs=pbjs||{};function initAdserver(){pbjs.initAdserverSet||(googletag.cmd.push(function(){pbjs.que.push(function(){pbjs.setTargetingForGPTAsync(),googletag.pubads().setPrivacySettings({nonPersonalizedAds:personalizedAdsDisabled}),googletag.pubads().refresh()})}),pbjs.initAdserverSet=!0)}if(pbjs.que=pbjs.que||[],void 0!==typeof adsConfigData&&""!==adsConfigData&&null!==adsConfigData&&"1"!==adsConfigData.ads_block&&function(e,a){var d=e.createElement("script"),t=e.getElementsByTagName("head")[0];d.type="text/javascript",d.async=!0,d.src="https://cdn.browsiprod.com/bootstrap/bootstrap.js",d.setAttribute("data-siteKey","infomoney"),d.setAttribute("data-pubKey","infomoney"),d.setAttribute("id","browsi-tag"),t.appendChild(d)}(document),void 0!==typeof adsConfigData&&""!==adsConfigData&&null!==adsConfigData&&"post"==adsConfigData.key_value_page){var itens=[{ref:"taboola",path:"//cdn.taboola.com/libtrc/infomoney/loader.js",type:"text/javascript",dependence:null,callback:function(){window._taboola=window._taboola||[],_taboola.push({article:"auto"}),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic")},sleep:1e3,status:"wait"}];try{InfoMoney.LazyLoading.addRepostirory(itens)}catch(e){console.warn("ads-config.js.taboolaScript(): Erro ao inserir novas tasks no componente Taboola | Detalhes: "+e.message)}}if("object"==typeof _profilesNavegg)for(col in profileHB={},_profilesNavegg)name="nvg_"+col,name=name.substring(0,10),profileHB[name]=_profilesNavegg[col];void 0!==typeof adsConfigData&&"post"==adsConfigData.key_value_page&&(teads_placementId=132061,teads_pageId=121680);var prefetchArray=["//fastlane.rubiconproject.com/"],prefetchDNS=function(e){for(i=0;i<e.length;i++){var a=window.document.createElement("link");a.rel="dns-prefetch",a.href=e[i],a.async=!0,window.document.getElementsByTagName("script")[0].parentNode.appendChild(a)}};function naveggScript(){window.naveggReady=window.naveggReady||[],window.nvg22862=new Navegg({acc:22862}),_profilesNavegg=JSON.parse(window.localStorage.getItem("nvgpersona22862"))}function SeedTagScript(){var e;window._seedtagq=window._seedtagq||[],window._seedtagq.push(["_setId","7691-0337-01"]),(e=document.createElement("script")).type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https":"http")+"://t.seedtag.com/t/7691-0337-01.js",document.getElementsByTagName("head")[0].appendChild(e)}adsConfigData.ads_formats.forEach(e=>{switch(e.advertising){case"RETANGULO_AF_MOBILE":loadFormat.RETANGULO_AF_MOBILE&&adUnits.push({code:"/8003922/RETANGULO_AF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64466,zoneId:1333798,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:11226029}},{bidder:"roix",params:{placementId:13795925}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e060a0f50009"}},{bidder:"seedtag",params:{adUnitId:"23019962",publisherId:"7691-0337-01",placement:"inArticle"}},{bidder:"teads",params:{placementID:teads_placementId,pageID:teads_pageId}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111381}}]});break;case"RETANGULO_AF":loadFormat.RETANGULO_AF&&adUnits.push({code:"/8003922/RETANGULO_AF",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324640,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270827}},{bidder:"roix",params:{placementId:13795925}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05caea1000d"}},{bidder:"teads",params:{placementID:teads_placementId,pageID:teads_pageId}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111381}}]});break;case"RETANGULO_BF_MOBILE":loadFormat.RETANGULO_BF_MOBILE&&adUnits.push({code:"/8003922/RETANGULO_BF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64466,zoneId:1333804,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:11226030}},{bidder:"roix",params:{placementId:13639178}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a9699d4017474e03107e060f67f000a"}},{bidder:"teads",params:{placementID:teads_placementId,pageID:teads_pageId}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111379}}]});break;case"RETANGULO_BF":loadFormat.RETANGULO_BF&&adUnits.push({code:"/8003922/RETANGULO_BF",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324788,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270828}},{bidder:"roix",params:{placementId:13639178}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05d36a9000f"}},{bidder:"teads",params:{placementID:teads_placementId,pageID:teads_pageId}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111379}}]});break;case"MobileLeaderboard":loadFormat.MobileLeaderboard&&adUnits.push({code:"/8003922/MobileLeaderboard",mediaTypes:{banner:{sizes:[[300,50],[300,100],[320,50],[320,100],[300,75],[234,60]]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:749274,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:12262150}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a969086017474e02915e0618e080012"}},{bidder:"seedtag",params:{adUnitId:"23019954",publisherId:"7691-0337-01",placement:"inScreen"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111507}}]});break;case"MOBILELEADERBOARD_BF":loadFormat.MOBILELEADERBOARD_BF&&adUnits.push({code:"/8003922/MOBILELEADERBOARD_BF",mediaTypes:{banner:{sizes:[[300,50],[300,100],[320,50],[320,100],[300,75],[234,60]]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:749274,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:12262150}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e061f06a000b"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111507}}]});break;case"SUPER":loadFormat.SUPER&&adUnits.push({code:"/8003922/SUPER",mediaTypes:{banner:{sizes:[[728,90],[970,90],[468,60]]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324792,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270829}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a9699d4017474e03107e05938580005"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111380}}]});break;case"SUPER_BTF":loadFormat.SUPER_BTF&&adUnits.push({code:"/8003922/SUPER_BTF",mediaTypes:{banner:{sizes:[[728,90],[970,90],[970,250],[468,60]]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324792,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270829}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a9699d4017474e03107e059f40a0006"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111383}}]});break;case"VERTICAL_AF_MOBILE":loadFormat.VERTICAL_AF_MOBILE&&adUnits.push({code:"/8003922/VERTICAL_AF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1408904,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16837524}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e05f6b160007"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111382}}]});break;case"VERTICAL_AF_2_MOBILE":loadFormat.VERTICAL_AF_2_MOBILE&&(adUnits.push({code:"/8003922/RETANGULO_AF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64466,zoneId:1333798,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:11226029}},{bidder:"roix",params:{placementId:13795925}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e060a0f50009"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111381}}]}),adUnits.push({code:"/8003922/VERTICAL_AF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1408904,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16837524}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e05f6b160007"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111382}}]}));break;case"VERTICAL_AF":loadFormat.VERTICAL_AF&&adUnits.push({code:"/8003922/VERTICAL_AF",mediaTypes:{banner:{sizes:[[120,600],[160,600],[240,400],[300,250],[300,600]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324800,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270833}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05a92d3000a"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111382}}]});break;case"VERTICAL_AF_2":loadFormat.VERTICAL_AF_2&&(adUnits.push({code:"/8003922/RETANGULO_AF",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324640,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270827}},{bidder:"roix",params:{placementId:13795925}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05caea1000d"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111381}}]}),adUnits.push({code:"/8003922/VERTICAL_AF",mediaTypes:{banner:{sizes:[[120,600],[160,600],[240,400],[300,250],[300,600]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324800,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270833}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05a92d3000a"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111382}}]}));break;case"VERTICAL_BF_MOBILE":loadFormat.VERTICAL_BF_MOBILE&&adUnits.push({code:"/8003922/VERTICAL_BF_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1408908,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16837527}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a969086017474e02915e05fc0cf0011"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111508}}]});break;case"VERTICAL_BF":loadFormat.VERTICAL_BF&&adUnits.push({code:"/8003922/VERTICAL_BF",mediaTypes:{banner:{sizes:[[120,600],[160,600],[240,400],[300,250],[300,600]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324802,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270835}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05b05c8000b"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111508}}]});break;case"VERTICAL_BF_2_MOBILE":loadFormat.VERTICAL_BF_2_MOBILE&&adUnits.push({code:"/8003922/VERTICAL_BF_2_MOBILE",mediaTypes:{banner:{sizes:[[120,240],[200,200],[250,250],[300,250]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1408908,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16837527}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a96947a017474e02ce3e05ebb6b0007",pos:"8a9699d4017474e03107e0600e5c0008"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111384}}]});break;case"VERTICAL_BF_2":loadFormat.VERTICAL_BF_2&&adUnits.push({code:"/8003922/VERTICAL_BF_2",mediaTypes:{banner:{sizes:[[120,600],[160,600],[240,400],[300,250],[300,600]]},video:{context:"outstream",playerSize:[300,250]}},bids:[{bidder:"rubicon",params:{accountId:13758,siteId:64538,zoneId:1324802,inventory:{pagina:[""+adsConfigData.key_value_page],categoria:[""+adsConfigData.key_value_category],tags:[""+adsConfigData.key_value_tags]}}},{bidder:"appnexus",params:{placementId:16270835}},{bidder:"roix",params:{placementId:12934958}},{bidder:"yahoossp",params:{network:"57271",dcn:"8a969086017474e02915e058132b0008",pos:"8a969086017474e02915e05c3068000c"}},{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:346041,pageId:1212242,formatId:111384}}]})}}),pbjs.que.push(function(){pbjs.aliasBidder("appnexus","roix"),pbjs.setConfig({rubicon:{singleRequest:!0},priceGranularity:customConfigObject,enableSendAllBids:!0,timeoutBuffer:300,bidderTimeout:3e3,disableAjaxTimeout:!0,useBidCache:!0}),pbjs.addAdUnits(adUnits),pbjs.requestBids({timeout:PREBID_TIMEOUT,bidsBackHandler:function(e){initAdserver()}}),pbjs.onEvent("bidResponse",function(e){window.bidRender=e.renderer,"video"==e.mediaType&&e.renderer&&e.renderer.setEventHandlers({ended:function(){for(var a=googletag.pubads().getSlots(),d=null,t=0;t<a.length;t++)a[t]&&a[t].getSlotElementId()==e.adUnitCode&&(d=a[t]);a&&pbjs.requestBids({adUnitCodes:[e.adUnitCode],timeout:PREBID_TIMEOUT,bidsBackHandler:function(){googletag.cmd.push(function(){pbjs.que.push(function(){pbjs.setTargetingForGPTAsync([e.adUnitCode]),googletag.pubads().setPrivacySettings({nonPersonalizedAds:personalizedAdsDisabled}),googletag.pubads().refresh([d])})})}})}})})}),setTimeout(initAdserver,FAILSAFE_TIMEOUT),googletag.cmd.push(function(){if(googletag.pubads().setTargeting("Portal","InfoMoney"),""!==adsConfigData.key_value_page&&googletag.pubads().setTargeting("pagina",adsConfigData.key_value_page),""!==adsConfigData.key_value_category&&googletag.pubads().setTargeting("categoria",adsConfigData.key_value_category),""!==adsConfigData.key_value_category&&googletag.pubads().setTargeting("tags",adsConfigData.key_value_tags),"object"==typeof _profilesNavegg)for(col in _profilesNavegg)name="nvg_"+col,name=name.substring(0,10),"object"==typeof googletag&&googletag.pubads().setTargeting(name,_profilesNavegg[col]),"function"==typeof GA_googleAddAttr&&GA_googleAddAttr(name,_profilesNavegg[col]);"undefined"!=typeof Krux&&(googletag.pubads().setTargeting("ksg",Krux.segments),googletag.pubads().setTargeting("kuid",Krux.user)),loadFormat.SUPER&&"home"==adsConfigData.key_value_page&&googletag.defineSlot("/8003922/SUPER",[[728,90],[970,90],[468,60]],"SUPER").setTargeting("refresh","true").addService(googletag.pubads()),loadFormat.OutOfPage&&googletag.defineOutOfPageSlot("/8003922/OutOfPage","OutOfPage").addService(googletag.pubads()),loadFormat.Ticker&&googletag.defineSlot("/8003922/Ticker",[140,40],"Ticker").addService(googletag.pubads()),loadFormat.Slider_1&&googletag.defineOutOfPageSlot("/8003922/Slider_1","Slider_1").setTargeting("refresh","true").addService(googletag.pubads()),loadFormat.Native_Ultimas_Noticias&&googletag.defineOutOfPageSlot("/8003922/Native_Ultimas_Noticias","Native_Ultimas_Noticias").addService(googletag.pubads()),googletag.pubads().addEventListener("impressionViewable",function(e){var a=e.slot;a.getTargeting("refresh").indexOf("true")>-1&&setTimeout(function(){"Slider_1"!==e.slot.getSlotElementId()?pbjs.que.push(function(){pbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:[a.getAdUnitPath()],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([a.getAdUnitPath()]),googletag.pubads().refresh([a])}})}):googletag.pubads().refresh([a])},6e4)}),googletag.pubads().setCentering(!0),googletag.pubads().setPrivacySettings({nonPersonalizedAds:personalizedAdsDisabled}),googletag.pubads().disableInitialLoad(),googletag.enableServices()}),document.addEventListener("cookiesConfigured",function(e){if(e.detail.userTriggered){var a={};e.detail.acceptedCookies&&e.detail.acceptedCookies.length&&(a=e.detail.acceptedCookies.reduce(function(e,a){return e[a.name]=10,e},{})),10==a.promocional&&(personalizedAdsDisabled=!1,naveggScript(),SeedTagScript())}});var removeAds=function(){this.parentElement.remove()};document.addEventListener("DOMContentLoaded",function(){document.body.contains(document.getElementById("sticky-close-ads"))&&document.getElementById("sticky-close-ads").addEventListener("click",removeAds,!1)});