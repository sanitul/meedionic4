import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController} from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
    loginForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: new FormControl(''),
        password: new FormControl('')
      });
  }
  doLogin(credentials: any) {
    if(credentials.username && credentials.password){
        this.loginForm.reset();
        this.presentLoading();
    }
  }
  gotoCreateLogin(){
    this.navCtrl.navigateForward('/singup-email');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    loading.onDidDismiss()
      .then((data) => {
        this.navCtrl.navigateForward('/details-screen/dashboard');
    });
  }

}
