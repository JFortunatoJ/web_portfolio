import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

import * as PIXI from 'pixi.js';
import {Character} from './classes/Character';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: 400,
  antialias: true,
  transparent: true,
  resolution: 1,
});

@Component({
  selector: 'app-header',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {

  @ViewChild('header')
  public header: ElementRef;

  private canUpdate: boolean;

  private character: Character;
  private ground: any;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.header.nativeElement.appendChild(app.view);

    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    app.ticker.add(delta => this.update(delta));

    this.loadCharacter();
  }

  update(deltaTime): void {
    if (!this.canUpdate) {
      return;
    }

    this.character.update(deltaTime);
  }

  loadCharacter(): void {
    this.character = new Character(app, 100, 100, app.renderer.width / 2, app.renderer.height / 2, () => this.canUpdate = true);
  }
}
