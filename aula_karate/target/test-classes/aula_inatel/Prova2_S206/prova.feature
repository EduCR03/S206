Feature: Executar testes funcionais nas APIs

Background: "Executado antes dos testes de GET"
    * def url_base_get = "https://pokeapi.co/api/v2/"
    * def url_base_post = "https://gorest.co.in/public/"

Scenario: Verificar o retorno da API de pokemon
    Given url url_base_get
    And path 'pokemon/pikachu'
    When method get
    Then status 200

Scenario: Verificar se o JSON retornado do pokemon pikachu esta certo
    Given url url_base_get
    And path 'pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"

Scenario: Verificar se vai dar erro caso busque um pokemon que nao exista
    Given url url_base_get
    And path 'pokemon/Eduardo'
    When method get
    Then status 404

Scenario: Verificar utilizando as listas se o JSON retornado esta correto
    Given url url_base_get
    And path 'pokemon/onix'
    When method get
    Then status 200
    And match $.abilities.[0].ability.name == "rock-head"

Scenario: Verificar se eu consigo realizar um POST no site, porem nao consigo colocar dois emails iguais, ou seja realizar a troca do email quando for fazer o teste
    Given url url_base_post
    And path 'v2/users?access-token=59f9c7e6f8f8f11ae48987693f3c9d4ece169a3ee40ed7649001089ba1e344b1'
    And request {name: "Jose", email: "Duduzim123456@hotmail.com", gender: "male", status:"inactive"}
    When method post
    Then status 201
    And match $.name == 'Jose'
    And match $.gender == 'male'