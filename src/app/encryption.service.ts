import {Injectable} from '@angular/core';

import sjcl from 'sjcl';

@Injectable()
export class EncryptionService {
  sjcl: any;

  constructor() {
    this.sjcl = sjcl;
  }

  encrypt(key:String, plainText: String): String {
    return this.sjcl.json.encrypt(key, plainText);
  }

  decrypt(key:String, cipherText: String): String {
    return this.sjcl.json.decrypt(key, cipherText)
  }

}
