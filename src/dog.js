// @flow

class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }
  bark() {
    return `Wah, I am ${this.name}`
  },
  yarn() {
    return `Wah, I am Sleepy`
  }
}

module.exports = Dog
