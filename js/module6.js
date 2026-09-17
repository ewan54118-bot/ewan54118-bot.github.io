/* ============================================================
   模块六：如何进行网页页面布局 — 交互脚本 (多页面路由+章节导航版)
   ============================================================ */

const CHAPTERS = ['flexbox', 'grid', 'float', 'position', 'responsive'];

const I18N_DICT = {
    zh: {
        page_title: "模块六：如何进行网页页面布局",
        nav_home: "首页", nav_responsive: "响应式",
        btn_prev_chapter: "上一章", btn_back_home: "返回目录", btn_next_chapter: "下一章",
        hero_badge: "模块六", hero_title_prefix: "如何进行", hero_title_highlight: "网页页面布局",
        hero_subtitle: "从Flexbox到Grid，从浮动到定位，从固定到响应式 —— 全面掌握现代CSS布局核心技术，通过交互式DOM演示深入理解每一种布局方式的原理与实践。",
        stat_layout_solutions: "核心布局方案", stat_interactive_demos: "交互演示", stat_code_snippets: "关键代码片段",
        btn_browse_directory: "浏览课程目录", scroll_down: "向下滚动",
        dir_title: "课程章节目录", dir_subtitle: "点击任意卡片，进入对应小节的详细学习与交互演示",
        dir_flexbox_title: "Flexbox 弹性布局", dir_flexbox_desc: "一维布局的终极解决方案，轻松实现对齐、分布和排序。", dir_enter_study: "进入学习",
        dir_grid_title: "Grid 网格布局", dir_grid_desc: "二维布局的强大武器，行列同时控制，构建复杂页面结构。",
        dir_float_title: "Float 浮动布局", dir_float_desc: "经典布局方式的基石，理解文档流与清除浮动的核心原理。",
        dir_position_title: "Position 定位布局", dir_position_desc: "精确控制元素位置，实现固定导航、悬浮按钮、遮罩层等效果。",
        dir_responsive_title: "响应式布局与媒体查询", dir_responsive_desc: "一套代码适配所有设备，从手机到桌面完美呈现。",
        summary_title: "布局方案对比总结", summary_subtitle: "选择合适的布局方式，事半功倍",
        table_feature: "特性", table_dimension: "维度", dim_1d: "一维", dim_2d: "二维", dim_precise: "精确定位",
        table_use_case: "适用场景", use_flex: "导航栏、按钮组、卡片行", use_grid: "整体页面、仪表盘", use_float: "文字环绕、旧项目", use_pos: "弹窗、固定元素、角标",
        table_difficulty: "学习难度", table_compat: "浏览器兼容", compat_flex: "优秀 (IE11+)", compat_grid: "良好 (IE不支持subgrid)", compat_float: "完美 (所有浏览器)", compat_pos: "优秀 (sticky需IE13+)",
        table_recommend: "推荐指数", bp_title: "最佳实践建议",
        bp_flex_title: "组件级布局 → Flexbox", bp_flex_desc: "导航栏、工具栏、按钮组、表单行等一维排列的组件",
        bp_grid_title: "页面级布局 → Grid", bp_grid_desc: "整体页面框架、多区域仪表盘、复杂的卡片网格",
        bp_pos_title: "特殊定位 → Position", bp_pos_desc: "固定导航、吸顶标题、模态框、悬浮按钮、角标",
        bp_resp_title: "始终响应式", bp_resp_desc: "结合媒体查询，让所有布局在手机端也能完美展示",
        tab_concept: "核心概念", tab_case: "案例剖析", tab_code: "代码示例", tab_demo: "交互演示",
        concept_header: "核心概念讲解", case_analysis_title: "布局深度剖析", demo_header: "交互式 DOM 演示",
        btn_copy: "复制代码", btn_copied: "已复制!", btn_reset: "重置",
        sec_flex_title: "Flexbox 弹性布局", sec_flex_sub: "一维布局的终极解决方案，轻松实现对齐、分布和排序",
        sec_grid_title: "Grid 网格布局", sec_grid_sub: "二维布局的强大武器，行列同时控制，构建复杂页面结构",
        sec_float_title: "Float 浮动布局", sec_float_sub: "经典布局方式的基石，理解文档流与清除浮动的核心原理",
        sec_pos_title: "Position 定位布局", sec_pos_sub: "精确控制元素位置，实现固定导航、悬浮按钮、遮罩层等效果",
        sec_resp_title: "响应式布局与媒体查询", sec_resp_sub: "一套代码适配所有设备，从手机到桌面完美呈现",
        flex_c1_title: "什么是 Flexbox？", flex_c1_desc: "Flexbox（弹性盒子布局）是CSS3中引入的一种<strong>一维布局模型</strong>。它可以让容器内的子元素在主轴和交叉轴上灵活地排列、对齐和分配空间。只需在父容器上设置 <code>display: flex</code>，即可激活弹性布局。",
        flex_c2_title: "主轴与交叉轴", flex_c2_desc: "Flexbox 布局基于<strong>两个轴线</strong>工作：<br>• <strong>主轴（Main Axis）</strong>：由 <code>flex-direction</code> 决定，默认为水平方向<br>• <strong>交叉轴（Cross Axis）</strong>：垂直于主轴的方向<br>所有对齐属性都围绕这两条轴线运作。",
        flex_c3_title: "容器属性", flex_c3_desc: "• <code>display: flex</code> — 启用弹性布局<br>• <code>flex-direction</code> — 主轴方向（row / column）<br>• <code>justify-content</code> — 主轴对齐方式<br>• <code>align-items</code> — 交叉轴对齐方式<br>• <code>flex-wrap</code> — 是否换行<br>• <code>gap</code> — 子元素间距",
        flex_c4_title: "子项属性", flex_c4_desc: "• <code>flex-grow</code> — 放大比例（默认0）<br>• <code>flex-shrink</code> — 缩小比例（默认1）<br>• <code>flex-basis</code> — 初始大小<br>• <code>align-self</code> — 单独对齐方式<br>• <code>order</code> — 排列顺序",
        flex_c5_title: "order 视觉排序", flex_c5_desc: "通过 <code>order</code> 属性可以在<strong>不改变 HTML 结构</strong>的情况下重新排列子元素的视觉顺序。默认值为 0，值越小越靠前，非常适合移动端适配时调整元素展示顺序。",
        flex_c6_title: "最佳应用场景", flex_c6_desc: "导航栏、按钮组、卡片列表、表单控件行、垂直居中、Sticky Footer 等<strong>单行或单列</strong>的组件级布局场景。它是现代前端开发中最常用的布局方式之一。",
        case_flex_title: "实战案例：现代 SaaS 产品官网顶部导航与 Hero 区", case_flex_sub: "剖析 Stripe、Vercel 等顶级 SaaS 官网如何利用 Flexbox 构建极具呼吸感且完美对齐的首屏布局。",
        case_flex_p1_title: "导航栏的三段式分布", case_flex_p1_desc: "顶部导航是 Flexbox 最经典的场景。父容器设置 <code>display: flex; justify-content: space-between; align-items: center;</code>。Logo 靠左，菜单链接居中（或靠右），登录按钮靠右。无需计算任何 margin，Flex 自动将剩余空间完美分配。",
        case_flex_p2_title: "Hero 区的左右分栏与垂直居中", case_flex_p2_desc: "英雄区通常分为左侧文案和右侧插图。父容器设置 <code>display: flex; align-items: center; gap: 48px;</code>。左侧文案区内部的标题、副标题、按钮则使用 <code>flex-direction: column; align-items: flex-start;</code> 实现左对齐的垂直堆叠。",
        case_flex_p3_title: "统计数据的等宽分配", case_flex_p3_desc: "Hero 区下方的“客户数量、融资额”等统计卡片，父容器设为 Flex 后，子卡片只需设置 <code>flex: 1;</code>，无论屏幕多宽，3个卡片都会永远平分父容器的宽度，且自动处理内部文字的对齐。",
        case_flex_p4_title: "移动端降级 (Order 与 Direction)", case_flex_p4_desc: "在手机端，Hero 区需要从“左右结构”变为“上下结构”，且插图要在文案下方。只需在媒体查询中将父容器改为 <code>flex-direction: column;</code>，或者保持 row 但给插图设置 <code>order: 2;</code>，即可在不改动 HTML 结构的情况下完成响应式重构。",
        case_flex_p5_title: "Flex Shrink 与内容溢出防御", case_flex_p5_desc: "当导航链接文字过长时，Flex 子项默认会收缩（shrink）。为防止按钮被挤压变形，需对关键元素设置 <code>flex-shrink: 0;</code>。同时配合 <code>min-width: 0;</code> 解决 Flex 子项内文本溢出省略号失效的经典 Bug。",
        case_flex_p6_title: "Gap vs Margin 的性能与整洁度", case_flex_p6_desc: "传统布局用 margin 控制间距会导致首尾多余空白或需要负 margin hack。Flex 的 <code>gap</code> 属性直接在容器层面定义间距，不仅代码更简洁，且在动态增删子元素时无需处理边缘 margin，渲染性能也更优。",
        
        // 🌟 新增 Flex 理论
        theory_flex_title: "🧠 布局架构师思维：从语法到页面设计模式",
        theory_flex_desc: "做好页面布局的核心不在于记住多少个 CSS 属性，而在于建立“**内容流与弹性空间分配**”的宏观思维。在真实企业级项目中，Flexbox 的本质是解决“**未知尺寸元素在有限空间内的博弈与妥协**”。",
        theory_flex_l1: "<strong>设计模式抽象：</strong> 将页面拆解为“刚性节点”（如 Logo、按钮，设置 <code>flex-shrink: 0</code> 绝对不被挤压）与“弹性节点”（如搜索框、文本截断区，设置 <code>flex: 1; min-width: 0</code> 吸收剩余空间并优雅降级）。这是构建健壮 UI 组件库的底层逻辑。",
        theory_flex_l2: "<strong>性能与渲染机制：</strong> Flexbox 布局计算发生在浏览器的 Layout（排版）阶段。过度嵌套的 Flex 容器会导致渲染树深度增加，引发性能瓶颈。架构师原则：**能用单层 Flex + gap 解决的，绝不嵌套 div 增加 DOM 深度**。",
        theory_flex_l3: "<strong>可维护性法则：</strong> 摒弃传统的“百分比宽度 + 负 margin”hack，全面拥抱 <code>gap</code> 与 <code>flex-basis</code>。这不仅让 CSS 代码量减少 40%，更让后续接手项目的开发者能直观理解空间分配意图，降低团队协作成本。",

        demo_label_1: "演示 1", demo_label_2: "演示 2", demo_label_3: "演示 3", demo_label_4: "演示 4",
        demo_flex_jc_title: "justify-content 主轴对齐效果", demo_select_align: "选择对齐方式：",
        demo_flex_ai_title: "align-items 交叉轴对齐效果",
        demo_flex_fd_title: "flex-direction 主轴方向", demo_select_dir: "选择方向：",
        demo_flex_grow_title: "flex-grow 弹性增长 — 经典三栏布局", demo_sidebar_width: "左侧边栏宽度：",
        demo_left_sidebar: "左侧边栏", demo_main_content: "主内容区", demo_flex_1_desc: "flex: 1（自适应填充剩余空间）", demo_right_sidebar: "右侧边栏",
        grid_c1_title: "什么是 Grid？", grid_c1_desc: "CSS Grid 是一种<strong>二维布局系统</strong>，可以同时控制行和列。它非常适合构建整体页面框架和复杂的组件布局。通过 <code>display: grid</code> 激活，使用 <code>grid-template-columns</code> 和 <code>grid-template-rows</code> 定义网格结构。",
        grid_c2_title: "核心单位 fr", grid_c2_desc: "<code>fr</code>（fraction）是Grid独有的弹性单位，表示可用空间的<strong>等份比例</strong>。<br>例如 <code>1fr 2fr 1fr</code> 表示将空间分为4份，中间列占2份。<br>可与 <code>px</code>、<code>%</code>、<code>auto</code> 混合使用。",
        grid_c3_title: "区域命名", grid_c3_desc: "Grid 最强大的特性之一是<strong>命名区域</strong>：<br>• <code>grid-template-areas</code> — 用字符串\"画\"出布局<br>• <code>grid-area</code> — 子元素声明自己属于哪个区域<br>这种方式直观、可读性极强。",
        grid_c4_title: "repeat() 与 minmax()", grid_c4_desc: "• <code>repeat(3, 1fr)</code> — 重复3列，每列1fr<br>• <code>minmax(200px, 1fr)</code> — 最小200px，最大1fr<br>• <code>auto-fill</code> / <code>auto-fit</code> — 自动填充列数<br>组合使用可创建强大的自适应网格。",
        grid_c5_title: "span 跨行跨列", grid_c5_desc: "子元素可通过 <code>grid-column: span 2</code> 或 <code>grid-row: span 3</code> 跨越多个网格轨道，轻松实现不规则的杂志风、仪表盘等复杂布局结构。",
        grid_c6_title: "最佳应用场景", grid_c6_desc: "整体页面框架、仪表盘、图片画廊、卡片网格、杂志排版等需要<strong>同时精确控制行和列</strong>的复杂二维布局场景，是构建大型页面结构的首选。",
        case_grid_title: "实战案例：企业级数据监控仪表盘 (Dashboard)", case_grid_sub: "剖析 Grafana、Datadog 等复杂后台系统如何利用 Grid 构建大小不一、错落有致的数据看板。",
        case_grid_p1_title: "宏观骨架：命名区域 (Areas)", case_grid_p1_desc: "整个后台页面是一个巨大的 Grid 容器。通过 <code>grid-template-areas</code> 直接“画”出 Header 横跨顶部、Sidebar 占据左侧、Main 占据核心的结构。这种语义化写法让页面骨架一目了然，后期调整区域位置只需修改字符串。",
        case_grid_p2_title: "核心图表区：跨列 (Span)", case_grid_p2_desc: "Dashboard 中的核心折线图通常需要占据更大的视觉比重。通过给主图表卡片设置 <code>grid-column: span 2;</code>，让它直接跨越两个网格轨道，而旁边的小数据卡片 (Widget) 则各占 1 列，形成主次分明的视觉层级。",
        case_grid_p3_title: "侧边栏与主内容区的弹性比例", case_grid_p3_desc: "列定义使用 <code>grid-template-columns: 250px 1fr;</code>。侧边栏固定 250px 保证导航不被挤压，主内容区使用 <code>1fr</code> 自动吸收剩余的所有屏幕宽度，完美适配从 13寸笔记本到 27寸外接显示器的各种宽度。",
        case_grid_p4_title: "卡片网格的自动填充 (Auto-fit)", case_grid_p4_desc: "底部的“服务器状态列表”包含几十个状态卡片。使用 <code>grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));</code>，Grid 会根据屏幕宽度自动计算能放下多少列，无需任何媒体查询即可实现完美的响应式瀑布流效果。",
        case_grid_p5_title: "Auto-fit 与 Auto-fill 的本质区别", case_grid_p5_desc: "<code>auto-fill</code> 会尽可能多地创建列轨道（即使为空），保留空白区域；而 <code>auto-fit</code> 会在填充后将空轨道折叠为 0，让现有子项拉伸填满剩余空间。在 Dashboard 卡片布局中，通常选用 auto-fit 以避免右侧出现大片空白。",
        case_grid_p6_title: "Subgrid 与嵌套对齐的未来", case_grid_p6_desc: "当 Dashboard 卡片内部也有复杂的网格结构时，传统 Grid 会导致内外网格线不对齐。<code>subgrid</code> 允许子元素继承父级的网格轨道定义，确保跨卡片的图表Y轴、标签行严格对齐，这是构建专业级数据看板的终极利器。",
        
        // 🌟 新增 Grid 理论
        theory_grid_title: "🧠 布局架构师思维：二维空间规划与组件化网格",
        theory_grid_desc: "Grid 的本质不是“画表格”，而是“**定义空间契约**”。在大型系统（如 SaaS 后台、设计工具）中，Grid 是建立全局视觉秩序和组件复用体系的基石。架构师在使用 Grid 时，思考的是“轨道系统”而非“元素位置”。",
        theory_grid_l1: "<strong>空间契约与解耦：</strong> 父容器通过 <code>grid-template</code> 定义“插槽（Slots）”，子组件通过 <code>grid-area</code> 声明“入驻”。这种机制实现了 HTML 结构与 CSS 布局的完全解耦。设计师调整页面区块顺序时，只需修改父级的字符串模板，子组件代码零侵入。",
        theory_grid_l2: "<strong>内在尺寸与外在尺寸的博弈：</strong> Grid 是 CSS 中唯一能同时处理“内在尺寸（内容撑开）”与“外在尺寸（容器分配）”的布局。架构师原则：**固定侧边栏用 px，弹性主区用 fr，未知内容区用 minmax()**，以此构建能抵御任何极端数据的“防弹布局”。",
        theory_grid_l3: "<strong>从宏布局到微组件：</strong> 页面级使用 Grid 划分 Header/Sidebar/Main，组件级（如卡片内部）使用 Flexbox 处理对齐。这种“**外 Grid 内 Flex**”的嵌套范式，是目前业界公认的最优页面布局架构模式。",

        demo_grid_col_title: "grid-template-columns 列定义", demo_col_template: "列模板：",
        demo_grid_areas_title: "grid-template-areas 区域命名布局", demo_layout_scheme: "布局方案：",
        demo_scheme_classic: "经典布局", demo_scheme_magazine: "杂志布局", demo_scheme_dashboard: "仪表盘",
        demo_grid_auto_title: "auto-fit / auto-fill 自适应卡片", demo_card_min_width: "卡片最小宽度：", demo_drag_hint: "← 试试拖动滑块并缩放浏览器窗口",
        float_c1_title: "什么是浮动？", float_c1_desc: "<code>float</code> 属性最初设计用于实现<strong>文字环绕图片</strong>效果。设置浮动后，元素会脱离正常文档流，向左或向右移动，直到碰到容器边缘或另一个浮动元素。虽然现代布局推荐Flex/Grid，但理解浮动对维护旧代码和理解CSS原理仍然非常重要。",
        float_c2_title: "浮动塌陷问题", float_c2_desc: "当父容器内所有子元素都浮动后，父容器会<strong>高度塌陷为0</strong>，因为浮动元素脱离了文档流。这是浮动布局最经典的问题，必须通过<strong>清除浮动</strong>来解决。",
        float_c3_title: "清除浮动方案", float_c3_desc: "• <strong>clearfix 伪元素法</strong>（推荐）：<br><code>.clearfix::after { content:''; display:table; clear:both; }</code><br>• <code>overflow: hidden/auto</code>（触发BFC）<br>• <code>clear: both</code>（添加空元素清除）",
        float_c4_title: "BFC 块级格式化上下文", float_c4_desc: "设置 <code>overflow: hidden/auto</code> 可触发 BFC，BFC 容器会自动包含内部浮动元素，也是一种优雅的清除浮动方案，同时还能防止外边距重叠（margin collapse）。",
        float_c5_title: "浮动的局限性", float_c5_desc: "浮动无法实现垂直居中、等高列、复杂对齐。在现代开发中，<strong>布局应优先使用 Flex/Grid</strong>，浮动仅保留给文字环绕等特定场景，不再作为主流布局手段。",
        float_c6_title: "浮动的现代用途", float_c6_desc: "虽然不再是主要布局手段，浮动在以下场景仍然有用：<br>• 文字环绕图片/图标<br>• 简单的左右排列（配合clearfix）<br>• 理解BFC（块级格式化上下文）",
        case_float_title: "实战案例：新闻门户网站的图文混排与 BFC 陷阱", case_float_sub: "剖析传统新闻网站（如新浪、网易）中经典的“左图右文”新闻列表，以及新手常踩的“高度塌陷”坑。",
        case_float_news_title: "突发：CSS Grid 正式发布十周年！", case_float_news_body: "十年前，W3C 正式发布了 CSS Grid 布局规范，彻底改变了前端工程师构建二维网页布局的方式。从最初的 IE10 实验性支持，到如今所有现代浏览器的完美兼容，Grid 已经成为了...", case_float_read_more: "阅读更多 →",
        case_float_p1_title: "图文环绕的初心", case_float_p1_desc: "在新闻列表中，给缩略图设置 <code>float: left; margin-right: 16px;</code>，后续的文本段落就会自动环绕在图片右侧和下方。这是 float 被发明出来的<strong>唯一初衷</strong>，至今在处理富文本编辑器输出的图文混排内容时，依然是最佳方案。",
        case_float_p2_title: "致命的“高度塌陷”", case_float_p2_desc: "如果新闻卡片（父容器）没有设置固定高度，且内部只有浮动的图片和普通的文本，当文本较少时，父容器的高度会<strong>直接塌陷为 0</strong>，导致下方的新闻列表叠在当前列表之上，页面瞬间崩坏。这是因为浮动元素脱离了标准文档流。",
        case_float_p3_title: "优雅破局：触发 BFC", case_float_p3_desc: "给新闻卡片父容器加上 <code>overflow: hidden;</code> 或 <code>overflow: auto;</code>。这会触发 <strong>BFC (块级格式化上下文)</strong>。BFC 的一个重要特性就是：在计算高度时，会将内部的浮动元素也计算在内，从而完美撑开父容器。",
        case_float_p4_title: "经典 Clearfix Hack", case_float_p4_desc: "如果父容器不能设置 <code>overflow: hidden</code>（比如有下拉菜单需要溢出显示），则必须使用 <code>.clearfix::after</code> 伪元素法。在父容器末尾生成一个看不见的块级元素并设置 <code>clear: both;</code>，强行把父容器底部“顶”下来。",
        case_float_p5_title: "BFC 的另一面：阻止 Margin 重叠", case_float_p5_desc: "BFC 不仅能清除浮动，还能<strong>阻止相邻块级元素的垂直 margin 折叠</strong>。当两个新闻卡片之间 margin 合并导致间距异常时，将其中一个包裹在 BFC 容器中（如 overflow:hidden 的 div），即可让它们各自的 margin 独立生效。",
        case_float_p6_title: "浮动元素的“阶梯效应”与修复", case_float_p6_desc: "当多个浮动卡片高度不一致时，后续卡片可能会被前面的高卡片“卡住”，产生参差不齐的阶梯状错位。这是因为浮动元素只会紧贴前一个浮动元素的边缘。现代开发中应使用 Grid/Flex 替代，若必须用浮动，需确保同排元素等高或使用 JS 补丁。",
        
        // 🌟 新增 Float 理论
        theory_float_title: "🧠 布局架构师思维：文档流本质与 BFC 隔离机制",
        theory_float_desc: "学习 Float 的终极目的不是为了“用它来布局”，而是为了**深刻理解 CSS 的“正常文档流（Normal Flow）”与“格式化上下文”**。这是所有高级 CSS 渲染机制的底层基石，不懂 BFC，就无法真正驾驭复杂的页面层叠与间距控制。",
        theory_float_l1: "<strong>文档流的物理法则：</strong> 块级元素自上而下堆叠，行内元素自左向右排列。Float 和 Absolute 的本质是“**打破物理法则（脱离文档流）**”。架构师在设计页面时，必须清晰界定哪些元素在“流内”（参与高度计算），哪些在“流外”（绝对定位/浮动），这是避免页面高度塌陷和滚动条异常的前提。",
        theory_float_l2: "<strong>BFC 的“结界”理论：</strong> BFC（块级格式化上下文）相当于在页面中创建了一个“**独立的渲染结界**”。结界内部的布局（浮动、margin 折叠）绝对不会影响结界外部。利用这个理论，我们可以精准解决外边距穿透、文字意外环绕等疑难杂症，这是高级 CSS 工程师的必修课。",
        theory_float_l3: "<strong>历史包袱与技术选型：</strong> 在维护百万行代码的遗留系统时，盲目将 Float 重构为 Flex 可能会引发不可预知的回归 Bug。架构师的素养在于：**在新项目中坚决拥抱 Flex/Grid，在旧项目中利用 BFC 理论精准修补 Float 缺陷**，实现技术债务的平滑过渡。",

        demo_float_vs_title: "浮动效果 vs 清除浮动", demo_operation: "操作：", demo_enable_float: "开启浮动", demo_disable_float: "关闭浮动", demo_add_clearfix: "添加 clearfix",
        demo_left_float: "左侧浮动", demo_right_float: "右侧浮动",
        demo_float_wrap_title: "文字环绕图片效果", demo_float_dir: "浮动方向：",
        demo_float_wrap_text: "这是一段演示文字环绕图片效果的段落。当图片设置了 <code>float: left</code> 后，后续的文字内容会自动环绕在图片的右侧和下方。这是float属性最初被设计的目的。在现代CSS中，虽然布局方面已被Flex和Grid取代，但文字环绕效果仍然使用float来实现。你可以通过上方的按钮切换浮动方向，观察文字如何重新排列。CSS的float属性接受 <code>left</code>、<code>right</code>和<code>none</code>三个值。",
        pos_c1_title: "static（默认）", pos_c1_desc: "元素的默认定位方式，按照<strong>正常文档流</strong>排列。设置 <code>top</code>、<code>left</code> 等偏移属性<strong>无效</strong>。大多数元素天生就是static定位。",
        pos_c2_title: "relative（相对定位）", pos_c2_desc: "相对于元素<strong>自身原始位置</strong>进行偏移。元素仍然占据原来的空间（不影响其他元素布局）。常用作 <code>absolute</code> 子元素的定位参考点（\"子绝父相\"原则）。",
        pos_c3_title: "absolute（绝对定位）", pos_c3_desc: "脱离文档流，相对于<strong>最近的非static定位祖先元素</strong>进行定位。如果没有这样的祖先，则相对于 <code>&lt;html&gt;</code>。元素不占据空间，其他元素会\"无视\"它。",
        pos_c4_title: "fixed（固定定位）", pos_c4_desc: "相对于<strong>浏览器视口</strong>固定，页面滚动时位置不移动。典型应用包括：固定导航栏、回到顶部按钮、悬浮广告和全屏模态框遮罩层。",
        pos_c5_title: "sticky（粘性定位）", pos_c5_desc: "混合定位：滚动到阈值前为 relative，到达后变为 fixed。典型应用：吸顶标题、表格固定表头、侧边栏跟随滚动，兼具相对和固定定位的优点。",
        pos_c6_title: "z-index 层叠顺序", pos_c6_desc: "控制定位元素的<strong>前后堆叠顺序</strong>。值越大越靠前（离用户越近）。仅在 position 非 static 时生效，使用时需注意层叠上下文的创建规则。",
        case_pos_title: "实战案例：电商商品卡片与全局悬浮客服系统", case_pos_sub: "剖析淘宝、京东等电商平台中，商品卡片上的“热销角标”以及页面右下角的“全局悬浮客服/购物车”按钮。",
        case_pos_product_name: "无线降噪耳机",
        case_pos_p1_title: "子绝父相：商品角标定位", case_pos_p1_desc: "商品卡片本身是一个正常的文档流元素（Relative），而左上角的“HOT”角标使用 Absolute 定位。通过 <code>top: -10px; left: -10px;</code> 让角标产生“溢出”卡片的视觉效果。父容器必须设置 <code>position: relative;</code> 作为定位锚点。",
        case_pos_p2_title: "Fixed 全局悬浮：脱离文档流", case_pos_p2_desc: "页面右下角的客服按钮使用 <code>position: fixed; bottom: 30px; right: 30px;</code>。无论用户如何上下滚动浏览几千个商品，这个按钮永远“钉”在视口的右下角。它完全脱离了文档流，不会占据任何页面空间。",
        case_pos_p3_title: "遮罩层与 Z-index 层级管理", case_pos_p3_desc: "点击客服按钮弹出的对话框，需要一个半透明的黑色遮罩层。遮罩层使用 <code>position: fixed; inset: 0; z-index: 998;</code> 覆盖全屏，而对话框本身使用 <code>z-index: 999;</code> 浮在遮罩层之上。合理的 z-index 规划是避免“层级地狱”的关键。",
        case_pos_p4_title: "Sticky 吸顶分类导航", case_pos_p4_desc: "在商品列表页顶部的“综合、销量、价格”排序栏，使用 <code>position: sticky; top: 64px;</code>（假设顶部有 64px 的固定导航）。当页面向下滚动时，排序栏会“粘”在固定导航的下方，方便用户随时切换排序规则。",
        case_pos_p5_title: "层叠上下文 (Stacking Context) 陷阱", case_pos_p5_desc: "z-index 并非全局比较，而是在各自的<strong>层叠上下文</strong>内比较。如果父元素设置了 transform、opacity&lt;1 或 filter，就会创建新的层叠上下文。此时子元素的 z-index 再大也无法超越父级兄弟元素，这是电商弹窗被遮挡的最常见原因。",
        case_pos_p6_title: "Fixed 在移动端 Safari 的抖动问题", case_pos_p6_desc: "iOS Safari 在滚动时对 fixed 元素的处理曾有历史遗留问题（地址栏收起时 fixed 元素跳动）。现代解决方案是使用 <code>position: sticky</code> 替代非必要的全局 fixed，或将 fixed 元素放在 body 直接子级，避免嵌套在 overflow:scroll 的容器内。",
        
        // 🌟 新增 Position 理论
        theory_pos_title: "🧠 布局架构师思维：三维空间坐标系与层级治理",
        theory_pos_desc: "Position 将网页从“二维平面”拉升到了“三维空间（Z轴）”。在企业级复杂系统（如 Figma、在线文档、大型电商）中，定位布局的核心挑战不再是“放在哪”，而是“**如何建立全局的 Z-index 层级治理体系与坐标系锚点管理**”。",
        theory_pos_l1: "<strong>坐标系锚点理论 (Containing Block)：</strong> Absolute 元素的定位基准不是“父元素”，而是“最近的已定位（非 static）祖先元素”。架构师在设计复杂组件（如带下拉菜单的表格行）时，必须精确控制“定位锚点”的创建位置，否则会导致下拉菜单被表格的 <code>overflow: hidden</code> 截断。",
        theory_pos_l2: "<strong>Z-index 层级治理规范：</strong> 杜绝在项目中随意写 <code>z-index: 9999</code>。专业团队必须建立“**层级令牌 (Z-index Tokens)**”体系：如 Base(0), Dropdown(100), Sticky(200), Overlay(300), Modal(400), Toast(500)。通过 CSS 变量统一管理，彻底消灭“弹窗被遮挡”的幽灵 Bug。",
        theory_pos_l3: "<strong>层叠上下文的“降维打击”：</strong> 必须深刻理解：<code>transform</code>、<code>opacity < 1</code>、<code>filter</code> 等属性会隐式创建新的层叠上下文。这意味着一个 <code>z-index: 9999</code> 的子元素，如果其父级被降维，它永远无法超越父级的兄弟元素。这是现代 CSS 动画与定位冲突的重灾区。",

        demo_pos_compare_title: "五种定位方式对比", demo_select_pos_type: "选择定位类型：",
        demo_container_start: "↓ 容器开始", demo_placeholder_1: "占位元素 1（正常文档流）", demo_placeholder_2: "占位元素 2（正常文档流）",
        demo_placeholder_3: "占位元素 3", demo_placeholder_4: "占位元素 4", demo_placeholder_5: "占位元素 5", demo_container_end: "↑ 容器结束",
        demo_pos_badge_title: "\"子绝父相\"实战 — 卡片角标定位", demo_badge_pos: "角标位置：",
        demo_top_right: "右上", demo_top_left: "左上", demo_bottom_right: "右下", demo_bottom_left: "左下",
        demo_notify_card: "通知卡片", demo_relative_parent: "position: relative 的父容器",
        resp_c1_title: "什么是响应式设计？", resp_c1_desc: "响应式网页设计（Responsive Web Design, RWD）是指网页能够<strong>自动适应不同屏幕尺寸</strong>，在手机、平板、桌面等设备上都能提供良好的浏览体验。核心技术包括：视口设置、媒体查询、弹性布局和弹性图片。",
        resp_c2_title: "媒体查询 @media", resp_c2_desc: "媒体查询是响应式设计的核心工具，它允许根据设备特性（如屏幕宽度）应用不同的CSS样式：<br><code>@media (max-width: 768px) { ... }</code><br>常用断点：576px（手机）、768px（平板）、992px（小桌面）、1200px（大桌面）。",
        resp_c3_title: "移动优先策略", resp_c3_desc: "<strong>Mobile First</strong> 是现代响应式设计的最佳实践：<br>• 先编写手机端样式（基础样式）<br>• 再通过 <code>min-width</code> 媒体查询逐步增强大屏样式<br>这种方式性能更好，代码更简洁。",
        resp_c4_title: "弹性单位", resp_c4_desc: "响应式设计中推荐使用相对单位：<br>• <code>rem</code> — 相对于根元素字号<br>• <code>em</code> — 相对于父元素字号<br>• <code>vw/vh</code> — 视口宽度/高度的百分比<br>• <code>%</code> — 父元素的百分比<br>• <code>clamp()</code> — 设定最小、首选、最大值",
        resp_c5_title: "viewport meta 标签", resp_c5_desc: "<code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code> 是响应式的<strong>必要前提</strong>。缺少它，移动端浏览器会默认按桌面宽度（通常980px）渲染页面然后再缩小显示。",
        resp_c6_title: "常用断点参考", resp_c6_desc: "576px（手机横屏）、768px（平板竖屏）、992px（小桌面）、1200px（大桌面）、1440px（超大屏）。断点应根据内容自然断裂点设定，而非死记硬背特定设备尺寸。",
        case_resp_title: "实战案例：企业官网的“移动优先”全端适配重构", case_resp_sub: "剖析一个真实的企业官网如何从“只在电脑上看”重构为“手机、平板、带鱼屏完美适配”的响应式架构。",
        case_resp_p1_title: "导航栏的“汉堡菜单”变身", case_resp_p1_desc: "在基础样式（手机端）中，导航链接 <code>display: none;</code>，只显示汉堡图标。当 <code>@media (min-width: 768px)</code> 时，隐藏汉堡图标，将导航链接设为 <code>display: flex;</code>。这种“渐进增强”的策略保证了移动端加载最少的无用 DOM。",
        case_resp_p2_title: "卡片网格的断点裂变", case_resp_p2_desc: "服务介绍卡片在手机端是单列堆叠（<code>grid-template-columns: 1fr;</code>）。在 768px 平板断点裂变为 2 列（<code>repeat(2, 1fr)</code>），在 1024px 桌面端裂变为 3 列。结合 <code>gap</code> 属性，无需计算任何百分比宽度。",
        case_resp_p3_title: "流体排版 (Fluid Typography)", case_resp_p3_desc: "放弃写死 <code>font-size: 48px;</code>。使用 <code>clamp(1.5rem, 5vw, 3rem);</code>。这意味着字号会根据视口宽度（5vw）自动缩放，但永远不会小于 1.5rem，也不会大于 3rem。一行代码解决所有设备的字号适配。",
        case_resp_p4_title: "图片的响应式与艺术指导", case_resp_p4_desc: "基础设置 <code>max-width: 100%; height: auto;</code> 防止图片撑破容器。进阶使用 <code>&lt;picture&gt;</code> 标签配合 <code>srcset</code>，在手机端加载裁切后的竖版焦点图，在桌面端加载完整的横版大图，兼顾视觉与性能。",
        case_resp_p5_title: "触控目标尺寸与无障碍 (A11y)", case_resp_p5_desc: "响应式不仅是视觉适配，更是交互适配。WCAG 标准要求移动端可点击区域至少为 <strong>44x44px</strong>。在媒体查询中，除了调整布局，还需增大按钮 padding、扩大热区，确保手指粗的用户也能精准点击，避免误触。",
        case_resp_p6_title: "Container Queries：组件级响应式", case_resp_p6_desc: "传统媒体查询基于<strong>视口宽度</strong>，导致同一组件在侧边栏和主内容区表现不同。<code>@container</code> 查询让组件根据自身<strong>父容器宽度</strong>自适应，真正实现“一次编写，随处复用”的原子化响应式组件架构。",
        
        // 🌟 新增 Responsive 理论
        theory_resp_title: "🧠 布局架构师思维：从设备适配到内容优先的响应式哲学",
        theory_resp_desc: "响应式设计的最高境界不是“为每种设备写一套样式”，而是“**让内容像水一样，自然流淌进任何形状的容器**”。现代架构师已经摒弃了“死记硬背设备断点”的旧思维，转向了“内容驱动断点”与“内在 Web 设计 (Intrinsic Web Design)”的新范式。",
        theory_resp_l1: "<strong>内容驱动断点 (Content-Driven Breakpoints)：</strong> 不要基于 iPhone 或 iPad 的物理尺寸设定断点。正确的做法是：在浏览器中不断缩放窗口，**当内容开始显得拥挤、文字开始换行难看、留白开始失衡的那个像素点，就是你的断点**。这保证了布局永远服务于内容，而非服务于特定硬件。",
        theory_resp_l2: "<strong>现代流体设计公式：</strong> 彻底消灭媒体查询中的“阶梯式字号覆盖”。全面采用 <code>clamp(MIN, PREFERRED, MAX)</code> 结合视口单位（vw/vh），实现真正的“无级变速”流体排版与间距。这让代码量锐减，且在任何奇奇怪怪的折叠屏、带鱼屏上都能完美呈现。",
        theory_resp_l3: "<strong>容器查询 (Container Queries) 的降维打击：</strong> 传统的 Media Queries 是“看天吃饭”（依赖浏览器视口），而 Container Queries 是“因地制宜”（依赖父容器宽度）。这是 CSS 历史上最重要的范式转移，它让 UI 组件真正实现了“**高内聚、低耦合**”的原子化响应式，是构建大型设计系统 (Design System) 的终极武器。",

        demo_resp_viewport_title: "模拟不同设备视口宽度", demo_simulate_device: "模拟设备：",
        demo_device_mobile: "手机 (375px)", demo_device_tablet: "平板 (768px)", demo_device_laptop: "笔记本 (1024px)", demo_device_desktop: "桌面 (1440px)",
        demo_resp_clamp_title: "clamp() 弹性字号可视化", demo_viewport_width: "视口宽度：",
        footer_module_desc: "模块六：如何进行网页页面布局", footer_copyright: "&copy; 2026 WebLayout Pro. 专业网页布局教学系统", btn_back_to_top: "回到顶部",
        out_float_collapse: "子元素: float: left; width: 45%; ⚠️ 父容器高度塌陷!", out_float_normal: "子元素: float: none; （正常文档流）",
        out_bfc_success: "✅ overflow: hidden 触发BFC — 父容器正确包裹浮动子元素",
        out_pos_static: "position: static; （默认值，top/left偏移无效）", out_pos_relative: "position: relative; top: 20px; left: 30px; （相对原始位置偏移，原空间保留）",
        out_pos_absolute: "position: absolute; top: 10px; right: 10px; （脱离文档流，相对定位祖先定位）",
        out_pos_fixed: "position: fixed; bottom: 100px; right: 30px; （相对视口固定，⚠️ 演示中在容器内模拟）",
        out_pos_fixed_sim: "目标元素 (模拟fixed — 在容器角落)", out_pos_sticky: "position: sticky; top: 0; （滚动到顶部时吸住）",
        txt_target_static: "目标元素 (position: static)", txt_target_relative: "目标元素 (position: relative; top:20px; left:30px)",
        txt_target_absolute: "目标元素 (position: absolute; top:10px; right:10px)", txt_target_fixed: "目标元素 (position: fixed)",
        txt_target_sticky: "目标元素 (position: sticky; top:0) — 滚动容器试试",
        txt_first_chapter: "已经是第一章了", txt_last_chapter: "已经是最后一章了", txt_prev_chapter: "上一章节", txt_next_chapter: "下一章节",
        layout_mobile: "1列布局（手机）", layout_tablet: "2列布局（平板）", layout_laptop: "3列布局（笔记本）", layout_desktop: "4列布局（桌面）",
        clamp_computed_text: "计算值: {val}px（min=16px, 4vw={vw}px, max=48px）",
        code_flexbox: `/* ========== Flexbox 经典布局 ========== */\n\n/* 1. 基础弹性容器 */\n.flex-container {\n    display: flex;\n    flex-direction: row;          /* 主轴方向：水平 */\n    justify-content: space-between; /* 主轴两端对齐 */\n    align-items: center;          /* 交叉轴居中 */\n    gap: 20px;                    /* 子元素间距 */\n    padding: 20px;\n}\n\n/* 2. 经典三栏布局 */\n.three-column-layout {\n    display: flex;\n}\n.sidebar-left  { flex: 0 0 200px; }  /* 固定200px */\n.main-content  { flex: 1; }          /* 自适应填充 */\n.sidebar-right { flex: 0 0 200px; }  /* 固定200px */\n\n/* 3. 完美居中 */\n.center-box {\n    display: flex;\n    justify-content: center;     /* 水平居中 */\n    align-items: center;         /* 垂直居中 */\n    min-height: 100vh;\n}\n\n/* 4. 底部固定（Sticky Footer） */\n.page-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n.page-content { flex: 1; }     /* 内容区撑满 */\n\n/* 5. 导航栏布局 */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 30px;\n    height: 64px;\n}\n.nav-links {\n    display: flex;\n    gap: 24px;\n    list-style: none;\n}`,
        code_grid: `/* ========== Grid 经典页面布局 ========== */\n\n/* 1. 经典圣杯布局（Holy Grail） */\n.page-grid {\n    display: grid;\n    grid-template-columns: 220px 1fr 220px;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        "header  header  header"\n        "sidebar main    aside"\n        "footer  footer  footer";\n    min-height: 100vh;\n    gap: 0;\n}\n.header  { grid-area: header;  }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main;    }\n.aside   { grid-area: aside;   }\n.footer  { grid-area: footer;  }\n\n/* 2. 自适应卡片网格 */\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 24px;\n    padding: 24px;\n}\n\n/* 3. 仪表盘布局 */\n.dashboard {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 180px);\n    gap: 16px;\n}\n.widget-large  { grid-column: span 2; grid-row: span 2; }\n.widget-wide   { grid-column: span 4; }\n.widget-normal { /* 默认占1格 */ }\n\n/* 4. 12列栅格系统 */\n.grid-12 {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    gap: 20px;\n}\n.col-3  { grid-column: span 3;  }\n.col-4  { grid-column: span 4;  }\n.col-6  { grid-column: span 6;  }\n.col-8  { grid-column: span 8;  }\n.col-12 { grid-column: span 12; }`,
        code_float: `/* ========== Float 浮动布局 ========== */\n\n/* 1. 万能清除浮动 (clearfix) */\n.clearfix::after {\n    content: "";\n    display: table;\n    clear: both;\n}\n\n/* 2. 经典两栏浮动布局 */\n.float-two-col {\n    overflow: hidden;  /* 触发BFC清除浮动 */\n}\n.float-left-col {\n    float: left;\n    width: 30%;\n    padding: 20px;\n}\n.float-right-col {\n    float: right;\n    width: 65%;\n    padding: 20px;\n}\n\n/* 3. 文字环绕图片 */\n.article-img {\n    float: left;\n    margin: 0 16px 16px 0;\n    width: 200px;\n    border-radius: 8px;\n}\n\n/* 4. 浮动导航 */\n.float-nav {\n    overflow: hidden;\n    background: #333;\n}\n.float-nav a {\n    float: left;\n    padding: 14px 20px;\n    color: white;\n    text-decoration: none;\n}\n.float-nav a:hover {\n    background: #555;\n}\n\n/* 5. 等宽多列浮动 */\n.float-columns .col {\n    float: left;\n    width: 33.333%;\n    padding: 15px;\n    box-sizing: border-box;\n}`,
        code_position: `/* ========== Position 定位布局 ========== */\n\n/* 1. 子绝父相 — 角标/徽章 */\n.card-wrapper {\n    position: relative;        /* 父元素设为relative */\n}\n.badge {\n    position: absolute;        /* 子元素设为absolute */\n    top: -8px;\n    right: -8px;\n    background: #ef4444;\n    color: white;\n    border-radius: 50%;\n    width: 24px; height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n}\n\n/* 2. 固定导航栏 */\n.fixed-navbar {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 64px;\n    background: rgba(255,255,255,0.95);\n    backdrop-filter: blur(10px);\n    z-index: 1000;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\n/* 3. 全屏遮罩层 */\n.overlay {\n    position: fixed;\n    inset: 0;                   /* top:0; right:0; bottom:0; left:0; */\n    background: rgba(0,0,0,0.5);\n    z-index: 999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* 4. 吸顶效果 */\n.sticky-header {\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    background: white;\n}\n\n/* 5. 悬浮操作按钮 (FAB) */\n.fab-button {\n    position: fixed;\n    bottom: 32px;\n    right: 32px;\n    width: 56px; height: 56px;\n    border-radius: 50%;\n    background: #6366f1;\n    color: white;\n    border: none;\n    box-shadow: 0 4px 20px rgba(99,102,241,0.4);\n    cursor: pointer;\n    z-index: 100;\n    transition: transform 0.3s;\n}\n.fab-button:hover {\n    transform: scale(1.1);\n}`,
        code_responsive: `/* ========== 响应式布局 ========== */\n\n/* 1. 视口设置（放在HTML的head中） */\n/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */\n\n/* 2. 移动优先 — 基础样式（手机） */\n.responsive-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n}\n\n/* 3. 平板断点 (≥768px) */\n@media (min-width: 768px) {\n    .responsive-grid {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 24px;\n        padding: 24px;\n    }\n}\n\n/* 4. 桌面断点 (≥1024px) */\n@media (min-width: 1024px) {\n    .responsive-grid {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 32px;\n        padding: 32px;\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n}\n\n/* 5. 大屏断点 (≥1440px) */\n@media (min-width: 1440px) {\n    .responsive-grid {\n        grid-template-columns: repeat(4, 1fr);\n        max-width: 1400px;\n    }\n}\n\n/* 6. 响应式字体 */\nh1 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n}\np {\n    font-size: clamp(0.875rem, 1.5vw, 1.125rem);\n}\n\n/* 7. 响应式间距 */\n.section-padding {\n    padding: clamp(1rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);\n}\n\n/* 8. 隐藏/显示控制 */\n.hide-mobile  { display: none; }\n@media (min-width: 768px) {\n    .hide-mobile  { display: block; }\n    .hide-desktop { display: none;  }\n}\n\n/* 9. 响应式导航（汉堡菜单） */\n.nav-links { display: none; }\n@media (min-width: 768px) {\n    .nav-links { display: flex; }\n    .hamburger { display: none; }\n}`
    },
    en: {
        page_title: "Module 6: How to Build Web Page Layouts",
        nav_home: "Home", nav_responsive: "Responsive",
        btn_prev_chapter: "Previous", btn_back_home: "Directory", btn_next_chapter: "Next",
        hero_badge: "Module 6", hero_title_prefix: "How to Build", hero_title_highlight: "Web Page Layouts",
        hero_subtitle: "From Flexbox to Grid, from Float to Position, from Fixed to Responsive — Master modern CSS layout core technologies and deeply understand the principles through interactive DOM demos.",
        stat_layout_solutions: "Core Layout Solutions", stat_interactive_demos: "Interactive Demos", stat_code_snippets: "Key Code Snippets",
        btn_browse_directory: "Browse Directory", scroll_down: "Scroll Down",
        dir_title: "Course Directory", dir_subtitle: "Click any card to enter detailed learning and interactive demos",
        dir_flexbox_title: "Flexbox Layout", dir_flexbox_desc: "The ultimate 1D layout solution for alignment, distribution and ordering.", dir_enter_study: "Start Learning",
        dir_grid_title: "Grid Layout", dir_grid_desc: "Powerful 2D layout weapon, controlling rows and columns simultaneously.",
        dir_float_title: "Float Layout", dir_float_desc: "Cornerstone of classic layouts, understanding document flow and clearing.",
        dir_position_title: "Position Layout", dir_position_desc: "Precise element positioning for fixed navs, FABs, overlays and more.",
        dir_responsive_title: "Responsive & Media Queries", dir_responsive_desc: "One codebase for all devices, perfect presentation from mobile to desktop.",
        summary_title: "Layout Comparison Summary", summary_subtitle: "Choose the right layout method for maximum efficiency",
        table_feature: "Feature", table_dimension: "Dimension", dim_1d: "1D", dim_2d: "2D", dim_precise: "Precise",
        table_use_case: "Use Cases", use_flex: "Navbars, Button Groups, Card Rows", use_grid: "Full Pages, Dashboards", use_float: "Text Wrapping, Legacy Projects", use_pos: "Modals, Fixed Elements, Badges",
        table_difficulty: "Difficulty", table_compat: "Compatibility", compat_flex: "Excellent (IE11+)", compat_grid: "Good (No subgrid in IE)", compat_float: "Perfect (All Browsers)", compat_pos: "Excellent (sticky needs IE13+)",
        table_recommend: "Recommendation", bp_title: "Best Practices",
        bp_flex_title: "Component Layout → Flexbox", bp_flex_desc: "Navbars, toolbars, button groups, form rows and other 1D components",
        bp_grid_title: "Page Layout → Grid", bp_grid_desc: "Overall page frameworks, multi-zone dashboards, complex card grids",
        bp_pos_title: "Special Positioning → Position", bp_pos_desc: "Fixed navs, sticky headers, modals, floating buttons, badges",
        bp_resp_title: "Always Responsive", bp_resp_desc: "Combine media queries to ensure perfect display on mobile devices",
        tab_concept: "Concepts", tab_case: "Case Study", tab_code: "Code", tab_demo: "Demo",
        concept_header: "Core Concepts Explained", case_analysis_title: "In-depth Layout Analysis", demo_header: "Interactive DOM Demo",
        btn_copy: "Copy Code", btn_copied: "Copied!", btn_reset: "Reset",
        sec_flex_title: "Flexbox Layout", sec_flex_sub: "The ultimate 1D layout solution for alignment, distribution and ordering",
        sec_grid_title: "Grid Layout", sec_grid_sub: "Powerful 2D layout weapon, controlling rows and columns simultaneously",
        sec_float_title: "Float Layout", sec_float_sub: "Cornerstone of classic layouts, understanding document flow and clearing",
        sec_pos_title: "Position Layout", sec_pos_sub: "Precise element positioning for fixed navs, FABs, overlays and more",
        sec_resp_title: "Responsive & Media Queries", sec_resp_sub: "One codebase for all devices, perfect presentation from mobile to desktop",
        flex_c1_title: "What is Flexbox?", flex_c1_desc: "Flexbox is a <strong>1D layout model</strong> introduced in CSS3. It allows child elements to flexibly arrange, align and distribute space along main and cross axes. Simply set <code>display: flex</code> on the parent container to activate it.",
        flex_c2_title: "Main & Cross Axes", flex_c2_desc: "Flexbox works based on <strong>two axes</strong>:<br>• <strong>Main Axis</strong>: Determined by <code>flex-direction</code>, horizontal by default<br>• <strong>Cross Axis</strong>: Perpendicular to the main axis<br>All alignment properties operate around these two axes.",
        flex_c3_title: "Container Properties", flex_c3_desc: "• <code>display: flex</code> — Enable flex layout<br>• <code>flex-direction</code> — Main axis direction (row / column)<br>• <code>justify-content</code> — Main axis alignment<br>• <code>align-items</code> — Cross axis alignment<br>• <code>flex-wrap</code> — Wrapping behavior<br>• <code>gap</code> — Gap between children",
        flex_c4_title: "Item Properties", flex_c4_desc: "• <code>flex-grow</code> — Growth factor (default 0)<br>• <code>flex-shrink</code> — Shrink factor (default 1)<br>• <code>flex-basis</code> — Initial size<br>• <code>align-self</code> — Individual alignment<br>• <code>order</code> — Visual order",
        flex_c5_title: "Visual Ordering with Order", flex_c5_desc: "The <code>order</code> property rearranges visual order <strong>without changing HTML structure</strong>. Default is 0, lower values appear first. Perfect for adjusting element display order during mobile adaptation.",
        flex_c6_title: "Best Use Cases", flex_c6_desc: "Navbars, button groups, card lists, form control rows, vertical centering, Sticky Footer and other <strong>single-row or single-column</strong> component layouts. One of the most commonly used layout methods in modern frontend.",
        case_flex_title: "Case Study: Modern SaaS Website Navbar & Hero Section", case_flex_sub: "Analyzing how top SaaS sites like Stripe and Vercel use Flexbox to build breathable, perfectly aligned above-the-fold layouts.",
        case_flex_p1_title: "Three-part Navbar Distribution", case_flex_p1_desc: "Top navigation is the most classic Flexbox scenario. Parent container uses <code>display: flex; justify-content: space-between; align-items: center;</code>. Logo on left, menu links centered (or right), login button on right. No margin calculations needed, Flex automatically distributes remaining space.",
        case_flex_p2_title: "Hero Section Split & Vertical Centering", case_flex_p2_desc: "Hero sections typically split into left copy and right illustration. Parent uses <code>display: flex; align-items: center; gap: 48px;</code>. Left copy area uses <code>flex-direction: column; align-items: flex-start;</code> for left-aligned vertical stacking of title, subtitle and CTA.",
        case_flex_p3_title: "Equal-width Stats Distribution", case_flex_p3_desc: "Stats cards below Hero (customer count, funding, etc.) only need <code>flex: 1;</code> after parent is set to Flex. Regardless of screen width, 3 cards will always equally divide parent width with automatic internal text alignment.",
        case_flex_p4_title: "Mobile Degradation (Order & Direction)", case_flex_p4_desc: "On mobile, Hero needs to change from \"left-right\" to \"top-bottom\" with illustration below copy. Simply change parent to <code>flex-direction: column;</code> in media query, or keep row but set <code>order: 2;</code> on illustration. Responsive refactoring without HTML changes.",
        case_flex_p5_title: "Flex Shrink & Overflow Defense", case_flex_p5_desc: "When navbar link text is too long, Flex items shrink by default. To prevent button deformation, set <code>flex-shrink: 0;</code> on key elements. Combine with <code>min-width: 0;</code> to fix the classic bug where text-overflow ellipsis fails inside Flex items.",
        case_flex_p6_title: "Gap vs Margin: Performance & Cleanliness", case_flex_p6_desc: "Traditional margin-based spacing causes extra whitespace at edges or requires negative margin hacks. Flex's <code>gap</code> property defines spacing at container level, resulting in cleaner code and better rendering performance when dynamically adding/removing children.",
        
        // 🌟 New Flex Theory
        theory_flex_title: "🧠 Architect's Mindset: From Syntax to Page Design Patterns",
        theory_flex_desc: "The core of mastering layout isn't memorizing CSS properties, but establishing a macro mindset of \"**content flow and elastic space distribution**\". In real enterprise projects, Flexbox's essence is solving the \"**game and compromise of unknown-sized elements within limited space**\".",
        theory_flex_l1: "<strong>Design Pattern Abstraction:</strong> Decompose pages into \"rigid nodes\" (e.g., Logos, buttons, set <code>flex-shrink: 0</code> to never be squeezed) and \"elastic nodes\" (e.g., search bars, text truncation areas, set <code>flex: 1; min-width: 0</code> to absorb remaining space and degrade gracefully). This is the underlying logic for building robust UI component libraries.",
        theory_flex_l2: "<strong>Performance & Rendering Mechanism:</strong> Flexbox layout calculations occur during the browser's Layout phase. Over-nested Flex containers increase render tree depth, causing performance bottlenecks. Architect's rule: **If a single-layer Flex + gap can solve it, never nest divs to increase DOM depth**.",
        theory_flex_l3: "<strong>Maintainability Law:</strong> Abandon traditional \"percentage width + negative margin\" hacks, fully embrace <code>gap</code> and <code>flex-basis</code>. This not only reduces CSS code by 40%, but also allows subsequent developers to intuitively understand space distribution intent, lowering team collaboration costs.",

        demo_label_1: "Demo 1", demo_label_2: "Demo 2", demo_label_3: "Demo 3", demo_label_4: "Demo 4",
        demo_flex_jc_title: "justify-content Main Axis Alignment", demo_select_align: "Select Alignment:",
        demo_flex_ai_title: "align-items Cross Axis Alignment",
        demo_flex_fd_title: "flex-direction Main Axis Direction", demo_select_dir: "Select Direction:",
        demo_flex_grow_title: "flex-grow Elastic Growth — Classic 3-Column", demo_sidebar_width: "Left Sidebar Width:",
        demo_left_sidebar: "Left Sidebar", demo_main_content: "Main Content", demo_flex_1_desc: "flex: 1 (Auto-fills remaining space)", demo_right_sidebar: "Right Sidebar",
        grid_c1_title: "What is Grid?", grid_c1_desc: "CSS Grid is a <strong>2D layout system</strong> that controls both rows and columns simultaneously. Ideal for overall page frameworks and complex component layouts. Activate with <code>display: grid</code>, define structure with <code>grid-template-columns</code> and <code>grid-template-rows</code>.",
        grid_c2_title: "Core Unit: fr", grid_c2_desc: "<code>fr</code> (fraction) is Grid's unique elastic unit representing <strong>equal proportions</strong> of available space.<br>E.g., <code>1fr 2fr 1fr</code> divides space into 4 parts, middle column takes 2.<br>Can be mixed with <code>px</code>, <code>%</code>, <code>auto</code>.",
        grid_c3_title: "Named Areas", grid_c3_desc: "One of Grid's most powerful features is <strong>named areas</strong>:<br>• <code>grid-template-areas</code> — \"Draw\" layout with strings<br>• <code>grid-area</code> — Children declare their area<br>Extremely intuitive and readable approach.",
        grid_c4_title: "repeat() & minmax()", grid_c4_desc: "• <code>repeat(3, 1fr)</code> — Repeat 3 columns, each 1fr<br>• <code>minmax(200px, 1fr)</code> — Min 200px, max 1fr<br>• <code>auto-fill</code> / <code>auto-fit</code> — Auto-fill columns<br>Combine to create powerful adaptive grids.",
        grid_c5_title: "Spanning Rows & Columns", grid_c5_desc: "Children can span multiple grid tracks via <code>grid-column: span 2</code> or <code>grid-row: span 3</code>, easily achieving irregular magazine-style, dashboard and other complex layout structures.",
        grid_c6_title: "Best Use Cases", grid_c6_desc: "Overall page frameworks, dashboards, image galleries, card grids, magazine layouts and other complex 2D scenarios requiring <strong>simultaneous precise row and column control</strong>. First choice for large-scale page structures.",
        case_grid_title: "Case Study: Enterprise Data Monitoring Dashboard", case_grid_sub: "Analyzing how complex backend systems like Grafana and Datadog use Grid to build varied, staggered data panels.",
        case_grid_p1_title: "Macro Skeleton: Named Areas", case_grid_p1_desc: "The entire backend page is a giant Grid container. Use <code>grid-template-areas</code> to directly \"draw\" Header spanning top, Sidebar on left, Main in center. Semantic syntax makes skeleton clear at a glance, later adjustments only require string modifications.",
        case_grid_p2_title: "Core Chart Area: Spanning", case_grid_p2_desc: "Core line charts in Dashboards typically need greater visual weight. Set <code>grid-column: span 2;</code> on main chart card to span two tracks, while adjacent small Widget cards each take 1 column, creating clear visual hierarchy.",
        case_grid_p3_title: "Elastic Ratio: Sidebar vs Main", case_grid_p3_desc: "Column definition uses <code>grid-template-columns: 250px 1fr;</code>. Fixed 250px sidebar ensures navigation isn't squeezed, main content uses <code>1fr</code> to absorb all remaining screen width, perfectly adapting from 13\" laptops to 27\" external monitors.",
        case_grid_p4_title: "Auto-filling Card Grids (Auto-fit)", case_grid_p4_desc: "Bottom \"Server Status List\" contains dozens of status cards. Using <code>grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));</code>, Grid automatically calculates how many columns fit based on screen width, achieving perfect responsive masonry without any media queries.",
        case_grid_p5_title: "Auto-fit vs Auto-fill: Key Difference", case_grid_p5_desc: "<code>auto-fill</code> creates as many column tracks as possible (even if empty), preserving blank space; <code>auto-fit</code> collapses empty tracks to 0 after filling, stretching existing items to fill remaining space. Dashboard card layouts typically use auto-fit to avoid large blank areas on the right.",
        case_grid_p6_title: "Subgrid & Future of Nested Alignment", case_grid_p6_desc: "When Dashboard cards have complex internal grid structures, traditional Grid causes misalignment between inner and outer grid lines. <code>subgrid</code> allows children to inherit parent's track definitions, ensuring strict alignment of chart Y-axes and label rows across cards — the ultimate tool for professional data panels.",
        
        // 🌟 New Grid Theory
        theory_grid_title: "🧠 Architect's Mindset: 2D Space Planning & Component Grids",
        theory_grid_desc: "Grid's essence isn't \"drawing tables\", but \"**defining spatial contracts**\". In large systems (like SaaS backends, design tools), Grid is the cornerstone for establishing global visual order and component reuse systems. When using Grid, architects think about \"track systems\" rather than \"element positions\".",
        theory_grid_l1: "<strong>Spatial Contracts & Decoupling:</strong> Parent containers define \"Slots\" via <code>grid-template</code>, child components declare \"occupancy\" via <code>grid-area</code>. This mechanism achieves complete decoupling of HTML structure and CSS layout. When designers adjust page block order, they only modify the parent's string template, zero intrusion on child component code.",
        theory_grid_l2: "<strong>Intrinsic vs Extrinsic Sizing Game:</strong> Grid is the only CSS layout that handles both \"intrinsic sizing (content-driven)\" and \"extrinsic sizing (container-allocated)\" simultaneously. Architect's rule: **Fixed sidebars use px, elastic main areas use fr, unknown content areas use minmax()**, building \"bulletproof layouts\" that withstand any extreme data.",
        theory_grid_l3: "<strong>From Macro Layout to Micro Components:</strong> Use Grid at page level to divide Header/Sidebar/Main, use Flexbox at component level (e.g., inside cards) for alignment. This \"**Outer Grid, Inner Flex**\" nesting paradigm is currently the industry-recognized optimal page layout architecture pattern.",

        demo_grid_col_title: "grid-template-columns Definition", demo_col_template: "Column Template:",
        demo_grid_areas_title: "grid-template-areas Named Layout", demo_layout_scheme: "Layout Scheme:",
        demo_scheme_classic: "Classic", demo_scheme_magazine: "Magazine", demo_scheme_dashboard: "Dashboard",
        demo_grid_auto_title: "auto-fit / auto-fill Adaptive Cards", demo_card_min_width: "Card Min Width:", demo_drag_hint: "← Try dragging slider and resizing browser window",
        float_c1_title: "What is Float?", float_c1_desc: "The <code>float</code> property was originally designed for <strong>text wrapping around images</strong>. After floating, elements leave normal document flow, moving left or right until hitting container edge or another float. Though modern layouts recommend Flex/Grid, understanding floats remains crucial for maintaining legacy code and CSS fundamentals.",
        float_c2_title: "Float Collapse Issue", float_c2_desc: "When all children in a parent are floated, parent <strong>collapses to 0 height</strong> because floats leave document flow. This is the most classic float problem, must be solved via <strong>clearing floats</strong>.",
        float_c3_title: "Clearing Float Solutions", float_c3_desc: "• <strong>clearfix pseudo-element</strong> (Recommended):<br><code>.clearfix::after { content:''; display:table; clear:both; }</code><br>• <code>overflow: hidden/auto</code> (Triggers BFC)<br>• <code>clear: both</code> (Add empty clearing element)",
        float_c4_title: "BFC: Block Formatting Context", float_c4_desc: "Setting <code>overflow: hidden/auto</code> triggers BFC. BFC containers automatically include internal floats, providing an elegant clearing solution while also preventing margin collapse.",
        float_c5_title: "Float Limitations", float_c5_desc: "Floats cannot achieve vertical centering, equal-height columns, or complex alignment. In modern development, <strong>prioritize Flex/Grid for layouts</strong>, reserving floats only for specific scenarios like text wrapping.",
        float_c6_title: "Modern Float Uses", float_c6_desc: "Though no longer primary layout tools, floats remain useful for:<br>• Text wrapping around images/icons<br>• Simple left-right arrangements (with clearfix)<br>• Understanding BFC (Block Formatting Context)",
        case_float_title: "Case Study: News Portal Text-Image Layout & BFC Traps", case_float_sub: "Analyzing classic \"image-left-text-right\" news lists in traditional portals like Sina and NetEase, plus common \"height collapse\" pitfalls.",
        case_float_news_title: "Breaking: CSS Grid Turns 10!", case_float_news_body: "Ten years ago, W3C officially released CSS Grid specification, fundamentally changing how frontend engineers build 2D web layouts. From initial IE10 experimental support to perfect compatibility across all modern browsers, Grid has become...", case_float_read_more: "Read More →",
        case_float_p1_title: "Original Intent: Text Wrapping", case_float_p1_desc: "In news lists, setting <code>float: left; margin-right: 16px;</code> on thumbnails causes subsequent text paragraphs to automatically wrap around right and bottom. This is float's <strong>sole original purpose</strong>, still the best solution for rich text editor output with mixed text-image content.",
        case_float_p2_title: "Fatal \"Height Collapse\"", case_float_p2_desc: "If news card (parent) has no fixed height and contains only floated images plus normal text, when text is short, parent height <strong>collapses to 0</strong>, causing subsequent news items to overlap current one, instantly breaking page. This happens because floats leave standard document flow.",
        case_float_p3_title: "Elegant Solution: Trigger BFC", case_float_p3_desc: "Add <code>overflow: hidden;</code> or <code>overflow: auto;</code> to news card parent. This triggers <strong>BFC (Block Formatting Context)</strong>. A key BFC characteristic: when calculating height, it includes internal floats, perfectly propping open the parent container.",
        case_float_p4_title: "Classic Clearfix Hack", case_float_p4_desc: "If parent cannot use <code>overflow: hidden</code> (e.g., dropdown menus need overflow visibility), must use <code>.clearfix::after</code> pseudo-element method. Generates invisible block element at parent end with <code>clear: both;</code>, forcibly pushing parent bottom down.",
        case_float_p5_title: "BFC's Other Side: Preventing Margin Collapse", case_float_p5_desc: "BFC not only clears floats but also <strong>prevents vertical margin collapsing</strong> between adjacent blocks. When margin merging between two news cards causes abnormal spacing, wrapping one in a BFC container (e.g., div with overflow:hidden) makes their margins work independently.",
        case_float_p6_title: "Float \"Staircase Effect\" & Fix", case_float_p6_desc: "When multiple floated cards have inconsistent heights, subsequent cards may get \"stuck\" by taller preceding cards, creating jagged staircase misalignment. This occurs because floats only hug previous float's edge. Modern dev should use Grid/Flex instead; if floats are mandatory, ensure same-row elements have equal height or use JS patches.",
        
        // 🌟 New Float Theory
        theory_float_title: "🧠 Architect's Mindset: Document Flow Essence & BFC Isolation",
        theory_float_desc: "The ultimate goal of learning Float isn't \"using it for layout\", but **deeply understanding CSS's \"Normal Document Flow\" and \"Formatting Contexts\"**. This is the underlying cornerstone of all advanced CSS rendering mechanisms; without understanding BFC, one cannot truly master complex page stacking and spacing control.",
        theory_float_l1: "<strong>Physical Laws of Document Flow:</strong> Block elements stack top-to-bottom, inline elements flow left-to-right. The essence of Float and Absolute is \"**breaking physical laws (leaving document flow)**\". When designing pages, architects must clearly define which elements are \"in-flow\" (participate in height calculation) and which are \"out-of-flow\" (absolute/floated), the prerequisite for avoiding page height collapse and scrollbar anomalies.",
        theory_float_l2: "<strong>BFC's \"Barrier\" Theory:</strong> BFC (Block Formatting Context) is equivalent to creating an \"**independent rendering barrier**\" in the page. Internal layouts (floats, margin collapsing) within the barrier absolutely cannot affect the outside. Using this theory, we can precisely solve edge cases like margin penetration and accidental text wrapping, a mandatory course for senior CSS engineers.",
        theory_float_l3: "<strong>Legacy Baggage & Tech Selection:</strong> When maintaining million-line legacy systems, blindly refactoring Float to Flex might trigger unpredictable regression bugs. An architect's professionalism lies in: **firmly embracing Flex/Grid in new projects, while using BFC theory to precisely patch Float defects in old projects**, achieving smooth transition of technical debt.",

        demo_float_vs_title: "Float Effect vs Clearing Floats", demo_operation: "Operation:", demo_enable_float: "Enable Float", demo_disable_float: "Disable Float", demo_add_clearfix: "Add Clearfix",
        demo_left_float: "Left Float", demo_right_float: "Right Float",
        demo_float_wrap_title: "Text Wrapping Around Image", demo_float_dir: "Float Direction:",
        demo_float_wrap_text: "This paragraph demonstrates text wrapping around an image. When image has <code>float: left</code>, subsequent text automatically wraps around right and bottom. This was float's original design purpose. In modern CSS, though layouts have been replaced by Flex and Grid, text wrapping still uses float. Toggle float direction above to observe text reflow. CSS float accepts <code>left</code>, <code>right</code> and <code>none</code>.",
        pos_c1_title: "static (Default)", pos_c1_desc: "Element's default positioning, arranged in <strong>normal document flow</strong>. Setting offset properties like <code>top</code>, <code>left</code> has <strong>no effect</strong>. Most elements are naturally static positioned.",
        pos_c2_title: "relative (Relative)", pos_c2_desc: "Offsets relative to element's <strong>original position</strong>. Element still occupies original space (doesn't affect other layouts). Commonly used as positioning reference for <code>absolute</code> children (\"child absolute, parent relative\" principle).",
        pos_c3_title: "absolute (Absolute)", pos_c3_desc: "Leaves document flow, positions relative to <strong>nearest non-static positioned ancestor</strong>. If none exists, positions relative to <code>&lt;html&gt;</code>. Element takes no space, other elements \"ignore\" it.",
        pos_c4_title: "fixed (Fixed)", pos_c4_desc: "Fixed relative to <strong>browser viewport</strong>, position doesn't move on scroll. Typical applications: fixed navbars, back-to-top buttons, floating ads, fullscreen modal overlays.",
        pos_c5_title: "sticky (Sticky)", pos_c5_desc: "Hybrid positioning: relative before reaching threshold, fixed after. Typical applications: sticky headers, fixed table headers, scrolling sidebars. Combines advantages of both relative and fixed positioning.",
        pos_c6_title: "z-index Stacking Order", pos_c6_desc: "Controls <strong>front-back stacking order</strong> of positioned elements. Higher values appear closer to user. Only effective when position is non-static, must consider stacking context creation rules.",
        case_pos_title: "Case Study: E-commerce Product Cards & Global Floating Support", case_pos_sub: "Analyzing \"Hot Sale\" badges on product cards and global floating support/cart buttons at bottom-right corner in platforms like Taobao and JD.",
        case_pos_product_name: "Wireless Noise-Canceling Headphones",
        case_pos_p1_title: "Child Absolute Parent Relative: Badge Positioning", case_pos_p1_desc: "Product card itself is normal flow element (Relative), while top-left \"HOT\" badge uses Absolute positioning. <code>top: -10px; left: -10px;</code> creates \"overflow\" visual effect beyond card. Parent must have <code>position: relative;</code> as positioning anchor.",
        case_pos_p2_title: "Fixed Global Float: Leaving Document Flow", case_pos_p2_desc: "Support button at bottom-right uses <code>position: fixed; bottom: 30px; right: 30px;</code>. Regardless of scrolling through thousands of products, button stays \"pinned\" at viewport bottom-right. Completely leaves document flow, occupying zero page space.",
        case_pos_p3_title: "Overlay & Z-index Layer Management", case_pos_p3_desc: "Dialog triggered by support button needs semi-transparent black overlay. Overlay uses <code>position: fixed; inset: 0; z-index: 998;</code> covering full screen, dialog itself uses <code>z-index: 999;</code> floating above overlay. Proper z-index planning is key to avoiding \"z-index hell\".",
        case_pos_p4_title: "Sticky Category Navigation", case_pos_p4_desc: "Sort bar (\"Relevance, Sales, Price\") at top of product list uses <code>position: sticky; top: 64px;</code> (assuming 64px fixed nav at top). On scroll down, sort bar \"sticks\" below fixed nav, allowing users to switch sorting rules anytime.",
        case_pos_p5_title: "Stacking Context Trap", case_pos_p5_desc: "z-index comparison is not global but within respective <strong>stacking contexts</strong>. If parent has transform, opacity&lt;1 or filter, new stacking context is created. Child's z-index can never exceed parent's sibling regardless of value — most common cause of e-commerce modals being obscured.",
        case_pos_p6_title: "Fixed Jitter on Mobile Safari", case_pos_p6_desc: "iOS Safari historically had issues handling fixed elements during scroll (jumping when address bar collapses). Modern solutions: use <code>position: sticky</code> replacing unnecessary global fixed, or place fixed elements as direct body children, avoiding nesting inside overflow:scroll containers.",
        
        // 🌟 New Position Theory
        theory_pos_title: "🧠 Architect's Mindset: 3D Coordinate Systems & Layer Governance",
        theory_pos_desc: "Position elevates web pages from \"2D planes\" to \"3D space (Z-axis)\". In enterprise complex systems (like Figma, online docs, large e-commerce), the core challenge of positioning layout is no longer \"where to put it\", but \"**how to establish a global Z-index layer governance system and coordinate anchor management**\".",
        theory_pos_l1: "<strong>Coordinate Anchor Theory (Containing Block):</strong> Absolute element's positioning base isn't the \"parent element\", but the \"nearest positioned (non-static) ancestor\". When designing complex components (like table rows with dropdowns), architects must precisely control the creation position of \"positioning anchors\", otherwise dropdowns will be clipped by the table's <code>overflow: hidden</code>.",
        theory_pos_l2: "<strong>Z-index Layer Governance Standard:</strong> Eliminate random <code>z-index: 9999</code> in projects. Professional teams must establish a \"**Layer Token (Z-index Tokens)**\" system: e.g., Base(0), Dropdown(100), Sticky(200), Overlay(300), Modal(400), Toast(500). Unified management via CSS variables completely eliminates \"modal obscured\" ghost bugs.",
        theory_pos_l3: "<strong>Stacking Context's \"Dimensional Strike\":</strong> Must deeply understand: properties like <code>transform</code>, <code>opacity < 1</code>, <code>filter</code> implicitly create new stacking contexts. This means a child with <code>z-index: 9999</code>, if its parent is dimensionally reduced, can never exceed its parent's sibling elements. This is the disaster zone for modern CSS animation and positioning conflicts.",

        demo_pos_compare_title: "Five Positioning Types Comparison", demo_select_pos_type: "Select Position Type:",
        demo_container_start: "↓ Container Start", demo_placeholder_1: "Placeholder 1 (Normal Flow)", demo_placeholder_2: "Placeholder 2 (Normal Flow)",
        demo_placeholder_3: "Placeholder 3", demo_placeholder_4: "Placeholder 4", demo_placeholder_5: "Placeholder 5", demo_container_end: "↑ Container End",
        demo_pos_badge_title: "\"Child Absolute Parent Relative\" — Card Badge", demo_badge_pos: "Badge Position:",
        demo_top_right: "Top Right", demo_top_left: "Top Left", demo_bottom_right: "Bottom Right", demo_bottom_left: "Bottom Left",
        demo_notify_card: "Notification Card", demo_relative_parent: "Parent with position: relative",
        resp_c1_title: "What is Responsive Design?", resp_c1_desc: "Responsive Web Design (RWD) means websites <strong>automatically adapt to different screen sizes</strong>, providing good browsing experience on phones, tablets, desktops. Core tech: viewport settings, media queries, flexible layouts, flexible images.",
        resp_c2_title: "Media Queries @media", resp_c2_desc: "Media queries are RWD's core tool, allowing different CSS styles based on device characteristics (e.g., screen width):<br><code>@media (max-width: 768px) { ... }</code><br>Common breakpoints: 576px (phone), 768px (tablet), 992px (small desktop), 1200px (large desktop).",
        resp_c3_title: "Mobile First Strategy", resp_c3_desc: "<strong>Mobile First</strong> is modern RWD best practice:<br>• Write mobile styles first (base styles)<br>• Progressively enhance for larger screens via <code>min-width</code> media queries<br>Better performance, cleaner code.",
        resp_c4_title: "Flexible Units", resp_c4_desc: "Recommended relative units for responsive design:<br>• <code>rem</code> — Relative to root font size<br>• <code>em</code> — Relative to parent font size<br>• <code>vw/vh</code> — Viewport width/height percentage<br>• <code>%</code> — Parent percentage<br>• <code>clamp()</code> — Set min, preferred, max values",
        resp_c5_title: "Viewport Meta Tag", resp_c5_desc: "<code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code> is RWD's <strong>essential prerequisite</strong>. Without it, mobile browsers render pages at desktop width (usually 980px) then scale down.",
        resp_c6_title: "Common Breakpoint Reference", resp_c6_desc: "576px (phone landscape), 768px (tablet portrait), 992px (small desktop), 1200px (large desktop), 1440px (ultra-wide). Breakpoints should be set based on content natural breaking points, not memorized device dimensions.",
        case_resp_title: "Case Study: Corporate Site \"Mobile First\" Full-device Refactor", case_resp_sub: "Analyzing how a real corporate site refactored from \"desktop-only\" to \"perfect adaptation across phones, tablets, ultrawide monitors\".",
        case_resp_p1_title: "Navbar \"Hamburger Menu\" Transformation", case_resp_p1_desc: "In base styles (mobile), nav links use <code>display: none;</code>, only hamburger icon shows. At <code>@media (min-width: 768px)</code>, hide hamburger, set nav links to <code>display: flex;</code>. This \"progressive enhancement\" strategy ensures minimal unused DOM loading on mobile.",
        case_resp_p2_title: "Card Grid Breakpoint Fission", case_resp_p2_desc: "Service intro cards stack single-column on mobile (<code>grid-template-columns: 1fr;</code>). At 768px tablet breakpoint, fissions to 2 columns (<code>repeat(2, 1fr)</code>), at 1024px desktop, 3 columns. Combined with <code>gap</code>, no percentage width calculations needed.",
        case_resp_p3_title: "Fluid Typography", case_resp_p3_desc: "Stop hardcoding <code>font-size: 48px;</code>. Use <code>clamp(1.5rem, 5vw, 3rem);</code>. Font size scales automatically with viewport width (5vw), but never smaller than 1.5rem or larger than 3rem. One line solves font adaptation for all devices.",
        case_resp_p4_title: "Responsive Images & Art Direction", case_resp_p4_desc: "Base setting <code>max-width: 100%; height: auto;</code> prevents images from breaking containers. Advanced: use <code>&lt;picture&gt;</code> tag with <code>srcset</code> to load cropped vertical hero images on mobile, full horizontal images on desktop, balancing visuals and performance.",
        case_resp_p5_title: "Touch Target Size & Accessibility (A11y)", case_resp_p5_desc: "Responsive isn't just visual, it's interactive. WCAG requires minimum <strong>44x44px</strong> clickable area on mobile. In media queries, besides layout adjustments, increase button padding and expand hit zones to ensure accurate taps even for users with thick fingers, avoiding misclicks.",
        case_resp_p6_title: "Container Queries: Component-level Responsive", case_resp_p6_desc: "Traditional media queries based on <strong>viewport width</strong> cause same component to behave differently in sidebar vs main content. <code>@container</code> queries let components adapt to their own <strong>parent container width</strong>, truly achieving \"write once, reuse everywhere\" atomic responsive component architecture.",
        
        // 🌟 New Responsive Theory
        theory_resp_title: "🧠 Architect's Mindset: From Device Adaptation to Content-First Philosophy",
        theory_resp_desc: "The highest realm of responsive design isn't \"writing a set of styles for every device\", but \"**letting content flow like water naturally into any shaped container**\". Modern architects have abandoned the old mindset of \"memorizing device breakpoints\", shifting to the new paradigm of \"content-driven breakpoints\" and \"Intrinsic Web Design\".",
        theory_resp_l1: "<strong>Content-Driven Breakpoints:</strong> Don't set breakpoints based on iPhone or iPad physical dimensions. The correct approach: continuously resize the browser window, **the exact pixel point where content starts looking crowded, text wraps uglily, and whitespace loses balance is your breakpoint**. This ensures layout always serves content, not specific hardware.",
        theory_resp_l2: "<strong>Modern Fluid Design Formula:</strong> Completely eliminate \"stepped font-size overrides\" in media queries. Fully adopt <code>clamp(MIN, PREFERRED, MAX)</code> combined with viewport units (vw/vh) to achieve true \"stepless variable\" fluid typography and spacing. This drastically reduces code volume and presents perfectly on any weird foldable or ultrawide screens.",
        theory_resp_l3: "<strong>Container Queries' Dimensional Strike:</strong> Traditional Media Queries are \"weather-dependent\" (relying on browser viewport), while Container Queries are \"terrain-adaptive\" (relying on parent container width). This is the most important paradigm shift in CSS history, allowing UI components to truly achieve \"**high cohesion, low coupling**\" atomic responsiveness, the ultimate weapon for building large Design Systems.",

        demo_resp_viewport_title: "Simulate Different Device Viewport Widths", demo_simulate_device: "Simulate Device:",
        demo_device_mobile: "Phone (375px)", demo_device_tablet: "Tablet (768px)", demo_device_laptop: "Laptop (1024px)", demo_device_desktop: "Desktop (1440px)",
        demo_resp_clamp_title: "clamp() Fluid Font Size Visualization", demo_viewport_width: "Viewport Width:",
        footer_module_desc: "Module 6: How to Build Web Page Layouts", footer_copyright: "&copy; 2026 WebLayout Pro. Professional Web Layout Teaching System", btn_back_to_top: "Back to Top",
        out_float_collapse: "Children: float: left; width: 45%; ⚠️ Parent height collapsed!", out_float_normal: "Children: float: none; (Normal flow)",
        out_bfc_success: "✅ overflow: hidden triggers BFC — Parent correctly wraps floats",
        out_pos_static: "position: static; (Default, top/left offsets ignored)", out_pos_relative: "position: relative; top: 20px; left: 30px; (Offset from original, space preserved)",
        out_pos_absolute: "position: absolute; top: 10px; right: 10px; (Out of flow, relative to positioned ancestor)",
        out_pos_fixed: "position: fixed; bottom: 100px; right: 30px; (Fixed to viewport, ⚠️ simulated in container)",
        out_pos_fixed_sim: "Target (Simulated fixed — container corner)", out_pos_sticky: "position: sticky; top: 0; (Sticks when scrolled to top)",
        txt_target_static: "Target (position: static)", txt_target_relative: "Target (position: relative; top:20px; left:30px)",
        txt_target_absolute: "Target (position: absolute; top:10px; right:10px)", txt_target_fixed: "Target (position: fixed)",
        txt_target_sticky: "Target (position: sticky; top:0) — Try scrolling container",
        txt_first_chapter: "Already at first chapter", txt_last_chapter: "Already at last chapter", txt_prev_chapter: "Previous Chapter", txt_next_chapter: "Next Chapter",
        layout_mobile: "1-column (Phone)", layout_tablet: "2-column (Tablet)", layout_laptop: "3-column (Laptop)", layout_desktop: "4-column (Desktop)",
        clamp_computed_text: "Computed: {val}px (min=16px, 4vw={vw}px, max=48px)",
        code_flexbox: `/* ========== Flexbox Classic Layouts ========== */\n\n/* 1. Basic Flex Container */\n.flex-container {\n    display: flex;\n    flex-direction: row;          /* Main axis: horizontal */\n    justify-content: space-between; /* Space between on main axis */\n    align-items: center;          /* Center on cross axis */\n    gap: 20px;                    /* Gap between children */\n    padding: 20px;\n}\n\n/* 2. Classic Three-Column Layout */\n.three-column-layout {\n    display: flex;\n}\n.sidebar-left  { flex: 0 0 200px; }  /* Fixed 200px */\n.main-content  { flex: 1; }          /* Auto-fill remaining */\n.sidebar-right { flex: 0 0 200px; }  /* Fixed 200px */\n\n/* 3. Perfect Centering */\n.center-box {\n    display: flex;\n    justify-content: center;     /* Horizontal center */\n    align-items: center;         /* Vertical center */\n    min-height: 100vh;\n}\n\n/* 4. Sticky Footer */\n.page-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n.page-content { flex: 1; }     /* Content fills remaining */\n\n/* 5. Navbar Layout */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 30px;\n    height: 64px;\n}\n.nav-links {\n    display: flex;\n    gap: 24px;\n    list-style: none;\n}`,
        code_grid: `/* ========== Grid Classic Page Layouts ========== */\n\n/* 1. Classic Holy Grail Layout */\n.page-grid {\n    display: grid;\n    grid-template-columns: 220px 1fr 220px;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        "header  header  header"\n        "sidebar main    aside"\n        "footer  footer  footer";\n    min-height: 100vh;\n    gap: 0;\n}\n.header  { grid-area: header;  }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main;    }\n.aside   { grid-area: aside;   }\n.footer  { grid-area: footer;  }\n\n/* 2. Adaptive Card Grid */\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 24px;\n    padding: 24px;\n}\n\n/* 3. Dashboard Layout */\n.dashboard {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 180px);\n    gap: 16px;\n}\n.widget-large  { grid-column: span 2; grid-row: span 2; }\n.widget-wide   { grid-column: span 4; }\n.widget-normal { /* Default 1 cell */ }\n\n/* 4. 12-Column Grid System */\n.grid-12 {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    gap: 20px;\n}\n.col-3  { grid-column: span 3;  }\n.col-4  { grid-column: span 4;  }\n.col-6  { grid-column: span 6;  }\n.col-8  { grid-column: span 8;  }\n.col-12 { grid-column: span 12; }`,
        code_float: `/* ========== Float Layout ========== */\n\n/* 1. Universal Clearfix */\n.clearfix::after {\n    content: "";\n    display: table;\n    clear: both;\n}\n\n/* 2. Classic Two-Column Float Layout */\n.float-two-col {\n    overflow: hidden;  /* Trigger BFC to clear floats */\n}\n.float-left-col {\n    float: left;\n    width: 30%;\n    padding: 20px;\n}\n.float-right-col {\n    float: right;\n    width: 65%;\n    padding: 20px;\n}\n\n/* 3. Text Wrapping Around Image */\n.article-img {\n    float: left;\n    margin: 0 16px 16px 0;\n    width: 200px;\n    border-radius: 8px;\n}\n\n/* 4. Float Navigation */\n.float-nav {\n    overflow: hidden;\n    background: #333;\n}\n.float-nav a {\n    float: left;\n    padding: 14px 20px;\n    color: white;\n    text-decoration: none;\n}\n.float-nav a:hover {\n    background: #555;\n}\n\n/* 5. Equal-width Multi-column Float */\n.float-columns .col {\n    float: left;\n    width: 33.333%;\n    padding: 15px;\n    box-sizing: border-box;\n}`,
        code_position: `/* ========== Position Layout ========== */\n\n/* 1. Child Absolute, Parent Relative — Badge */\n.card-wrapper {\n    position: relative;        /* Parent set to relative */\n}\n.badge {\n    position: absolute;        /* Child set to absolute */\n    top: -8px;\n    right: -8px;\n    background: #ef4444;\n    color: white;\n    border-radius: 50%;\n    width: 24px; height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n}\n\n/* 2. Fixed Navbar */\n.fixed-navbar {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    height: 64px;\n    background: rgba(255,255,255,0.95);\n    backdrop-filter: blur(10px);\n    z-index: 1000;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\n/* 3. Fullscreen Overlay */\n.overlay {\n    position: fixed;\n    inset: 0;                   /* top:0; right:0; bottom:0; left:0; */\n    background: rgba(0,0,0,0.5);\n    z-index: 999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* 4. Sticky Effect */\n.sticky-header {\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    background: white;\n}\n\n/* 5. Floating Action Button (FAB) */\n.fab-button {\n    position: fixed;\n    bottom: 32px;\n    right: 32px;\n    width: 56px; height: 56px;\n    border-radius: 50%;\n    background: #6366f1;\n    color: white;\n    border: none;\n    box-shadow: 0 4px 20px rgba(99,102,241,0.4);\n    cursor: pointer;\n    z-index: 100;\n    transition: transform 0.3s;\n}\n.fab-button:hover {\n    transform: scale(1.1);\n}`,
        code_responsive: `/* ========== Responsive Layout ========== */\n\n/* 1. Viewport Settings (in HTML head) */\n/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */\n\n/* 2. Mobile First — Base Styles (Phone) */\n.responsive-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n}\n\n/* 3. Tablet Breakpoint (≥768px) */\n@media (min-width: 768px) {\n    .responsive-grid {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 24px;\n        padding: 24px;\n    }\n}\n\n/* 4. Desktop Breakpoint (≥1024px) */\n@media (min-width: 1024px) {\n    .responsive-grid {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 32px;\n        padding: 32px;\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n}\n\n/* 5. Large Screen Breakpoint (≥1440px) */\n@media (min-width: 1440px) {\n    .responsive-grid {\n        grid-template-columns: repeat(4, 1fr);\n        max-width: 1400px;\n    }\n}\n\n/* 6. Responsive Typography */\nh1 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n}\np {\n    font-size: clamp(0.875rem, 1.5vw, 1.125rem);\n}\n\n/* 7. Responsive Spacing */\n.section-padding {\n    padding: clamp(1rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);\n}\n\n/* 8. Show/Hide Control */\n.hide-mobile  { display: none; }\n@media (min-width: 768px) {\n    .hide-mobile  { display: block; }\n    .hide-desktop { display: none;  }\n}\n\n/* 9. Responsive Navigation (Hamburger Menu) */\n.nav-links { display: none; }\n@media (min-width: 768px) {\n    .nav-links { display: flex; }\n    .hamburger { display: none; }\n}`
    }
};

