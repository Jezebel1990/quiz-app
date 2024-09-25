# Quiz App

![appquiz](https://github.com/user-attachments/assets/bca4b210-6871-49c5-88a1-5c10c73223b5)


> Um aplicativo de quiz interativo desenvolvido com Next.js, Express e Tailwind CSS.

## Visão Geral
Este projeto é um aplicativo de quiz onde os usuários podem escolher o nível de dificuldade (fácil, médio, difícil) e responder a perguntas de conhecimentos gerais. O aplicativo foi desenvolvido utilizando Next.js para o frontend, Express.js para o backend, e Tailwind CSS para a estilização da interface.


- Escolha o nível de dificuldade (fácil, médio, difícil)
- Exibição de pontuação em tempo real
- Feedback após cada resposta
- Resultado final com pontuação e desempenho
- [Backend API com perguntas de quiz](https://github.com/Jezebel1990/quiz-api.git) 
- Interface de usuário simples e responsiva com **Tailwind CSS**

## Tecnologias Utilizadas
- [Next.js](https://nextjs.org/) - Framework de React para o frontend
- [Express.js](https://expressjs.com/) - Framework Node.js para o backend
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript para tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e responsiva
- [React Context API](https://reactjs.org/docs/context.html) - Para gerenciar o estado global da dificuldade

## Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Passos para Instalação

1. Clone o repositório:

   ```bash
   https://github.com/Jezebel1990/quiz-app.git
   ```
2. Acesse a pasta do projeto:
```bash
 cd quiz-app
```
3. Instale as dependências:
```bash
npm install
# ou
yarn install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
5. Abra http://localhost:3000 no navegador para ver o app em ação.


## Estrutura do Projeto
- **app/:** Contém as páginas do frontend em Next.js
- **components/:** Componentes reutilizáveis da interface do usuário
- **context/:** Contexto global para gerenciar o estado da dificuldade do quiz
- **types/:** Definições de tipos TypeScript

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ♥ por [Jezebel Guedes](https://www.linkedin.com/in/jezebel-guedes/) 👋 Entre em contato!
