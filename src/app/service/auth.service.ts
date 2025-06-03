import { Injectable } from '@angular/core'; 
// Importa o decorator Injectable, que permite injetar dependências no serviço

import { Observable, map, catchError, of } from 'rxjs'; 
// Importa classes e operadores do RxJS para trabalhar com streams e tratamento de dados assincronos

import { HttpClient } from '@angular/common/http'; 
// Importa o HttpClient para fazer requisições HTTP

@Injectable({
  providedIn: 'root' 
})
// Define que o serviço AuthService será singleton e disponível em toda a aplicação (root injector)

export class AuthService { 
  // Declara a classe do serviço de autenticação

  private baseUrl = 'http://localhost:3000/usuarios'; 
  // URL base da API para o recurso de usuários

  constructor(private http: HttpClient) {} 
  // Injeta o HttpClient no construtor para poder usar requisições HTTP

  login(email: string, senha: string): Observable<boolean> { 
    // Método que recebe email e senha e retorna um Observable que emite true ou false conforme sucesso no login

    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&senha=${senha}`).pipe( 
      // Realiza uma requisição GET para buscar usuário com email e senha fornecidos
      // Retorna um array de usuários (tipagem any[])

      map(usuarios => { 
        // Operador map para transformar o resultado da requisição

        const usuario = usuarios[0]; 
        // Pega o primeiro usuário retornado (se existir)

        if (usuario) { 
          // Se encontrar um usuário válido...

          localStorage.setItem('usuarioLogado', JSON.stringify(usuario)); 
          // Salva os dados do usuário no localStorage para sessão

          return true; 
          // Retorna true indicando login bem-sucedido
        }
        return false; 
        // Se não encontrou usuário, retorna false (login falhou)
      })
    );
  }

  logout() { 
    // Método para logout do usuário

    localStorage.removeItem('usuarioLogado'); 
    // Remove os dados do usuário do localStorage, encerrando a sessão
  }

  usuarioLogado() { 
    // Método que retorna o usuário logado atualmente, se houver

    return JSON.parse(localStorage.getItem('usuarioLogado') || 'null'); 
    // Pega o item 'usuarioLogado' do localStorage, converte de JSON para objeto, ou retorna null se não existir
  }

  estaLogado(): boolean { 
    // Método que verifica se há um usuário logado

    return !!localStorage.getItem('usuarioLogado'); 
    // Retorna true se existir o item 'usuarioLogado' no localStorage, senão false
  }

  getUsuarioLogadoId(): number | null { 
    // Método que retorna o ID do usuário logado ou null caso não haja

    const usuario = this.usuarioLogado(); 
    // Obtém o usuário logado atual

    return usuario ? usuario.id : null; 
    // Retorna o ID do usuário se existir, senão null
  }
}
