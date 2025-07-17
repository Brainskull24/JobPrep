function sayHi() {
  let message = "Hi";
  return function () {
    console.log(message);
  };
}

const greet = sayHi();
greet();
