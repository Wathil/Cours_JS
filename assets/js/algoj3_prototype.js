let cl = console.log;

// Objet

// Qu'est ce qu'un objet ?

// c 'est un ensemble de 

// - attributs (variable, champs) : clé + valeur
// - méthodes : fonctions

// un objet est caractérisé par des accolades
var obj = {
    nom: "Wick",
    prenom: "John"
};

// Recupere l'attribut nom de l'objet obj et l'affcihe en console
console.log(obj.nom);
// ou
console.log(obj["prenom"]);

// Un objet est iterable avec for...in
for(var elt in obj){
    console.log(elt + " : " + obj[elt]);
}

// on cree un nouvel objet ou on cree une nouvelle instance obj de type Objet
var obj = new Object();
obj.nom = "wick";
obj.prenom = "John";

// copie un objet
var obj2 = obj;

// copie un objet avec ...(spread operator) permettant de faire des copies d'objets, variables
// Ici, la variable d'origine et sa copie sont totalement independantes
// var obj2 = {...obj};
// ou
var obj2 = Object.assign({}, obj);

obj2.nom = "Doe";

console.log(obj.nom); // Affiche Wick

console.log(obj2.nom); // Affiche Doe

// Pour transformer un objet en chaine de caracteres
var str = JSON.stringify(obj);
console.log(str);

// Pour transformer une chaine de caractere en objet
var p = JSON.parse(str);
console.log(p.nom + " " + p.prenom);

// Ajout d'une méthode dans lobjet obj
var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function (){
        console.log("Bonjour " + this.nom);
    }
};

// Appel de la methode direbonjour a partir de obj de type Object
obj.direBonjour();

// Constructeurs

// Moule pour creer des objets
// Tous les objets sont de type Object
// Et si on veut creer un modele d'objet, on peut utiliser les constructeurs

// var Personne = function(nom, prenom, age){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.afficherNomComplet = function(){
//         console.log(this.nom + " " + this.prenom);
//     }
// }

// OU

class Personne{
    nom;
    prenom;
    age;

    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    // Getter : Accesseur => recupere les valeur
    getNom(){
        return this.nom;
    }

    // Setter : mutateur : modifier les valeurs de l'attibut par la valeur passe en parametre
    setNom(nom){
        this.nom = nom;
    }

    afficherNomComplet(){
        return this.nom + " " + this.prenom;
    }

}

// Cree une nouvelle instance de lobjet Personne à partir de constructeur
perso = new Personne("Wick", "John", 35);
// Appel de la methode setNom(nom) pour modifier la valeur de nom dans l'instance perso
perso.setNom("Doe");
// Affiche la nom de l'instance perso par la methode getNom()
console.log(perso.getNom());

perso2 = new Personne(35, "Wick", "John");
console.log(perso2.nom);

// Erreur, Impossible de lui ajouter un nouvel attribut de cette facon
// Personne.rue = 0;

// Utiliser le prototype
Personne.prototype.rue = 0;

// Mise en place du Getter / Accesseur
Personne.prototype.getRue = function () {
    return this.rue;
}

// Mise en place du Setter / Mutateur
Personne.prototype.setRue = function (rue) {
    this.rue = rue;
}

perso.setRue("RUE1");
console.log(perso.getRue());

var obj = {
    nom: "Garcia",
    prenom: "Yannick",

    direBonjour: function () {
        cl("Bonjour " + this.nom);
    }
};

cl(obj.nom);
cl(obj["prenom"]);

for (var element in obj) {
    cl(element + " :" + obj[element]);
}

var obj2 = new Object();
obj2.nom = "wick";
obj2.prenom = "john";

for (var element in obj2) {
    cl(element + " :" + obj2[element]);
}

var obj3 = { ...obj }; // copie intégrale spead operator
cl(obj3.nom);
obj3.nom = "tock";
cl(obj.nom);
cl(obj3.nom);

var obj4 = obj2; // référence
obj4.nom = "test";
cl(obj2.nom);

var obj5 = Object.assign({}, obj);
cl(obj5.nom);
obj5.nom = "autre";
cl(obj5.nom);
cl(obj.nom);

var str = JSON.stringify(obj);
cl(str);

var p = JSON.parse(str);
cl(p.nom);
p.nom = "test";
cl(p.nom);
cl(obj.nom);

obj.direBonjour();
//obj2.direBonjour(); ERROR
obj3.direBonjour();
//obj4.direBonjour(); ERROR
//p.direBonjour();

var Personne1 = function (nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.afficherNom = function() {
        return this.nom + " " + this.prenom;
    };
}

class Personne2 {
    nom;
    prenom;
    age;

    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getNom() { // inutile
        return this.nom;
    }

    setNom(nom) { // inutile
        this.nom = nom;
    }

    afficherNom() {
        return this.nom + " " + this.prenom;
    }
}

var p1 = new Personne1("a", "b", 2);
cl(p1.afficherNom());
var p1b = new Personne1(2, "b", "a");
cl(p1b.afficherNom());

var p2 = new Personne2("popoi", "bhsoi", 8);
cl(p2.afficherNom());
var p2b = new Personne2(8, "bhsoi", "popoi");
cl(p2b.afficherNom());