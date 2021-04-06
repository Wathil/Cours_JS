// Exercice 1 

var tab = new Array();

// function add_nom() {
//     tab.push(prompt("Saisir un nom"));
// }

const add_nom = () => {
    tab.push(prompt("Saisir un nom"));
};

// function tirage() {
//     var rand = Math.floor(Math.random() * tab.length);
//     tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
//     alert("veuillez rentrer des valeurs");
// }

const tirage = () => {
    var rand = Math.floor(Math.random() * tab.length);
    tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
        alert("veuillez rentrer des valeurs");
};

// Exercice 2

var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

// Exercice 3

var recipe = {
    name: 'Socca',
    servings: 2,
    ingredients: ['pois-chiche', 'soleil', 'poivre']
};

console.log(recipe.name);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');

// for (var i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }

recipe.ingredients.forEach(a => console.log(a));

// Exercice 4

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

// for (var i = 0; i < library.length; i++) {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else {
//         console.log("You still need to read " + book);
//     }
// }

library.forEach(a => {
    var book = "'" + a.title + "'" + ' by ' + a.author + ".";
    a.readingStatus ? console.log("Already read " + book) :
        console.log("You still need to read " + book);
});

function afficherLibrairie(lib) {
    lib.forEach(a => {
        var book = "'" + a.title + "'" + ' by ' + a.author + ".";
        a.readingStatus ? console.log("Already read " + book) :
            console.log("You still need to read " + book);
    });
}

afficherLibrairie(library);