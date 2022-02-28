(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{462:function(t,r,e){"use strict";e.r(r);var a=e(29),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("简单来说，Hippo4J 从部署的角度上分为两种角色：Server 端和 Client 端")]),t._v(" "),e("p",[t._v("Server 端是 Hippo4J 项目打包出的 Java 进程，功能包括用户权限、线程池监控以及执行持久化的动作")]),t._v(" "),e("p",[t._v("Client 端指的是我们 SpringBoot 应用，通过引入 Hippo4J Starter Jar 包负责与 Server 端进行交互")]),t._v(" "),e("p",[t._v("比如拉取 Server 端线程池数据、动态更新线程池配置以及采集上报线程池运行时数据等")]),t._v(" "),e("h2",{attrs:{id:"基础组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[t._v("#")]),t._v(" 基础组件")]),t._v(" "),e("h3",{attrs:{id:"配置中心-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置中心-config"}},[t._v("#")]),t._v(" 配置中心（Config）")]),t._v(" "),e("p",[t._v("配置中心位于 Server 端，它的主要作用是监控 Server 端线程池配置变更，实时通知到 Client 实例执行线程池变更流程")]),t._v(" "),e("p",[t._v("代码设计基于 Nacos 1.x 版本的 "),e("strong",[t._v("长轮询以及异步 Servlet 机制")]),t._v(" 实现")]),t._v(" "),e("h3",{attrs:{id:"注册中心-discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册中心-discovery"}},[t._v("#")]),t._v(" 注册中心（Discovery）")]),t._v(" "),e("p",[t._v("负责管理 Client 端（单机或集群）注册到 Server 端的实例，包括不限于"),e("strong",[t._v("实例注册、续约、过期剔除")]),t._v(" 等操作，代码基于 Eureka 源码实现")]),t._v(" "),e("p",[t._v("上面的配置中心很容易理解，动态线程池参数变更的根本。但是注册中心是用来做什么的？")]),t._v(" "),e("p",[t._v("注册中心管理 Client 端注册的实例，通过这些实例可以 "),e("strong",[t._v("实时获取线程池的运行时参数信息")])]),t._v(" "),e("p",[t._v("目前的设计是如此，不排除后续基于 Discovery 做更多的扩展")]),t._v(" "),e("h3",{attrs:{id:"控制台-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制台-console"}},[t._v("#")]),t._v(" 控制台（Console）")]),t._v(" "),e("p",[t._v("对接前端项目，包括不限于以下模块管理")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211107122504126.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"抽象工具-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象工具-tools"}},[t._v("#")]),t._v(" 抽象工具（Tools）")]),t._v(" "),e("p",[t._v("顾名思义就是将某些工具单独抽象出来，并以 Module 的形式进行展现，这样的拆分方式有两点好处："),e("strong",[t._v("一是更符合职责分离特性，二是需要用到某块功能")]),t._v("，做到拿来即用")]),t._v(" "),e("p",[t._v("log-record-tool：基于 "),e("a",{attrs:{href:"https://github.com/mouzt/mzt-biz-log",title:"mzt-biz-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("mzt-biz-log"),e("OutboundLink")],1),t._v(" 的操作日志变更记录组件")]),t._v(" "),e("h2",{attrs:{id:"消息通知-notify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息通知-notify"}},[t._v("#")]),t._v(" 消息通知（Notify）")]),t._v(" "),e("p",[t._v("Hippo4J 内置了很多需要通知的事件，比如：线程池参数变更通知、线程池活跃度报警、拒绝策略执行报警以及阻塞队列容量报警等")]),t._v(" "),e("p",[t._v("目前 Notify 已经接入了钉钉、企业微信和飞书，后续持续集成邮件、短信等通知渠道；并且，Notify 模块提供了消息事件的 SPI 方案，可以接受三方自定义的推送")]),t._v(" "),e("h2",{attrs:{id:"hippo4j-spring-boot-starter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hippo4j-spring-boot-starter"}},[t._v("#")]),t._v(" Hippo4j-Spring-Boot-Starter")]),t._v(" "),e("p",[t._v("熟悉 SpringBoot 的小伙伴对 Starter 应该不会陌生。Hippo4J 提供以 Starter Jar 包的形式嵌套在应用内，负责与 Server 端完成交互")]),t._v(" "),e("h2",{attrs:{id:"功能架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能架构"}},[t._v("#")]),t._v(" 功能架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211105230953626.png",alt:""}})])])}),[],!1,null,null,null);r.default=s.exports}}]);