let currentLang = localStorage.getItem('lang') || 'zh';

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initThemeToggle();
    initLangToggle();
    initMobileMenu();
    initScrollAnimations();
    initSectionTabs();
    initChapterNav();

    const hash = window.location.hash.replace('#', '');
    const validViews = ['home', ...CHAPTERS];
    if (hash && validViews.includes(hash)) {
        navigateTo(hash, false);
    } else {
        navigateTo('home', false);
    }

    applyLanguage(currentLang);
});

function initLangToggle() {
    const toggle = document.getElementById('langToggle');
    const label = document.getElementById('langLabel');
    
    label.textContent = currentLang === 'zh' ? 'EN' : '中文';

    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', currentLang);
        label.textContent = currentLang === 'zh' ? 'EN' : '中文';
        applyLanguage(currentLang);
    });
}

function applyLanguage(lang) {
    const dict = I18N_DICT[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    document.title = dict.page_title || document.title;

    const codeMap = {
        'code-flexbox': dict.code_flexbox,
        'code-grid': dict.code_grid,
        'code-float': dict.code_float,
        'code-position': dict.code_position,
        'code-responsive': dict.code_responsive
    };
    Object.entries(codeMap).forEach(([id, code]) => {
        const el = document.getElementById(id);
        if (el && code) el.textContent = code;
    });

    refreshDynamicOutputs(dict);
}

function refreshDynamicOutputs(dict) {
    const posCode = document.getElementById('pos-demo-code');
    if (posCode) {
        const t = posCode.textContent;
        if (t.includes('static') || t.includes('默认') || t.includes('Default')) posCode.textContent = dict.out_pos_static;
        else if (t.includes('relative') || t.includes('相对') || t.includes('Offset')) posCode.textContent = dict.out_pos_relative;
        else if (t.includes('absolute') || t.includes('脱离') || t.includes('Out of flow')) posCode.textContent = dict.out_pos_absolute;
        else if (t.includes('fixed') || t.includes('视口') || t.includes('viewport')) posCode.textContent = dict.out_pos_fixed;
        else if (t.includes('sticky') || t.includes('吸住') || t.includes('Sticks')) posCode.textContent = dict.out_pos_sticky;
    }

    const floatCode = document.getElementById('float-demo-code');
    if (floatCode) {
        const t = floatCode.textContent;
        if (t.includes('塌陷') || t.includes('collapsed')) floatCode.textContent = dict.out_float_collapse;
        else if (t.includes('正常') || t.includes('Normal')) floatCode.textContent = dict.out_float_normal;
        else if (t.includes('BFC')) floatCode.textContent = dict.out_bfc_success;
    }

    const deviceInfo = document.getElementById('device-info');
    if (deviceInfo) {
        const match = deviceInfo.textContent.match(/(\d+)px/);
        if (match) {
            const width = parseInt(match[1]);
            let label = '';
            if (width <= 480) label = dict.layout_mobile;
            else if (width <= 768) label = dict.layout_tablet;
            else if (width <= 1200) label = dict.layout_laptop;
            else label = dict.layout_desktop;
            
            const prefix = currentLang === 'zh' ? '当前视口' : 'Current Viewport';
            deviceInfo.textContent = `${prefix}: ${width}px — ${label}`;
        }
    }
}

function t(key) {
    return I18N_DICT[currentLang][key] || I18N_DICT['zh'][key] || key;
}

function initChapterNav() {
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');

    prevBtn.addEventListener('click', () => {
        const currentHash = window.location.hash.replace('#', '');
        const currentIndex = CHAPTERS.indexOf(currentHash);
        if (currentIndex > 0) {
            navigateTo(CHAPTERS[currentIndex - 1]);
        }
    });

    nextBtn.addEventListener('click', () => {
        const currentHash = window.location.hash.replace('#', '');
        const currentIndex = CHAPTERS.indexOf(currentHash);
        if (currentIndex < CHAPTERS.length - 1) {
            navigateTo(CHAPTERS[currentIndex + 1]);
        }
    });
}

function initSectionTabs() {
    document.body.addEventListener('click', function(e) {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        const section = btn.closest('.module-section');
        if (!section) return;

        const targetTab = btn.getAttribute('data-tab');

        section.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        section.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        const targetPanel = section.querySelector(`.tab-panel[data-panel="${targetTab}"]`);
        if (targetPanel) {
            targetPanel.classList.add('active');
            
            const animElements = targetPanel.querySelectorAll('.knowledge-card, .case-study-card, .code-block, .demo-card, .layout-theory-box');
            animElements.forEach(el => {
                el.classList.remove('visible');
                void el.offsetWidth;
                el.classList.add('fade-in');
                setTimeout(() => el.classList.add('visible'), 50);
            });
        }
    });
}

function navigateTo(viewId, updateHash = true) {
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    const navGroupHome = document.querySelector('.nav-group-home');
    const navGroupSub = document.getElementById('navGroupSub');

    if (viewId === 'home') {
        if (navGroupHome) navGroupHome.style.display = 'flex';
        if (navGroupSub) navGroupSub.style.display = 'none';
    } else {
        if (navGroupHome) navGroupHome.style.display = 'none';
        if (navGroupSub) navGroupSub.style.display = 'flex';
        
        updateChapterButtons(viewId);
    }

    document.querySelectorAll('.nav-group-home .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${viewId}'`)) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (updateHash) {
        history.pushState(null, '', `#${viewId}`);
    }

    const nav = document.getElementById('mainNav');
    const btn = document.getElementById('mobileMenuBtn');
    if (nav) nav.classList.remove('open');
    if (btn) btn.classList.remove('active');

    setTimeout(() => {
        const activePanels = targetView ? targetView.querySelectorAll('.tab-panel.active') : [];
        activePanels.forEach(panel => {
            const elements = panel.querySelectorAll('.knowledge-card, .case-study-card, .code-block, .demo-card, .layout-theory-box');
            elements.forEach(el => {
                el.classList.remove('visible');
                void el.offsetWidth;
                el.classList.add('fade-in');
                setTimeout(() => el.classList.add('visible'), 100);
            });
        });
    }, 50);
}

function updateChapterButtons(viewId) {
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    
    const currentIndex = CHAPTERS.indexOf(viewId);
    
    if (currentIndex <= 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
        prevBtn.title = t('txt_first_chapter');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
        prevBtn.title = t('txt_prev_chapter');
    }

    if (currentIndex >= CHAPTERS.length - 1 || currentIndex === -1) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
        nextBtn.title = t('txt_last_chapter');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
        nextBtn.title = t('txt_next_chapter');
    }
}

