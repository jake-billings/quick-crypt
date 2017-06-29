import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { EncryptionService } from './encryption.service'

import { Paste } from './Paste'
import { UnencryptedPaste } from './UnencryptedPaste'

@Injectable()
export class PasteBackendService {
  _encryption: EncryptionService;

  pastes: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase, _encryption: EncryptionService) {
    this.pastes = db.list('/pastes');
    this._encryption = _encryption;
  }

  encryptPaste(unencryptedPaste: UnencryptedPaste) {
    return new Paste(unencryptedPaste.name, this._encryption.encrypt(unencryptedPaste.plainText),unencryptedPaste.createdAt)
  }
  decryptPaste(encryptedPaste: Paste) {
    return new UnencryptedPaste(encryptedPaste.name, this._encryption.decrypt(encryptedPaste.cipherText),encryptedPaste.createdAt)
  }

  createPaste(paste: Paste) {
    console.log(JSON.stringify(paste))
    return this.pastes.push(paste);
  }

  encryptAndCreatePaste(unencryptedPaste: UnencryptedPaste) {
    return this.createPaste(this.encryptPaste(unencryptedPaste))
  }

}
