import { Component } from '@angular/core'; 
// Importa o decorator para definir um componente Angular

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
// Importa classes e módulos para criação e validação de formulários reativos

import { CommonModule } from '@angular/common'; 
// Importa funcionalidades comuns do Angular

import { Router, RouterModule } from '@angular/router'; 
// Importa para navegação entre rotas

import { HttpClient } from '@angular/common/http'; 
// Importa para realizar requisições HTTP

@Component({
  selector: 'app-perfil', // Nome do seletor HTML do componente
  standalone: true, // Componente standalone (sem módulo)
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], // Importa módulos usados no template
  templateUrl: './perfil.component.html', // Arquivo HTML do componente
  styleUrls: ['./perfil.component.scss'] // Arquivo SCSS do componente
})
export class PerfilComponent {
  usuarios: any[] = []; 
  // Array que vai armazenar os usuários carregados da API

  livros: any[] = []; 
  // Array que vai armazenar os livros carregados da API

  usuarioSelecionado: any = null; 
  // Variável para armazenar o usuário que está sendo editado

  livroSelecionado: any = null; 
  // Variável para armazenar o livro que está sendo editado

  usuarioForm!: FormGroup; 
  // FormGroup para o formulário de usuário, criado dinamicamente

  livroForm!: FormGroup; 
  // FormGroup para o formulário de livro, criado dinamicamente

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}
  // Construtor que injeta FormBuilder para criar formulários, HttpClient para chamadas HTTP e Router para navegação

  ngOnInit(): void {
    this.carregarUsuarios();
    // Carrega os usuários ao inicializar o componente

    this.carregarLivros();
    // Carrega os livros ao inicializar o componente
  }

  carregarUsuarios() {
    this.http.get<any[]>('http://localhost:3000/usuarios').subscribe(data => {
      this.usuarios = data;
      // Faz uma requisição GET para buscar todos os usuários e armazena no array
    });
  }

  carregarLivros() {
    this.http.get<any[]>('http://localhost:3000/livros').subscribe(data => {
      this.livros = data;
      // Faz uma requisição GET para buscar todos os livros e armazena no array
    });
  }

  editarUsuario(usuario: any) {
    this.usuarioSelecionado = usuario;
    // Armazena o usuário selecionado para edição

    this.usuarioForm = this.fb.group({
      nome: [usuario.nome, Validators.required],
      // Campo nome obrigatório e já preenchido com valor do usuário

      email: [usuario.email, [Validators.required, Validators.email]],
      // Campo email obrigatório e válido, preenchido com valor do usuário

      telefone: [usuario.telefone, Validators.required],
      // Campo telefone obrigatório, preenchido com valor do usuário

      rua: [usuario.rua || ''],
      // Campo rua opcional, preenchido se existir ou vazio

      bairro: [usuario.bairro || ''],
      // Campo bairro opcional, preenchido se existir ou vazio

      senha: [usuario.senha || '', Validators.minLength(6)]
      // Campo senha opcional, com mínimo 6 caracteres se preenchido
    });
  }

  salvarEdicaoUsuario() {
    if (this.usuarioForm.invalid) return;
    // Se o formulário estiver inválido, não salva

    const atualizado = this.usuarioForm.value;
    // Pega os valores atualizados do formulário

    this.http.put(`http://localhost:3000/usuarios/${this.usuarioSelecionado.id}`, atualizado).subscribe(() => {
      this.usuarioSelecionado = null;
      // Após salvar, limpa o usuário selecionado para esconder o formulário

      this.carregarUsuarios();
      // Recarrega a lista de usuários atualizada
    });
  }

  cancelarEdicaoUsuario() {
    this.usuarioSelecionado = null;
    // Cancela a edição, limpando o usuário selecionado e fechando o formulário
  }

  editarLivro(livro: any) {
    this.livroSelecionado = livro;
    // Armazena o livro selecionado para edição

    this.livroForm = this.fb.group({
      titulo: [livro.titulo, Validators.required],
      // Campo título obrigatório preenchido

      autor: [livro.autor, Validators.required],
      // Campo autor obrigatório preenchido

      resumo: [livro.resumo || ''],
      // Campo resumo opcional preenchido se existir

      capa: [livro.capa || ''],
      // Campo capa (URL) opcional preenchido se existir

      categoria: [livro.categoria || ''],
      // Campo categoria opcional preenchido se existir

      maisLido: [livro.maisLido || false],
      // Checkbox indicando se é mais lido, padrão falso

      dataPublicacao: [livro.dataPublicacao ? livro.dataPublicacao.substring(0,10) : '']
      // Campo data de publicação formatado para YYYY-MM-DD ou vazio
    });
  }

  salvarEdicaoLivro() {
    if (this.livroForm.invalid) return;
    // Se o formulário de livro estiver inválido, não salva

    const atualizado = this.livroForm.value;
    // Pega os valores atualizados do formulário

    this.http.put(`http://localhost:3000/livros/${this.livroSelecionado.id}`, atualizado).subscribe(() => {
      this.livroSelecionado = null;
      // Após salvar, limpa o livro selecionado e fecha o formulário

      this.carregarLivros();
      // Recarrega a lista de livros atualizada
    });
  }

  cancelarEdicaoLivro() {
    this.livroSelecionado = null;
    // Cancela a edição do livro, limpando o livro selecionado
  }

  deletarUsuario(usuario: any) {
    if (confirm(`Tem certeza que deseja excluir o usuário "${usuario.nome}"?`)) {
      // Confirmação antes de deletar

      this.http.delete(`http://localhost:3000/usuarios/${usuario.id}`).subscribe(() => {
        this.carregarUsuarios();
        // Após deletar, recarrega a lista de usuários
      });
    }
  }

  deletarLivro(livro: any) {
    if (confirm(`Tem certeza que deseja excluir o livro "${livro.titulo}"?`)) {
      // Confirmação antes de deletar

      this.http.delete(`http://localhost:3000/livros/${livro.id}`).subscribe(() => {
        this.carregarLivros();
        // Após deletar, recarrega a lista de livros
      });
    }
  }

  gotoVoltarHome() {
    this.router.navigate(['interno/home']);
    // Navega para a rota 'interno/home' quando o botão for clicado
  }
}