window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash, false);
});

function initScrollEffects() {
    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');

    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
        btn.classList.toggle('active');
    });
}

function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.knowledge-card, .case-study-card, .code-block, .demo-card, .practice-card, .comparison-table-wrapper, .directory-card, .layout-theory-box'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

function changeFlexProp(demoId, prop, value, btn) {
    const demo = document.getElementById(demoId);
    if (!demo) return;
    demo.style[prop] = value;

    activateButton(btn);

    const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
    const codeEl = document.getElementById(`${demoId}-code`);
    if (codeEl) {
        codeEl.textContent = `${cssProp}: ${value};`;
    }
}

function changeGrid(demoId, columns, btn) {
    const demo = document.getElementById(demoId);
    if (!demo) return;
    demo.style.gridTemplateColumns = columns;
    activateButton(btn);

    const codeEl = document.getElementById(`${demoId}-code`);
    if (codeEl) {
        codeEl.textContent = `grid-template-columns: ${columns};`;
    }
}

function changeGridAreas(layout, btn) {
    const demo = document.getElementById('demo-grid-areas');
    const codeEl = document.getElementById('demo-grid-areas-code');
    if (!demo) return;
    activateButton(btn);

    const layouts = {
        classic: {
            cols: '200px 1fr 200px',
            rows: '50px 1fr 50px',
            areas: `"header header header" "sidebar main aside" "footer footer footer"`,
            code: 'grid-template-areas: "header header header" "sidebar main aside" "footer footer footer";'
        },
        magazine: {
            cols: '1fr 2fr',
            rows: '60px 1fr 1fr 50px',
            areas: `"header header" "sidebar main" "sidebar main" "footer footer"`,
            code: 'grid-template-areas: "header header" "sidebar main" "sidebar main" "footer footer";'
        },
        dashboard: {
            cols: '1fr 1fr 1fr',
            rows: '50px 1fr 1fr 50px',
            areas: `"header header header" "main main aside" "main main sidebar" "footer footer footer"`,
            code: 'grid-template-areas: "header header header" "main main aside" "main main sidebar" "footer footer footer";'
        }
    };

    const l = layouts[layout];
    demo.style.gridTemplateColumns = l.cols;
    demo.style.gridTemplateRows = l.rows;
    demo.style.gridTemplateAreas = l.areas;
    codeEl.textContent = l.code;
}

