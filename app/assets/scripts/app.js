const $ = require("jquery");
const Person = require("./modules/Person");

let shaquille = new Person("Reizo Hinds", "Purple");
let sara = new Person("Sara Nommerz", "red");
shaquille.greet();
sara.greet();
