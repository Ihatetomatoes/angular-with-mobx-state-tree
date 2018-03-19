import { Component, OnInit } from '@angular/core';
import {store} from '../../models/store';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  store = store;

  constructor(
    
  ) {
  }

  ngOnInit() {
  }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.name.value && e.target.age.value){
      store.addPlayer({
        name: e.target.name.value,
        age: parseInt(e.target.age.value)
      })
      e.target.reset();
      e.target.name.focus();
    }
    //console.log(e.target.name.value, e.target.age.value);
  }

}
