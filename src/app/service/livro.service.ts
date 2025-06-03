import { Injectable } from '@angular/core';
// Importa o decorator Injectable para permitir injeção de dependências no serviço

import { HttpClient } from '@angular/common/http';
// Importa HttpClient para fazer requisições HTTP

import { Observable } from 'rxjs';
// Importa Observable do RxJS para lidar com dados assíncronos

export interface Livro {
  id: number;      // Identificador único do livro
  titulo: string;  // Título do livro
  capa: string;    // URL ou caminho da imagem da capa do livro
  resumo: string;  // Resumo ou sinopse do livro
  autor: string;   // Nome do autor do livro
}

@Injectable({ providedIn: 'root' })
// Define que o serviço será singleton e disponível em toda a aplicação

export class LivroService {
  private apiUrl = 'http://localhost:3000/livros';
  // URL base da API para o recurso 'livros'

  constructor(private http: HttpClient) {}
  // Injeta o HttpClient para realizar requisições HTTP

  getLivros(): Observable<Livro[]> {
    // Método para obter a lista de livros, retorna um Observable que emite um array de livros
    return this.http.get<Livro[]>(this.apiUrl);
    // Realiza uma requisição GET na URL definida e retorna o resultado já tipado
  }

  adicionarLivro(livro: any): Observable<any> {
    // Método para adicionar um novo livro, recebe um objeto 'livro' e retorna um Observable com a resposta
    return this.http.post(this.apiUrl, livro);
    // Realiza uma requisição POST enviando o livro para a API
  }
}
