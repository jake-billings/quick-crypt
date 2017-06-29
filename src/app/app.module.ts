import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { PasteCreateComponent } from './paste-create/paste-create.component';

import { EncryptionService } from './encryption.service';
import { PasteViewComponent } from './paste-view/paste-view.component';

import { RouterModule } from "@angular/router";

import routes from "./routes"

@NgModule({
  declarations: [
    AppComponent,
    PasteCreateComponent,
    PasteViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
