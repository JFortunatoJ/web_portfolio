import {Character} from '../PIXIJS/classes/Character';
import StaticGroup = Phaser.Physics.Arcade.StaticGroup;

export class MainScene extends Phaser.Scene {

  private character: Character;
  private platformGroup: StaticGroup;
  private ground: any;

  constructor() {
    super({key: 'main'});
  }

  preload(): void {
    this.load.atlas('character', 'assets/sprites/character_spritesheet_phaser.png', 'assets/sprites/character_spritesheet_phaser.json');
    this.load.image('platform', 'assets/sprites/Platform.png');
  }

  create(): void {
    this.loadGround();
    this.loadCharacter();

    this.physics.add.collider(this.platformGroup, this.character, () => {
      this.character.setGrounded();
    });

    this.physics.add.collider(this.ground, this.character, () => {
      this.character.setGrounded();
    });

    this.cameras.main.startFollow(this.character);
  }

  update(): void {
    this.character.update(this.time.timeScale);
  }

  loadCharacter(): void {
    this.character = new Character(this, 50, 300, 'character');
  }

  loadGround(): void {

    this.ground = this.add.nineslice(window.innerWidth / 2, 375, window.innerWidth, 50, 'platform', 2).setOrigin(0.5);
    // this.ground = this.add.rectangle(window.innerWidth / 2, 400, window.innerWidth, 10, 0xFFFFFF) as any;
    // this.ground = this.add.tileSprite(window.innerWidth / 2, 383, window.innerWidth, 32, 'platform');
    this.physics.add.existing(this.ground, true).body.gameObject.body.setSize(0, 10);

    this.platformGroup = this.physics.add.staticGroup();
  }
}
