import {Injectable} from '@angular/core';

@Injectable()
export class EncryptionService {

  constructor() {
  }

  //todo write a real encryption service
  encrypt(plainText: String): String {
    return 'HonorSystemEncryption:PleaseDontRead:' + plainText;
  }

  //todo write a real encryption service
  decrypt(cipherText: String): String {
    return cipherText.replace('HonorSystemEncryption:PleaseDontRead:', '');
  }

}
