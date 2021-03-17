<div align="center">
  <img src="https://cdn.rawgit.com/neutralinojs/neutralinojs.github.io/b667f2c2/docs/nllogo.png" width="160"/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <img src="https://aurelia.io/styles/images/aurelia-icon.svg" width="150"/>
</div>

# au-neutralino

  A template for getting started with **[aurelia](https://aurelia.io)**
 running on **[neutralino.js](https://neutralino.js.org)**.

 >**NOTE:**  
 >This is using **Aurelia v2** , which is still in alpha stage!
 >
 > You can find documentation for this version [here](https://docs.aurelia.io/)



 
## Setup
Install [neu-cli](https://neutralino.js.org/docs/#/tools/cli):
```sh
npm i -g @neutralinojs/neu
```

Install dependencies:
```sh
npm i
```

## Development
To run the application you must build it first:

```sh
neu build
```
then
```sh
neu run
```

### Debugging
By default, neutralino runs in a window. 
You can enable the inspector changing the value of `enableinspector` in `settings.json` file.

It's also possible to run the application in the browser. for that you simply change de value of `mode` in `settings.json` from `window` to `browser`.

For more information check Neutralino [documentation](http://neutralino.js.org/docs/#/)

## Release
To create an executable for your application, you run:

```sh
neu release
```
this will create a `dist` folder with the executables for linux, windows and mac platforms.
