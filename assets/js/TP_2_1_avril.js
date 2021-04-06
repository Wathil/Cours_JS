let cl = console.log;

/* TP JAVASCRIPT

Sujet : Objet & Contructeurs

Exercice 1 : 
Tirage au sort des noms
Ecrire un script composé des fonctions suivante :
Une fonction qui remplit un tableau par des noms saisis par l'utilisateur via une boite de
dialogue , cette fonction sera appelée au  clic sur un bouton nommé "Ajouter_nom"
Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur
clique sur le  bouton "tirage au sort" .
Indication :
Utiliser la fonction Math.random() qui fournit un nombre réel entre 0 et 0,999
et la fonction push() pour insérer un élément dans un tableau. */

let tableau_de_nom = [];

function ajouter_nom() {
    let nouveau_nom = prompt("nouveau nom ?");
    tableau_de_nom.push(nouveau_nom);
    cl("nouveau nom ajouté:" + tableau_de_nom[tableau_de_nom.length - 1]);
}

function tirage_au_sort() {
    let indice = Math.trunc(Math.random() * tableau_de_nom.length);
    cl("indice :" + indice);
    alert("le gagnant est " + tableau_de_nom[indice]);
}

/*
Exercice 2 :
Écrivez un programme JavaScript pour supprimer la propriété rollno de l'objet suivant.
Imprimez également l'objet avant ou après la suppression de la propriété.
Indication :
var student =  {
  name : "David Rayy",
  class : "VI",
  rollno : 12  };
Indications :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%
C3%A9rateur_delete */

function exercice2() {
    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    };
    cl(Object.keys(student));
    delete student.rollno;
    cl(Object.keys(student));
}
exercice2();

/*
Exercice 3 :
Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des
propriétés pour le titre (une chaîne), les portions (un nombre) et les ingrédients (un tableau
de chaînes).
1Sur des lignes distinctes (une instruction console.log pour chacune), enregistrez les
informations sur la recette afin qu'elles ressemblent à:
Indication :
var recipe = {
    'nom': 'Mole',
    'serviess': 2,
    'ingredients': ['pois‐chiche', 'soleil', 'poivre']
}; */

function exercice3() {
    let Recette = function (nom, service, ingredients) {
        this.nom = nom;
        this.service = service;
        this.ingredients = ingredients;
    }

    var r1 = new Recette("Mole", 2, ["pois‐chiche", "soleil", "poivre"]);

    Object.keys(r1).forEach((element) => cl(element + ":" + r1[element]));
}
exercice3();

/*
Exercice 4 :
Écrivez un programme JavaScript pour afficher l'état de lecture (c'est‐à‐dire afficher le nom
du livre, le nom de l'auteur et l'état de lecture) des livres suivants :
Indication :
    var library = [{
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },{
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
        },{
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
        }];*/

function exercice4() {
    var library = [{
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },{
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
        },{
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
        }];
    library.forEach((livre) => Object.keys(livre).forEach((element) => cl(element + ":" + livre[element])));
}
exercice4();

/*
Exercice 5 :
Partie 1
Créez un constructeur qui permet de créer un guerrier. Ce constructeur initialisera un objet
avec les caractéristiques suivantes :
‐ Un nom (string)
‐ Une valeur d'attaque (number)
‐ Une valeur de défense (number)
‐ Une valeur de santé (number)
Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du
combattant.
Par exemple si guerrier1 a 10 d'attaque et guerrier 30 de santé, quand guerrier1 attaque
guerrier2 sa santé passe à 20. En termes de code vous devriez avoir quelque chose comme :
guerrier1.attack(guerrier2); */

function exercice5A() {
    class Warrior {
        nom;
        attaque;
        defense;
        sante;
        constructor(nom, attaque, defense, sante) {
            this.nom = nom;
            this.attaque = attaque;
            this.defense = defense;
            this.sante = sante;
        }
        attack(cible) {
            cible.sante -= this.attaque;
        }
    };
    var w1 = new Warrior("Yannick", 100, 100, 100);
    var w2 = new Warrior("Macron", 10, 10, 10);
    w1.attack(w2);
    cl("santé de " + w2.nom + " est:" + w2.sante);
}
exercice5A();

/*
Partie 2
Créer un autre type de personnage : le magicien.
Vous allez donc créer un constructeur pour notre magicien qui contiendra les mêmes
proriétés et méthodes que notre guerrier. Le magicien disposera en plus :
D'une propriété mana (number)
D'une méthode de soin qui consomme 10 de mana mais rajoute 10 de vie au magicien
(attention si le mana est inférieur à 10, elle ne doit pas pouvoir être lancée)
Améliorez également un peu vos méthodes de soin et de combat:
Faites en sorte que la méthode de combat, quand elle est lancée, affiche le nom du
personnage qui attaque et de celui qui est attaqué, puis à la fin affiche la vie restante du
personnage qui a été attaqué
La méthode de soin, si le personnage a assez de mana doit afficher que le personnage essaie
de se soigner, puis afficher son nouveau niveau de vie. Si le personnage n'a pas assez de
mana, elle affiche simplement un message d'erreur.
Pour tester ce nouveau script, créez un magicien, dites à vos deux guerriers de l'attaquer
3chacun leur tour. Dites ensuite au magicien de se soigner, puis d'attaquer un des deux
guerrier. */

function exercice5B() {
    class Warrior {
        nom;
        attaque;
        defense;
        sante;
        constructor(nom, attaque, defense, sante) {
            this.nom = nom;
            this.attaque = attaque;
            this.defense = defense;
            this.sante = sante;
        }
        attack(cible) {
            cible.sante -= this.attaque;
            cl(cible.nom + " est attaqué par " + this.nom + ".");
            cl("Il reste " + cible.sante + " Pts à " + cible.nom + ".");
        }
    };
    class Magicien extends Warrior {
        mana;
        constructor(nom, attaque, defense, sante, mana) {
            super(nom, attaque, defense, sante);
            this.mana = mana;
        }
        soin() {
            if (this.mana >= 10) {
                this.mana -= 10;
                this.sante += 10;
                cl(this.nom + " a augmenté sa santé à " + this.sante + ".");
            }
            else {
                cl("Syntax Error")
            }
        }
    };
    var w1 = new Warrior("Yannick", 20, 20, 200);
    var w2 = new Warrior("Macron", 10, 10, 100);
    var m1 = new Magicien("Magicien", 50, 50, 50, 150);
    w1.attack(m1);
    w2.attack(m1);
    m1.soin();
    m1.attack(w2);
}
exercice5B();