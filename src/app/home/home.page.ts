import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: any;
  password: any;
  constructor() {}

  login(){
    console.log(this.username);
  }
}