function updateGridCards(val) {
    const demo = document.getElementById('demo-grid-auto');
    if (!demo) return;
    demo.style.gridTemplateColumns = `repeat(auto-fit, minmax(${val}px, 1fr))`;
    document.getElementById('gridCardVal').textContent = `${val}px`;
    document.getElementById('demo-grid-auto-code').textContent =
        `grid-template-columns: repeat(auto-fit, minmax(${val}px, 1fr));`;
}

function toggleFloat(demoId, enable, btn) {
    const demo = document.getElementById(demoId);
    if (!demo) return;
    const children = demo.querySelectorAll('.float-child');
    activateButton(btn);

    children.forEach(child => {
        child.style.float = enable ? 'left' : 'none';
    });

    demo.style.overflow = 'visible';
    demo.classList.remove('clearfix');

    const codeEl = document.getElementById(`${demoId}-code`);
    codeEl.textContent = enable
        ? t('out_float_collapse')
        : t('out_float_normal');
}

function toggleClearfix(demoId, btn) {
    const demo = document.getElementById(demoId);
    if (!demo) return;
    activateButton(btn);
    demo.style.overflow = 'hidden';

    const codeEl = document.getElementById(`${demoId}-code`);
    codeEl.textContent = t('out_bfc_success');
}

function changeImgFloat(direction, btn) {
    const img = document.getElementById('float-img');
    if (!img) return;
    img.style.float = direction;

    if (direction === 'none') {
        img.style.margin = '0 auto 16px auto';
        img.style.display = 'block';
    } else {
        img.style.margin = direction === 'left' ? '0 16px 10px 0' : '0 0 10px 16px';
        img.style.display = 'block';
    }

    activateButton(btn);
}

