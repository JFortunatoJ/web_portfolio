import * as PIXI from 'pixi.js';
import {Keyboard} from './Keyboard';
import {MainScene} from '../../Phaser/MainScene';

export class Character extends Phaser.GameObjects.Sprite {
  private keyManager: Keyboard;

  private speed = 2;
  private jumpForce = 400;
  private isGrounded = false;
  private isFalling = false;
  private cameraOffsetVector = new Phaser.Math.Vector2(-400, 0);

  private mainCamera: Phaser.Cameras.Scene2D.Camera;

  constructor(scene: MainScene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | integer) {
    super(scene, x, y, texture, frame);
    this.scene = scene;
    this.mainCamera = this.scene.cameras.main;
    this.mainCamera.setBounds(0, 0, window.innerWidth, 400);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.gameObject.body.collideWorldBounds = true;
    this.body.gameObject.body.setSize(20, 39);

    this.setupAnimations();

    this.keyManager = new Keyboard();

    this.keyManager.addKey('ArrowRight', this.keyRightDown.bind(this), this.keyRightUp.bind(this));
    this.keyManager.addKey('ArrowLeft', this.keyLeftDown.bind(this), this.keyLeftUp.bind(this));
    this.keyManager.addKey('ArrowUp', this.spaceDown.bind(this));

    this.scale = 2;
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

    this.scene.anims.create({
      key: 'jump',
      frames: this.scene.anims.generateFrameNames('character', {
        start: 0,
        end: 1,
        zeroPad: 0,
        prefix: 'characterJump_',
        suffix: '.png'
      }),
      repeat: 1,
      frameRate: 11
    });

    this.scene.anims.create({
      key: 'fall',
      frames: this.scene.anims.generateFrameNames('character', {
        start: 0,
        end: 1,
        zeroPad: 0,
        prefix: 'characterFall_',
        suffix: '.png'
      }),
      repeat: 1,
      frameRate: 11
    });
  }

  public update(deltaTime): void {
    this.Move(this.body.velocity.x, this.body.velocity.y, deltaTime);
    this.fallingCheck();

    if (!this.isGrounded && this.body.velocity.y > 0) {
      this.body.velocity.y += 10;
    }

    this.mainCamera.followOffset.lerp(this.cameraOffsetVector, 0.025);
  }

  private fallingCheck(): void {
    if (!this.isGrounded && !this.isFalling && this.body.velocity.y > 0) {
      this.isFalling = true;
      this.play('fall');
      this.body.velocity.y += 100;
    }
  }

  keyRightDown(): void {
    if (this.flipX) {
      this.flipX = false;
      this.cameraOffsetVector.x = -400;
    }

    this.Run(this.speed, 1);
  }

  keyRightUp(): void {
    this.body.velocity.x = 0;
    this.Idle();
  }

  keyLeftDown(): void {
    if (!this.flipX) {
      this.flipX = true;
      this.cameraOffsetVector.x = 400;
    }

    this.Run(this.speed, -1);
  }

  keyLeftUp(): void {
    this.body.velocity.x = 0;
    this.Idle();
  }

  spaceDown(): void {
    this.Jump();
  }

  private Idle(): void {
    this.play('idle');
    this.anims.frameRate = 5;
  }

  private Run(speed: number, direction: number): void {
    this.body.velocity.x = speed * direction;

    if (!this.isGrounded) {
      return;
    }

    this.play('run');
    this.anims.currentAnim.frameRate = speed / 10;
  }

  private Jump(): void {
    if (!this.isGrounded) {
      return;
    }

    this.isGrounded = false;
    this.body.velocity.y = -this.jumpForce;
    this.play('jump');
  }

  public setGrounded(): void {
    if (this.isGrounded) {
      return;
    }

    this.isGrounded = true;
    this.isFalling = false;

    if (this.body.velocity.x !== 0) {
      this.play('run');
    } else {
      this.play('idle');
    }
  }

  private Move(x: number, y: number, deltaTime: number): void {

    let targetX = this.x + (x * deltaTime * this.speed);
    //if (targetX >= 0 && targetX <= this.app.renderer.width) {
    this.x = targetX;
    //}

    let targetY = this.y + (y * deltaTime * this.speed);
    //if (targetY >= 0 && targetY <= this.app.renderer.height) {
    //this.character.y += y * deltaTime * this.speed;
    //}
  }
}
