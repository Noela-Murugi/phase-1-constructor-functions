const guadalupe = {
    name: "guadalupe",
    age: 34,
    hometown: "Denver",
  };

  const aki = {
    name: "aki",
    age: 58,
    hometown: "Los Angeles",
  };

  function User(name, age, hometown) {
    return {
      name, // don't forget ES6 power-tools, this is the same as `name: name`
      age,
      hometown,
    };
  }

  const amaru = User("Amaru", 45, "New York City");
  amaru.age;

  typeof amaru;
  amaru.constructor;



  function User(name, email) {
    this.name = name;
    this.email = email;
    this.sayHello = function () {
      console.log(`Hello everybody, my name is ${this.name} whom you've been
  mailing at ${this.email}!`);
    };
  }

  const greyson = new User("Greyson", "greyson@example.com");
  greyson.sayHello();
