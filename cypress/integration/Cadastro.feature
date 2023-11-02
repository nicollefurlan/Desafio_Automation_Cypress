
Feature: Cadastro de usuário no site nopcommerce

    Como usuário acesso a página de registro, 
    eu gostaria de efetuar um novo cadastro
    para criar cadastro no site
      
    Scenario: Efetuar cadastro de usuário inserindo somente campos obrigatórios
        Given que acesso a pagina de registro do site Nopcommerce
        When preencho o formulario somente com dados obrigatorios
        And clico no botão registrar
        Then verifico que o cadastro foi realizado com sucesso

     Scenario: Efetuar cadastro de usuário inserindo todos os campos do formulário
        Given que acesso a pagina de registro do site Nopcommerce
        When passo todos os dados do formulario
        And clico no botão registrar
        Then verifico que o cadastro foi realizado com sucesso    

    Scenario: Efetuar validação de erro ao inserir email inválido
        Given que acesso a pagina de registro do site Nopcommerce
        When preencho o formulario passando um e-mail inválido
        And clico no botão registrar
        Then verifico retorno de mensagem de erro do e-mail

    Scenario: Efetuar validação de erros ao submeter formulário vazio
        Given que acesso a pagina de registro do site Nopcommerce
        When clico no botão registrar
        Then verifico retorno de mensagem de erros