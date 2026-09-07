# Website mock sources

`live-4cam.html` reproduces the Owl Cam live window (four tiles) with the app's own layout,
chips and SF Symbols; render it with headless Chrome at 2× to regenerate `public/shot-live.jpg`:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --force-device-scale-factor=2 --default-background-color=00000000 --window-size=1200,751 \
  --virtual-time-budget=4000 --screenshot=shot.png "file://$PWD/live-4cam.html"
sips -Z 1440 -s format jpeg -s formatOptions 86 shot.png --out ../public/shot-live.jpg
```

Camera feeds are CC0 photos from Wikimedia Commons (Unsplash imports, no attribution required):
`Flat in Budapest (Unsplash).jpg`, `Cat with window in wooster (Unsplash).jpg`,
`House in forest (Unsplash).jpg`, `Car Restoration Workshop (Unsplash).jpg`.
