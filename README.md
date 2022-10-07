# 🔎 PIXI Tooltips
## Features

- Hover over a Pixi.js application to view information about textured objects through tooltips.

## Install

### Requirements
- `git`: [download the git installer here](https://git-scm.com/downloads)
- `node.js` (and `npm`): [download the node installer here](https://nodejs.org/en/), or alternatively [use node version manager](https://github.com/nvm-sh/nvm)
- Google Chrome web browser: [download Chrome](https://www.google.com/chrome/dr/download/)

*If you have problems setting up git or node.js+npm please let me know by posting an issue on this repository. I will help you ASAP.*

### Steps
1) Clone this repository using a client like [GitHub desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop), or `git clone https://github.com/finlaymacklon/pixi-tooltips` (if you are comfortable with Windows Command Prompt/MacOS Terminal/Linux Shell)
2) Open the `pixi-tooltips` folder in your command prompt/terminal/shell: [Guide for Windows, MacOS, and Linux](https://www.groovypost.com/howto/open-command-window-terminal-window-specific-folder-windows-mac-linux/)
3) You should now be in the `pixi-tooltips` folder in your command prompt/terminal/shell
4) In your command prompt/terminal/shell, enter the command `npm run build` to build the `pixi-tooltips` Chrome Extension from the source code
5) Check that the extension has succesfully been built: you should now have a `pixi-tooltips/build` folder
6) Open the Google Chrome web browser
7) In Chrome, open Settings by clicking on the three dots (ellipsis) in the top-right corner of the browser
8) Navigate to `More Tools` > `Extensions`
9) In the Extensions menu, turn on `Developer Mode` in the top right corner <img width="158" alt="Screen Shot 2022-10-06 at 10 25 57 PM" src="https://user-images.githubusercontent.com/49216954/194461562-a4548ae3-ba94-4c05-846c-9a8567b7c0ac.png">
10) In the Extensions menu, click `Load Unpacked` from the top-left corner <img width="129" alt="Screen Shot 2022-10-06 at 10 27 25 PM" src="https://user-images.githubusercontent.com/49216954/194461736-0ad2ef41-44a9-4a15-a752-7fa46a89bd89.png">
11) Select the `pixi-tooltips/build` folder
12) The extension is now installed!

### Notes
- If you have any questions or problems please let me know by [posting an issue on this repository](https://github.com/finlaymacklon/pixi-tooltips/issues/new)
- Installation is not necessarily straightforward. Aim to add this extension to Chrome Web Store in the next few days.

## Usage
1) Open/navigate to your Pixi.js game/app in Google Chrome web browser
2) Open the extensions toolbar in Chrome <img width="39" alt="Screen Shot 2022-10-06 at 10 28 59 PM" src="https://user-images.githubusercontent.com/49216954/194461889-1eca28e0-93fe-426f-bed1-a770a0d0cad7.png">
3) Select the `Pixi Tooltips` extension
4) Click the `Inject` button <img width="70" alt="Screen Shot 2022-10-06 at 10 30 45 PM" src="https://user-images.githubusercontent.com/49216954/194462083-eb0f1fc1-c12a-4f01-b1fe-0d6b05bd3350.png">
5) You should see the status below the `Inject` button change from `NotInjected` to `Injected`
6) Hover over your Pixi.js game/app (i.e., the \<canvas\>) - tooltips should now appear!
7) (Optional) Please provide feedback, especially if this doesn't work for you!!

## Contribution

Suggestions and pull requests are welcomed!.

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)
