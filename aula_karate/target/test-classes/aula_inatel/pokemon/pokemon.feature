Feature: Testando API Pokemon

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno.
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method get
    Then status 200

Scenario: 'Testando retorno com informacoes invalidas.
    Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
    When method get
    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON
    Given url url_base 
    And 'pokemon/pikachu'
    When method get
    Then status 200
    And match reponse.name == "pikachu"
    And match reponse.id == 25

Scenario: Testando retorno pokemon Rede entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base 
    And '/version/1/'
    When method get
    Then status 200
    And def idioma = $.name[5].url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match reponse.name == "es"
    And match reponse.id == 7