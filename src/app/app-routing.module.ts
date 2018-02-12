import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1 } from './pages/page1.component';
import { Page2 } from './pages/page2.component';
import { Page3 } from './pages/page3.component';

const routes: Routes = [
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 },
    { path: 'page3', component: Page3 },
    { path: '', component: Page1 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
