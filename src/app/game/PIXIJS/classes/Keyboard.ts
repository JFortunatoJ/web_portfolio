import {Key} from './Key';

export class Keyboard {

  private keyList: Key[] = [];

  constructor() {
    this.addEventListeners();
  }

  public addEventListeners(): void {
    window.addEventListener('keydown', this.downHandler.bind(this), false);
    window.addEventListener('keyup', this.upHandler.bind(this), false);
  }

  public removeEventListeners(): void {
    window.removeEventListener('keydown', this.downHandler);
    window.removeEventListener('keyup', this.upHandler);
  }

  public addKey(value: string, pressed: () => {} = undefined, released: () => {} = undefined): Key {
    const key: Key = {
      keyID: value,
      isDown: false,
      isUp: true,
      press: pressed,
      release: released
    };

    this.keyList.push(key);

    return key;
  }

  public removeKey(value: Key): void {
    const index: number = this.keyList.indexOf(value);
    if (index !== -1) {
      this.keyList.splice(index, 1);
    }
  }

  private downHandler(event: KeyboardEvent): void {
    for (let i = 0; i < this.keyList.length; i++) {
      let key: Key = this.keyList[i];

      if (event.key === key.keyID) {
        if (key.isUp && key.press) {
          key.press();
        }
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();

        break;
      }
    }
  }

  private upHandler(event: KeyboardEvent): void {
    for (let i = 0; i < this.keyList.length; i++) {
      let key: Key = this.keyList[i];

      if (event.key === key.keyID) {
        if (key.isDown && key.release) {
          key.release();
        }
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
        break;
      }
    }
  }
}
