var obj = { name: "JS" };
var obj2 = { name: "Java" };
function sayHello() {
  console.log(this.name);
}

function sayHello2() {
  console.log(this.name);
}

sayHello(); // undefined
sayHello.call(obj); // JS
sayHello.apply(obj); // JS
