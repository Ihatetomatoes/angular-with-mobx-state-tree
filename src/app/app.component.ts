import { Component, ChangeDetectionStrategy } from '@angular/core';
import { types, onSnapshot, getSnapshot, destroy } from "mobx-state-tree";
import { store } from "../models/store"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hardcoded title';
  store = store;

  constructor() {

    // console.log(getSnapshot(this.store.title))

  }

  onChange(value) {
    this.store.updateTitle(value);
  }

  // handleIncrease(){
  //   this.store.increment()
  // }
}
