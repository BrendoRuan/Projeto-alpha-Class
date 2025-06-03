import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // Componente standalone
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = ''; // Propriedade ligada ao input de email
  senha: string = ''; // Propriedade ligada ao input de senha
  erro: string = '';  // Mensagem de erro em caso de falha no login

  constructor(private authService: AuthService, private router: Router) {}

  // Função executada ao enviar o formulário
  fazerLogin() {
    this.erro = ''; // Limpa o erro anterior
    this.authService.login(this.email, this.senha).subscribe(sucesso => {
      if (sucesso) {
        // Login bem-sucedido, redireciona para a home
        this.router.navigateByUrl('/interno/home');
      } else {
        // Mostra mensagem de erro
        this.erro = 'Email ou senha inválidos';
      }
    });
  }

  // Redireciona para a tela de cadastro
  gotoCadastro() {
    this.router.navigate(['externo/cadastro']);
  }
}