/// <reference types = "cypress"/>

describe('Criando um cenario de teste para o site do inatel', () => {
  it.skip('caso de teste: Acessando o site', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('h1.colorfff').should('contains.text', 'Tecnologia é uma jornada.')
  })

  it.skip('caso de teste: Acessando o portal do aluno', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('h1.colorfff').should('contains.text', 'Tecnologia é uma jornada.')
    cy.get('#dropbtn > .fa').click()
    cy.get('.ma-menu > :nth-child(1) > :nth-child(6) > a').click()
    cy.get('[href="https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico"]').click()
  })

  it('Caso de teste (Falha): Acessando o portal do aluno com um usuario inexistente', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('h1.colorfff').should('contain.text', 'Tecnologia é uma jornada.')
    cy.get('#dropbtn > .fa').click()
    cy.get('.ma-menu > :nth-child(1) > :nth-child(6) > a').click()
    cy.get('[href="https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico"]').click()

  })
  it('Caso de teste (Falha): Acessando o portal do aluno com um usuario inexistente', () => {
    cy.visit('https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico')
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_dropSubCurso').select(4)
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_tbMatricula').type('3000')
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_Password').type('30000')
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_LoginButton').click()
    cy.get('#ctl00_Corpo_lblErro').should('have.text', 'Aluno não encontrado no curso selecionado !!!')
  })

  it.skip('caso de teste: Clicando no campo "Conheça o Inatel"', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('h1.colorfff').should('contains.text', 'Tecnologia é uma jornada.')
    cy.get('#contactar').click()
    cy.get('h1').should('have.text', 'Quem Somos')
  })

  it.skip('caso de teste: Acessando a incriçao para o vestibular atravez do campo "Conheça o Inatel"', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('h1.colorfff').should('contains.text', 'Tecnologia é uma jornada.')
    cy.get('#contactar').click()
    cy.get('h1').should('have.text', 'Quem Somos')
    cy.get(':nth-child(4) > .btn').click()
    cy.visit('https://inatel.br/vestibular/')
  })

})