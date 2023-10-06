import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page'; 
@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  cpf: string = "";
  senha: string = "";

  constructor(private navCtrl: NavController) {}

  login() {
    // Aqui você pode adicionar a lógica de login com os dados de CPF e senha
    console.log('CPF:', this.cpf);
    console.log('Senha:', this.senha);
    // Adicione a lógica de autenticação e redirecionamento após o login
  }

  navigateToRegister() {
    this.navCtrl.navigateForward('/register'); // Substitua pela rota correta para a página de registro
  }
}
