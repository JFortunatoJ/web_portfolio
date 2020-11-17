import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';

import * as Phaser from 'phaser';
import {MainScene} from './Phaser/MainScene';
import {Character} from './PIXIJS/classes/Character';

@Component({
  selector: 'app-header',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit , OnInit{

  @ViewChild('header')
  public header: ElementRef;

  private phaserGame: Phaser.Game;
  private config: Phaser.Types.Core.GameConfig;

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
          gravity: {y: 200}
        }
      },
      transparent: true
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }

  ngAfterViewInit(): void {
    this.header.nativeElement.appendChild(this.phaserGame.canvas);
  }
}