function changePosition(boxId, posType, btn) {
    const box = document.getElementById(boxId);
    const container = document.getElementById('pos-demo-container');
    if (!box || !container) return;
    activateButton(btn);

    box.style.position = posType;
    box.style.top = '';
    box.style.left = '';
    box.style.right = '';
    box.style.bottom = '';
    box.style.zIndex = '';

    const codeEl = document.getElementById('pos-demo-code');

    switch (posType) {
        case 'static':
            box.textContent = t('txt_target_static');
            codeEl.textContent = t('out_pos_static');
            break;
        case 'relative':
            box.style.top = '20px';
            box.style.left = '30px';
            box.textContent = t('txt_target_relative');
            codeEl.textContent = t('out_pos_relative');
            break;
        case 'absolute':
            container.style.position = 'relative';
            box.style.top = '10px';
            box.style.right = '10px';
            box.textContent = t('txt_target_absolute');
            codeEl.textContent = t('out_pos_absolute');
            break;
        case 'fixed':
            box.style.bottom = '100px';
            box.style.right = '30px';
            box.textContent = t('txt_target_fixed');
            codeEl.textContent = t('out_pos_fixed');
            box.style.position = 'absolute';
            box.style.bottom = '10px';
            box.style.right = '10px';
            box.textContent = t('out_pos_fixed_sim');
            break;
        case 'sticky':
            box.style.top = '0';
            box.textContent = t('txt_target_sticky');
            codeEl.textContent = t('out_pos_sticky');
            break;
    }
}

