import {Component, OnInit,Inject} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {PasteBackendService} from "../paste-backend.service";

import 'rxjs/add/operator/switchMap';

import {Paste} from "../Paste";
import {UnencryptedPaste} from "../UnencryptedPaste";

import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css'],
  providers: [PasteBackendService]
})
export class PasteViewComponent implements OnInit {
  paste: Paste;
  URL: String;
  key: String;
  unencryptedPaste: UnencryptedPaste;

  loading: Boolean = true;
  notFound: Boolean = false;
  incorrectKeyTried: Boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _pasteBackendService: PasteBackendService,
              @Inject(DOCUMENT) private document: any) {
    this.URL = document.URL;
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this._pasteBackendService.getPaste(params['paste_id']))
      .subscribe((paste: Paste) => {
        this.loading = !paste;
        if (this.loading) return;

        this.notFound = !paste.name;
        if (this.notFound) return;

        this.paste = paste;
        this.updateDecryptedPaste()
      });
  }

  updateDecryptedPaste() {
    if (this.key && this.paste) {
      try {
        this.unencryptedPaste = this._pasteBackendService.decryptPaste(this.key, this.paste);
      } catch (e) {
        if (e.message!=='ccm: tag doesn\'t match') {
          console.warn(e, typeof e)
        }
        this.unencryptedPaste = null;
        this.incorrectKeyTried = true;
      }
    } else {
      this.unencryptedPaste = null;
      this.incorrectKeyTried = false;
    }
  }

}
