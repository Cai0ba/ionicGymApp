import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  nome: string="";
  cpf: string="";
  email: string="";
  senha: string="";

  constructor() {}

  register() {
    // Aqui você pode adicionar a lógica para registrar o usuário com os dados fornecidos
    console.log('Nome:', this.nome);
    console.log('CPF:', this.cpf);
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
    // Adicione a lógica de registro e redirecionamento após o registro
  }
}
