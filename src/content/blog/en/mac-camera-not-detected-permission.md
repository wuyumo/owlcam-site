---
title: "Mac camera not detected? Check permissions and connections"
description: "Troubleshoot a built-in webcam, USB camera or iPhone that does not appear in Owl Cam, then verify a recording."
lang: "en"
slug: "mac-camera-not-detected-permission"
published: "2026-11-07"
category: "setup"
primaryKeyword: "mac camera not detected camera permission webcam"
---

If a camera is missing or shows no picture, first distinguish a macOS permission problem from a camera connection or selection problem. A [Mac app discussion](https://www.reddit.com/r/macapps/comments/1r3aot7/i_updated_camera_graph_and_its_now_completely_free/) includes a user working through camera permissions for a different video app. It is evidence of a practical setup question, not a measure of how common the issue is.

## Check macOS camera access

Open Apple menu → System Settings → Privacy & Security → Camera and check that Owl Cam is allowed. If you previously declined access, enable it there, quit Owl Cam from the menu bar and reopen it. Apple describes [how to control camera access](https://support.apple.com/guide/mac-help/control-access-to-your-camera-mchlf6d108da/mac). Menu names can vary with your macOS version.

Camera permission is separate from microphone permission. Audio recording is optional in Owl Cam; enable microphone access only if you want to record audio. Permission to use a camera alone does not guarantee that the device is connected or selected.

## Check the camera and its connection

In Owl Cam, select and enable a camera recognized by macOS. For a USB webcam, check the cable and connection and try another port if available. If the camera is missing in another camera app too, follow Apple's [built-in camera troubleshooting](https://support.apple.com/en-us/102437) or the webcam manufacturer's guidance. Close other camera apps temporarily while testing; results depend on the camera and software.

For an iPhone, check Continuity Camera requirements, the same Apple Account, Wi-Fi and Bluetooth, and enable the camera manually in Owl Cam. See our [iPhone camera guide](/blog/iphone-webcam-multiple-cameras-mac) for setup and limitations. Owl Cam does not directly support RTSP or ONVIF IP cameras.

## Make a short recording

Once the live view is available, check that the Mac stays awake and the recording folder has writable free space. Move in front of the camera and review the resulting clip on the timeline. If the live image works but no clip appears, inspect detection settings and test lighting and camera position. For further help, see the [FAQ](/faq) or contact [support](mailto:hi@owlcam.app).
