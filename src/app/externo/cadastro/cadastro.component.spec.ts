/* Seção com fundo gradiente e centralização de conteúdo */
.cadastro-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #0052d4, #4364f7, #6fb1fc);
  padding: 20px;
}

/* Card estilizado com sombra, padding e bordas arredondadas */
.cadastro-card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  max-width: 700px;
  width: 100%;
  padding: 40px 50px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Título centralizado e estilizado */
.cadastro-card h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #004aad;
  text-align: center;
}

/* Estilo comum aos inputs */
.cadastro-card form input {
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  width: 100%;
}

/* Estilo aplicado quando o input estiver focado */
.cadastro-card form input:focus {
  border-color: #004aad;
  outline: none;
}

/* Estilo das mensagens de erro */
.cadastro-card form div[ng-reflect-ng-if],
.cadastro-card form div.ng-invalid {
  color: red;
  font-size: 0.9rem;
  margin-top: -15px;
  margin-bottom: 15px;
}

/* Botão de envio estilizado */
.cadastro-card form button[type="submit"] {
  background-color: #004aad;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 100%;
}

/* Efeito ao passar o mouse no botão */
.cadastro-card form button[type="submit"]:hover {
  background-color: #002f6c;
  transform: scale(1.03);
}

/* Estilo do botão desativado */
.cadastro-card form button[disabled] {
  background-color: #999;
  cursor: not-allowed;
}

/* Ajustes para dispositivos móveis */
@media (max-width: 768px) {
  .cadastro-card {
    padding: 30px 25px;
  }
}
