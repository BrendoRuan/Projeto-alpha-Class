export interface Usuario {         // Define e exporta a interface 'Usuario', que é um tipo customizado para objetos de usuário
  id?: number;                    // Propriedade opcional 'id' do tipo número (identificador único do usuário)
  nome: string;                   // Propriedade obrigatória 'nome' do tipo string (nome do usuário)
  email: string;                  // Propriedade obrigatória 'email' do tipo string (email do usuário)
  senha: string;                  // Propriedade obrigatória 'senha' do tipo string (senha do usuário)
  telefone?: string;              // Propriedade opcional 'telefone' do tipo string (telefone de contato do usuário)
  rua?: string;                  // Propriedade opcional 'rua' do tipo string (logradouro/endereço do usuário)
  bairro?: string;                // Propriedade opcional 'bairro' do tipo string (bairro do endereço do usuário)
}
