import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemutatoComponent } from './bemutato/bemutato.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { InventoryComponent } from './inventory/inventory.component';
import { KereskedesComponent } from './kereskedes/kereskedes.component';
import { PlusheComponent } from './plushe/plushe.component';

export const routes: Routes = [
  {path: '', component: FooldalComponent}, 
  {path: 'history', component: KereskedesComponent},
  {path: 'toys', component: BemutatoComponent},
  {path: 'new-plushie', component: PlusheComponent},
  {path: 'inventory', component: InventoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
