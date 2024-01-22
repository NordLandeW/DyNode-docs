import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as d,a,b as e,d as i,w as m,e as n}from"./app-xKLfg4jH.js";const h={},c=n('<h1 id="谱面导出" tabindex="-1"><a class="header-anchor" href="#谱面导出" aria-hidden="true">#</a> 谱面导出</h1><p>本页面包含谱面导出的相关说明。</p><h2 id="导出-xml-谱面" tabindex="-1"><a class="header-anchor" href="#导出-xml-谱面" aria-hidden="true">#</a> 导出 .xml 谱面</h2><p>使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。</p><p>导出的谱面可以在以下平台编辑 / 调试 / 游玩：</p><ul><li>Dynamite</li><li>Dynamaker</li><li>Dynamaker-modified</li></ul>',6),p=n('<h3 id="误差修正" tabindex="-1"><a class="header-anchor" href="#误差修正" aria-hidden="true">#</a> 误差修正</h3><p>如果你打算将导出的谱面进行实机测试或发布，则可以在导出时使用误差修正功能。</p><p>该功能在默认的情况下将时间差在 2ms 以内的连续音符对齐到连续音符内最早的位置上以修正 2ms 以内的音符时间误差。</p><p>使用该功能不会影响正在编辑的谱面，只有导出的谱面会得到修正。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>通过该功能导出的谱面无法用于 Dynamaker 等谱面编辑器的正常编辑。</strong></p><p>请确认以该功能导出的谱面不会被再次导入编辑，例如审核或修改。</p></div><h3 id="在-dynamite-上游玩" tabindex="-1"><a class="header-anchor" href="#在-dynamite-上游玩" aria-hidden="true">#</a> 在 Dynamite 上游玩</h3>',6),u={href:"https://www.bilibili.com/read/cv17021429",target:"_blank",rel:"noopener noreferrer"},f=n('<h2 id="导出适用于-dynamaker-modified-的谱面格式" tabindex="-1"><a class="header-anchor" href="#导出适用于-dynamaker-modified-的谱面格式" aria-hidden="true">#</a> 导出适用于 Dynamaker-modified 的谱面格式</h2><p>使用 <kbd>Ctrl+F5</kbd> 导出适用于 Dynamaker-modified 的谱面。</p><p>通过该谱面格式导出的谱面将包含完整的可被 Dynamaker-modified 读取的 Timing 信息。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该谱面格式<strong>仅用于</strong> Dynamaker-modified 谱面编辑器的读取。 <strong>以该格式导出的谱面无法用于 Dynamite 等实机调试与发布场景</strong>，并可能存在一定的精度损失。</p></div><h2 id="对校时的默认处理" tabindex="-1"><a class="header-anchor" href="#对校时的默认处理" aria-hidden="true">#</a> 对校时的默认处理</h2><p>若你的谱面不是从 Dynamaker 导入且没有设置全局 Bar 信息（这意味着你也没有设置默认 Bar 配置），则导出的 .xml 谱面中将会设置以下默认值：</p>',6),_=a("ul",null,[a("li",null,[e("Bar Per Minute : 校时中第一个 Timing Point 的 BPM 的 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"1"),a("mi",{mathvariant:"normal"},"/"),a("mn",null,"4")]),a("annotation",{encoding:"application/x-tex"},"1/4")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1/4")])])]),e(" 。")]),a("li",null,"Bar Offset : 设置为第一个 Timing Point 的 offset 对应 Bar 的负数，代表整体 Bar 值的偏移量。")],-1),x=a("p",null,"所有音符的时间都将通过此默认 Bar 信息配置转化为其所在的 Bar 。",-1);function k(g,y){const r=t("RouterLink"),s=t("ExternalLinkIcon");return o(),d("div",null,[c,a("p",null,[e(".xml 谱面具体的包含内容详见 "),i(r,{to:"/guide/file-formats.html#xml"},{default:m(()=>[e("文件格式")]),_:1}),e(" 。")]),p,a("p",null,[e(".xml 谱面可以直接导入 Dynamite 进行游玩。阅读 "),a("a",u,[e("此处"),i(s)]),e(" 以了解如何导入谱面。")]),f,_,x])}const B=l(h,[["render",k],["__file","export.html.vue"]]);export{B as default};
