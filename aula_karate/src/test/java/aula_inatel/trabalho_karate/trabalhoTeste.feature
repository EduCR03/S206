Feature: Executar testes funcionais nas APIs


Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/pikachu'
    When method get 
    Then status 200

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/Eduardo'
    When method get 
    Then status 404

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/1234'
    When method get 
    Then status 404

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/mewtwo'
    When method get 
    Then status 200

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/venusaur'
    When method get 
    Then status 200

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/regirock'
    When method get 
    Then status 200

Scenario: Verificar o retorno de alguma API
    Given url 'https://pokeapi.glitch.me/v1/pokemon/steelix'
    When method get 
    Then status 200