var faker = require('faker');
faker.setLocale('en_US')

export default {

    register: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var phoneNumber = faker.phone.phoneNumber('#-###-###-####')
        var date = faker.date.past()
        var city = faker.address.city()

        var year = date.getFullYear()
        var month = date.getMonth()
        month += 1
        var day = date.getDate()

        if (month < 10 && !(day < 10)) {
            var fullDate = `${year}-0${month}-${day}`
        } else if (!(month < 10) && day < 10) {
            var fullDate = `${year}-${month}-0${day}`
        } else if (month < 10 && day < 10) {
            var fullDate = `${year}-0${month}-0${day}`
        } else {
            var fullDate = `${year}-${month}-${day}`
        }
        
        var data = {
            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            phone_number: `${phoneNumber}`,
            birthdate: `${fullDate}`,
            hometown: `${city}`
        }

        return data
    }
}