function resetPositionDemo() {
    const box = document.getElementById('pos-demo-box');
    if (!box) return;
    box.style.cssText = 'background:linear-gradient(135deg,#ef4444,#f87171); color:#fff; padding:16px; border-radius:8px; font-weight:bold; text-align:center; transition: all 0.3s;';
    box.textContent = t('txt_target_static');
    document.getElementById('pos-demo-code').textContent = t('out_pos_static');

    const btns = document.querySelectorAll('#view-position .demo-card:first-child .demo-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btns[0]) btns[0].classList.add('active');
}

function moveBadge(positions, btn) {
    const badge = document.getElementById('pos-badge');
    if (!badge) return;
    activateButton(btn);

    badge.style.top = '';
    badge.style.bottom = '';
    badge.style.left = '';
    badge.style.right = '';

    const pairs = positions.split(';');
    pairs.forEach(pair => {
        const [prop, val] = pair.split(':');
        if (prop && val) {
            badge.style[prop.trim()] = val.trim();
        }
    });
}

function simulateDevice(width, btn) {
    const frame = document.getElementById('device-frame');
    const grid = document.getElementById('responsive-demo-inner');
    const info = document.getElementById('device-info');
    if (!frame || !grid || !info) return;
    activateButton(btn);

    const maxWidth = Math.min(width, frame.parentElement.offsetWidth - 40);
    frame.style.maxWidth = maxWidth + 'px';

    let cols, label;
    if (width <= 480) {
        cols = '1fr';
        label = t('layout_mobile');
    } else if (width <= 768) {
        cols = 'repeat(2, 1fr)';
        label = t('layout_tablet');
    } else if (width <= 1200) {
        cols = 'repeat(3, 1fr)';
        label = t('layout_laptop');
    } else {
        cols = 'repeat(4, 1fr)';
        label = t('layout_desktop');
    }

    grid.style.gridTemplateColumns = cols;
    const prefix = currentLang === 'zh' ? '当前视口' : 'Current Viewport';
    info.textContent = `${prefix}: ${width}px — ${label}`;
}

function updateClamp(val) {
    const text = document.getElementById('clamp-text');
    const computed = document.getElementById('clamp-computed');
    if (!text || !computed) return;

    const vwValue = val * 0.04;
    const min = 16;
    const max = 48;
    const clamped = Math.max(min, Math.min(max, vwValue));

    text.style.fontSize = clamped + 'px';
    
    const template = t('clamp_computed_text');
    computed.textContent = template
        .replace('{val}', clamped.toFixed(1))
        .replace('{vw}', vwValue.toFixed(1));
        
    document.getElementById('clampVal').textContent = `${val}px`;
}

function updateSidebar(val) {
    const sidebarL = document.getElementById('demo-sidebar-l');
    const sidebarR = document.getElementById('demo-sidebar-r');
    if (!sidebarL || !sidebarR) return;

    sidebarL.style.flex = `0 0 ${val}px`;
    sidebarR.style.flex = `0 0 ${val}px`;

    document.getElementById('sidebarVal').textContent = `${val}px`;
    document.getElementById('sb-val').textContent = val;
    document.getElementById('sb-val2').textContent = val;
}

function copyCode(btn) {
    const codeBlock = btn.closest('.code-block');
    const code = codeBlock.querySelector('.code-content').textContent;

    navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = `<i class="fas fa-check"></i> ${t('btn_copied')}`;
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = `<i class="fas fa-copy"></i> ${t('btn_copy')}`;
        }, 2000);
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btn.classList.add('copied');
        btn.innerHTML = `<i class="fas fa-check"></i> ${t('btn_copied')}`;
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = `<i class="fas fa-copy"></i> ${t('btn_copy')}`;
        }, 2000);
    });
}

function activateButton(btn) {
    const group = btn.closest('.btn-group');
    if (group) {
        group.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');
}