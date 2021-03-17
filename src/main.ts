import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';


const app = Aurelia
  .register(RouterConfiguration)
  .app(MyApp)

Neutralino.init({
  load: function () {
    app.start()
  },
  pingSuccessCallback: function () {

  },
  pingFailCallback: function () {

  }
});