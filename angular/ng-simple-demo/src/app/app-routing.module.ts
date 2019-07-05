import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ItemsComponent } from './items/items.component';
import { ItemStartComponent } from './items/item-start/item-start.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

import { ItemsGuard } from './items/items.guard';
import { ItemEditGuard } from './items/item-edit/item-edit.guard';

import { LoginComponent } from './login/login/login.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'items', component: ItemsComponent, canActivate: [ItemsGuard], children: [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: ItemStartComponent},
    { path: 'new', component: ItemNewComponent},
    { path: 'list', component: ItemListComponent},    
    { path: ':id', component: ItemDetailComponent},
    { path: ':id/edit', component: ItemEditComponent, canActivate: [ItemEditGuard]}
  ] },

  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
