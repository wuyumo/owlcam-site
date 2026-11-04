---
title: "How to reduce false motion recordings on a Mac camera"
description: "Troubleshoot unwanted motion recordings from changing light and moving objects, while testing for missed events."
lang: "en"
slug: "reduce-false-motion-recordings"
published: "2026-11-04"
category: "detection"
primaryKeyword: "mac camera motion detection false recordings"
---

Changing sunlight, moving branches and reflections can create changes in a camera image even when nobody enters the room. In a [home-security discussion](https://www.reddit.com/r/homesecurity/comments/1r67kmo/camera_keeps_giving_false_motion_alerts_from_tree/), a camera owner described repeated triggers from tree shadows and the difficulty of lowering sensitivity without missing people. That discussion concerns a different camera and notifications; Owl Cam records locally and currently does not offer push notifications. It illustrates a useful question rather than a measured trend.

## Find out what changed in the picture

Review several unwanted recordings on the timeline and note the time, camera view and visible changes. Look for sunlight moving across a wall, a fan, curtains, reflections or movement outside a window. Compare with a recording of the activity you actually want to keep. An apparently empty recording does not establish its cause: the trigger may have happened just before the visible part of the clip.

## Adjust the view first

Secure the webcam so it does not shake and, where practical, point it away from a window or moving objects that do not matter to your use case. Keep the area where a person should appear clearly visible. Check the view again in daylight and after dark; changing the angle can also hide the very event you want to record.

## Tune one setting at a time

Owl Cam offers motion, scene-difference and stopping settings with live readings. Note your original values, change one setting, and repeat the same walk-through. Compare an unwanted trigger with a person entering, sitting still and leaving. If you make triggering less sensitive, a subtle or distant event may no longer be recorded; if you make it more sensitive, unwanted recordings may increase. There is no universal threshold for every camera and room.

With person detection enabled, recording can continue while a person is detected even if they sit still. Lighting, distance and obstructions affect detection, so this does not guarantee that every person is recognized or that every unwanted recording is filtered out. See [person detection and motion recording](/blog/person-detection-continuous-recording).

## Test the finished recording

At the intended camera position, perform several representative entries and exits, including the lighting conditions that previously caused unwanted recordings. Open the saved files and check both missed activity and extra clips. The Mac must stay on and the camera and storage must remain available. Recheck after changing camera position or room lighting; see the [FAQ](/faq) for recording limits.
