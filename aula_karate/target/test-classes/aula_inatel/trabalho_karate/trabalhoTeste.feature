Feature: Executar testes funcionais nas APIs

Background: "Executado antes de cada teste"
    * def url_base = "https://pokeapi.glitch.me/v1/"

Scenario: Verificar o retorno da API do pokemon (Diferente da testada em aula)
    Given url url_base 
    And path 'pokemon/pikachu'
    When method get 
    Then status 200

Scenario: Verificar se existe um pokemon chamado Eduardo
    Given url url_base
    And path 'pokemon/Eduardo'
    When method get 
    Then status 404

Scenario: Verificar se essa url existe dentro do site 
    Given url url_base
    And path '1234'
    When method get 
    Then status 404

Scenario: Verificar o retorno da API pokemon para o pokemon Mewtwo
    Given url url_base
    And path 'pokemon/mewtwo'
    When method get
    Then status 200

Scenario: Verificar o retorno da API de pokemon e se o JSON é o esperado
    Given url url_base
    And path 'pokemon/venusaur'
    When method get
    Then status 200
    And match response.[0].name == "Venusaur"
    And match response.[0].number == "3"

Scenario: Verificar o retorno de alguma API
    Given url url_base
    And path 'pokemon/ponyta'
    When method get 
    Then status 200

Scenario: Verificar o retorno de alguma API
    Given url url_base
    And path 'pokemon/steelix'
    When method get 
    Then status 200
    And match response.[0].types.[1] == "Ground"