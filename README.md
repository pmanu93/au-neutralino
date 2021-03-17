<div align="center">
  <img src="https://cdn.rawgit.com/neutralinojs/neutralinojs.github.io/b667f2c2/docs/nllogo.png" style="width:25vw;"/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <img src="https://aurelia.io/styles/images/aurelia-icon.svg" style="width:25vw;"/>
</div>

# au-neutralino

  A template for getting started with **[aurelia](https://aurelia.io)**
 running on **[neutralino.js](https://neutralino.js.org)**.

 >**NOTE:**  
 >This is using **Aurelia v2** , which is still in alpha stage!
 >
 > You can find documentation for this version [here](https://docs.aurelia.io/)



 
## SETUP
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


## Release
To create an executable for your application, you run:

```sh
neu release
```
this will create a `dist` folder with the executables for linux, windows and mac platforms.