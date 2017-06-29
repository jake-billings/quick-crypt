import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { EncryptionService } from './encryption.service'

import { Paste } from './Paste'
import { UnencryptedPaste } from './UnencryptedPaste'

@Injectable()
export class PasteBackendService {
  db: AngularFireDatabase;

  _encryption: EncryptionService;

  pastes: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase, _encryption: EncryptionService) {
    this.db = db;
    this.pastes = this.db.list('/pastes');
    this._encryption = _encryption;
  }

  encryptPaste(key: String, unencryptedPaste: UnencryptedPaste) {
    return new Paste(unencryptedPaste.name, this._encryption.encrypt(key, unencryptedPaste.plainText),unencryptedPaste.createdAt)
  }
  decryptPaste(key:String, encryptedPaste: Paste) {
    return new UnencryptedPaste(encryptedPaste.name, this._encryption.decrypt(key, encryptedPaste.cipherText),encryptedPaste.createdAt)
  }

  createPaste(paste: Paste) {
    return this.pastes.push(paste);
  }

  encryptAndCreatePaste(key: String, unencryptedPaste: UnencryptedPaste) {
    return this.createPaste(this.encryptPaste(key, unencryptedPaste))
  }

  getPaste(id: String):FirebaseObjectObservable<any> {
    return this.db.object(`/pastes/${id}`);
  }

}
