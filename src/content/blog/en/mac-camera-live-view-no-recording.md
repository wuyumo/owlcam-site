---
title: "Mac camera live view works but no recording appears: what to check"
description: "Trace a missing camera recording from detection to storage and playback, using a short controlled test."
lang: "en"
slug: "mac-camera-live-view-no-recording"
published: "2026-11-16"
category: "workflow"
primaryKeyword: "mac webcam live view no recording"
---

A live picture confirms that a camera is providing frames; it does not by itself confirm that an event was detected and saved. In a [recent camera-system discussion](https://www.reddit.com/r/UgreenNASync/comments/1ttzzvd/cannot_get_surveillance_center_working_with_aqara/), an owner described live feeds working while storage errors prevented recordings. That report concerns different software and hardware. It illustrates a useful troubleshooting question, not a general trend.

## Run a controlled event test

Choose the camera in Owl Cam and confirm that it is enabled and the live picture updates. Walk clearly across its view, pause, and leave. Allow the event to end, then look on the calendar and timeline for the corresponding time. Person detection can keep an event open while a person is detected; lighting, distance and obstructions affect detection. A quiet scene may not trigger a recording.

## Check the path from camera to file

1. Check the Mac's clock and the date selected in the timeline.
2. Confirm the camera is still connected and that the Mac has remained awake. The display itself can sleep.
3. Check that the selected recording folder exists, is writable and has free space. Open a finished MP4 in QuickTime to verify playback.
4. If activity did not trigger, check the camera angle, lighting and detection settings, change one condition at a time, and repeat the walk-through. See [reducing false motion recordings](/blog/reduce-false-motion-recordings) for the sensitivity trade-off.

## Distinguish recording from backup

Pro backup handles finished recordings. A file still being recorded has not yet entered that workflow. If a finished file exists in the recording folder but not on your backup destination, check that destination and its available space separately. A fallback location may receive a file; do not assume it will be copied again to the primary destination after recovery. See the [backup guide](/blog/nas-backup-camera-recordings).

Owl Cam does not provide remote streaming or push alerts. For camera compatibility and support, see the [FAQ](/faq).
