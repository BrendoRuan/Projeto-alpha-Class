# AlphaClass - Sistema de Biblioteca de Livros

## Descrição do Projeto

AlphaClass é um sistema de biblioteca desenvolvido em Angular, que permite o cadastro, gerenciamento e consulta de livros, além de autenticação e gerenciamento de usuários. O sistema facilita o controle dos livros disponíveis e o perfil dos usuários, com uma interface organizada, responsiva e funcional.

## Requisitos Funcionais

- Cadastro de usuários com dados pessoais e credenciais.
- Login e logout de usuários com persistência via `localStorage`.
- Gerenciamento de livros, incluindo cadastro e listagem de livros com informações como título, autor, capa e resumo.
- Visualização e atualização de perfis de usuários.
- Navegação clara entre telas internas (home, livros, perfil) e externas (login, cadastro).
- Validação e tratamento de erros nas operações via HTTP.
- Estrutura modular com componentes reutilizáveis e serviços separados.
- Responsividade e interface limpa para diferentes tamanhos de tela.

## Estrutura do Projeto

- `src/app/assets/img` — imagens estáticas usadas nas capas dos livros.
- `src/app/components` — componentes reutilizáveis, como adição de livros e busca.
- `src/app/externo` — telas externas (login, cadastro).
- `src/app/interno` — telas internas (home, gerenciamento de livros, perfil).
- `src/app/models` — interfaces e tipos para entidades do sistema (ex: Usuário, Livro).
- `src/app/service` — serviços Angular que fazem comunicação HTTP e lógica do sistema (auth, livro, usuario).

## Tecnologias Utilizadas

- Angular 20+
- JSON Server para backend simulado
- CSS modularizado e organização por componentes
- (Em breve) Tailwind CSS para estilização rápida e responsiva 

## Instruções de Instalação e Execução
Instale as dependências:
    - npm install @angular/cli
    - npm install -g json-server
    - ng g c = para estrutura das pastas
    - ng s (server) = para rodar o servidor
    - json-server --watch db.json --port 3000 = para rodar o servidor

### Pré-requisitos

- Node.js instalado (versão recomendada >= 16)
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)
- JSON Server instalado globalmente (`npm install -g json-server`)

### Passos para rodar o projeto

1. crie uma pasta:
    Arquivos/NovaPasta = AlphaClass

2. Clone o repositório:
   git clone https://github.com/BrendoRuan/Projeto-alpha-Class.git

3. instale as dependencias:
    citadas acima.

4. Puxe os arquivos do git:
    git pull origin master

### Padrões de commit

git commit -m ":tada: montando estrutura de pastas"
git commit -m ":sparkles: implementação do login e cadastrado/auth e usuarioService"
