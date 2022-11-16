Feature: Testando API StarWars

Scenario: Testando retorno people/1/
    Given url "https://swapi.dev/api/people/1/"
    When method get
    Then status 200

Scenario: Scenario: Testando retorno people/1/12345
    Given url "https://swapi.dev/api/people/1/1234"
    When method get
    Then status 401