import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"

import {PasteBackendService} from '../paste-backend.service';
import {UnencryptedPaste} from "../UnencryptedPaste";
import {database} from "firebase"


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

  key = '';

  constructor(private _pasteBackendService: PasteBackendService, private router: Router) {
    this._pasteBackendService = _pasteBackendService;
    this.router = router;
  }

  ngOnInit() {
  }

  createPaste() {
    this._pasteBackendService.encryptAndCreatePaste(this.key,
      new UnencryptedPaste(this.paste.name, this.paste.plainText, database.ServerValue.TIMESTAMP))
      .then((result) => {
        this.router.navigate([`/view/${result.key}`])
      })
      .catch(err => console.log(err, 'You do not have access!'));
  }

}
