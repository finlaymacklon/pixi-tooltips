# Contributing

If you would like to contribute to the development of this extension, please read the below guide/instructions

### Files

* `config/`: Webpack configuration for this project.
* `public/`: Popup files.
    * `manifest.json`: Extension [configuration](https://developer.chrome.com/docs/extensions/mv3/manifest/).
* `src/`: Source files for the popup, [service workers](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#service-workers), and [content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/).
* `src/PixiSampler.js`: A JavaScript class that exposes the Pixi.js Scene Graph to the Chrome Extension, downloaded from [another repository](https://github.com/asgaardlab/canvas-visual-bugs-testbed)
* `.gitignore`: Lists files to be ignored in your Git repo.
* `package.json`: Contains project configuration, scripts, and dependencies.

### Requirements
- `git`: [download the git installer here](https://git-scm.com/downloads)
- `node.js` (and `npm`): [download the node installer here](https://nodejs.org/en/), or alternatively [use node version manager](https://github.com/nvm-sh/nvm)
- Google Chrome web browser: [download Chrome](https://www.google.com/chrome/dr/download/)

### Forking and downloading the source
- Please see [this documentation provided by GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) for how to fork the repository.

### Building the extension from source

To test the extension after you have made changes to the source code, follow these steps:

1) Open the `pixi-tooltips` folder in your command prompt/terminal/shell: [Guide for Windows, MacOS, and Linux](https://www.groovypost.com/howto/open-command-window-terminal-window-specific-folder-windows-mac-linux/)
2) Enter the command `npm i -D` to install dependencies (**may need to include `--legacy-peer-deps` flag**)
3) Enter the command `npm run get-pixi-sampler` to download the source file for `PixiSamplerClient` from the source repository
4) Enter the command `npm run build` to build the `pixi-tooltips` Chrome extension from the source code
5) Check that the extension has succesfully been built: you should now have a `build` folder
6) Follow the installation steps #3 - 9 provided in [`README.md`](README.md), but instead of selecting the `pixi-tooltips` folder (at step 8), select the `build` folder inside the `pixi-tooltips` repo

### Feedback
If there is a problem building or loading the extension please do not hesitate to post an issue
