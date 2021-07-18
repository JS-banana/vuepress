(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{528:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/facebook/react",target:"_blank",rel:"noopener noreferrer"}},[e._v("React源码"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"理解常用hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解常用hook"}},[e._v("#")]),e._v(" 理解常用hook")]),e._v(" "),s("h3",{attrs:{id:"_1-usestate-原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-usestate-原理分析"}},[e._v("#")]),e._v(" 1. useState 原理分析")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903975838285838",target:"_blank",rel:"noopener noreferrer"}},[e._v("一文彻底搞懂react hooks的原理和实现"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://juejin.im/post/6844903990958784526",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Hooks 源码解析（3）：useState"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://juejin.im/post/6844903974647103496",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Hooks 异步操作踩坑记"),s("OutboundLink")],1)])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("useState")]),e._v(" 对于当前组件来说不一定是同步更新(异步),出于性能优化考虑一般会把要更新的组件放入队列中统一更新。")]),e._v(" "),s("li",[s("code",[e._v("useState")]),e._v(" 的函数形式写法理解")])]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("prev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" prev"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("++")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"_2-useeffect-副作用-uselayouteffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-useeffect-副作用-uselayouteffect"}},[e._v("#")]),e._v(" 2. useEffect 副作用 (useLayoutEffect)")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903806090608647",target:"_blank",rel:"noopener noreferrer"}},[e._v("精读《useEffect 完全指南》"),s("OutboundLink")],1)])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("可看做 "),s("code",[e._v("componentDidMount")]),e._v("、"),s("code",[e._v("componentDidUpdate")]),e._v("、"),s("code",[e._v("componentWillUnmount")]),e._v(" 这三个函数的组合。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("useEffect与useLayoutEffect区别")])]),e._v(" "),s("ul",[s("li",[e._v("可以简单理解"),s("code",[e._v("useEffect")]),e._v("为异步，"),s("code",[e._v("useLayoutEffect")]),e._v("为同步。\n"),s("ul",[s("li",[s("code",[e._v("useEffect")]),e._v("在DOM变化后会在组件渲染到屏幕之后延迟执行。即该行为触发的effect并不是连续性的。")]),e._v(" "),s("li",[s("code",[e._v("useLayoutEffect")]),e._v("会在 DOM 变更之后同步调用 effect，即该行为是连续性的，该方式是有一定阻塞/性能影响。在浏览器执行绘制之前，useLayoutEffect内部的更新计划将被同步刷新。")])])])])])]),e._v(" "),s("h3",{attrs:{id:"_3-usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-usecallback"}},[e._v("#")]),e._v(" 3. useCallback")]),e._v(" "),s("ul",[s("li",[e._v("缓存回调"),s("strong",[e._v("函数")])])]),e._v(" "),s("h3",{attrs:{id:"_4-usememo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-usememo"}},[e._v("#")]),e._v(" 4. useMemo")]),e._v(" "),s("ul",[s("li",[e._v("缓存"),s("strong",[e._v("变量")])])]),e._v(" "),s("h3",{attrs:{id:"_5-memo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-memo"}},[e._v("#")]),e._v(" 5. memo")]),e._v(" "),s("ul",[s("li",[e._v("实现了 "),s("code",[e._v("class")]),e._v(" 组件的 "),s("code",[e._v("pureComponent")]),e._v(" 效果，浅比较，避免组件重复渲染。(内部实现shouldComponentUpdate())")])]),e._v(" "),s("h3",{attrs:{id:"_6-useref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-useref"}},[e._v("#")]),e._v(" 6. useRef")]),e._v(" "),s("ul",[s("li",[e._v("获取组件DOM")]),e._v(" "),s("li",[e._v("保存内部变量（组件的整个生命周期内保持不变）")])]),e._v(" "),s("h3",{attrs:{id:"_7-usereducer、usecontext、createcontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-usereducer、usecontext、createcontext"}},[e._v("#")]),e._v(" 7. useReducer、useContext、createContext")]),e._v(" "),s("h2",{attrs:{id:"自定义hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook"}},[e._v("#")]),e._v(" 自定义hook")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844904074433789959",target:"_blank",rel:"noopener noreferrer"}},[e._v("10分钟教你手写8个常用的自定义hooks"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);