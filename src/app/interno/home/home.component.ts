import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service'; // serviço para buscar livros
import { Router } from '@angular/router'; // serviço para navegação entre páginas
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Arrays para armazenar livros recentes e populares
  livrosRecentes: any[] = [];
  livrosMaisLidos: any[] = [];

  // Injeta os serviços de livro e router no construtor
  constructor(private livroService: LivroService, private router: Router) {}

  // Método executado quando o componente é inicializado
  ngOnInit(): void {
    // Busca os livros usando o serviço
    this.livroService.getLivros().subscribe((livros: any[]) => {
      // Ordena os livros pela data de publicação, do mais recente ao mais antigo
      const livrosOrdenados = [...livros].sort((a, b) =>
        new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()
      );

      // Seleciona os 3 livros mais recentes
      this.livrosRecentes = livrosOrdenados.slice(0, 3);
      // Filtra os livros marcados como "mais lidos"
      this.livrosMaisLidos = livros.filter(livro => livro.maisLido);
    });
  }

  // Navega para a página de adicionar livro
  gotoadicionarLivro() {
    this.router.navigate(['components/adicionarLivros']); // atualize a rota conforme seu projeto
  }

  // Navega para o painel admin/perfil
  gotoPerfil(){
    this.router.navigate(['interno/perfil']);
  }

  // Navega para a listagem de livros
  gotoLivros(){
    this.router.navigate(['interno/livros']);
  }
  
  // Navega para a busca por categoria
  gotobuscar(){
    this.router.navigate(['components/buscar']);
  }

  // Navega para o cadastro de usuário
  gotoCadastro(){
    this.router.navigate(['externo/cadastro']);
  }
}
