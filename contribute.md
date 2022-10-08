# Contributing

If you would like to contribute to the development of this extension, please read the steps outlined below.

### Requirements
- `git`: [download the git installer here](https://git-scm.com/downloads)
- `node.js` (and `npm`): [download the node installer here](https://nodejs.org/en/), or alternatively [use node version manager](https://github.com/nvm-sh/nvm)
- Google Chrome web browser: [download Chrome](https://www.google.com/chrome/dr/download/)

*If you have problems setting up git or node.js+npm please let me know by [posting an issue on this repository](https://github.com/finlaymacklon/pixi-tooltips/issues/new). I will help you ASAP.*

### Forking and downloading the source
Please see [this documentation provided by GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository).

### Building the extension from source

To test the extension after you have made changes to the source code, follow these steps:

1) Open the `pixi-tooltips` folder in your command prompt/terminal/shell: [Guide for Windows, MacOS, and Linux](https://www.groovypost.com/howto/open-command-window-terminal-window-specific-folder-windows-mac-linux/)
2) Enter the command `npm run install` to install dependencies
3) Enter the command `npm run build` to build the `pixi-tooltips` Chrome extension from the source code
4) Check that the extension has succesfully been built: you should now have a `pixi-tooltips/build` folder
5) Follow the installation steps #3 - 9 provided in `README.md`, but instead of selecting the `pixi-tooltips` folder (at step 8), select the `pixi-tooltips/build` folder

### Feedback
If there is a problem buiding the extension (e.g., due to `npm` dependencies) please let me know.