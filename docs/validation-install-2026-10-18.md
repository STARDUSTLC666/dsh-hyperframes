# Windows 安装排错验证（2026-10-18）

[使用与排错](USAGE.md#插件市场报-spawn--enoent) · [Issue #2](https://github.com/STARDUSTLC666/dsh-hyperframes/issues/2)

环境：Windows x64、Node 24.16.0、官方 npm `@deepseek-ai/dsh@0.2.0-rc.2`。安装使用公开 npm 包，独立 `DSH_HOME` 和含空格的路径。

| 检查 | 结果 |
| :-- | :-- |
| npm 包名 | `dsh-hyperframes` 存在；原回复中的 `@stardustlc/dsh-hyperframes` 返回 404 |
| Hub 1.6.5 worker，目标 profile 目录不存在 | 可执行文件存在，仍报 `spawn … ENOENT`，CLI 未启动 |
| Hub 1.6.12 worker，同样的初始目录 | CLI 启动，自动创建 profile，安装退出码 0 |
| Hub 完整 `startPluginMutation` 队列，宿主可执行文件不存在 | 任务失败，报 ENOENT，CLI 未启动 |
| 同一完整队列恢复有效宿主入口后重试 | 任务完成，退出码 0，公开插件包安装成功 |
| bundle 与分发物 | profile 登记 `dsh-hyperframes`，pnpm 锁文件 integrity 与官方 npm 对应版本一致 |
| 实际宿主启动 | 官方 CLI 启动 Web，注册 3 个 HyperFrames 工具，21 个插件技能自检全部通过 |
| HTTP 鉴权 | 启动 token 换取 cookie 返回 303；未登录访问返回 401；携 cookie 访问 HTML 返回 200 |

本次默认安装实际解析到 **0.6.0**。npm 最新的 0.7.0 仅确认元数据存在，不计为本轮已安装验收版本。

## 证据边界

- worker 的目录对比直接调用真实 `runPluginMutation`，验证缺失工作目录的行为；正常队列的默认日志可能先创建 profile 目录，因此不能据此判定报告者命中了该路径。
- 完整队列测试调用真实 `startPluginMutation`，包含日志、排队、子进程与终态处理。
- Electron 的 asar 布局使用目录夹具，宿主启动器使用真实 Node 和官方 CLI 的 `runCli`。没有执行报告者电脑上的 Desktop，也没有做原生 Desktop 窗口验收。
- 本轮验证安装、注册、自检和 Web 启动；未重复执行视频渲染验收。

上游修复依据：[1.6.5 安装器源码](https://github.com/dshplugin/dsh-plugin-hub/blob/v1.6.5/src/server/services/install/task-queue.ts)、[1.6.12 安装器源码](https://github.com/dshplugin/dsh-plugin-hub/blob/v1.6.12/src/server/services/install/task-queue.ts)、[Hub #212 的维护者说明](https://github.com/dshplugin/dsh-plugin-hub/issues/212#issuecomment-6192085277)。
