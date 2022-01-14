

class RegistryMngPage {
    
    go() {
        cy.visit('/')
        cy.get('div .logo img').should('be.visible')
    }

    newRegister(register) {
        cy.get('#read > div > div.col-2.my-1 > button').click()
        cy.get('#c-nome').focus().type(register.name, { delay: 500 })
        cy.get('#c-email').type(register.email)
        cy.get('#c-telefone').type(register.phone_number)
        cy.get('#c-data-nasc').type(register.birthdate)
        cy.get('#c-cidade-nasc').type(register.hometown)
    }

    editRegister(field, fieldValue) {
        
        const selectors = {
            name: '#u-nome',
            email: '#u-email',
            phone: '#u-telefone',
            birthdate: '#u-data-nasc',
            hometown: '#u-cidade-nasc'
        }

        cy.get('button.btn.btn-primary.m-1.float-right.update-row').click()
        cy.get(selectors[field]).clear().type(fieldValue)
        cy.get('#u-submit').click()
    }

    filterRegister(filterType, searchValue) {

        const selectors = {
            name: 'nome',
            email: 'email',
            phone: 'telefone',
            hometown: 'cidade',
            birthdate: 'nascimento'
        }

        cy.get('select').select(selectors[filterType])
        cy.get('input[type="search"]').clear().type(searchValue)
    }

    filteredRegisterShouldBe(expectedRegister) {
        cy
          .get('#table-list tr td')
          .filter(`:contains(${expectedRegister})`).should('have.length', 1)
    }

    deleteRegister() {
        cy.get('button.btn.btn-primary.m-1.float-right.remove-row').click()
    }

    submit() {
        cy.get('#c-submit').click()
    }

    alertMessageShouldBe(expectedMessage) {
        cy
          .contains('.alert-success', expectedMessage)
          .should('be.visible')
    }

    warningMessageShouldBe(expectedMessage) {
        cy
          .contains('.alert-warning', expectedMessage)
          .should('be.visible')
    }
}

export default new RegistryMngPage
