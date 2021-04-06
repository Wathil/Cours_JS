let cl = console.log;
cl("test");

// Math
// Date

cl(Math.round(2.6)); // 3
cl(Math.pow(2, 3)); // 8

// typeof
// new
// this
// in 

var tab = [2, 3, 5];
if (2 in tab) cl("ok");

var persoObjet = { nom: "Wick", prenom: "John" };
if ("nom" in persoObjet) cl("ok2");

var perso2Objet = { nom: "Wick", prenom: "John" };
if (persoObjet == perso2Objet) cl("ok3"); // non
if (persoObjet === perso2Objet) cl("ok4"); // non

cl(typeof 1);
cl(typeof "test");
cl(typeof null);

var t = typeof null;
cl(typeof t); // string
cl(t instanceof String); // false
cl(t instanceof Object); // false
//cl(t instanceof string); // ReferenceError: string is not defined

const PI = 14.14159;
//PI = 5; // TypeError: Assignment to constant variable.

const obj = { nom: "Wick", prenom: "John" }; // SyntaxError: Invalid shorthand property initializer
obj.nom = "test"; // OK
cl(obj);

// PascalCase {nom de classe}
// camelCase {méthode, fonction, variable}

function produit(a, b) {
    if (isNaN(a) || isNaN(b)) throw "Pas des nombres.";
    return a * b;
}

try {
    cl(produit(2, "a")); // NaN
}
catch (e) {
    cl("error " + e);
}

const produit3 = (a, b) => {
    (isNaN(a) || isNaN(b)) ? (() => { throw "Les paramètres ne sont pas des nombres !"; })() : a * b;
};
try {
    cl(produit3(3, "A")); // NaN
}
catch (e) {
    cl("error " + e);
}

const division = (a, b) => {
    if (isNaN(a) && b == 0) throw a + " n'est pas divisible par zéro!";
    if (isNaN(a) || isNaN(b)) throw "Les paramètres ne sont pas des nombres !";
    return (a / b);
};
try {
    cl(division("a", 0));
}
catch (e) {
    cl("error " + e);
}
cl(4 / 0);
cl(isNaN("a"));

class Something {
    #property;

    constructor() {
        this.#property = "test";
    }

    #privateMethod() {
        return 'hello world';
    }

    getPrivateMessage() {
        return this.#property;
    }

    getPrivateMethod() {
        return this.#privateMethod();
    }
}

const instance = new Something();
console.log(instance.property); //=> undefined
console.log(instance.privateMethod); //=> undefined
console.log(instance.getPrivateMessage()); //=> test
cl(instance.getPrivateMethod());