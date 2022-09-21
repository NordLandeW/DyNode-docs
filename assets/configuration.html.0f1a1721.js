import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,a as t,b as n,w as r,d as a,e,r as l}from"./app.33c7a564.js";const s={},h=a('<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>\u672C\u9875\u9762\u5305\u542B DyNode \u7684\u914D\u7F6E\u8BF4\u660E\u3002</p><p>\u6240\u6709 DyNode \u7684\u914D\u7F6E\u90FD\u5728\u7B2C\u4E00\u6B21\u542F\u52A8\u5E76\u5173\u95ED\u540E\u81EA\u52A8\u5B58\u50A8\u5728\u6587\u4EF6 <code>config.json</code> \u4E2D\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728\u5173\u95ED\u6E38\u620F\u7684\u72B6\u6001\u4E0B\u7F16\u8F91 <code>config.json</code> \u5E76\u4FDD\u5B58\u540E\u542F\u52A8\u6E38\u620F\u6765\u4EE4\u6539\u52A8\u751F\u6548\u3002</p></div><h2 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E</h2><h3 id="fullscreen" tabindex="-1"><a class="header-anchor" href="#fullscreen" aria-hidden="true">#</a> fullscreen</h3><ul><li>\u7C7B\u578B\uFF1A<code>0 | 1</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul><p>\u542F\u52A8\u65F6\u662F\u5426\u4E3A\u5168\u5C4F\u6A21\u5F0F\u3002\u5C06\u4F1A\u8BB0\u5F55\u4E0A\u4E00\u6B21 DyNode \u65F6\u5173\u95ED\u7684\u5168\u5C4F\u72B6\u6001\u3002</p><h3 id="resolutionw-resolutionh" tabindex="-1"><a class="header-anchor" href="#resolutionw-resolutionh" aria-hidden="true">#</a> resolutionW / resolutionH</h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>1920</code> / <code>1080</code></li></ul><p>DyNode \u7684\u6E32\u67D3\u5206\u8FA8\u7387\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>DyNode \u76EE\u524D\u6CA1\u6709\u5BF9\u5176\u5B83\u5206\u8FA8\u7387\u4F5C\u51FA\u5F88\u597D\u7684\u652F\u6301\u3002</p><p>\u8C03\u6574\u5206\u8FA8\u7387\u4F1A\u4F7F\u754C\u9762\u7684\u663E\u793A\u51FA\u73B0\u96BE\u4EE5\u9884\u6599\u7684\u95EE\u9898\u3002</p></div><h3 id="fps" tabindex="-1"><a class="header-anchor" href="#fps" aria-hidden="true">#</a> FPS</h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A\u5C4F\u5E55\u5237\u65B0\u7387</li></ul><p>DyNode \u8FD0\u884C\u7684\u5E27\u7387\u3002</p><h3 id="autosave" tabindex="-1"><a class="header-anchor" href="#autosave" aria-hidden="true">#</a> autosave</h3><ul><li>\u7C7B\u578B\uFF1A<code>0 | 1</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul><p>\u662F\u5426\u5F00\u542F\u81EA\u52A8\u4FDD\u5B58\u3002</p><h3 id="language" tabindex="-1"><a class="header-anchor" href="#language" aria-hidden="true">#</a> language</h3><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>&#39;zh-cn&#39;</code></li></ul><p>DyNode \u7684\u663E\u793A\u8BED\u8A00\u3002</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul><p>DyNode \u7684\u663E\u793A\u4E3B\u9898\u3002</p><h3 id="autoupdate" tabindex="-1"><a class="header-anchor" href="#autoupdate" aria-hidden="true">#</a> autoupdate</h3><ul><li>\u7C7B\u578B\uFF1A<code>0 | 1</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>1</code></li></ul><p>\u662F\u5426\u5F00\u542F\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6700\u65B0\u7684\u7248\u672C\u5C06\u4F1A\u5E26\u6765\u65B0\u7684\u529F\u80FD\u3001\u9519\u8BEF\u4FEE\u590D\u4EE5\u53CA\u6027\u80FD\u6539\u8FDB\uFF0C\u4E14 DyNode \u76EE\u524D\u4ECD\u4E0D\u591F\u7A33\u5B9A\u3002\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u5173\u95ED\u6B64\u9879\u3002</p></div><h2 id="\u8FDB\u9636\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636\u914D\u7F6E" aria-hidden="true">#</a> \u8FDB\u9636\u914D\u7F6E</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u9664\u975E\u5FC5\u8981\uFF0C\u5426\u5219\u5EFA\u8BAE\u4FDD\u6301\u8FD9\u4E9B\u9879\u76EE\u4E3A\u9ED8\u8BA4\u503C\u3002</p></div><h3 id="fmod-mp3-delay" tabindex="-1"><a class="header-anchor" href="#fmod-mp3-delay" aria-hidden="true">#</a> FMOD_MP3_DELAY</h3><ul><li>\u7C7B\u578B\uFF1A<code>number</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>60.0</code></li></ul>',32),u=e("FMOD \u64AD\u653E .mp3 \u683C\u5F0F\u6587\u4EF6\u65F6\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF08\u4EE5\u6BEB\u79D2\u8BA1\uFF09\u3002\u8BE6\u89C1 "),p=e("\u6821\u65F6"),m=e(" \u3002"),f=a('<h2 id="\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F" aria-hidden="true">#</a> \u4FE1\u606F</h2><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u6B64\u9879\u5305\u542B\u7684\u914D\u7F6E\u7686\u4E3A\u81EA\u52A8\u751F\u6210\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u4F60\u90FD\u4E0D\u5E94\u5F53\u4FEE\u6539\u8FD9\u4E9B\u9879\u76EE\u3002</p></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li></ul><p>\u81EA\u52A8\u751F\u6210\uFF0C\u4EE3\u8868\u914D\u7F6E\u6587\u4EF6\u5BF9\u5E94\u7684 DyNode \u7248\u672C\u3002</p>',5);function _(v,b){const i=l("RouterLink");return d(),c("div",null,[h,t("p",null,[u,n(i,{to:"/guide/timing.html#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%A4%84%E7%90%86"},{default:r(()=>[p]),_:1}),m]),f])}const N=o(s,[["render",_],["__file","configuration.html.vue"]]);export{N as default};
