let cl = console.log;
var str = "Bonjour tour le monde";
cl(typeof str);
var pos = str.search("/Tout/i"); // i insensible à la casse
cl(pos);

// remplace la première occurence d'une chaine
str = new RegExp(/AB/i); // "/AB/i" ne marche pas mais '/AB/i' marche
cl(typeof str);
var result = str.test("abababababababbaababbabababababbabbabbabaa");
cl(result);

// remplace toutes les occurences d'une chaine
var chaine = "abababababababbaababbabababababbabbabbabaa";
var txt = chaine.replace(new RegExp(/ba/g), "c");
cl(txt);

var str = new RegExp(/AA/i);
var resultat = str.exec(chaine);
cl("chaine trouvée:" + resultat[0]);
cl("chaines trouvées:" + resultat);
cl("indice de la première occurence:" + resultat.index);
cl("texte complet:" + resultat.input);

var str = new RegExp(/AA/gi);
var resultat = chaine.match(str);
cl(result);

// a? : 0 ou 1
var regex = /ba?c/i;
cl(str.test("bac"));
cl(str.test("baac"));

var p = "2345";
var str = /^([0-9]){4}$/;
if (p.match(str)) cl("OK");

var p = "Jean_Baton06";
var str = /^([0-9a-zA-Z_]){6,20}$/; // ok

if (p.match(str)) cl("OK");

var number1 = "2", number2 = "3", resultat;
resultat = number1 + number2;
cl(resultat);

function test() {
    if (true) { var a = "hello"; }
    cl(a);
}