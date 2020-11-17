import * as PIXI from 'pixi.js';
import {Keyboard} from './Keyboard';

export class Character {

  private character: Phaser.GameObjects.Sprite;

  private keyManager: Keyboard;

  private speed = 2;
  private direction = -1;
  private gravity = 1;
  private jumpForce = 20;

  private isJumping = false;

  constructor(private scene: Phaser.Scene, x: number, y: number) {
    this.character = scene.physics.add.sprite(x, y, 'character');
    this.character.body.gameObject.disableBody();
    this.character.body.gameObject.collideWorldBounds = true;

    this.setupAnimations();

    this.keyManager = new Keyboard();

    this.keyManager.addKey('ArrowRight', this.keyRightDown.bind(this), this.keyRightUp.bind(this));
    this.keyManager.addKey('ArrowLeft', this.keyLeftDown.bind(this), this.keyLeftUp.bind(this));
    this.keyManager.addKey('Space', this.spaceDown.bind(this));

    this.character.play('idle');

    this.character.scale = 2;
  }

  private setupAnimations(): void {
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames('character', {
        start: 0,
        end: 4,
        zeroPad: 0,
        prefix: 'characterIdle_',
        suffix: '.png'
      }),
      repeat: -1,
      frameRate: 7
    });

    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNames('character', {
        start: 0,
        end: 5,
        zeroPad: 0,
        prefix: 'characterRun_',
        suffix: '.png'
      }),
      repeat: -1,
      frameRate: 11
    });
  }

  public update(deltaTime): void {
    this.Gravity();
    this.Move(this.character.body.velocity.x, this.character.body.velocity.y, deltaTime);

    if (this.isJumping) {
      this.character.body.velocity.y = 1;
    }
  }

  keyRightDown(): void {
    if (this.character.flipX) {
      this.character.flipX = false;
    }

    this.Run(this.speed, 1);
  }

  keyRightUp(): void {
    this.character.body.velocity.x = 0;
    this.Idle();
  }

  keyLeftDown(): void {
    if (!this.character.flipX) {
      this.character.flipX = true;
    }

    this.Run(this.speed, -1);
  }

  keyLeftUp(): void {
    this.character.body.velocity.x = 0;
    this.Idle();
  }

  spaceDown(): void {
    this.Jump();
  }

  private Idle(): void {
    // this.character.animationSpeed = 0.1;
    this.character.play('idle');
    this.character.anims.frameRate = 5;
  }

  private Run(speed: number, direction: number): void {
    this.character.body.velocity.x = speed * direction;
    this.character.play('run');
    this.character.anims.currentAnim.frameRate = speed / 10;
  }

  private Jump(): void {
    if (this.isJumping) {
      return;
    }

    this.isJumping = true;
  }

  private Move(x: number, y: number, deltaTime: number): void {

    let targetX = this.character.x + (x * deltaTime * this.speed);
    //if (targetX >= 0 && targetX <= this.app.renderer.width) {
    this.character.x = targetX;
    //}

    let targetY = this.character.y + (y * deltaTime * this.speed);
    //if (targetY >= 0 && targetY <= this.app.renderer.height) {
    //this.character.y += y * deltaTime * this.speed;
    //}
  }

  private Gravity(): void {
    // this.character.vy = 1;
  }
}
