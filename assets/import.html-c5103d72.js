import{_ as n,V as s,W as i,X as a,Y as e,Z as r,$ as d,a0 as o,F as c}from"./framework-a35b1124.js";const h={},p=o('<h1 id="谱面导入" tabindex="-1"><a class="header-anchor" href="#谱面导入" aria-hidden="true">#</a> 谱面导入</h1><p>本页面包含谱面导入的相关说明。</p><p>使用 <kbd>F2</kbd> 来导入所有格式的谱面。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有的谱面导入操作都是<strong>不可撤销</strong>的，因此确认操作并保存前请按需备份项目。</p></div><h2 id="导入-xml-谱面" tabindex="-1"><a class="header-anchor" href="#导入-xml-谱面" aria-hidden="true">#</a> 导入 .xml 谱面</h2>',5),l=a("kbd",null,"F2",-1),m=o('<p>你可以选择是否导入谱面物件与信息。导入的信息将会包含谱面难度、标题等。</p><div class="hint-container info"><p class="hint-container-title">关于 Dynamaker-modified</p><p>DyNode 提供对 Dynamaker-modified 谱面格式导入的完整支持。</p></div><h2 id="导入-osu-谱面" tabindex="-1"><a class="header-anchor" href="#导入-osu-谱面" aria-hidden="true">#</a> 导入 .osu 谱面</h2><p>你可以使用 <kbd>F2</kbd> 来导入 .osu 谱面。</p><p>导入的模式支持 osu! 包含的基础四种模式，针对 osu!mania 有特别的适配，这意味着你可以直接使用 DyNode 来进行 osu!mania 的转谱。导入的信息可以选择包括全部的 Timing Points ，但不会包含谱面所具有的元信息（标题、音乐等）。</p><p>DyNode 目前不支持 .osz 的导入，因为一个 .osz 包含多个谱面难度。目前你可以将 .osz 文件解压（.osz 是一个压缩文件），之后再导入其中包含的 .osu 文件。</p>',6);function u(_,f){const t=c("RouterLink");return s(),i("div",null,[p,a("p",null,[e("除了使用 "),l,e(" 来导入 .xml 谱面，你也可以在 "),r(t,{to:"/guide/project.html#%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE"},{default:d(()=>[e("新建项目")]),_:1}),e(" 时选择导入谱面文件。")]),m])}const k=n(h,[["render",u],["__file","import.html.vue"]]);export{k as default};
