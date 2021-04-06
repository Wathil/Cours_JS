let cl = console.log;

function tableau() {
    let cl = console.log;

// push(e) ajoute e à la fin dy tableau.
// pop() retourne le dernier élément du tableau et le supprimer
// shift() supprime le 1er élément du tableau et
// reverse()
// sort() sort
// splice() extraire ajoute ou supprime 1+ éléments
// includes(e) retourne true si e existe dans le tableau 
// indexOf() retoure la position de l'élément passé en paramètre
// fill() permet d'initialiser ou modifier des valeurs d'un tableau ou d'une partie
// unshift() Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

    let monTableau1 = [1, "deux", null, false];
    let monTableau2 = new Array(1, "deux", null, false);

    cl("longueur du tableau 1:" + monTableau1.length);

    for (var e of monTableau1) {
        cl(e);
    }

    monTableau1.push("cinq");

    cl();
    cl("longueur du tableau 1:" + monTableau1.length);

    for (var e of monTableau1) {
        cl(e);
    }

    monTableau2[2] = monTableau1;

    cl();
    cl("longueur du tableau 2:" + monTableau2.length);

    for (var e of monTableau2) {
        cl(e);
    }

    let a = monTableau1.pop();
    cl();
    cl(a);
    cl();
    for (var e of monTableau2) {
        cl(e);
    }

    var tab = monTableau1.splice(2, 3, "Basket", "Pétanque", true, null, 3);

    cl("------------------------tab-----------------------");
    for (var e of tab) {
        cl(e);
    }
    cl();
    cl("-----------------------monTableau2-----------------------");
    for (var e of monTableau2) {
        cl(e);
    }
    cl();
    cl("-----------------------fill monTableau2-----------------------");
    monTableau2.fill(99, 3, 5);
    for (var e of monTableau2) {
        cl(e);
    }
    cl();
    cl("-----------------------fill monTableau2-----------------------");
    monTableau2.push(null, null, null);
    monTableau2.fill(77, 3, 5);
    for (var e of monTableau2) {
        cl(e);
    }

}


function exercice1() {
    // Ecrivez un programme pour calculer la somme et produit d'un tableau entier
    let tab = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    var somme = 0;
    var produit = 1;
    for (var e of tab) {
        somme += e;
        produit *= e;
    }
    cl("somme=" + somme);
    cl("produit=" + produit);
}

//exercice1();

// programmation fonctionnelle ES5 ECMAScript 5 (current 6)
// .forEach()
// .map()
// .filter()
// .reduce()

function programmationFonctionnelle() {
    var tab=[2, 3, 4, 5];
    tab.map(x => x + 3)
        .filter(x => x >= 6)
        .forEach(function(a, b) {
            cl(a - 3);
        });

    cl();
    var somme = 
        //tab.map(x => x + 3)
        //.filter(x => x > 5)
        //.reduce(function(sum, elem) {return sum + elem;})
        // tab.map(x => x)
        // .reduce((a, b) => a + b);

        tab.reduce((a, b) => a + b + 3);
    cl(somme);

    const addition = (a, b) => a + b;
    var res = addition(18, 22);
    cl(res);

    const sumSP = new Function("a", "b", "c", "return a + b - c");
    cl(sumSP(1, 6, 3));

    //const sum3 = 
}

//programmationFonctionnelle();

function somme3() {
    result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

//cl(somme3(1, 2, 3, 4, 5, 6));
//let cl = console.log;

function exercice2() {
    // Créer une fonction qui prend un tableau de number et qui renvoie le premier élément
    var tab = [2, 3, 4, 5];
    const premierElement = (a) => a[0];
    cl(premierElement(tab));
}
exercice2();