import { Component, OnInit } from '@angular/core';
import { PasteBackendService } from '../paste-backend.service';
import { UnencryptedPaste } from "../UnencryptedPaste";
import { database } from "firebase"

@Component({
  selector: 'app-paste-create',
  templateUrl: './paste-create.component.html',
  styleUrls: ['./paste-create.component.css'],
  providers: [PasteBackendService]
})
export class PasteCreateComponent implements OnInit {
  paste = {
    name: '',
    plainText: ''
  };

  constructor(private _pasteBackendService: PasteBackendService) {
    this._pasteBackendService=_pasteBackendService;
  }

  ngOnInit() {
  }

  createPaste() {
    this._pasteBackendService.encryptAndCreatePaste(new UnencryptedPaste(this.paste.name, this.paste.plainText, database.ServerValue.TIMESTAMP))
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

}
