///<reference types="cypress"/>

describe('Criando um cenario de teste para o site Computer Database', ()=>{
  it('Caso de teste: Adicionando um computador, obtendo uma falha e voltando ao menu do site', ()=>{
    GetTime()
  })

  it('Pesquisando por um computador que nao esta registrados no banco de dados do Site', ()=> {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('DELL G15')
    cy.get('#searchsubmit').click()
    cy.get('em').should('have.text', 'Nothing to display')
    cy.get('#main > h1').should('have.text', 'No computer')
  })

  it('Pesquisando por um computador que existe, pesquisando por outro computador e ordenando por companias', ()=>{
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('ASCI Red')
    cy.get('#searchsubmit').click()
    cy.get('tbody > tr > :nth-child(1) > a').click()
    cy.get('a.btn').click()
    cy.get('#searchbox').type('Apple')
    cy.get('#searchsubmit').click()
    cy.get('.col-company').click()
  })
})
function GetTime(){
  let year = new Date().getFullYear().toString()
  let month = new Date().getMonth().toString()
  let day = new Date().getDay().toString()

  let data = year + '-' + month + '-' + day

  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#name').type("Notebook gamer")
  cy.get('#introduced').type(data)
  cy.get('#discontinued').type(data)
  cy.get('#company').select(3)
  cy.get('.primary').click()
  
  cy.get(':nth-child(2) > .input > .help-inline').should('contain.text', 'Failed')
  cy.get(':nth-child(3) > .input > .help-inline').should('contain.text', 'Failed')

  cy.get('a.btn').click()
}
