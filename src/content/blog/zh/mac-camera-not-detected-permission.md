---
title: "Mac 找不到摄像头？检查权限、连接和设备选择"
description: "排查 Owl Cam 中未出现的内置摄像头、USB 摄像头或 iPhone，并通过试录确认。"
lang: "zh"
slug: "mac-camera-not-detected-permission"
published: "2026-11-07"
category: "setup"
primaryKeyword: "Mac 找不到摄像头 摄像头权限 USB"
---

摄像头没有出现或没有画面时，先区分 macOS 权限问题与设备连接、选择问题。一则 [Mac 应用讨论](https://www.reddit.com/r/macapps/comments/1r3aot7/i_updated_camera_graph_and_its_now_completely_free/)中，有用户为另一款视频应用排查摄像头权限；这说明设置过程中存在实际疑问，并不能据此判断问题的普遍程度。

## 检查 macOS 摄像头权限

打开 Apple 菜单 → 系统设置 → 隐私与安全性 → 摄像头，检查是否允许 Owl Cam 访问。如果此前拒绝了权限，在这里开启，然后从菜单栏退出 Owl Cam 并重新打开。Apple 也提供了[控制摄像头访问权限的说明](https://support.apple.com/zh-cn/guide/mac-help/mchlf6d108da/mac)。不同 macOS 版本的菜单名称可能略有不同。

摄像头权限和麦克风权限是分开的。Owl Cam 可以关闭录音，仅在需要录制声音时才需要麦克风权限。允许访问摄像头也不代表设备一定已经连接或选中。

## 检查设备和连接

在 Owl Cam 中选择并开启 macOS 能识别的摄像头。USB 摄像头可先检查线缆和连接，条件允许时换一个接口。如果其他摄像头应用也找不到设备，可参考 Apple 的[内置摄像头排查说明](https://support.apple.com/zh-cn/102437)或设备厂商的说明。测试时可以暂时关闭其他使用摄像头的应用，具体表现取决于设备和软件。

如果使用 iPhone，检查连续互通相机条件、两台设备的 Apple 账户、Wi-Fi 和蓝牙，并在 Owl Cam 中手动开启摄像头。步骤和限制见 [iPhone 摄像头指南](/zh/blog/iphone-webcam-multiple-cameras-mac)。Owl Cam 不直接支持 RTSP 或 ONVIF 网络摄像头。

## 做一次短暂试录

看到实时画面后，确认 Mac 保持唤醒且录像文件夹有可写空间。在摄像头前走动，再到时间轴查看录像。如果有画面却没有片段，检查检测设置，并调整光线和机位后重试。需要进一步帮助时，可查看[常见问题](/zh/faq)或[联系支持](mailto:hi@owlcam.app)。
