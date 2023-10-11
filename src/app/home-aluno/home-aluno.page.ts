import { Component } from '@angular/core';

@Component({
  selector: 'app-home-aluno',
  templateUrl: 'home-aluno.page.html',
  styleUrls: ['home-aluno.page.scss'],
})
export class HomeAlunoPage {
  aulas: string[] = ['Aula 1', 'Aula 2', 'Aula 3', 'Aula 4', 'Aula 5'];

  entrarNaAula(aula: string) {
    // Implemente a lógica para entrar na aula aqui
    console.log('Entrando na aula:', aula);
  }

  verProfessores() {
    // Implemente a lógica para ver professores aqui
    console.log('Visualizando professores');
  }

  verAulas() {
    // Implemente a lógica para ver aulas aqui
    console.log('Visualizando aulas');
  }
}
