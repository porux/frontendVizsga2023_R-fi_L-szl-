import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KereskedesComponent } from './kereskedes/kereskedes.component';
import { BemutatoComponent } from './bemutato/bemutato.component';
import { PlusheComponent } from './plushe/plushe.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KereskedesComponent,
    BemutatoComponent,
    PlusheComponent,
    NewPlushieComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
