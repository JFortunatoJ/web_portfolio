import {Character} from '../PIXIJS/classes/Character';
import GameObject = Phaser.GameObjects.GameObject;

export class MainScene extends Phaser.Scene {

  private character: Character;
  private ground: GameObject;

  constructor() {
    super({key: 'main'});
  }

  preload(): void {
    this.load.atlas('character', 'assets/sprites/character_spritesheet_phaser.png', 'assets/sprites/character_spritesheet_phaser.json');
  }

  create(): void {
    this.loadGround();
    this.loadCharacter();
  }

  update(): void {
    this.character.update(this.time.timeScale);
  }

  loadCharacter(): void {
    this.character = new Character(this, 200, 393);
  }

  loadGround(): void {
    this.ground = this.add.rectangle(window.innerWidth / 2, 400, window.innerWidth, 10, 0xFFFFFF) as any;
    this.physics.add.existing(this.ground, true);
    this.ground.body.gameObject.canCollide = true;
  }
}
