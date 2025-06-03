import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../../service/livro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adicionar-livro',                         // Nome da tag usada para esse componente
  imports:[CommonModule, ReactiveFormsModule],             // Módulos necessários para template e formulários
  templateUrl: './adicionar-livro.component.html',         // HTML associado
  styleUrls: ['./adicionar-livro.component.scss']          // CSS associado
})
export class AdicionarLivroComponent {
  livroForm: FormGroup;                                    // Formulário reativo para o livro

  constructor(
    private fb: FormBuilder,                               // FormBuilder para criar o formulário
    private livroService: LivroService,                    // Serviço para lidar com livros (API ou local)
    private router: Router                                 // Navegação de rotas
  ) {
    // Inicializa o formulário com campos obrigatórios
    this.livroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      resumo: ['', Validators.required],
      capa: ['', Validators.required],
      categoria: ['', Validators.required],
      dataPublicacao: ['', Validators.required]
      // Os campos categoria e dataPublicacao estão no HTML mas não aqui
    });
  }

  // Método chamado ao submeter o formulário
  salvarLivro() {
    if (this.livroForm.valid) {
      // Chama o serviço para adicionar o livro
      this.livroService.adicionarLivro(this.livroForm.value).subscribe(() => {
        alert('Livro adicionado com sucesso!');
        this.router.navigate(['/home']);                   // Redireciona para página inicial
      });
    }
  }

  // Botão "Cancelar" chama este método
  cancelar() {
    this.router.navigate(['/home']);
  }

  // Botão "Voltar" chama este método para navegar à home interna
  gotoVoltarHome(){
    this.router.navigate(['interno/home']);
  }
}