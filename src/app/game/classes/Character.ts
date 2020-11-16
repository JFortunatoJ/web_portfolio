import * as PIXI from 'pixi.js';
import {Keyboard} from './Keyboard';
import {Spritesheet} from 'pixi.js';
import {Collider} from './Collider';

export class Character {

  private character: any;
  private keyManager: Keyboard;
  private sheet: Spritesheet;
  private normalScaleX: number;

  private speed = 2;
  private direction = -1;
  private gravity = 1;
  private jumpForce = 20;

  private isJumping = false;

  // tslint:disable-next-line:max-line-length
  constructor(private app: PIXI.Application, width: number, height: number, posX: number, posY: number, onLoadCharacter: () => {} = undefined) {

    this.keyManager = new Keyboard();

    this.keyManager.addKey('ArrowRight', this.keyRightDown.bind(this), this.keyRightUp.bind(this));
    this.keyManager.addKey('ArrowLeft', this.keyLeftDown.bind(this), this.keyLeftUp.bind(this));
    this.keyManager.addKey('Space', this.spaceDown.bind(this));

    app.loader.add('character', 'assets/sprites/character_spritesheet.json').load((loader, resources) => {

      this.sheet = loader.resources.character.spritesheet;
      this.character = new PIXI.AnimatedSprite(this.sheet.animations.characterIdle);

      this.character.animationSpeed = 0.1;
      this.character.play();

      this.character.width = width;
      this.character.height = height;

      this.character.x = posX;
      this.character.y = posY;

      this.character.anchor.x = 0.5;
      this.character.anchor.y = 0.5;

      this.character.vx = 0;
      this.character.vy = 0;

      this.normalScaleX = this.character.scale.x;

      // Add the bunny to the scene we are building.
      app.stage.addChild(this.character);

      onLoadCharacter();
    });
  }

  public update(deltaTime): void {

    this.Gravity();
    this.Move(this.character.vx, this.character.vy, deltaTime);

    if (this.isJumping) {
      this.character.vy = 1;
    }
  }

  keyRightDown(): void {
    if (this.character.scale.x === -this.normalScaleX) {
      this.character.scale.x = this.normalScaleX;
    }

    this.Run(this.speed, 1);
  }

  keyRightUp(): void {
    this.character.vx = 0;
    this.Idle();
  }

  keyLeftDown(): void {
    if (this.character.scale.x === this.normalScaleX) {
      this.character.scale.x = -this.normalScaleX;
    }

    this.Run(this.speed, -1);
  }

  keyLeftUp(): void {
    this.character.vx = 0;
    this.Idle();
  }

  spaceDown(): void {
    this.Jump();
  }


  private Idle(): void {
    this.character.animationSpeed = 0.1;
    this.character.textures = this.sheet.animations.characterIdle;
    this.character.play();
  }

  private Run(speed: number, direction: number): void {
    this.character.animationSpeed = speed / 10;
    this.character.vx = speed * direction;
    this.character.textures = this.sheet.animations.characterRun;
    this.character.play();
  }

  private Jump(): void {
    if (this.isJumping) {
      return;
    }

    this.isJumping = true;

  }

  private Move(x: number, y: number, deltaTime: number): void {
    let targetX = this.character.x + (x * deltaTime * this.speed);
    if (targetX >= 0 && targetX <= this.app.renderer.width) {
      this.character.x = targetX;
    }

    let targetY = this.character.y + (y * deltaTime * this.speed);
    if (targetY >= 0 && targetY <= this.app.renderer.height) {
      this.character.y += y * deltaTime * this.speed;
    }
  }

  private Gravity(): void {
    // this.character.vy = 1;
  }
}
