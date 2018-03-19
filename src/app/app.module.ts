import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddPlayerComponent } from './add-player/add-player.component';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
