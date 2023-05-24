# Meu Time
Este é um projeto chamado "Meu Time" que utiliza a API de futebol do API-Football para obter estatísticas sobre ligas, copas e times de todo o mundo.
Para acessar o deploy do projeto clique <a href="https://projeto-meu-time.vercel.app/">aqui</a>

## Funcionalidades
O projeto "Meu Time" permite que os usuários acessem informações detalhadas sobre times de futebol. Aqui está uma visão geral das funcionalidades principais:

- Tela de login: O usuário precisa inserir a chave de acesso da API, que é obtida no site do API-Football, para autenticar o acesso.
- Tela de seleção de país: Após o login, o usuário é redirecionado para a tela de seleção de país, onde pode escolher um país específico.
- Tela de seleção de temporada e liga: Depois de selecionar o país, o usuário pode escolher a temporada e a liga desejada.
-Tela de seleção de time: Após selecionar a temporada e a liga, o usuário pode escolher um time específico.
-Página de estatísticas do time: Nesta página, o usuário encontrará estatísticas detalhadas sobre o time selecionado, incluindo informações sobre jogadores, formações utilizadas nas partidas, tabela de resultados e um gráfico que exibe o número de gols por intervalo de tempo.
Tecnologias utilizadas

## O projeto foi desenvolvido utilizando as seguintes bibliotecas do React:

- Vite: Utilizado para iniciar o projeto e configurar o ambiente de desenvolvimento.
- Styled Components: Utilizado para adicionar estilos CSS às páginas.
- React Router DOM: Utilizado para gerenciar as trocas de páginas e a navegação dentro do aplicativo.
- React ApexCharts: Utilizado para exibir gráficos interativos, como o gráfico de número de gols por intervalo de tempo.
## Como executar o projeto
Para executar o projeto "Meu Time" em seu ambiente local, siga as etapas abaixo:

- Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório do projeto para o seu ambiente local.

- Acesse a pasta do projeto e execute o seguinte comando no terminal para instalar as dependências:

`npm install`

- Na pasta do projeto, crie um arquivo `.env.local` e adicione a seguinte variavel de ambiente:
`VITE_APP_API_URL = https://v3.football.api-sports.io`

- Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

`npm run dev`

- O servidor de desenvolvimento será iniciado e você poderá acessar o projeto em seu navegador no endereço que será indicado.

### Observações
- Certifique-se de obter uma chave de acesso válida do API-Football para autenticar o acesso à API.
- As informações exibidas no projeto são obtidas em tempo real da API-Football e dependem da disponibilidade e precisão dos dados fornecidos pela API.
