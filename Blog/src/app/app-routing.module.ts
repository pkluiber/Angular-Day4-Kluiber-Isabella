import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"", component: CardsComponent
  },{
    path:"about", component: AboutComponent
  },{
    path:"contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
