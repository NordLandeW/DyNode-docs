if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const c=e=>a(e,r),t={module:{uri:r},exports:d,require:c};s[r]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(f(...e),d)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-JF39UOHO.js",revision:"24304760b3e4fb17a4ef7ad93874078e"},{url:"assets/404.html-vykf395M.js",revision:"b83f8544831f50300a7b88cf6fca6666"},{url:"assets/about.html-0tZ2sOvp.js",revision:"4027319654eb39762f13760e0a9337d7"},{url:"assets/about.html-7U0aiPN2.js",revision:"181e02c41e5f0b652e894248a4e2beb1"},{url:"assets/about.html-92H4DKBC.js",revision:"0f9487db3d8a656d30723d08d449d956"},{url:"assets/about.html-cRNLAQp8.js",revision:"c29bf285963b713a7ab4f6a0318762b8"},{url:"assets/advanced-edit.html-6Aa7oSiQ.js",revision:"eb732b89ce931e1f92f7d285fbc2945e"},{url:"assets/advanced-edit.html-jTFZZq9V.js",revision:"aa7ea2bf5c439824f9892cd25597d283"},{url:"assets/advanced-edit.html-QZF9gcW4.js",revision:"b0c856bf9ed8118c4afed1c82741b4ca"},{url:"assets/advanced-edit.html-v8qEHkBd.js",revision:"058ec62bdc78fd96190f23b02d89ed4b"},{url:"assets/app-1Vk6epXo.js",revision:"a5c508322fbc8d40481f3ba608952e7c"},{url:"assets/changelog.html-DPtSXtf2.js",revision:"3dd6cf354c4a34fd0895dcf0a0f6fbec"},{url:"assets/changelog.html-FvM9BCsw.js",revision:"5f7cd3425210364188199f848f2d3756"},{url:"assets/changelog.html-t4kU5fp0.js",revision:"aa5f753d6a6a1858af61c3aeebfc51aa"},{url:"assets/changelog.html-Zmu5u6sC.js",revision:"df697e86684d9f973264a18408d94d52"},{url:"assets/configuration.html-3CyzUeTL.js",revision:"b59beb2300532f64a08d9d17ac3043e3"},{url:"assets/configuration.html-6XKY16So.js",revision:"89e8ff73e07c2664a9c49be8867637b6"},{url:"assets/configuration.html-jwpvKK9b.js",revision:"961365ca22f4f11035230f0b6149b869"},{url:"assets/configuration.html-UAWTqf_7.js",revision:"dc8dc99a60a04ce62701ced35baeb760"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/double_click-egos35Rl.js",revision:"f9b7cd542f4e16fb42d993108a76669c"},{url:"assets/double_click-mNR-0vDa.js",revision:"f9b7cd542f4e16fb42d993108a76669c"},{url:"assets/edit.html-M-UyW2EO.js",revision:"e7a2ab25cc52076abb91df92b6dabda8"},{url:"assets/edit.html-q72g3JWT.js",revision:"c9a295b0fa7f4bce556cb53bee33c479"},{url:"assets/edit.html-R1s9LUON.js",revision:"61eb317e681df76d48bac08a3fabbff7"},{url:"assets/edit.html-XclCFgqQ.js",revision:"a1a95799f1c9de8e1d20a990070e0352"},{url:"assets/export.html-DOxvEdVx.js",revision:"e716632cb11f82ba86653548df187aab"},{url:"assets/export.html-g7QGDSC7.js",revision:"3b428d3cc9fd44d4c7e944b85ef9237e"},{url:"assets/export.html-kxH8eueg.js",revision:"62f50845643c55bed67e8f778e083a1c"},{url:"assets/export.html-xCRDzH_m.js",revision:"6c9eff5f40dca87d5db24d96e6d8949d"},{url:"assets/FAQ.html-3Meddmew.js",revision:"0c9fb75307ebdb8a3044806018088444"},{url:"assets/FAQ.html-CLf6iSyI.js",revision:"30f139b7cb20da6913d8cabcfae09f1c"},{url:"assets/FAQ.html-kjspGlg1.js",revision:"6ae320c29da34455e19bf11b2c7b755a"},{url:"assets/FAQ.html-ZDIkbG7t.js",revision:"9a15b642c993a82782c8a2052d3b2254"},{url:"assets/file-formats.html-_dYMKmoa.js",revision:"1be58ea8a07d8319754cb712c727f0d1"},{url:"assets/file-formats.html-5CPm5Aj2.js",revision:"8f03dd1f64962a063c01b0fefc163597"},{url:"assets/file-formats.html-78P5YDV6.js",revision:"c96aed1d98425cdc270007512b2722c9"},{url:"assets/file-formats.html-JdzJhIzs.js",revision:"1112a93820e004ad829ef0d9823ee49d"},{url:"assets/getting-started.html-2EOS_Twj.js",revision:"f7322ae6212bc7b2f57a59a230112160"},{url:"assets/getting-started.html-AwIzaLo-.js",revision:"0289696a93ed3fadd8945beba6764fcc"},{url:"assets/getting-started.html-HEEvEDew.js",revision:"be84f85ac1d1e28ec62986eea516ae10"},{url:"assets/getting-started.html-xPUvWTCf.js",revision:"5fda3756a96fff7e449a37b2615fd463"},{url:"assets/Icon-2jdXIl77.js",revision:"0301c991256466dd5ec418de3a653ff6"},{url:"assets/import.html-4uJaROpf.js",revision:"4a4f5739d3c02abb519b13549022ed4a"},{url:"assets/import.html-7zv8aA4D.js",revision:"da2a132f14155158d1c4d40f09d42e57"},{url:"assets/import.html-hIuyZcg5.js",revision:"14126b6d515b639eb6ab817ff4e2f69d"},{url:"assets/import.html-uSQdnTs5.js",revision:"3a5f3d68d1add83e210f18010884ffa2"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-7JIgnRba.js",revision:"7506906c837d3a5b93fe0569fb51456e"},{url:"assets/index.html-8kXN8Fgo.js",revision:"3133686a4323d9c3f232c97c71df8220"},{url:"assets/index.html-aoX75GIc.js",revision:"efb2a35e676cdcbf6f5a261a7e06f588"},{url:"assets/index.html-BDDMz1ei.js",revision:"f874d6a2d2a42611ec513b8f114391e8"},{url:"assets/index.html-bqk35HPo.js",revision:"199411d504c3b6c0f52e85170d1e06ed"},{url:"assets/index.html-eLyX1iAB.js",revision:"a517148dede036d877f92fd65e2d9dee"},{url:"assets/index.html-k7XcO-r8.js",revision:"decfa7d05ba673b0bddb70678d289551"},{url:"assets/index.html-NQbNNXoX.js",revision:"111c501d75412e9d9e8648d3f621f098"},{url:"assets/KaTeX_AMS-Regular-0YIAJWTb.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_AMS-Regular-UIXRTGNW.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-zJvWDgGp.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_Caligraphic-Bold-6vyEfazt.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Bold-AE18XbF9.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-RIlxi71x.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Regular-4uo0fsfh.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-k0QPq0y-.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-MF_e1AYw.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-bAz-dThZ.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Bold-i-oP291Y.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-XZxETTVq.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Regular-8XXOHEfX.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Fraktur-Regular-gf8Lq3rE.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-k2IhepQP.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Main-Bold-CZtwCMuf.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-Bold-MGqDlVzd.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-sffOiHVw.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-BoldItalic-88TzJhul.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-8QydwDku.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-EqUi0SPe.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-DVgO3ulm.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-N1npxqDf.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-TCzgZvdR.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-6_eCWgYQ.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-dtjb4qKe.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-MqWbzbVV.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-d10o37uD.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-BoldItalic-ImPtsMme.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-mZ7zbAmZ.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-Italic-H5Tq_9FA.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-LedwBEzP.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-wNP_z16f.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-2yISjogg.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Bold-9bFEtBg9.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-hTHqZ76u.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Italic-Azdo-3Wm.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Italic-GGIydc0p.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-tx9FahgZ.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Regular-kun6lKiW.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-TaO4USHJ.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_SansSerif-Regular-wwQp5Se8.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_Script-Regular--ckFYqpa.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Script-Regular-98CFnxev.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-uSZBlqPg.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Size1-Regular-27J7nvyK.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-Jgg_JgPA.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-tfebZ-uE.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-8uHcfdJu.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size2-Regular-e4ClFoQr.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-KA9bXP1N.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size3-Regular-4KV7NJM_.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-k6uTKqBB.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-1hQb9ONy.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Size4-Regular-5eZcWcVX.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-RfuIJGSk.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Typewriter-Regular-9yG-_x36.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/KaTeX_Typewriter-Regular-juq-IZ9c.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-tMUvZjwd.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/project_create-aWgbtcfp.js",revision:"c36277ad7bbf46f378dac2c5b8a7285c"},{url:"assets/project_create-G0E3pdvR.js",revision:"1399c75024c893414d80145e28bc9b7e"},{url:"assets/project.html-9On-o--g.js",revision:"cc178df23534d8b75b3365e93d25a5a0"},{url:"assets/project.html-MeYlLcEj.js",revision:"9279c3c1d8d720f1a79f3cb0eac2f74e"},{url:"assets/project.html-p142LkW1.js",revision:"60f19ae94a13aff4ab214c3954d7295c"},{url:"assets/project.html-S36y7eio.js",revision:"c809f26a3db62f9fa2984fe173dfdfe8"},{url:"assets/shortcuts.html-_Bl9tEiP.js",revision:"66dfe52045ce0fce5bf2426a92b4421d"},{url:"assets/shortcuts.html-1J-4-jXN.js",revision:"1e5fe261a16ba7816c182f4cd12e24b9"},{url:"assets/shortcuts.html-V3Ogne6N.js",revision:"052b2e048e64c5201f9ff7e8857fc3b4"},{url:"assets/shortcuts.html-xc7T8iGS.js",revision:"3e3a505b823058bab97a85511eecf659"},{url:"assets/style-UEieOlB1.css",revision:"ff0a0f5948bb49c7ff0dae57a9e009b9"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/timing.html-gHzBoGfC.js",revision:"fdfe83d322b41308ebb51a12e5666af9"},{url:"assets/timing.html-GMn44v0z.js",revision:"b10d42c7773c7b4f45d074157bea28d2"},{url:"assets/timing.html-QBHuvR5d.js",revision:"4c3fd91fe445234861e50884d5f1e4f8"},{url:"assets/timing.html-uOSrJGkg.js",revision:"7bb23550579da3c2cb04adc806804602"},{url:"dragon-scales.svg",revision:"3dfaca8eb1393d90afbe20e2b32f5dfb"},{url:"layered-waves-haikei.svg",revision:"e498437fa11815e2026f6bcddd70be6a"},{url:"low-poly-grid-haikei.svg",revision:"df7bcb9eb6f4e4abc9c552246ef2f67a"},{url:"safari-pinned-tab.svg",revision:"be4cbd53ba1d30c42065f5fcbb26ea16"},{url:"slanted-gradient.svg",revision:"b5ed01a93b6d09437f5e222e4beb0402"},{url:"subtle-prism.svg",revision:"544715b8c062bd05b74bb8d9bc862e7e"},{url:"sun-tornado.svg",revision:"2a93dcc764b63f4b48f62177210f58f4"},{url:"index.html",revision:"a9a10ec325c167d35c466230c8338c73"},{url:"404.html",revision:"26ea69f7b3331bd5058ee18d41ca4ae8"},{url:"android-chrome-192x192.png",revision:"997d2e6952747000cc15ef5b6f0a4f43"},{url:"android-chrome-512x512.png",revision:"a6d2a6cb634a916e7facd673f36419e8"},{url:"apple-touch-icon.png",revision:"2e48dc004e7aa5c31c0d7da80350a355"},{url:"assets/bad-chart-k_XBLsK9.png",revision:"65918e636eb33276c0b18e8263ccba1f"},{url:"assets/bad-chart-UtujysCD.png",revision:"6c3f36742c8aaac8125ee1df13d3b371"},{url:"assets/double_click-agLVyX_W.gif",revision:"3efb7a8b94f33324845e7e26cfd9a226"},{url:"assets/drag_note-LOyR95F0.gif",revision:"a6b0d745c41739ba1f0a302ccfab9ba3"},{url:"assets/drop-a-hold-S2NFQfEN.gif",revision:"58416fbd28751dfa03b49dce71c5d5e9"},{url:"assets/drop-a-note-5GTKUGZO.gif",revision:"d6fcf6926c7e3dc36a77c25988d34075"},{url:"assets/multiside-select-RS8yzIWp.gif",revision:"5274a972c1c90eb4e9d4ee777563b4ee"},{url:"assets/paste_note-YKdbdUbB.gif",revision:"dbe18bde892d78519eb5007685468e29"},{url:"assets/project_create-mdEiE8tA.png",revision:"c344582595636ec812fbf4748690e007"},{url:"assets/project_create-yrWJrDdj.png",revision:"a482e4543ba42ea416f16c5e15892abd"},{url:"assets/select_note_2-xguXlan0.gif",revision:"cc39e152d311da32be35a861a9649101"},{url:"assets/select_note-4LhFS7jT.gif",revision:"f0b4de92c095314e6f934b02523de4ee"},{url:"assets/select_note-YITRZuXi.gif",revision:"c5c12f461291c8c0765578cd91650098"},{url:"assets/side_faded-49Sddqq3.gif",revision:"c710d880ece63671e89c8fecd5225fe9"},{url:"assets/switch_side-CK4ZhaCx.gif",revision:"02b3c9219286129aedb71cebacffe6ce"},{url:"assets/visual-consistency-9ayo6ZSq.gif",revision:"e953706229311b4fb707d24273bb8cf0"},{url:"favicon-16x16.png",revision:"3b0dad5780881c5d646e5ca0dc3f5454"},{url:"favicon-32x32.png",revision:"1ceccbff58f7faaacac7725549389b47"},{url:"Icon.png",revision:"4cd948a5dde0a2b846488c2c99f4172d"},{url:"mstile-150x150.png",revision:"3af297743fbb2774a9a355e07d207692"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
