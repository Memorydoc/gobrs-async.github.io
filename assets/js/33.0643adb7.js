(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{342:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Gobrs-Async 在设计时，就充分考虑了开发者的使用习惯， 没有依赖任何中间件。 对并发框架做了良好的封装。主要使用\n"),a("code",[t._v("CountDownLatch")]),t._v(" 、"),a("code",[t._v("ReentrantLock")]),t._v(" 、"),a("code",[t._v("volatile")]),t._v(" 等一系列并发技术开发设计。")]),t._v(" "),a("h2",{attrs:{id:"整体架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[t._v("#")]),t._v(" 整体架构")]),t._v(" "),a("br"),t._v(" "),a("p",[a("img",{attrs:{src:"https://kevin-cloud-dubbo.oss-cn-beijing.aliyuncs.com/gobrs-async/gobrs-jgt3.png",alt:"1.0"}})]),t._v(" "),a("h2",{attrs:{id:"任务触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务触发器"}},[t._v("#")]),t._v(" 任务触发器")]),t._v(" "),a("p",[t._v("任务流的启动者， 负责启动任务执行流")]),t._v(" "),a("h2",{attrs:{id:"规则解析引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则解析引擎"}},[t._v("#")]),t._v(" 规则解析引擎")]),t._v(" "),a("p",[t._v("负责解析使用者配置的规则，同时于Spring结合，将配置的 "),a("code",[t._v("Spring Bean")]),t._v(" 解析成 "),a("code",[t._v("TaskBean")]),t._v("，进而通过解析引擎加载成 任务装饰器。进而组装成任务树")]),t._v(" "),a("h2",{attrs:{id:"任务启动器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务启动器"}},[t._v("#")]),t._v(" 任务启动器")]),t._v(" "),a("p",[t._v("负责通过使用解析引擎解析的任务树。结合 "),a("strong",[t._v("JUC")]),t._v(" 并发框架调度实现对任务的统一管理，核心方法有")]),t._v(" "),a("ul",[a("li",[t._v("trigger 触发任务加载器，为加载任务准备环境")])]),t._v(" "),a("h2",{attrs:{id:"任务加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务加载器"}},[t._v("#")]),t._v(" 任务加载器")]),t._v(" "),a("p",[t._v("负责加载任务流程，开始调用任务执行器执行核心流程")]),t._v(" "),a("ul",[a("li",[t._v("load 核心任务流程方法，在这里阻塞等待整个任务流程")]),t._v(" "),a("li",[t._v("getBeginProcess 获取子任务开始流程")]),t._v(" "),a("li",[t._v("completed 任务完成")]),t._v(" "),a("li",[t._v("errorInterrupted 任务失败 中断任务流程")]),t._v(" "),a("li",[t._v("error 任务失败")])]),t._v(" "),a("h2",{attrs:{id:"任务执行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务执行器"}},[t._v("#")]),t._v(" 任务执行器")]),t._v(" "),a("p",[t._v("最终的任务执行，每一个任务对应一个"),a("code",[t._v("TaskActuator")]),t._v(" 任务的 拦截、异常、执行、线程复用 等必要条件判断都在这里处理")]),t._v(" "),a("ul",[a("li",[t._v("prepare 任务前置处理")]),t._v(" "),a("li",[t._v("preInterceptor 统一任务前置处理")]),t._v(" "),a("li",[t._v("task 核心任务方法，业务执行内容")]),t._v(" "),a("li",[t._v("postInterceptor 统一后置处理")]),t._v(" "),a("li",[t._v("onSuccess 任务执行成功回调")]),t._v(" "),a("li",[t._v("onFail 任务执行失败回调")])]),t._v(" "),a("h2",{attrs:{id:"任务总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务总线"}},[t._v("#")]),t._v(" 任务总线")]),t._v(" "),a("p",[t._v("任务流程传递总线，包括 请求参数、任务加载器、 响应结果， 该对象暴露给使用者，拿到匹配业务的数据信息，例如： 返回结果、主动中断任务流程等功能\n需要任务总线("),a("code",[t._v("TaskSupport")]),t._v(")支持")]),t._v(" "),a("h2",{attrs:{id:"核心类图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类图"}},[t._v("#")]),t._v(" 核心类图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://kevin-cloud-dubbo.oss-cn-beijing.aliyuncs.com/gobrs-async/hxlt.jpg",alt:"核心类图"}})]),t._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-3",staticStyle:{"background-color":"#CBEAFA","--randomColor":"#CBEAFA",color:"#6854A1"},attrs:{href:"https://docs.sizegang.cn/",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg"}}),t._v(" "),a("div",[a("p",{staticClass:"name"},[t._v("技术小屋")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("大道至简，知易行难")])])]),t._v(" "),a("a",{staticClass:"card-item row-3",staticStyle:{"background-color":"#718971","--randomColor":"#718971",color:"#fff"},attrs:{href:"https://learn.sizegang.cn",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png"}}),t._v(" "),a("div",[a("p",{staticClass:"name"},[t._v("架构师必经之路")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("精品学习资源")])])]),t._v(" "),a("a",{staticClass:"card-item row-3",staticStyle:{"background-color":"#FCDBA0","--randomColor":"#FCDBA0",color:"#A05F2C"},attrs:{href:"https://m.jd.com",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://reinness.com/avatar.png"}}),t._v(" "),a("div",[a("p",{staticClass:"name"},[t._v("平凡的你我")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("快乐购物，享受生活")])])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 技术小屋\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 大道至简，知易行难\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//docs.sizegang.cn/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#CBEAFA'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#6854A1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选，默认var(--textColor)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 架构师必经之路\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'精品学习资源'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//learn.sizegang.cn\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#718971'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 平凡的你我\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 快乐购物，享受生活\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//reinness.com/avatar.png\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//m.jd.com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FCDBA0'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#A05F2C'")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);