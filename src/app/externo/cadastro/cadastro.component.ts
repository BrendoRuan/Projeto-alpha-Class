import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true, // Componente independente
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup; // Formulário reativo
  errorMsg = ''; // Mensagem de erro visível no template

  constructor(
    private fb: FormBuilder, // Utilitário para construir formulários
    private usuarioService: UsuarioService, // Serviço para cadastrar o usuário
    private router: Router // Para redirecionamento após cadastro
  ) {
    // Inicializa o formulário com os campos e validações
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: [''],
      rua: [''],
      bairro: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Função chamada ao enviar o formulário
  onSubmit() {
    if (this.cadastroForm.valid) {
      // Prepara o objeto com os dados preenchidos
      const novoUsuario = {
        ...this.cadastroForm.value,
        senha: this.cadastroForm.value.password // Renomeia para `senha` esperado pelo backend
      };

      // Chama o serviço de cadastro e trata a resposta
      this.usuarioService.cadastrar(novoUsuario).subscribe({
        next: () => this.router.navigate(['/externo/login']), // Redireciona em caso de sucesso
        error: () => this.errorMsg = 'Erro ao cadastrar usuário. Tente novamente.' // Exibe erro
      });
    }
  }
}
