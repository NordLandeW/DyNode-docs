if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const d=e=>a(e,r),t={module:{uri:r},exports:c,require:d};s[r]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(f(...e),c)))}}define(["./workbox-84c915bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-Cwvxq-ok.js",revision:"9e9060f9c9dc4bd4523b4531b6b8bac2"},{url:"assets/about.html-BWDsMCFA.js",revision:"293b8738b41569517d4d2bdefe8c658c"},{url:"assets/about.html-Cu3mbh-0.js",revision:"dde2047f768aa4ad28c586e9d7abb36b"},{url:"assets/advanced-edit.html-BxUwAjfx.js",revision:"546d8fd245cdd3d67d14314c37f4bfe4"},{url:"assets/advanced-edit.html-CIWJT-LR.js",revision:"89f2059a4ff11b529b2304b791cac3eb"},{url:"assets/app-D8pjAw51.js",revision:"8148d8fb2f4e69f08dd422f51ff2ef6c"},{url:"assets/changelog.html-DBGT-5y2.js",revision:"72c4995f1d16ee9bc4a925e95e21b890"},{url:"assets/changelog.html-DQRY0spN.js",revision:"286bf96a87ce34ba0f1b5a1cf1a6985e"},{url:"assets/configuration.html-98lksL8g.js",revision:"26a2366d3d27981b80114eb3c6d8e2b1"},{url:"assets/configuration.html-CYRypSw0.js",revision:"5ba549e6adbdac86f81c98a084263887"},{url:"assets/double_click-BegL5qse.js",revision:"d4e3baa9138163e224132ee6d9db2324"},{url:"assets/double_click-BYwHHyji.js",revision:"d4e3baa9138163e224132ee6d9db2324"},{url:"assets/edit.html-B_GcfA_V.js",revision:"1638a324c2c005a0097f4251a4ab7449"},{url:"assets/edit.html-BsUXCiLo.js",revision:"184cb36030356cac47ca931ae93b4f22"},{url:"assets/export.html-D9LYCZjj.js",revision:"c2e8b10e1d60c4bc2405009b1f2535fe"},{url:"assets/export.html-kAH6W3MW.js",revision:"a6164236f822584b335a2547e204e47f"},{url:"assets/FAQ.html-DmX2r3z2.js",revision:"2e3726a2e2a64812145871aee4a9f571"},{url:"assets/FAQ.html-DsJoPm2j.js",revision:"c788ded3c169b3db62b80dd45dc728ca"},{url:"assets/file-formats.html-272bNPLQ.js",revision:"9fb32c4a3f1e001fa85b8315b7ddfbd1"},{url:"assets/file-formats.html-Br-wYA1i.js",revision:"2a98fac205ab1a1cd0762523ab66411c"},{url:"assets/getting-started.html-D5ix_JQf.js",revision:"246e626bfee3fc9281afb426691acf44"},{url:"assets/getting-started.html-DczlB_fS.js",revision:"6a5aa5ccd8233518e4479ed1b47a9eca"},{url:"assets/Icon-DLRpd7ve.js",revision:"0301c991256466dd5ec418de3a653ff6"},{url:"assets/import.html-CzfyMEff.js",revision:"6ef4d21266b623a1bfdf54310a246864"},{url:"assets/import.html-Dul7UawO.js",revision:"1002211e7bfa5556e673f833cfb7d86c"},{url:"assets/index-B-M8YVCw.js",revision:"40d7ea1826cc2380bc051be77c0bdcdc"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-BsfuAgj8.js",revision:"408d86df7cd8d598ebb69a2b4a597249"},{url:"assets/index.html-BXICHM5l.js",revision:"af38c9d240736ae21007b0f90426a295"},{url:"assets/index.html-CnVTSFpi.js",revision:"7fef6e9c39b18e43cbd0ebe5a8ce349e"},{url:"assets/index.html-NSXgkMCu.js",revision:"0209c209366350c1baad7fe3397a44aa"},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/photoswipe.esm-DXWKOczD.js",revision:"8414c7616bec469bc22b7f465928e3eb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/project_create-4KHgMCk3.js",revision:"e8e98a9dad83bc6bc38fb357ca777c64"},{url:"assets/project_create-hsbAKOWO.js",revision:"09d298a60d71870cc0c2ab0d17b1417f"},{url:"assets/project.html-Cq-XR7EM.js",revision:"2b81f480c74c45192eb09279dcc2a0d8"},{url:"assets/project.html-M4S4x9B-.js",revision:"67f67c93de4a778d8e09ad778c3c98b6"},{url:"assets/setupDevtools-QXEOFQJV-C0RDTn0H.js",revision:"2a24cbbfa4a8cefa9af3d2995d90321c"},{url:"assets/shortcuts.html-8NXeJkbv.js",revision:"3e2bc98d6c7ea29b40be77942bead5f1"},{url:"assets/shortcuts.html-TBV0dvGi.js",revision:"5307558bed9daf6950d026ef36b2d86c"},{url:"assets/style-DVaoO8Ce.css",revision:"8fb0041b23dcbcf8d15312d657e9f0ff"},{url:"assets/timing.html-BNRcpRO0.js",revision:"2077be14fccf9522c72859cf0bfbb239"},{url:"assets/timing.html-DBIYUmrd.js",revision:"a040127eaaedab0aab480cafba0a59e8"},{url:"dragon-scales.svg",revision:"3dfaca8eb1393d90afbe20e2b32f5dfb"},{url:"layered-waves-haikei.svg",revision:"e498437fa11815e2026f6bcddd70be6a"},{url:"low-poly-grid-haikei.svg",revision:"df7bcb9eb6f4e4abc9c552246ef2f67a"},{url:"safari-pinned-tab.svg",revision:"be4cbd53ba1d30c42065f5fcbb26ea16"},{url:"slanted-gradient.svg",revision:"b5ed01a93b6d09437f5e222e4beb0402"},{url:"subtle-prism.svg",revision:"544715b8c062bd05b74bb8d9bc862e7e"},{url:"sun-tornado.svg",revision:"2a93dcc764b63f4b48f62177210f58f4"},{url:"index.html",revision:"0b41f61e9551e2728c1990004c3a3bea"},{url:"404.html",revision:"a3a01dfc3a71d888d3fc8d96737849c9"},{url:"android-chrome-192x192.png",revision:"997d2e6952747000cc15ef5b6f0a4f43"},{url:"android-chrome-512x512.png",revision:"a6d2a6cb634a916e7facd673f36419e8"},{url:"apple-touch-icon.png",revision:"2e48dc004e7aa5c31c0d7da80350a355"},{url:"assets/bad-chart-CT9cEuwr.png",revision:"65918e636eb33276c0b18e8263ccba1f"},{url:"assets/double_click-BqAtXJf9.gif",revision:"3efb7a8b94f33324845e7e26cfd9a226"},{url:"assets/drag_note-s7JH3kXR.gif",revision:"a6b0d745c41739ba1f0a302ccfab9ba3"},{url:"assets/drop-a-hold-BLY0VB8Q.gif",revision:"58416fbd28751dfa03b49dce71c5d5e9"},{url:"assets/drop-a-note-DkZMpQZk.gif",revision:"d6fcf6926c7e3dc36a77c25988d34075"},{url:"assets/multiside-select-BFLzLMha.gif",revision:"5274a972c1c90eb4e9d4ee777563b4ee"},{url:"assets/paste_note-Bgp1t1Rs.gif",revision:"dbe18bde892d78519eb5007685468e29"},{url:"assets/project_create-CZ0SITy0.png",revision:"c344582595636ec812fbf4748690e007"},{url:"assets/project_create-DKtYmsN2.png",revision:"a482e4543ba42ea416f16c5e15892abd"},{url:"assets/quick_duplicate-BIv-rsUg.gif",revision:"840328161c364e33ead67a8d84ad5ed8"},{url:"assets/select_note_2-DGC5eVqf.gif",revision:"cc39e152d311da32be35a861a9649101"},{url:"assets/select_note-BghNFm5e.gif",revision:"c5c12f461291c8c0765578cd91650098"},{url:"assets/select_note-DguEVLuN.gif",revision:"f0b4de92c095314e6f934b02523de4ee"},{url:"assets/side_faded-Dj1J12qr.gif",revision:"c710d880ece63671e89c8fecd5225fe9"},{url:"assets/switch_side-IrhmFoLG.gif",revision:"02b3c9219286129aedb71cebacffe6ce"},{url:"assets/visual-consistency-D1rKjplK.gif",revision:"e953706229311b4fb707d24273bb8cf0"},{url:"favicon-16x16.png",revision:"3b0dad5780881c5d646e5ca0dc3f5454"},{url:"favicon-32x32.png",revision:"1ceccbff58f7faaacac7725549389b47"},{url:"Icon.png",revision:"4cd948a5dde0a2b846488c2c99f4172d"},{url:"mstile-150x150.png",revision:"3af297743fbb2774a9a355e07d207692"}],{}),e.cleanupOutdatedCaches()}));
