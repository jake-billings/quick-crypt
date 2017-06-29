/**
 * Created by jakebillings on 6/29/17.
 */
export class UnencryptedPaste {
  constructor(name: String, plainText: String, createdAt: Object) {
    this.name = name;
    this.plainText = plainText;
    this.createdAt = createdAt;
  }

  name: String;
  plainText: String;
  createdAt: Object;
}
