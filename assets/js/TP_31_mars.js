let cl = console.log;

function mytest() {
    cl("test");
}

mytest();

function exercice1_A_ES5() {
    // Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et renvoie le premier élément.
    var tab = [2, 3, 4, 5];
    const premierElement = new Function("a", "return a[0];");

    cl(premierElement(tab));
}

exercice1_A_ES5();

function exercice1_A_ES6() {
    // Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et renvoie le premier élément.
    var tab = [2, 3, 4, 5];
    const premierElement = (a) => a[0];
    cl(premierElement(tab));
}

exercice1_A_ES6();

function exercice1_B_ES5() {
    // Créez une fonction qui prend l'âge et retourne l'âge en jours.
    let age = 36;
    const ageEnJour = new Function("a", "return Math.abs(a * 365,25);");

    cl(ageEnJour(age));
}

exercice1_B_ES5();

function exercice1_B_ES6() {
    // Créez une fonction qui prend l'âge et retourne l'âge en jours.
    let age = 36;
    const ageEnJour = (a) => Math.abs(a * 365,25);

    cl(ageEnJour(age));
}

exercice1_B_ES6();

function exercice2_ES5() {
    // Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion en secondes.
    let minute = 36;
    const minuteEnSeconde = new Function("a", "return a * 60;");

    cl(minuteEnSeconde(minute));
}

exercice2_ES5();

function exercice2_ES6() {
    // Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion en secondes
    let minute = 36;
    const minuteEnSeconde = (a) => a * 60;

    cl(minuteEnSeconde(minute));
}

exercice2_ES6();

function exercice3_ES5() {
    // Ecrivez un programme pour calculer la somme et produit d'un tableau entier
    let tab = [11, 22, 33, 44, 55, 66, 77, 88, 99];

    const sommeES5 = new Function("a", "return a.reduce(new Function(\"acc\", \"val\", \"return acc + val;\"))");
    const produitES5 = new Function("a", "return a.reduce(new Function(\"acc\", \"val\", \"return acc * val;\"))");

    cl("somme=" + sommeES5(tab));
    cl("produit=" + produitES5(tab));
}

exercice3_ES5();

function exercice3_ES6() {
    // Ecrivez un programme pour calculer la somme et produit d'un tableau entier
    let tab = [11, 22, 33, 44, 55, 66, 77, 88, 99];

    const sommeES5 = a => a.reduce((a, b) => (a + b));
    const produitES5 = a => a.reduce((a, b) => (a * b));

    cl("somme=" + sommeES5(tab));
    cl("produit=" + produitES5(tab));
}

exercice3_ES6();

function exercice4() {
    var nombre = 855652058110080;
    document.write("nombre=" + nombre);
    document.writeln();
    var text = "exemple"
    document.write("un autre " + exemple);
}

function exercice5() {
    let tab = [11, 8, 13, 10, 16, 7, 12, 18, 14, 9];

    tab.includes

    //const display = (a) => a.forEach(element => cl(element));
    const display = (a) => {
        var sb = "";
        a.forEach(element => sb = sb + element + " ");
        cl(sb);
    };
    display(tab);

    const combienPlusDeDix = (a) => a.filter(element => element >= 10)
        .length;
    
    cl("Nombre de notes >= 10 : " + combienPlusDeDix(tab));

    const moyenneNote = (a) => a.reduce( ( x, y ) => x + y ) / a.length;
    cl("Moyenne des notes : " + moyenneNote(tab));

    const maxNote = (a) => Math.max.apply(Math, a);
    cl("Note maximale : " + maxNote(tab));

    const noteExiste = (note, a) => (a.indexOf(note) != -1);
    cl("Est-ce que la note 15 existe? " + noteExiste(15, tab)); // false
    cl("Est-ce que la note 18 existe? " + noteExiste(18, tab)); // true
}

exercice5();

/*
TP JAVASCRIPT : ALGORITHMIE
Sujet : Array, Fonctions, ...

1‐ A Créez une fonction qui prend un tableau en parametre contenant uniquement des
nombres et renvoie le premier élément.

1- B Créez une fonction qui prend l'âge et retourne l'âge en jours.

2 ‐Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion en
secondes.

3‐ Reprenez l'exercice "calculer la somme et le produit ...", appliquez la methode reduce()
soit avec une fonction anomyme, ou une fonction fléchée (reduce fonction anonyme puis fonction fléché)

4‐ Tester les instructions document.write et document.writeln en affichant au minimum un
nombre, une phrase, le contenu d'une variable ...
Que constatez‐vous sur la page HTML ?
Doc : https://developer.mozilla.org/fr/docs/Web/API/Document/writeln

5‐ Définir en JavaScript un tableau contenant des notes d'étudiants comprises entre 0 et 20.
Implémenter en JavaScript les fonctions qui permettent d'afficher un tel tableau, de savoir
combien d'étudiants ont eu 10 plus, de calculer la moyenne des notes, de connaître la note
maximale, de rechercher une note particulière
*/