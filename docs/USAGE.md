# dsh-hyperframes 使用说明

[返回简介](../README.md) · [更新记录](../CHANGELOG.md) · [验证记录](VALIDATION.md)

## 本次改进

v0.14.0 升级 **OP-DSH 非线性多轨实体导演台**（默认启用，支持一键切回经典「表单」模式），内置凹陷暗色实时监看屏、24-LED 矩阵与可擦洗三轨时间轴，配备 13 套明亮风格主题、8 套中英双层字体与 5 步交互引导，并补齐官方 HyperFrames `0.9.77` 全部 23 项技能（含 `reverse-any-video` 与 `style-sampling`）。工程库继续支持归档与从「已归档工程」恢复（归档保留文件与原有磁盘空间，仅释放列表名额；未保存修改与运行中的任务需先处理）。

## 安装

```bash
dsh plugin --profile web add dsh-hyperframes
```

重启后说「把这个网址做成 HyperFrames 视频」即可触发。

### 插件市场报 `spawn … ENOENT`

[#2](https://github.com/STARDUSTLC666/dsh-hyperframes/issues/2) 报告的 `spawn … DSH Desktop.exe ENOENT` 发生在安装器启动宿主 CLI 时。可执行文件不存在、子进程工作目录不存在都可能产生这个错误；仅凭这一行无法区分。

Hub 1.6.5 在目标 profile 目录尚未创建时仍把它用作工作目录。[Hub 1.6.12](https://github.com/dshplugin/dsh-plugin-hub/blob/v1.6.12/src/server/services/install/task-queue.ts) 已增加目录回退，并为宿主启动失败提供单独提示。上游的同类报告见 [Hub #212](https://github.com/dshplugin/dsh-plugin-hub/issues/212)。

1. 完全退出 DSH（包括托盘），从实际安装位置重新打开。若程序已被移动、升级后文件缺失，先修复或重新安装 Desktop，保留原有用户资料。
2. 将 Plugin Hub 更新到 **1.6.12 或更新版本**。优先使用插件面板的更新功能；也可在 DSH 内置终端执行下面的命令。下例沿用 #2 的 `web` profile，桌面 profile 应使用 `desktop`，并通过 Desktop 自带的终端或插件面板管理。

   ```bash
   dsh plugin --profile web add dsh-plugin@latest
   dsh plugin --profile web add dsh-hyperframes
   ```

3. 重启 DSH 后检查「设置 → HyperFrames」。命令必须使用同一个 `DSH_HOME`；普通终端默认的 `~/.dsh` 可能与 Desktop 使用的用户目录不同，可对照 Hub 报告中的 `DSH Home`。

npm 包名是 **`dsh-hyperframes`**，`@stardustlc/dsh-hyperframes` 未发布。使用 `dsh plugin` 安装会同时登记插件 bundle，单独 `pnpm add` 不能代替这一步。若仍失败，请附上当前 Hub 版本、完整 `hub.log` 和实际执行的命令。

## 卸载

```bash
dsh plugin --profile web remove dsh-hyperframes
```

卸载后重启 Web 服务。如需彻底清理，可再手动删除自己 profile `cordis.patch.yml` 中覆盖的插件行。

## 视频工作台

在桌面或 Web 的左侧栏打开 **HyperFrames**（或「设置 → HyperFrames」），内置 **OP-DSH 非线性多轨实体导演台**（默认）与经典 **表单** 双模式，支持 13 套明亮风格、8 套双层字体与顶栏「? 引导」分步导览：

1. **导演台起稿与分镜擦洗**：点击「新建视频」或打开工程进入导演台——右侧机械参数条直接编辑标题、切换 `16:9 / 9:16 / 1:1` 画幅、选择模板、拖动 3–30 秒滑杆并展开「分镜脚本」；点击底部朱红 `▶ 播放` 键或指针拖动 `画面轨 / 字幕轨 / 节奏轨` 与 24-LED 矩阵，在上方暗色监看屏实时核对时间码（`TC`）与镜头节奏，确认后保存工程（也可一键切到「表单」模式编辑）。
2. 上传 PNG/JPEG/WebP、一个背景音频（MP3/WAV/M4A）、一个静音背景视频（MP4）的副本。每个文件最多 20 MB、总计 40 MB；轮播按上传顺序，每张至少两秒。
3. 首次点击「准备渲染环境」。此时下载固定版本官方 CLI 0.9.77；Windows 下载官方专用渲染浏览器，其他系统优先复用已安装的 Chrome；可以继续编辑工程。下载失败保留工程，查看运行记录后重试。需先安装 FFmpeg 并加入 PATH，重启 DSH 后生效。
4. 启动官方 Studio，检查画面。停止本次预览后再编辑或导出；不会自动打开或占用前台窗口。
5. 导出 MP4 前先看导出前检查（标题、画幅与时长、素材数、已保存修订、渲染环境、上一份成品对应哪次修订），确认后可在监看屏切至「成片 MP4」播放并下载。工程更新后保留旧成品并显示旧修订提醒；再次导出即可生成新成片。

预览与导出任务在顶部就地显示当前步骤（如「步骤 3 / 4 · 渲染 MP4」）、可展开的运行记录和取消按钮。任务失败时工程保留，可直接「重试本次任务」，无需重新填写。同一工程在别处被更新时不会静默覆盖：提示已在别处更新，可「重新载入最新版本（放弃我的输入）」或「保留我的输入，稍后处理」；此时未保存对话框里的「保存后继续」会被禁用，避免反复冲突。导出、保存按钮不可用时，悬停可看到具体原因（未保存修改、环境未准备、标题或时长不合规）。

「备份可编辑工程」包含源代码、项目数据和素材。解压后按 README 使用 npm install、npm run preview / render；原模板代码 MIT，渲染器保留自己的许可证。

工程、素材、运行目录和依赖缓存默认位于 DSH_HOME/data/dsh-hyperframes，两个插件分别保存。使用同一个 DSH_HOME 的 Web 与桌面 profile 共享这些已保存工程。不会改写原始素材或用户已有视频工程。关闭设置后，当前输入和任务状态保留在本次页面；刷新页面会提示未保存输入，已保存工程长期保留。任务可取消，关闭 DSH 会停止本插件任务。备份 ZIP 目前不支持在设置页导回。

智能体工具：hyperframes_project（list/create/get/update）；hyperframes_render（prepare/preview/render/job/cancel）。渲染与更新需要工程 id 和当前 revision；查询/取消使用 job id。工具不会默认下载依赖。

## 使用限制

本轮为轻量模板编辑，尚不提供时间轴编辑、字幕转写、TTS 或云端渲染。外部链接不能作为素材路径；请先保存到本地再上传。默认 24 FPS，成品上限 200 MB。预览仅监听 127.0.0.1，属于本机服务；多用户机器仍需考虑同机访问。

## 技能清单

| 技能 | 用途 |
| :-- | :-- |
| `hyperframes` | 总纲：HTML 视频合成（视觉风格/调色板/字幕/音频响应/转场）|
| `hyperframes-core` | 核心概念与组件模型 |
| `hyperframes-animation` | 动画：GSAP/Anime.js/Lottie/Three.js/WAAPI 适配 |
| `hyperframes-audio` | 音频：配音、音频响应视觉 |
| `hyperframes-keyframes` | 关键帧动画 |
| `hyperframes-creative` | 创意模板与风格 |
| `hyperframes-cli` | `npx hyperframes` 命令行（init/check/preview/render/timeline/publish/cloud/transcribe/tts/doctor…）|
| `hyperframes-registry` | `hyperframes add` 注册表组件安装与接线 |
| `hyperframes-studio` | Studio 时间轴规范：轨道分层、字幕轨、安全区 |
| `embedded-captions` | 内嵌字幕 |
| `faceless-explainer` | 无脸讲解视频 |
| `figma` | Figma 素材接入 |
| `general-video` | 通用视频制作 |
| `media-use` | 媒体素材使用规范 |
| `motion-graphics` | 动态图形 |
| `music-to-video` | 音乐驱动视频 |
| `pr-to-video` | PR 转视频 |
| `product-launch-video` | 产品发布视频 |
| `remotion-to-hyperframes` | Remotion 项目迁移 |
| `reverse-any-video` | 视频反推复刻（逐帧还原为可编辑 HyperFrames 工程）|
| `slideshow` | 幻灯片视频 |
| `style-sampling` | 风格采样制作新剧集（5 套成熟视频风格模板）|
| `talking-head-recut` | 口播重剪 |

## 依赖

Node.js 22.19+ (22.x) / 24+ + FFmpeg（`npx hyperframes`）。

## 移植说明

技能采用官方 HyperFrames 0.9.77：已核验 SRI 的 npm `dist/skills` 239 文件为主，并以同版本 `v0.9.77` 提交 `a86ad213ed2aa78555635676980744d432a3f89f` 补齐 npm 未分发的 6 个按需技能。9 个当前技能和 14 个兼容名称合计注册 23 项，包含新增 `reverse-any-video` 与 `style-sampling`。每个文件的 npm/Git 来源及 DSH 适配摘要均记录在 `skills/UPSTREAM.json`；不把缺失的 npm gitHead 或构建后的内容伪称为与原始 Git 树完全相同。来源与安全同步流程见 [技能同步](SKILL-SYNC.md)。

## 跨平台使用

技能采用开放的 Agent Skills（SKILL.md）格式，**不止 DSH 能用**——把 `skills/` 下的目录复制到其他 agent 的技能目录即可：

| Agent | 技能目录 |
| :-- | :-- |
| Claude Code | `~/.claude/skills/` |
| Cursor | `.cursor/skills/`（或项目内 `skills/`）|
| Gemini CLI | `~/.gemini/skills/` |
| OpenAI Codex | `~/.codex/skills/` |

一次移植，处处可用。

## 技能自检与重载

运行 `hyperframes_health` 会重新读取每个 `SKILL.md`，验证文件可读、YAML frontmatter 合法、名称与目录一致、描述与正文非空，再通过宿主 `skills.get` 确认实际生效的名称、描述、正文和资源目录与本次加载内容相符。文件存在但未注册、注册失败或后来被移除时，自检都会失败。

自检不修改文件或注册表。修改技能文件，或修复加载时损坏的技能后，应重载插件（也可重启 DSH）。它会报告 `changed`、`not_registered` 或 `registration_failed`，不会把磁盘修复直接当成运行时修复。若原先已成功加载，只是文件暂时丢失，恢复与加载时完全相同的内容即可重新通过检查。

每项结果保留 `name / ok / detail`，并增加 `code / fileOk / registered / registryChecked / reloadRequired`：`registered` 表示注册表仍匹配加载时的版本，因此文件变更时它可以为 true 而 `ok` 为 false。缺少或无法查询宿主注册表时返回 `registry_unavailable`；插件卸载后返回 `disposed`。`checkBundledSkills()` 仅检查磁盘文件，不推断运行时状态；原有不抛错的 `parseSkillFile()` 解析入口保持可用。

## 开发与共享实现

`src/index.ts` 只声明包名、技能清单和目录，解析、校验、注册与自检集中在包内 `src/skill-bundle.ts`。规范源位于 `dsh-hyperframes/src/skill-bundle.ts`，Remotion 保存相同的受版本控制副本；两包都编译并分发自己的 `lib/skill-bundle.js`，没有跨包运行时依赖，也不需要另一个仓库即可构建或安装。

依赖预先安装后，可直接离线构建和测试：

```bash
node node_modules/typescript/bin/tsc -p tsconfig.json
node --test "test/*.test.mjs"
```

两个仓库并列开发时，在 HyperFrames 修改公共模块与公共回归测试，再同步：

```bash
# 在 dsh-hyperframes 中执行；按显式清单更新相邻 dsh-remotion 的共享文件
node scripts/sync-skill-bundle.mjs
node scripts/sync-skill-bundle.mjs --check
```

两包测试都会检查公共源码与回归测试是否一致，防止副本漂移；单独检出时只跳过跨仓库比对，其余测试正常运行。测试覆盖损坏 YAML、不可读文件、空正文、注册异常/失效、内容变更与修复、卸载及清理异常，全程不调用视频或语音服务。

## License

MIT（移植编排）；技能内容版权归 HeyGen。
