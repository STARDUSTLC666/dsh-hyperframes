# dsh-hyperframes

[English](README.en.md)

把 HyperFrames 的 HTML 视频创作技能接入 DSH。

[![npm](https://img.shields.io/npm/v/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes) [![downloads](https://img.shields.io/npm/dm/dsh-hyperframes)](https://www.npmjs.com/package/dsh-hyperframes)

## 功能

- 提供动画、音频、字幕、关键帧和时间轴工作流。
- 支持幻灯片、产品发布、音乐驱动等创作场景。
- 保留官方 CLI / Studio 指引与技能自检。

## 安装

桌面版可在「插件」面板按包名 `dsh-hyperframes` 安装。已配置 dsh 命令时也可使用：

```bash
dsh plugin --profile desktop add dsh-hyperframes
```

网页版把命令中的 `desktop` 改为 `web`。安装后重启 DSH。

## 开始使用

可说：“用 HyperFrames 把这份材料做成短视频，先预览，再渲染 MP4。”助手会按技能指引建立项目和调用渲染工具。

## 依赖与配置

插件安装的是技能。制作和渲染还需 Node / npx、HyperFrames CLI 及项目所需媒体工具；上游来源和版本见使用说明。

详细配置、工具参数与排错见[使用说明](docs/USAGE.md)。从源码独立开发时，Node 要求以 [package.json](package.json) 为准。

## 文档

- [使用与排错](docs/USAGE.md)
- [更新记录](CHANGELOG.md)
- [验证范围与历史记录](docs/VALIDATION.md)
- [问题反馈与功能建议](https://github.com/STARDUSTLC666/dsh-hyperframes/issues)

## License

[MIT](LICENSE)。上游技能内容的来源和许可证见使用说明。
