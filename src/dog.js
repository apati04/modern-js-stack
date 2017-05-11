// @flow

class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }
  bark() {
    return `Wah, I am ${this.name}`
  }
}

module.exports = Dog
