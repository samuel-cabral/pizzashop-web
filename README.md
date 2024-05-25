# Dashboard para Restaurantes de Delivery

Este projeto é um dashboard desenvolvido com React, destinado a lojistas que possuem restaurantes em aplicativos de delivery, como iFood. O dashboard permite acompanhar métricas do restaurante, gerenciar pedidos e visualizar dados detalhados de vendas.

## Funcionalidades

- **Acompanhamento de Métricas**: Exibe gráficos de pedidos mensais e diários.
- **Gerenciamento de Pedidos**: Permite visualizar detalhes dos pedidos, alterar status, cancelar pedidos, etc.
- **Integração com API**: Utiliza React Query para gerenciar cache e requisições HTTP.
- **Autenticação**: Implementa login sem senha utilizando Magic Link.
- **Atualização de Perfil**: Permite atualizar informações do perfil da loja.
- **Filtros e Paginação**: Filtros por estado do pedido, nome do cliente e ID do cliente, além de paginação com skeleton screens.
- **Temas**: Suporte a temas claro e escuro.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **TailwindCSS**: Utilizado para estilização.
- **React Query**: Gerenciamento de estado e cache de requisições HTTP.
- **Jest e React Testing Library**: Ferramentas para testes unitários.
- **API**: Backend pronto desenvolvido com BAN (disponível na trilha de JavaScript no backend).

## Estrutura do Projeto

- **Login e Autenticação**: Implementa login através de Magic Link, sem necessidade de senha.
- **Dashboard Principal**: Exibe gráficos e métricas de pedidos.
- **Gestão de Pedidos**: Visualização, aprovação, cancelamento e filtragem de pedidos.
- **Atualização de Perfil**: Permite alterar informações da loja com atualização de cache em tempo real.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dashboard-restaurante.git
   ```

2. Instale as dependências:
   ```bash
   cd dashboard-restaurante
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```

## Uso

Após iniciar o projeto, você poderá acessar o dashboard no seu navegador. Utilize um usuário já cadastrado ou cadastre-se para fazer login através do Magic Link enviado por e-mail. Navegue pelo dashboard para visualizar e gerenciar os pedidos do restaurante.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests com melhorias e correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Participe desse desafio e vamos codar juntos! 🚀
