# 0.10.1 验证记录（2026-10-28）

同步官方 HyperFrames 0.8.211，发布提交 5ed694264e9a48aebca0a0f29b94dbd30c2e29d0。7 个当前技能、301 项资源逐一验证 Git blob，2 项上游文档变化已同步；14 个旧名称兼容入口保留。CLI、插件清单及工作台渲染环境使用同一固定版本。

Windows 48 项回归通过、0 跳过。官方 DSH 0.2.1-rc.4 隔离 profile 的工作台桌面、390px 窄屏及默认关闭自动安装已检查。另经实际 MediaWorkbench 准备官方环境、导出 720×720、24 FPS、6 秒 H.264 MP4，并用 ffprobe 和解码画面核对红/绿/蓝三张素材顺序。渲染不是模拟子进程；本轮导出由实际工作台类调用，最终公开安装另验插件加载与界面。

未操作用户前台窗口；Electron 原生窗口及 Linux/macOS 渲染没有在本轮验收。上游链接：https://github.com/heygen-com/hyperframes/tree/5ed694264e9a48aebca0a0f29b94dbd30c2e29d0 。
