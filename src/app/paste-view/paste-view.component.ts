import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {PasteBackendService} from "../paste-backend.service";

import 'rxjs/add/operator/switchMap';

import {Paste} from "../Paste";
import {UnencryptedPaste} from "../UnencryptedPaste";

@Component({
  selector: 'app-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css'],
  providers: [PasteBackendService]
})
export class PasteViewComponent implements OnInit {
  paste: Paste;
  key: String;
  unencryptedPaste: UnencryptedPaste;

  loading: Boolean = true;
  notFound: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _pasteBackendService: PasteBackendService) {}

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
    if (this.key&&this.paste) {
      this.unencryptedPaste=this._pasteBackendService.decryptPaste(this.key,this.paste);
    } else {
      this.unencryptedPaste=null;
    }
  }

}
