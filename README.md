# DesafioUIQualityMap

Projeto foi feito utilizando a Ide Visual Studio Code onde foi realizada automação UI da base_url https://demo.nopcommerce.com/register com RestAssured

### 🔧 Instalação

Para executar o projeto necessário utilizar instalar

npm install --save-dev cypress-cucumber-preprocessor
npm i -D @shelex/cypress-allure-plugin

## ⚙️ Executando os testes

Para executar os casos de teste utilizando cmd:

npx cypress run
npx cypress open

Para executar allure report executar o comando:
npx cypress run --config video=false --env allure=true
allure generate allure-results
allure open allure-report

### 🔩 Analise da implementação

Para essa implementação foi utilizado o modelo baseado em BDD, juntamente ao desenvolvimento foi gerada evidencias em screenshot e vídeos.

### ⌨️ Casos de teste

        Given que acesso a pagina de registro do site Nopcommerce
        When preencho o formulario somente com dados obrigatorios
        And clico no botão registrar
        Then verifico que o cadastro foi realizado com sucesso

        Given que acesso a pagina de registro do site Nopcommerce
        When passo todos os dados do formulario
        And clico no botão registrar
        Then verifico que o cadastro foi realizado com sucesso    

        Given que acesso a pagina de registro do site Nopcommerce
        When preencho o formulario passando um e-mail inválido
        And clico no botão registrar
        Then verifico retorno de mensagem de erro do e-mail

        Given que acesso a pagina de registro do site Nopcommerce
        When clico no botão registrar
        Then verifico retorno de mensagem de erros

## 🛠️ Construído com

- Cucumber
- Allure
- Cypresss

---
⌨️ com ❤️ por [Nicolle Furlan](https://www.linkedin.com/in/nicollefurlan/) 😊
