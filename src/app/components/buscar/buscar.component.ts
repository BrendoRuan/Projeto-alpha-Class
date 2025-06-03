import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service'; // Serviço para obter dados dos livros
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent implements OnInit {

  // Lista completa de livros (vinda do serviço)
  livros: any[] = [];

  // Lista filtrada, exibida na tela
  livrosFiltrados: any[] = [];

  // Categoria digitada pelo usuário
  categoria: string = '';

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  ngOnInit() {
    // Ao carregar o componente, buscar todos os livros do serviço
    this.livroService.getLivros().subscribe((res) => {
      this.livros = res;                // Armazena todos os livros
      this.livrosFiltrados = res;       // Inicialmente, exibe todos os livros
    });
  }

  // Método chamado ao clicar em "Buscar"
  filtrarPorCategoria() {
    const termo = this.categoria.trim().toLowerCase(); // Normaliza a string
    this.livrosFiltrados = this.livros.filter((livro) =>
      livro.categoria?.toLowerCase().includes(termo)   // Filtra por categoria
    );
  }

  // Navega de volta para a tela inicial
  gotoVoltarHome(){
    this.router.navigate(['interno/home']);
  }
}
