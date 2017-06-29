/**
 * Created by jakebillings on 6/29/17.
 */
export class Paste {
  constructor(name: String, cipherText: String, createdAt: Object) {
    this.name=name;
    this.cipherText=cipherText;
    this.createdAt=createdAt;
  }
  name: String;
  cipherText: String;
  createdAt: Object;
}
