import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: any;
  password: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    this.navCtrl.navigateForward('/home');
  }

}
