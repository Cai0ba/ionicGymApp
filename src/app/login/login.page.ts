import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  cpf: string = '';
  senha: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  login(cpf: string) {
    if (this.isValidCPF(cpf) && this.isValidPassword()) {
      console.log('DEU CERTO');
      this.navCtrl.navigateForward('/home-aluno');
      //TODO: PRECISO IMPLEMENTAR A LÓGICA DE LOGIN, AUTENTICAÇÃO E VALIDAÇÃO DE SENHA
    } else {
      this.presentToast('CPF ou SENHA inválidos');
    }
  }

  navigateToHome(){
    this.navCtrl.navigateForward('')
  }

  navigateToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  isValidPassword() {
    return true;
    //TODO: PRECISO FAZER A VALIDAÇÃO DE SENHA
  }

  isValidCPF(cpf: string) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      icon: 'close',
    });
    toast.present();
  }
}
