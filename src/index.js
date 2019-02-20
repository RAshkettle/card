//Add Code Completion for VSCode
/// <reference path="./phaser.d.ts"/>

import 'phaser';
import config from './config/config';
import Main from './scenes/main';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Main', Main);
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader',Preloader);
    this.scene.start('Boot');
  }
}

window.onload = function () {
  window.game = new Game();
};

