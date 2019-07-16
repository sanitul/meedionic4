import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-singup-email',
  templateUrl: './singup-email.page.html',
  styleUrls: ['./singup-email.page.scss'],
})
export class SingupEmailPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  gotoCreateLogin(){
    this.navCtrl.navigateForward('/create-login');
  }

}
