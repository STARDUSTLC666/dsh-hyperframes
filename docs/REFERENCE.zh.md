> 完整使用说明。首页已按用途、安装和操作流程重新整理；这里保留详细参数、限制、更新规则与历史验证链接。

# dsh-hyperframes

[English](../README.en.md)

![dsh-hyperframes 鲸鱼娘插件封面](https://raw.githubusercontent.com/STARDUSTLC666/dsh-hyperframes/master/assets/cover-whale-girl.png)

在 DSH 中用 HTML 创作视频：官方 HyperFrames 技能、模板工程、素材上传与排序、归档、官方预览和本地 MP4 导出。既可让 AI 编写视频工程，也可直接使用工作台模板。

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-hyperframes-total-downloads.svg)](https://www.npmjs.com/package/dsh-hyperframes)

[下载统计说明](https://github.com/STARDUSTLC666/dsh-suite/blob/npm-downloads/README.md)

欢迎使用，遇到问题或有改进建议，请提交 [issues](https://github.com/STARDUSTLC666/dsh-hyperframes/issues) 和 [PR](https://github.com/STARDUSTLC666/dsh-hyperframes/pulls)。

从 DSH 原生侧栏打开工作台；配置与操作边界见[工作台说明](WORKBENCH.md)。

技能内容：官方 HyperFrames 0.8.214，7 个当前技能；14 个旧名称保留为兼容入口。

在「素材」页上移或下移图片即可调整轮播顺序，支持键盘操作。顺序立即保存；重新导出后应用于新 MP4。

## 功能

- 工程库按关键词搜索，按最近 / 最早更新或标题排序；返回列表时保留筛选条件。
- 设置页视频工作台：选模板、编辑内容、上传素材，在官方 Studio 预览并导出本机 MP4。
- 提供标题卡、产品介绍、图文轮播；支持横屏、竖屏和正方形。
- 保留可编辑工程备份、渲染记录与取消操作；工程修改后提醒重新导出。

- 提供动画、音频、字幕、关键帧和时间轴工作流。
- 支持幻灯片、产品发布、音乐驱动等创作场景。
- 保留官方 CLI / Studio 指引与技能自检。

## 安装

桌面版可在「插件」面板按包名 `dsh-hyperframes` 安装。已配置 dsh 命令时也可使用：

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

网页版把命令中的 `desktop` 改为 `web`。安装后重启 DSH。

插件市场出现 `spawn … ENOENT` 时，按[安装排错](USAGE.md#插件市场报-spawn--enoent)处理。npm 包名是 `dsh-hyperframes`。

## 开始使用

1. 从左侧栏打开 HyperFrames，点击“新建视频”，选模板并填写内容。
2. 先保存工程，再上传素材；在“素材”页调整顺序，原始文件保持不变。
3. 首次使用在“环境”页准备渲染环境，等待实际准备完成。
4. 启动预览并检查画面，停止预览后再编辑或导出 MP4。
5. 播放并下载成品；保存可编辑工程备份。以后可在工程库搜索、排序，或从归档恢复。

## 依赖与配置

插件保留上游技能，并新增本地视频工作台。首次使用需 Node.js 22.19+ / 24+ 与 npm；还需 PATH 中可用的 FFmpeg。不会在 DSH 启动时自动下载依赖。

详细配置、工具参数与排错见[使用说明](USAGE.md)。从源码独立开发时，Node 要求以 [package.json](../package.json) 为准。

## 文档

- [使用与排错](USAGE.md)
- [更新记录](../CHANGELOG.md)
- [验证范围与历史记录](VALIDATION.md)
- [问题反馈与功能建议](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)

## 插件更新

需要 DSH 0.2.1-rc.3 或更新版本。更新控件直接位于原有工作台内容末尾；没有工作台的插件，位于原生插件详情页底部。检查、更新记录和偏好在原地展开，不增加独立更新页面或设置菜单。自动检查默认开启；**自动安装默认关闭**，明确授权后才会在空闲且没有未保存修改时安装兼容的稳定补丁。开关按插件独立保存，可关闭、推迟或忽略提醒；不会强制重启 DSH、升级 DSH 本体或替换本地源码安装。Suite 组件在当前页面底部明确说明并操作 Suite 整包更新。

旧版用户先在官方插件管理中手动更新一次，之后才会获得此入口。发布到 npm 不会直接替换用户已经安装的版本。

## License

[MIT](../LICENSE)。上游技能内容的来源和许可证见使用说明。
