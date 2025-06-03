import { Injectable } from '@angular/core';
// Importa o decorator Injectable para possibilitar a injeção de dependências

import { HttpClient } from '@angular/common/http';
// Importa HttpClient para realizar requisições HTTP

import { Observable } from 'rxjs';
// Importa Observable do RxJS para lidar com operações assíncronas

import { Usuario } from '../models/usuario/usuario.component';
// Importa a interface/modelo Usuario para tipar os dados de usuário

@Injectable({
  providedIn: 'root'
})
// Define que este serviço será fornecido na raiz da aplicação, tornando-o singleton

export class UsuarioService {
  private baseUrl = 'http://localhost:3000/usuarios';
  // URL base para o endpoint da API relacionado a usuários

  constructor(private http: HttpClient) {}
  // Injeta o HttpClient no serviço para realizar chamadas HTTP

  cadastrar(usuario: Usuario): Observable<Usuario> {
    // Método para cadastrar um novo usuário, recebe um objeto Usuario e retorna um Observable do usuário criado
    return this.http.post<Usuario>(this.baseUrl, usuario);
    // Envia uma requisição POST para a API com os dados do usuário
  }

  atualizar(id: number, dados: Partial<Usuario>): Observable<Usuario> {
    // Método para atualizar parcialmente um usuário, recebe o id e um objeto com os dados a serem atualizados
    // Partial<Usuario> permite enviar só os campos que serão modificados
    return this.http.patch<Usuario>(`${this.baseUrl}/${id}`, dados);
    // Envia uma requisição PATCH para a API para atualizar os dados do usuário
  }

  buscarPorId(id: number): Observable<Usuario> {
    // Método para buscar um usuário pelo id, retorna um Observable do usuário encontrado
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
    // Envia uma requisição GET para a API para obter os dados do usuário
  }
}
