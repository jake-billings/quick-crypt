import { PasteCreateComponent } from "./paste-create/paste-create.component"
import { PasteViewComponent } from "./paste-view/paste-view.component"

import { Routes } from "@angular/router"

const routes : Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: PasteCreateComponent
  },
  {
    path: 'view',
    component: PasteViewComponent
  },
  {
    path: '**',
    redirectTo: 'create'
  }
];

export default routes;
