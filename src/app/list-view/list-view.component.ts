import { Component, OnInit } from '@angular/core';
import { store } from "../../models/store"

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  store = store;
  
  constructor() { 
  }

  ngOnInit() {
  }

  toggleEdit(){
    this.store.togglePlayerEdit();
  }

}
