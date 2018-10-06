const Gen = require('verify-it').Gen
const Greeter = require('../src/Greeter')

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

describe('Greeter', () => {
  describe('basic functions', () => {
    verify.it('trims the input', Gen.word, (name) => {
      const date = new Date('December 17, 1995 15:24:00')
      const greeter = new Greeter(date) 
      const badName = '   ' + name + '    '
      greeter.greet(badName).should.eql('Hello '+ capitalize(name))
    })

    verify.it('returns Hello <name> when the time is 12:00-18:00', Gen.word, (name) => {
      const date = new Date('December 17, 1995 15:24:00')
      const greeter = new Greeter(date) 
      greeter.greet(name).should.eql('Hello '+ capitalize(name))
    })

    verify.it('returns Good morning <name> when the time is 06:00-12:00', Gen.word, (name) => {
      const date = new Date('December 17, 1995 07:24:00')
      const greeter = new Greeter(date)

      greeter.greet(name).should.eql('Good morning '+ capitalize(name))
    })

    verify.it('returns Good evening <name> when the time is 18:00-22:00', Gen.word, (name) => {
      const date = new Date('December 17, 1995 20:24:00')
      const greeter = new Greeter(date)

      greeter.greet(name).should.eql('Good evening '+ capitalize(name))
    })

    verify.it('returns Good night <name> when the time is 22:00-06:00', Gen.word, (name) => {
      const date = new Date('December 17, 1995 00:24:00')
      const greeter = new Greeter(date)

      greeter.greet(name).should.eql('Good night '+ capitalize(name))
    })
  })
})
