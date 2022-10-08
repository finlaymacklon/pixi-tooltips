# 🔎 PIXI Tooltips

A Google Chrome extension that enables hovering over a Pixi.js application to view information about textured objects through tooltips.

- Currently only shows `name` (assuming its defined) and `_texture.baseTexture.resource.url`

Note: If you would prefer to see some other information, such as the coordinates or dimensions, then please let me know by [posting an issue on this repository](https://github.com/finlaymacklon/pixi-tooltips/issues/new). Thanks!

Example:

<img width="320" alt="image" src="https://user-images.githubusercontent.com/49216954/194617814-1e43de41-a193-4c6e-8254-803ee3f83c11.png">


## Tutorial

https://user-images.githubusercontent.com/49216954/194726692-cd474d0b-8230-4774-a759-200f1589eb4d.MP4


### Installation
1) Download the zipped folder [`pixi-tooltips-v0.0.1-alpha.zip`](https://github.com/finlaymacklon/pixi-tooltips/releases/tag/v0.0.1)
2) Unzip `pixi-tooltips-v0.0.1-alpha.zip`
3) Open the Google Chrome web browser
4) In Chrome, open Settings by clicking on the three dots (ellipsis) in the top-right corner of the browser
5) Navigate to `More Tools` > `Extensions`
6) In the Extensions menu, turn on `Developer Mode` in the top right corner <img width="158" alt="Screen Shot 2022-10-06 at 10 25 57 PM" src="https://user-images.githubusercontent.com/49216954/194461562-a4548ae3-ba94-4c05-846c-9a8567b7c0ac.png">
7) In the Extensions menu, click `Load Unpacked` from the top-left corner <img width="129" alt="Screen Shot 2022-10-06 at 10 27 25 PM" src="https://user-images.githubusercontent.com/49216954/194461736-0ad2ef41-44a9-4a15-a752-7fa46a89bd89.png">
8) Select the `pixi-tooltips` folder
9) The extension should now be installed

### Usage
1) Open/navigate to your Pixi.js game/app in Google Chrome web browser
2) Open the extensions toolbar in Chrome <img width="39" alt="Screen Shot 2022-10-06 at 10 28 59 PM" src="https://user-images.githubusercontent.com/49216954/194461889-1eca28e0-93fe-426f-bed1-a770a0d0cad7.png">
3) Select the `Pixi Tooltips` extension
4) Click the `Inject` button <img width="70" alt="Screen Shot 2022-10-06 at 10 30 45 PM" src="https://user-images.githubusercontent.com/49216954/194462083-eb0f1fc1-c12a-4f01-b1fe-0d6b05bd3350.png">
5) You should see the status below the `Inject` button change from `NotInjected` to `OK`
6) Hover over your Pixi.js game/app (i.e., the \<canvas\>) - tooltips should now appear
7) (Optional) Please provide feedback, especially if this doesn't work for you!

## Contributing

Please see [`contribute.md`](contribute.md)

Suggestions and pull requests are welcomed!

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)
