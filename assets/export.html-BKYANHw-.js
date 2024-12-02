import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,d as a,e as o,f as m,a as l,r as d,o as p}from"./app-BZaB11-4.js";const s={},c={class:"hint-container tip"};function h(y,e){const n=d("RouteLink");return p(),r("div",null,[e[5]||(e[5]=t("h1",{id:"谱面导出",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#谱面导出"},[t("span",null,"谱面导出")])],-1)),e[6]||(e[6]=t("p",null,"本页面包含谱面导出的相关说明。",-1)),t("div",c,[e[3]||(e[3]=t("p",{class:"hint-container-title"},"提示",-1)),e[4]||(e[4]=t("p",null,"该功能一般用于在完成谱面/测试谱面需要发布/导入实机时，或者对切换到其它谱面编辑器存在需求时。",-1)),t("p",null,[e[1]||(e[1]=a("如果只是想保存谱面进度，请查看如何")),o(n,{to:"/guide/project.md/#%E4%BF%9D%E5%AD%98%E9%A1%B9%E7%9B%AE"},{default:m(()=>e[0]||(e[0]=[a("保存项目")])),_:1}),e[2]||(e[2]=a("。"))])]),e[7]||(e[7]=l('<h2 id="导出用于实机的-xml-谱面" tabindex="-1"><a class="header-anchor" href="#导出用于实机的-xml-谱面"><span>导出用于实机的 .xml 谱面</span></a></h2><p>使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。</p><p>导出的谱面可以在 Dynamite 平台游玩，详见 <a href="#%E5%AF%BC%E5%85%A5-dynamite-%E5%B9%B3%E5%8F%B0">导入 Dynamite 平台</a>。</p><p>.xml 谱面具体的包含内容详见 <a href="file-formats#xml">文件格式</a> 。</p><div class="hint-container important"><p class="hint-container-title">重要</p><p><strong>通过该功能导出的谱面不建议再次导入 DyNode、Dynamaker 等谱面编辑器。如果你想在 Dynamaker 上编辑导出的谱面，请查看<a href="#%E5%AF%BC%E5%87%BA%E9%80%82%E7%94%A8%E4%BA%8E-dynamaker-modified-%E7%9A%84-xml-%E8%B0%B1%E9%9D%A2%E6%A0%BC%E5%BC%8F">导出适用于 Dynamaker-modified 的 XML 谱面格式</a>。</strong></p><p>请确认以该功能导出的谱面不会被再次导入编辑，例如审核或修改。</p></div><h3 id="误差修正" tabindex="-1"><a class="header-anchor" href="#误差修正"><span>误差修正</span></a></h3><p>你可以选择在导出时使用误差修正功能。</p><p>该功能在默认的情况下将时间差在 2ms 以内的连续音符对齐到连续音符内最早的位置上以修正 2ms 以内的音符时间误差。</p><p>你也可以在配置文件中的<code>offsetCorrection</code>一项中调整这个数字，详见 <a href="configuration">配置</a> 。</p><p>使用该功能不会影响正在编辑的谱面，只有导出的谱面会得到修正。</p><h3 id="导入-dynamite-平台" tabindex="-1"><a class="header-anchor" href="#导入-dynamite-平台"><span>导入 Dynamite 平台</span></a></h3><p>.xml 谱面可以直接导入 Dynamite 进行游玩。阅读 <a href="https://www.bilibili.com/read/cv17021429" target="_blank" rel="noopener noreferrer">此处</a> 以了解如何导入谱面。</p><h2 id="导出适用于-dynamaker-modified-的-xml-谱面格式" tabindex="-1"><a class="header-anchor" href="#导出适用于-dynamaker-modified-的-xml-谱面格式"><span>导出适用于 Dynamaker-modified 的 XML 谱面格式</span></a></h2><p>使用 <kbd>F6</kbd> 导出适用于 Dynamaker-modified 的 XML 谱面。</p><p>通过该谱面格式导出的谱面将包含完整的可被 Dynamaker-modified 读取的 Timing 信息。</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>该谱面格式<strong>仅用于</strong> Dynamaker-modified 谱面编辑器的读取。 <strong>以该格式导出的谱面无法用于 Dynamite 等实机调试与发布场景</strong>，并可能存在一定的精度损失。</p></div>',16))])}const g=i(s,[["render",h],["__file","export.html.vue"]]),u=JSON.parse('{"path":"/guide/export.html","title":"谱面导出","lang":"zh-CN","frontmatter":{"description":"谱面导出 本页面包含谱面导出的相关说明。 提示 该功能一般用于在完成谱面/测试谱面需要发布/导入实机时，或者对切换到其它谱面编辑器存在需求时。 如果只是想保存谱面进度，请查看如何。 导出用于实机的 .xml 谱面 使用 F5 来导出 .xml 格式的谱面。 导出的谱面可以在 Dynamite 平台游玩，详见 导入 Dynamite 平台。 .xml 谱...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://dyn.iorinn.moe/en/guide/export.html"}],["meta",{"property":"og:url","content":"https://dyn.iorinn.moe/guide/export.html"}],["meta",{"property":"og:site_name","content":"DyNode"}],["meta",{"property":"og:title","content":"谱面导出"}],["meta",{"property":"og:description","content":"谱面导出 本页面包含谱面导出的相关说明。 提示 该功能一般用于在完成谱面/测试谱面需要发布/导入实机时，或者对切换到其它谱面编辑器存在需求时。 如果只是想保存谱面进度，请查看如何。 导出用于实机的 .xml 谱面 使用 F5 来导出 .xml 格式的谱面。 导出的谱面可以在 Dynamite 平台游玩，详见 导入 Dynamite 平台。 .xml 谱..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-03T04:20:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-03T04:20:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谱面导出\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T04:20:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"导出用于实机的 .xml 谱面","slug":"导出用于实机的-xml-谱面","link":"#导出用于实机的-xml-谱面","children":[{"level":3,"title":"误差修正","slug":"误差修正","link":"#误差修正","children":[]},{"level":3,"title":"导入 Dynamite 平台","slug":"导入-dynamite-平台","link":"#导入-dynamite-平台","children":[]}]},{"level":2,"title":"导出适用于 Dynamaker-modified 的 XML 谱面格式","slug":"导出适用于-dynamaker-modified-的-xml-谱面格式","link":"#导出适用于-dynamaker-modified-的-xml-谱面格式","children":[]}],"git":{"createdTime":1663561421000,"updatedTime":1717388406000,"contributors":[{"name":"Rin","email":"31349569+NagaseIori@users.noreply.github.com","commits":19},{"name":"NordLandeW","email":"31349569+NagaseIori@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"guide/export.md","localizedDate":"2022年9月19日","autoDesc":true}');export{g as comp,u as data};
