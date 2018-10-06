class Greeter {
  constructor (date) {
    this.date = date || new Date()
  }

  formatName (name) {
    const trimmedName = name.trim()
    return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1)
  }

  getGreeting () {
    const hour = this.date.getHours()

    return (hour >= 6 && hour <= 12) ? 'Good morning':
      (hour >= 18 && hour <= 22) ? 'Good evening':
      (hour >= 22 || hour <= 6) ? 'Good night':
      'Hello'
  }

  greet (name){
    return `${this.getGreeting()} ${this.formatName(name)}`
  }
}

module.exports = Greeter
