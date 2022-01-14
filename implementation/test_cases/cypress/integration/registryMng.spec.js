import registryMng from '../pages/RegistryMngPage'
import registryMngFactory from '../factory/RegistryMngFactory'

describe('Operate & Manage Registry', () => {
    it('User should be able to create a register', function () {

        var register = registryMngFactory.register()

        registryMng.go()
        registryMng.newRegister(register)
        registryMng.submit()
        registryMng.alertMessageShouldBe('Registro inserido com sucesso.')
    })

    it('User should be able to edit a register', function () {

        var register = registryMngFactory.register()

        registryMng.go()
        registryMng.newRegister(register)
        registryMng.submit()
        registryMng.alertMessageShouldBe('Registro inserido com sucesso.')
        
        registryMng.editRegister('hometown', 'Porto Alegre')
        registryMng.alertMessageShouldBe('Registro editado!')
    })

    context('User should be able to filter the registry', function () {

        var register1 = registryMngFactory.register()
        var register2 = registryMngFactory.register()

        const filters = [
            {type: 'name', searchValue: register1.name},
            {type: 'email', searchValue: register2.email},
            {type: 'phone', searchValue: register2.phone_number},
            {type: 'hometown', searchValue: register1.hometown},
            {type: 'birthdate', searchValue: register2.birthdate}
        ]

        before(function () {
            
            registryMng.go()

            registryMng.newRegister(register1)
            registryMng.submit()
            registryMng.alertMessageShouldBe('Registro inserido com sucesso.')
            
            registryMng.newRegister(register2)
            registryMng.submit()
            registryMng.alertMessageShouldBe('Registro inserido com sucesso.')
        })

        filters.forEach(function (fltr) {
            it(`Filtering by ${fltr.type}`, function () {
                if (fltr.type == 'phone') {
                    var phone_ = fltr.searchValue.slice(11, 14)

                    registryMng.filterRegister(fltr.type, phone_)
                    registryMng.filteredRegisterShouldBe(phone_)
                } else if (fltr.type == 'birthdate') {
                    var day = fltr.searchValue.slice(8,10)
                    var month = fltr.searchValue.slice(5,7)
                    var year = fltr.searchValue.slice(0,4)

                    registryMng.filterRegister(fltr.type, fltr.searchValue)
                    registryMng.filteredRegisterShouldBe(`${day}/${month}/${year}`)
                } else {
                    registryMng.filterRegister(fltr.type, fltr.searchValue)
                    registryMng.filteredRegisterShouldBe(fltr.searchValue)
                }
            })
        })
    })
    
    it('User should be able to delete a register', function () {
        
        var register = registryMngFactory.register()

        registryMng.go()
        registryMng.newRegister(register)
        registryMng.submit()
        registryMng.alertMessageShouldBe('Registro inserido com sucesso.')
        registryMng.deleteRegister()
        registryMng.warningMessageShouldBe('Registro removido!')
    })
})