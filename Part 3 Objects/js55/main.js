/*



*/
"use strict";

class User {
  constructor(name) {
    this._name = name; // Условно приватное свойство (начинается с подчеркивания)
  }

  // Геттер для получения имени
  get name() {
    return this._name;
  }

  // Сеттер для установки имени с валидацией
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Имя не может быть пустым");
    }
  }
}

const user = new User("Alice");
console.log(user.name); // Вызов геттера -> 'Alice'

user.name = "Bob"; // Вызов сеттера
console.log(user.name); // 'Bob'

user.name = ""; // Вызов сеттера -> 'Имя не может быть пустым'



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

const person = new Person('Alice', 25);
person.sayHello(); // Привет, меня зовут Alice и мне 25 лет.