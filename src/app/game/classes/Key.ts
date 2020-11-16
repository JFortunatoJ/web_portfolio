export interface Key {
  keyID: string;
  isDown: boolean;
  isUp: boolean;
  press: any; // function on press
  release: any; // function on release
}
