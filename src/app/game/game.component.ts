import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';

import * as Phaser from 'phaser';
import * as NineSlicePlugin from 'phaser3-nineslice';
import {MainScene} from './Phaser/MainScene';

@Component({
  selector: 'app-header',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit, OnInit {

  @ViewChild('gameContainer')
  public header: ElementRef;

  private phaserGame: Phaser.Game;
  private readonly config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 400,
      width: window.innerWidth,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 1000
          },
          debug: false,
          debugShowBody: true,
          debugShowStaticBody: true,
          debugShowVelocity: true,
          debugVelocityColor: 0xffff00,
          debugBodyColor: 0x0000ff,
          debugStaticBodyColor: 0xffffff
        }
      },
      transparent: true,
      plugins: {
        global: [NineSlicePlugin.Plugin.DefaultCfg]
      }
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }

  ngAfterViewInit(): void {
    this.header.nativeElement.appendChild(this.phaserGame.canvas);
  }
}
