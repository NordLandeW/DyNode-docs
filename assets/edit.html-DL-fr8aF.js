import{_ as d}from"./double_click-BegL5qse.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,b as n,d as e,e as t,f as l,r as h,o}from"./app-BZaB11-4.js";const c="/assets/drop-a-note-DkZMpQZk.gif",k="/assets/drop-a-hold-BLY0VB8Q.gif",b="/assets/drag_note-s7JH3kXR.gif",g="/assets/select_note_2-DGC5eVqf.gif",m="/assets/select_note-BghNFm5e.gif",f="/assets/quick_duplicate-BIv-rsUg.gif",u="/assets/paste_note-Bgp1t1Rs.gif",x="/assets/multiside-select-BFLzLMha.gif",v="/assets/visual-consistency-D1rKjplK.gif",y="/assets/switch_side-IrhmFoLG.gif",C="/assets/side_faded-Dj1J12qr.gif",E={};function B(A,a){const s=h("RouteLink");return o(),r("div",null,[a[8]||(a[8]=i('<h1 id="谱面编辑" tabindex="-1"><a class="header-anchor" href="#谱面编辑"><span>谱面编辑</span></a></h1><p>本页面讲解 DyNode 谱面编辑的基本要素。</p><h2 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式"><span>编辑模式</span></a></h2><p>DyNode 共有五种编辑模式，以数字键 <kbd>1</kbd> ~ <kbd>5</kbd> 来进行切换。</p><ul><li>放置模式：数字键 <kbd>1</kbd> ~ <kbd>3</kbd> 来放置音符。详见 <a href="#%E6%94%BE%E7%BD%AE%E9%9F%B3%E7%AC%A6">放置音符</a> 。</li><li>编辑模式：数字键 <kbd>4</kbd> 来编辑音符。例如选中音符、编辑音符、删除音符等。详见 <a href="#%E9%9F%B3%E7%AC%A6">音符</a>。</li><li>预览模式：数字键 <kbd>5</kbd> 来对谱面进行预览。所有的特效在此模式都将默认开启，所有的编辑功能都将在此模式下关闭。</li></ul><h2 id="音符" tabindex="-1"><a class="header-anchor" href="#音符"><span>音符</span></a></h2><p>音符共有三种类型。</p><ul><li>Note (Tap): 单点音符，最基本的音符</li><li>Chain (Slide): 滑键，只要手指有放置就能判定的音符</li><li>Hold: 长按直至尾部判定完全再松开的音符</li></ul><p>除此以外，在 xml 格式数据的储存中也有额外的类型：</p><ul><li>Sub: Hold 的尾部音符，仅所在时间具有有意义的数据</li></ul><h3 id="放置音符" tabindex="-1"><a class="header-anchor" href="#放置音符"><span>放置音符</span></a></h3><ol><li>数字键 <kbd>1</kbd> ~ <kbd>3</kbd> 切换至你想放置的音符。</li><li>找到你想放置的位置，长按 Note 拖拽调整长度，松开放置。</li><li>如果你放置的是 Hold，下一步继续选择 Hold 的尾端并点按放置。</li></ol><p>最后一次手动放置单个音符的宽度将作为下一次放置音符的 <em>默认宽度</em> 。</p><div style="text-align:center;"><figure><img src="'+c+'" alt="放置 Note" width="400" tabindex="0" loading="lazy"><figcaption>放置 Note</figcaption></figure><figure><img src="'+k+'" alt="放置 Hold" width="400" tabindex="0" loading="lazy"><figcaption>放置 Hold</figcaption></figure></div><h3 id="移动音符" tabindex="-1"><a class="header-anchor" href="#移动音符"><span>移动音符</span></a></h3><p>拖拽。</p><p>若想整体拖拽 Hold ，则在单个 Hold 被选中的情况下按住 <kbd>Ctrl</kbd> 拖动头部即可。在多选的情况下 Hold 将默认被整体拖拽。</p><div style="text-align:center;"><figure><img src="'+b+'" alt="拖拽音符" width="400" tabindex="0" loading="lazy"><figcaption>拖拽音符</figcaption></figure></div><h3 id="选中音符" tabindex="-1"><a class="header-anchor" href="#选中音符"><span>选中音符</span></a></h3><p>拖拽并框选。</p><p>你可以按住 <kbd>Ctrl</kbd> 键来多选音符或反选音符。</p><div style="text-align:center;"><figure><img src="'+g+'" alt="多选音符" width="400" tabindex="0" loading="lazy"><figcaption>多选音符</figcaption></figure></div><h3 id="吸附音符" tabindex="-1"><a class="header-anchor" href="#吸附音符"><span>吸附音符</span></a></h3><p>双击音符。</p><p>当吸附多个被选中的音符时，以被双击的音符作为吸附的中心。</p><p>再次单击鼠标将被吸附的音符放置。</p><div style="text-align:center;"><figure><img src="'+d+'" alt="吸附音符" width="400" tabindex="0" loading="lazy"><figcaption>吸附音符</figcaption></figure></div><h3 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作"><span>批量操作</span></a></h3><h4 id="批量移动音符-吸附音符" tabindex="-1"><a class="header-anchor" href="#批量移动音符-吸附音符"><span>批量移动音符 / 吸附音符</span></a></h4><p>在选中音符后，使用鼠标拖拽 / 吸附被选中的音符。</p><h4 id="批量删除音符" tabindex="-1"><a class="header-anchor" href="#批量删除音符"><span>批量删除音符</span></a></h4><p>在选中音符后，按下 <kbd>Backspace</kbd> 或 <kbd>Delete</kbd> 即可。</p><h4 id="批量调节音符宽度" tabindex="-1"><a class="header-anchor" href="#批量调节音符宽度"><span>批量调节音符宽度</span></a></h4><p>在选中音符后，按下 <kbd>Ctrl</kbd> 并使用鼠标滚轮来快速调节音符宽度，或使用 <kbd>Ctrl</kbd> + <kbd>V</kbd> 来快速粘贴 <em>默认宽度</em> 。</p><h4 id="复制音符宽度" tabindex="-1"><a class="header-anchor" href="#复制音符宽度"><span>复制音符宽度</span></a></h4><p>在选中 <strong>单个</strong> 音符后，使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 来将此音符的宽度作为 <em>默认宽度</em> 。</p><h4 id="复制音符" tabindex="-1"><a class="header-anchor" href="#复制音符"><span>复制音符</span></a></h4><p>在选中音符后，按下 <kbd>Ctrl</kbd> + <kbd>C</kbd> ，右下角即会提示复制音符数量。</p><div style="text-align:center;"><figure><img src="'+m+'" alt="复制音符" width="400" tabindex="0" loading="lazy"><figcaption>复制音符</figcaption></figure></div><p>使用 <kbd>Ctrl</kbd> + <kbd>D</kbd> 可以快速复制选中的音符到这些音符中的最晚音符之后的下一个节拍线上。</p><div style="text-align:center;"><figure><img src="'+f+'" alt="快速复制音符" width="600" tabindex="0" loading="lazy"><figcaption>快速复制音符</figcaption></figure></div><h4 id="粘贴音符" tabindex="-1"><a class="header-anchor" href="#粘贴音符"><span>粘贴音符</span></a></h4><p>在复制音符后，按下 <kbd>Ctrl</kbd> + <kbd>V</kbd> ，在适当的位置像放置普通音符那样放置复制音符即可。</p><p>粘贴音符的时候，默认使用时间最早的音符当做选择的中心。如果你想更换这个中心（比如，你想以末尾的音符作为中心），用 <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> 来切换。</p><p>可以用 <kbd>Esc</kbd> 来退出粘贴，也可以直接使用数字键切换模式。</p><p>可以用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 来切换你想要粘贴到的下落面。</p><p>可以用 <kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>2</kbd> 来批量转换你想粘贴的音符。</p><div style="text-align:center;"><figure><img src="'+u+'" alt="粘贴音符" width="400" tabindex="0" loading="lazy"><figcaption>粘贴音符</figcaption></figure></div><h3 id="异侧多选" tabindex="-1"><a class="header-anchor" href="#异侧多选"><span>异侧多选</span></a></h3><p>切换编辑侧不会导致选中的音符被取消选择，因此你可以多选不同侧面的音符。例如，你可以在选择左侧的多个音符后，切换到正面并按住 <kbd>Ctrl</kbd> 键继续同时多选正面的多个音符。</p><p>音符仍旧可以进行批量操作，如复制、粘贴、吸附、拖拽移动、修改宽度等。但在异侧多选的情况下，对其进行编辑的行为与逻辑可能会有所变化。</p><div style="text-align:center;"><figure><img src="'+x+'" alt="异侧多选" width="400" tabindex="0" loading="lazy"><figcaption>异侧多选</figcaption></figure></div><h4 id="异侧多选属性绑定" tabindex="-1"><a class="header-anchor" href="#异侧多选属性绑定"><span>异侧多选属性绑定</span></a></h4><p>默认的情况下，异侧多选时所有被选择的音符所具有的属性都会被关联。如果你拖拽了正面的音符，侧面的音符也会相应地被移动。</p><p>如果你想避免这种情况发生，使用 <kbd>B</kbd> 来取消属性的绑定。此时只有当前编辑侧的音符能够被拖拽。</p><p>在进行<a href="#%E5%8F%8C%E4%BE%A7%E7%BC%96%E8%BE%91">双侧编辑</a>时，左右两侧的音符将不被此功能视作不同的侧面。</p><p>这一功能目前仅在拖拽音符时生效。</p><h3 id="全选音符" tabindex="-1"><a class="header-anchor" href="#全选音符"><span>全选音符</span></a></h3><p>使用 <kbd>Ctrl+A</kbd> 来选中屏幕可见范围内的所有音符。</p><h3 id="对称-镜像音符" tabindex="-1"><a class="header-anchor" href="#对称-镜像音符"><span>对称 / 镜像音符</span></a></h3><p>选中音符后，使用 <kbd>M</kbd> 来以该编辑侧的中心为准镜像音符。使用 <kbd>Ctrl+M</kbd> 来镜像复制音符。</p><p>选中<strong>侧面</strong>音符后，使用 <kbd>R</kbd> 来将音符对称移动到另一侧面。使用 <kbd>Ctrl+R</kbd> 来对称复制音符。</p><h3 id="撤销与还原" tabindex="-1"><a class="header-anchor" href="#撤销与还原"><span>撤销与还原</span></a></h3><p>使用 <kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Y</kbd> 来撤销与还原。</p><h2 id="默认宽度" tabindex="-1"><a class="header-anchor" href="#默认宽度"><span>默认宽度</span></a></h2><p>默认宽度是你在放置 <strong>单个音符</strong> 时的设置宽度。</p><h3 id="设置默认宽度" tabindex="-1"><a class="header-anchor" href="#设置默认宽度"><span>设置默认宽度</span></a></h3><p>你可以在放置 <strong>单个音符</strong> 时，横向（或纵向）拖动鼠标来简单的更改默认宽度。</p><p>你也可以使用 <kbd>K</kbd> 来直接输入你想要的默认宽度值。它会修改<strong>当前编辑侧</strong>的默认宽度值。</p><p>你也可以选中 <strong>单个音符</strong> 后，使用 <kbd>Ctrl+C</kbd> 来将此音符的宽度作为默认宽度。</p><h3 id="设置默认宽度模式" tabindex="-1"><a class="header-anchor" href="#设置默认宽度模式"><span>设置默认宽度模式</span></a></h3><p>DyNode 提供四种设置默认宽度的模式，因为在 Dynamix 中，正侧面设置的同一宽度下，侧面的音符宽度以像素计为正面的一半。例如，正面与侧面的音符在宽度皆为 <code>1.0</code> 的情况下，正面的音符宽度为 <code>300</code> 像素，而侧面的音符宽度只为 <code>150</code> 像素。这同样也体现在游戏的判定上。</p><p>使用 <kbd>L</kbd> 来更改设置默认宽度的模式。一共有四种设置默认宽度的模式，这四种模式的默认宽度设置是全部分离的（通俗来讲，你在一个模式下改变了默认宽度，它不会影响到任何其它模式下的默认宽度设置），因此你可以根据情况来灵活切换默认宽度模式。</p><h4 id="宽度一致" tabindex="-1"><a class="header-anchor" href="#宽度一致"><span>宽度一致</span></a></h4><p>这是 DyNode 默认的设置默认宽度模式。在该模式下，正侧面的默认宽度实时绑定并完全相等。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这同样也是 Dynamaker 默认使用的处理正侧面默认宽度的方式。如果你感觉此功能过于复杂且可能对你没有帮助，则你无需更改设置默认宽度模式。</p></div><h4 id="视觉一致" tabindex="-1"><a class="header-anchor" href="#视觉一致"><span>视觉一致</span></a></h4><p>在该模式下，正侧面的默认宽度实时绑定，且侧面的默认宽度一定为正面的两倍。</p><p>例如，如果你在正面修改默认宽度为 1.0，则侧面的默认宽度也会同步修改为 2.0。相反同理。</p><p>这个模式可以保证你在三面上放置的音符在视觉上是完全等宽的。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>与其他模式不同，在该默认宽度模式下，粘贴 / 吸附的音符也会自动调整宽度并保持视觉一致。</p><div style="text-align:center;"><figure><img src="'+v+'" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div></div><h4 id="正侧面分离" tabindex="-1"><a class="header-anchor" href="#正侧面分离"><span>正侧面分离</span></a></h4><p>在该模式下，正侧面的默认宽度是分离的，而左右侧面的默认宽度是实时绑定的。</p><p>通俗来讲，你在正面设置默认宽度时，侧面的默认宽度不会更改。相反同理。</p><h4 id="三面分离" tabindex="-1"><a class="header-anchor" href="#三面分离"><span>三面分离</span></a></h4><p>在该模式下，所有编辑侧的默认宽度是全部分离的。</p><p>通俗来讲，你在任何一个编辑侧设置默认宽度时都不会影响到其它编辑侧的默认宽度。</p><h2 id="编辑侧" tabindex="-1"><a class="header-anchor" href="#编辑侧"><span>编辑侧</span></a></h2><h3 id="切换编辑侧" tabindex="-1"><a class="header-anchor" href="#切换编辑侧"><span>切换编辑侧</span></a></h3><p>用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 拖拽来切换编辑侧。</p><p>亮起的判定线代表你正在编辑的侧面。</p><p>可选的编辑侧包括：</p><ul><li>正面</li><li>左侧</li><li>右侧</li><li><a href="#%E5%8F%8C%E4%BE%A7%E7%BC%96%E8%BE%91">双侧</a></li></ul><div style="text-align:center;"><figure><img src="'+y+'" alt="右键切换编辑侧" width="400" tabindex="0" loading="lazy"><figcaption>右键切换编辑侧</figcaption></figure></div><h3 id="双侧编辑" tabindex="-1"><a class="header-anchor" href="#双侧编辑"><span>双侧编辑</span></a></h3><p>额外的，你可以用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 上划以切换到双侧编辑，此时你可以同时对左右两侧的音符进行无缝的编辑。</p><p>在该模式下，一些编辑的交互逻辑可能会有所改变。</p><h3 id="透明化非编辑侧音符" tabindex="-1"><a class="header-anchor" href="#透明化非编辑侧音符"><span>透明化非编辑侧音符</span></a></h3><p>按下 <kbd>F</kbd> 即可隐去非编辑侧音符。</p><div style="text-align:center;"><figure><img src="'+C+'" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h3 id="切换侧面下落类型" tabindex="-1"><a class="header-anchor" href="#切换侧面下落类型"><span>切换侧面下落类型</span></a></h3><p>将编辑侧切换到左侧或右侧后，按下 <kbd>Ctrl</kbd> + <kbd>F</kbd> 来切换此侧面的下落类型。</p><ul><li>MULTI: 可以放置 Note, Hold 与 Chain 三种类型的音符</li><li>PAD: 可以放置 Note 与 Hold 两种类型的音符。</li><li>MIXER: 可以放置 Chain 类型的音符，带有滑板</li></ul><p>目前的版本实际上对三种模式的音符放置都不带有严格限制。</p><h2 id="网格吸附与拍线" tabindex="-1"><a class="header-anchor" href="#网格吸附与拍线"><span>网格吸附与拍线</span></a></h2><p>开启纵向网格吸附与拍线的前提是正确配置 Timing Point ，详看 <a href="/guide/timing">Timing</a> 页面。</p><h3 id="节拍线" tabindex="-1"><a class="header-anchor" href="#节拍线"><span>节拍线</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若不存在任何 Timing Point ，则拍线不会被显示。</p></div><p>使用 <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> 来调整对应编辑侧的节拍线透明度。共三档：0% / 50% / 100% 。</p><h3 id="节拍线样式" tabindex="-1"><a class="header-anchor" href="#节拍线样式"><span>节拍线样式</span></a></h3><p>使用 <kbd>J</kbd> 来修改节拍线的样式。共四种样式：默认 / 等长 / 单色 / 经典。</p><p>在等长模式下，所有的节拍线的长度都是相同的。在单色模式下，节拍线不具有颜色。</p><p>经典模式同时启用了等长模式与单色模式。</p><h3 id="节拍细分-组" tabindex="-1"><a class="header-anchor" href="#节拍细分-组"><span>节拍细分（组）</span></a></h3><p>使用 <kbd>C</kbd> / <kbd>V</kbd> 来切换节拍细分的细密程度。</p><p>使用 <kbd>G</kbd> 来切换节拍分组。</p><p>目前支持的节拍细分有：</p><ul><li>A 组：1/2，1/3 为基础的细分组，包括 1/4, 1/8, 1/6, 1/12 等。</li><li>B 组：比较少见的 1/5，1/7 为基础的细分组，包括 1/10, 1/14, 1/20 等。</li></ul><h3 id="自定义节拍细分" tabindex="-1"><a class="header-anchor" href="#自定义节拍细分"><span>自定义节拍细分</span></a></h3><p>使用 <kbd>`</kbd> 来设置自定义节拍细分<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">1/x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/</span><span class="mord mathnormal">x</span></span></span></span>。其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 可以为任意合法（<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>≥</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\\geq 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>）的正整数。</p><h3 id="网格吸附的开关" tabindex="-1"><a class="header-anchor" href="#网格吸附的开关"><span>网格吸附的开关</span></a></h3><p>使用 <kbd>Z</kbd> 来开关纵向（时间）网格吸附。</p><p>使用 <kbd>X</kbd> 来开关横向（位置）网格吸附。</p><h2 id="编辑界面" tabindex="-1"><a class="header-anchor" href="#编辑界面"><span>编辑界面</span></a></h2><h3 id="回放预览" tabindex="-1"><a class="header-anchor" href="#回放预览"><span>回放预览</span></a></h3><p>使用 <kbd>Enter</kbd> 来从头开始预览你的谱面。</p><p>这会将你的编辑模式设置为预览模式。详见 <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F">编辑模式</a> 。</p><h3 id="设置背景图片" tabindex="-1"><a class="header-anchor" href="#设置背景图片"><span>设置背景图片</span></a></h3><p>使用 <kbd>F4</kbd> 来设置背景图片。</p><p>背景图片可以是常用图片格式，如 JPG/JPEG/PNG 文件。</p><h3 id="设置背景视频" tabindex="-1"><a class="header-anchor" href="#设置背景视频"><span>设置背景视频</span></a></h3><p>使用 <kbd>F4</kbd> 来导入背景视频。导入的背景视频将不会播放声音，且只在 <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F">预览模式</a> 下进行播放。</p><p>DyNode 对导入的背景视频格式有一定要求，我们建议在使用视频文件时对视频文件作一定的转码与压缩处理。你可以在 <a href="https://osu.ppy.sh/wiki/zh/Guides/Compressing_files#video" target="_blank" rel="noopener noreferrer">这篇指南</a> 中看到详细的处理视频的方法。</p><p>如果你使用 <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a> 对视频进行处理，则可以参考以下命令行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c:v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libx264</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -crf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -preset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fast</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -an</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -map_metadata</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -map_chapters</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -vf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scale=-1:720</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> output.mp4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你已经安装好了 FFmpeg 并将其安装路径设置到 PATH 中，则可以将该命令存储到 <code>.bat</code> 后缀名的文本文件中并保存执行。</p><p>你应当将上方命令中的 <code>input</code> 替换成你想要转码的视频文件名（如 <code>video.mp4</code> ），命令将会在同一文件夹下导出转换后的视频文件 <code>output.mp4</code>。</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>在设置背景视频之前，请确认你已经将视频文件按照上方指南转码成受支持的格式。</p><p>如果你使用背景视频出现了包括但不限于以下问题，请尝试保存项目并<strong>重启应用</strong>，若问题依旧，你可以选择<strong>重设背景</strong>来删除已经设置的图片与视频，或尝试更换背景视频文件：</p><ul><li>特定视频导入超时（你的视频文件格式可能不受支持）</li><li>所有视频导入超时</li><li>视频卡顿、音画严重不同步</li></ul></div><h3 id="重设背景" tabindex="-1"><a class="header-anchor" href="#重设背景"><span>重设背景</span></a></h3><p>使用 <kbd>Ctrl+F4</kbd> 来重设所有背景，包括图片与视频。</p><p>重设背景将不会影响硬盘上的文件。</p><h3 id="切换小节数-时间显示" tabindex="-1"><a class="header-anchor" href="#切换小节数-时间显示"><span>切换小节数/时间显示</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>配置 Timing 以正确显示小节数。</p></div><p>使用 <kbd>Ctrl+B</kbd> 将音符显示的信息从毫秒切换至小节数（Bar）显示。</p>',144)),n("p",null,[a[1]||(a[1]=e("关于小节数的具体说明，请参考 ")),t(s,{to:"/guide/timing.html#%E6%97%B6%E9%97%B4%E4%B8%8E%E5%B0%8F%E8%8A%82%E6%95%B0"},{default:l(()=>a[0]||(a[0]=[e("Timing/时间与小节数")])),_:1}),a[2]||(a[2]=e("。"))]),a[9]||(a[9]=i('<h2 id="延迟调整" tabindex="-1"><a class="header-anchor" href="#延迟调整"><span>延迟调整</span></a></h2><p>你可以在 DyNode 中分别调整音乐播放与谱面音符的延迟。</p><h3 id="批量调整谱面音符时间" tabindex="-1"><a class="header-anchor" href="#批量调整谱面音符时间"><span>批量调整谱面音符时间</span></a></h3><p>使用 <kbd>-/=</kbd> 来快速向前或向后调整当前编辑谱面音符所在的时间。</p><p>使用 <kbd>U</kbd> 来手动输入这个时间进行精准的调整。单位为毫秒。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>该功能调整的对象为谱面中<strong>已经存在</strong>的所有音符与Timing Points。</p><p>DyNode 将为谱面内的所有音符与Timing Points所在的时间<strong>加上</strong>你所输入的时间。</p><p>例如，原本的音符所在的位置是音乐开始后的 150ms。当你使用批量调整时间输入 30ms 后，所有音符所在的位置都会向后推移 30ms。对这个音符而言，其在调整之后所在的新的位置是音乐开始后的 180ms。</p><p>这个功能可以用于调整谱面在实际设备上的延迟。</p></div><h3 id="设备音乐播放延迟调整" tabindex="-1"><a class="header-anchor" href="#设备音乐播放延迟调整"><span>设备音乐播放延迟调整</span></a></h3><p>使用 <kbd>Ctrl + -/=</kbd> 来快速调整设备音乐播放的延迟。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>该延迟将与 MP3 固有的延迟 <code>FMOD_MP3_DELAY</code> 进行叠加，并且会作为配置保存在 DyNode 中。</p><p>该配置仅影响 DyNode 本身播放音乐时的延迟，<strong>不会对导出的谱面结果产生任何影响</strong>。</p><p>你可以在 <a href="timing#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F">Timing</a> 与 <a href="configuration">配置</a> 中看到更详细的说明。</p></div><h2 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏"><span>工具栏</span></a></h2><p>使用 <kbd>Tab</kbd> 来切换顶部工具栏的显示。</p><h3 id="音乐-打击音" tabindex="-1"><a class="header-anchor" href="#音乐-打击音"><span>音乐 / 打击音</span></a></h3><p>使用顶部工具栏来调整音乐音量与打击音效音量。</p><p>使用 <kbd>Ctrl+H</kbd> 来开启 / 关闭打击音。</p><h3 id="背景亮度" tabindex="-1"><a class="header-anchor" href="#背景亮度"><span>背景亮度</span></a></h3><p>使用顶部工具栏调整背景亮度。</p><h3 id="禁用变调" tabindex="-1"><a class="header-anchor" href="#禁用变调"><span>禁用变调</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一个实验性的功能。</p></div><p>使用禁用变调选项使音乐不会随速度改变而变调。</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h2><h3 id="谱面统计信息" tabindex="-1"><a class="header-anchor" href="#谱面统计信息"><span>谱面统计信息</span></a></h3><p>使用 <kbd>鼠标中键</kbd> 显示谱面统计信息。</p><p>依次可以查看以下谱面统计信息：</p><ul><li>当前时间的BPM</li><li>音符的数量统计</li><li>项目的运行时间</li><li>每秒钟音符数目（KPS） <ul><li>测量窗口为400ms。</li><li>在非预览模式下测量从当前时间往后的音符。</li><li>在预览模式下测量从当前时间往前的音符。</li></ul></li></ul><h3 id="自动保存项目" tabindex="-1"><a class="header-anchor" href="#自动保存项目"><span>自动保存项目</span></a></h3><p>使用 <kbd>F8</kbd> 来启用自动保存项目。</p><p>默认情况下每三分钟对项目进行一次自动保存。自动保存将会备份旧的项目文件到当前目录的子目录 <code>backups</code> 下。</p><p>要使自动保存生效，你至少需要手动保存一次项目。</p>',28)),n("p",null,[a[4]||(a[4]=e("你可以在 ")),t(s,{to:"/guide/configuration.html#autosavetime"},{default:l(()=>a[3]||(a[3]=[e("配置")])),_:1}),a[5]||(a[5]=e(" 中使用 ")),a[6]||(a[6]=n("code",null,"autoSaveTime",-1)),a[7]||(a[7]=e(" 一项修改这个间隔。"))]),a[10]||(a[10]=i('<h3 id="全屏模式" tabindex="-1"><a class="header-anchor" href="#全屏模式"><span>全屏模式</span></a></h3><p>使用 <kbd>F7</kbd> 来切换无边框全屏。</p><h3 id="更改谱面标题" tabindex="-1"><a class="header-anchor" href="#更改谱面标题"><span>更改谱面标题</span></a></h3><p>使用 <kbd>Ctrl+T</kbd> 来更改谱面标题。</p><div class="hint-container tip"><p class="hint-container-title">想要使用 Scribble 的格式标签？</p><p>在标题的任意位置处加入 <code>[_scribble]</code> 来使用 Scribble 的格式标签，此时标题将会以 Scribble 字符串格式进行解析。</p></div><h3 id="更改谱面难度" tabindex="-1"><a class="header-anchor" href="#更改谱面难度"><span>更改谱面难度</span></a></h3><p>使用 <kbd>Ctrl+O/P</kbd> 来更改谱面难度。</p>',7))])}const F=p(E,[["render",B],["__file","edit.html.vue"]]),N=JSON.parse('{"path":"/guide/edit.html","title":"谱面编辑","lang":"zh-CN","frontmatter":{"description":"谱面编辑 本页面讲解 DyNode 谱面编辑的基本要素。 编辑模式 DyNode 共有五种编辑模式，以数字键 1 ~ 5 来进行切换。 放置模式：数字键 1 ~ 3 来放置音符。详见 放置音符 。 编辑模式：数字键 4 来编辑音符。例如选中音符、编辑音符、删除音符等。详见 音符。 预览模式：数字键 5 来对谱面进行预览。所有的特效在此模式都将默认开启，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://dyn.iorinn.moe/en/guide/edit.html"}],["meta",{"property":"og:url","content":"https://dyn.iorinn.moe/guide/edit.html"}],["meta",{"property":"og:site_name","content":"DyNode"}],["meta",{"property":"og:title","content":"谱面编辑"}],["meta",{"property":"og:description","content":"谱面编辑 本页面讲解 DyNode 谱面编辑的基本要素。 编辑模式 DyNode 共有五种编辑模式，以数字键 1 ~ 5 来进行切换。 放置模式：数字键 1 ~ 3 来放置音符。详见 放置音符 。 编辑模式：数字键 4 来编辑音符。例如选中音符、编辑音符、删除音符等。详见 音符。 预览模式：数字键 5 来对谱面进行预览。所有的特效在此模式都将默认开启，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T09:55:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T09:55:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谱面编辑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T09:55:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"编辑模式","slug":"编辑模式","link":"#编辑模式","children":[]},{"level":2,"title":"音符","slug":"音符","link":"#音符","children":[{"level":3,"title":"放置音符","slug":"放置音符","link":"#放置音符","children":[]},{"level":3,"title":"移动音符","slug":"移动音符","link":"#移动音符","children":[]},{"level":3,"title":"选中音符","slug":"选中音符","link":"#选中音符","children":[]},{"level":3,"title":"吸附音符","slug":"吸附音符","link":"#吸附音符","children":[]},{"level":3,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]},{"level":3,"title":"异侧多选","slug":"异侧多选","link":"#异侧多选","children":[]},{"level":3,"title":"全选音符","slug":"全选音符","link":"#全选音符","children":[]},{"level":3,"title":"对称 / 镜像音符","slug":"对称-镜像音符","link":"#对称-镜像音符","children":[]},{"level":3,"title":"撤销与还原","slug":"撤销与还原","link":"#撤销与还原","children":[]}]},{"level":2,"title":"默认宽度","slug":"默认宽度","link":"#默认宽度","children":[{"level":3,"title":"设置默认宽度","slug":"设置默认宽度","link":"#设置默认宽度","children":[]},{"level":3,"title":"设置默认宽度模式","slug":"设置默认宽度模式","link":"#设置默认宽度模式","children":[]}]},{"level":2,"title":"编辑侧","slug":"编辑侧","link":"#编辑侧","children":[{"level":3,"title":"切换编辑侧","slug":"切换编辑侧","link":"#切换编辑侧","children":[]},{"level":3,"title":"双侧编辑","slug":"双侧编辑","link":"#双侧编辑","children":[]},{"level":3,"title":"透明化非编辑侧音符","slug":"透明化非编辑侧音符","link":"#透明化非编辑侧音符","children":[]},{"level":3,"title":"切换侧面下落类型","slug":"切换侧面下落类型","link":"#切换侧面下落类型","children":[]}]},{"level":2,"title":"网格吸附与拍线","slug":"网格吸附与拍线","link":"#网格吸附与拍线","children":[{"level":3,"title":"节拍线","slug":"节拍线","link":"#节拍线","children":[]},{"level":3,"title":"节拍线样式","slug":"节拍线样式","link":"#节拍线样式","children":[]},{"level":3,"title":"节拍细分（组）","slug":"节拍细分-组","link":"#节拍细分-组","children":[]},{"level":3,"title":"自定义节拍细分","slug":"自定义节拍细分","link":"#自定义节拍细分","children":[]},{"level":3,"title":"网格吸附的开关","slug":"网格吸附的开关","link":"#网格吸附的开关","children":[]}]},{"level":2,"title":"编辑界面","slug":"编辑界面","link":"#编辑界面","children":[{"level":3,"title":"回放预览","slug":"回放预览","link":"#回放预览","children":[]},{"level":3,"title":"设置背景图片","slug":"设置背景图片","link":"#设置背景图片","children":[]},{"level":3,"title":"设置背景视频","slug":"设置背景视频","link":"#设置背景视频","children":[]},{"level":3,"title":"重设背景","slug":"重设背景","link":"#重设背景","children":[]},{"level":3,"title":"切换小节数/时间显示","slug":"切换小节数-时间显示","link":"#切换小节数-时间显示","children":[]}]},{"level":2,"title":"延迟调整","slug":"延迟调整","link":"#延迟调整","children":[{"level":3,"title":"批量调整谱面音符时间","slug":"批量调整谱面音符时间","link":"#批量调整谱面音符时间","children":[]},{"level":3,"title":"设备音乐播放延迟调整","slug":"设备音乐播放延迟调整","link":"#设备音乐播放延迟调整","children":[]}]},{"level":2,"title":"工具栏","slug":"工具栏","link":"#工具栏","children":[{"level":3,"title":"音乐 / 打击音","slug":"音乐-打击音","link":"#音乐-打击音","children":[]},{"level":3,"title":"背景亮度","slug":"背景亮度","link":"#背景亮度","children":[]},{"level":3,"title":"禁用变调","slug":"禁用变调","link":"#禁用变调","children":[]}]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[{"level":3,"title":"谱面统计信息","slug":"谱面统计信息","link":"#谱面统计信息","children":[]},{"level":3,"title":"自动保存项目","slug":"自动保存项目","link":"#自动保存项目","children":[]},{"level":3,"title":"全屏模式","slug":"全屏模式","link":"#全屏模式","children":[]},{"level":3,"title":"更改谱面标题","slug":"更改谱面标题","link":"#更改谱面标题","children":[]},{"level":3,"title":"更改谱面难度","slug":"更改谱面难度","link":"#更改谱面难度","children":[]}]}],"git":{"createdTime":1663498118000,"updatedTime":1733133335000,"contributors":[{"name":"Rin","email":"31349569+NagaseIori@users.noreply.github.com","commits":32},{"name":"NordLandeW","email":"31349569+NagaseIori@users.noreply.github.com","commits":8},{"name":"NagaseIori","email":"ajcxsu@gmail.com","commits":5}]},"readingTime":{"minutes":13.75,"words":4126},"filePathRelative":"guide/edit.md","localizedDate":"2022年9月18日","autoDesc":true}');export{F as comp,N as data};
