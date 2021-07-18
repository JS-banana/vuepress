(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{529:function(v,_,e){"use strict";e.r(_);var l=e(28),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"一个页面从输入-url-到页面加载显示完成，这个过程中都发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个页面从输入-url-到页面加载显示完成，这个过程中都发生了什么"}},[v._v("#")]),v._v(" 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么")]),v._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/amandakelake/blog/issues/55",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器工作原理：从输入URL到页面加载完成"),e("OutboundLink")],1)])]),v._v(" "),e("h3",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),e("ul",[e("li",[v._v("这个问题涵盖的内容非常广，在主要的核心内容保证回答到位，可针对个人深入理解的部分进行细致的描述。如：HTTP、缓存、CDN、渲染等。")]),v._v(" "),e("li",[v._v("浏览器是多进程的，在浏览器中打开一个网页相当于新起了一个独立的浏览器进程（进程内有自己的多线程）\n"),e("ul",[e("li",[v._v("Browser进程")]),v._v(" "),e("li",[v._v("第三方插件进程")]),v._v(" "),e("li",[v._v("GPU进程")]),v._v(" "),e("li",[v._v("浏览器渲染（Render）进程（浏览器内核）\n"),e("ul",[e("li",[v._v("GUI渲染线程")]),v._v(" "),e("li",[v._v("JS引擎线程")]),v._v(" "),e("li",[v._v("事件触发线程")]),v._v(" "),e("li",[v._v("定时触发器线程")]),v._v(" "),e("li",[v._v("异步HTTP请求线程")])])])])])]),v._v(" "),e("h3",{attrs:{id:"概念分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念分析"}},[v._v("#")]),v._v(" 概念分析")]),v._v(" "),e("ol",[e("li",[v._v("GUI渲染线程与JS线程互斥\n"),e("ul",[e("li",[v._v("JS可以操作DOM，如果GUI和JS线程可以用时运行，那么最后的DOM是不可预测的。")])])]),v._v(" "),e("li",[v._v("WebWorker\n"),e("ul",[e("li",[v._v("Web Worker 允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM 。并没有改变 JavaScript 单线程的本质。")]),v._v(" "),e("li",[v._v("WebWorker只是属于该render进程下的一个线程，SharedWorker由独立的进程管理，多个render进程可以共享。")])])]),v._v(" "),e("li",[v._v("JS阻塞页面\n"),e("ul",[e("li",[v._v("由于JS线程和GUI线程互斥，所以一旦某段JS代码执行时间过长，页面渲染就会渲染不连贯，出现“加载阻塞”页面渲染的现象。")]),v._v(" "),e("li",[v._v("优化\n"),e("ul",[e("li",[v._v("JS加载逻辑放到页面底部，减少JS加载对GUI渲染工作的影响")]),v._v(" "),e("li",[v._v("避免重排/回流/Reflow（影响布局和大小的CSS样式），减少重绘/Repaint（颜色改变）")]),v._v(" "),e("li",[v._v("避免DOM嵌套层级过深")]),v._v(" "),e("li",[v._v("使用 requestAnimationFrame 来实现动画视觉变化，setTimeout 或 setInterval 的回调在帧的某个时间点运行，如果刚好在末尾，可能导致丢帧，引发卡顿")])])])])]),v._v(" "),e("li",[v._v("CSS加载会否阻塞页面\n"),e("ul",[e("li",[v._v("CSS是由单独的网络请求线程异步下载的")]),v._v(" "),e("li",[v._v("CSS下载不会阻塞DOM树解析（DOMContentLoaded），但会阻塞render树渲染（loaded）")])])])]),v._v(" "),e("h3",{attrs:{id:"简要过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简要过程"}},[v._v("#")]),v._v(" 简要过程")]),v._v(" "),e("ol",[e("li",[v._v("DNS解析")]),v._v(" "),e("li",[v._v("TCP连接+HTTP请求")]),v._v(" "),e("li",[v._v("web服务器=>后端服务")]),v._v(" "),e("li",[v._v("分析处理报头，检测缓存304，下载文档")]),v._v(" "),e("li",[v._v("浏览器解析渲染页面")])]),v._v(" "),e("h3",{attrs:{id:"浏览器渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[v._v("#")]),v._v(" 浏览器渲染")]),v._v(" "),e("ol",[e("li",[v._v("处理 HTML 标记并构建 DOM 树")]),v._v(" "),e("li",[v._v("处理 CSS 标记并构建 CSSOM 树。")]),v._v(" "),e("li",[v._v("将 DOM 与 CSSOM 合并成一个渲染树。")]),v._v(" "),e("li",[v._v("根据渲染树来布局，以计算每个节点的几何信息。")]),v._v(" "),e("li",[v._v("调用 GPU 绘制，合成图层，显示在屏幕上")])]),v._v(" "),e("blockquote",[e("p",[v._v("DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);