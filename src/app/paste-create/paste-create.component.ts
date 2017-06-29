import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paste-create',
  templateUrl: './paste-create.component.html',
  styleUrls: ['./paste-create.component.css']
})
export class PasteCreateComponent implements OnInit {
  paste = {}

  constructor() { }

  ngOnInit() {
  }

}
