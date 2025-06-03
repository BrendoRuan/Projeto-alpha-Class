import { CommonModule } from '@angular/common'; // Importa módulos comuns do Angular
import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit para ciclo de vida
import { ReactiveFormsModule } from '@angular/forms'; // Importa para formulários reativos (aqui pode ser útil para filtros futuros)
import { Router, RouterModule } from '@angular/router'; // Importa roteamento para navegação entre páginas
import { LivroService } from '../../service/livro.service'; // Serviço para obter os dados dos livros

@Component({
  selector: 'app-livros', // Nome do seletor do componente
  standalone: true, // Componente independente, sem necessidade de ser declarado em um módulo
  imports: [CommonModule, RouterModule, ReactiveFormsModule], // Módulos importados para uso neste componente
  templateUrl: './livros.component.html', // Template HTML do componente
  styleUrls: ['./livros.component.scss'] // Arquivo SCSS com estilos do componente
})
export class LivrosComponent implements OnInit { // Implementa OnInit para ciclo de vida
  livros: any[] = []; // Array que armazenará os livros recebidos do serviço

  constructor(private livroService: LivroService, private router: Router) {}
  // Injeta o serviço para acessar os dados e o roteador para navegação

  ngOnInit() {
    // Método executado ao iniciar o componente
    this.livroService.getLivros().subscribe((res) => {
      // Chama o serviço que retorna os livros (observable)
      this.livros = res; // Armazena os livros na variável local para exibir na tela
    });
  }

  gotoVoltarhome() {
    // Método para navegação de volta para a página home
    this.router.navigate(['interno/home']); // Navega para rota 'interno/home'
  }
}