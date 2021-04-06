function maFonction() {
    // Box de confirmation
    //var bin = confirm("Press a button");

    // Box d'affichage d'une zone de saisie
    //var str = prompt("Votre nom", "John Wick");
    //alert(str);

    /* Debogguer = afficher le contenu des variables
    // Tracer = Vérifier les blocs du code visité */
    var functionName = "maFonction()";

    /** @author Yannick GARCIA 
     * Commentaire pour la doc */

    var cl = console.log;
    cl(functionName);

    // var récupère le type dynamiquement (number ici)
    // et a une visibilité (scope) globale dans la 
    var x;
    x = 0;

    var x = 2;

    // number
    // string
    // boolean
    // object
    // undefined

    // any (angular seulement)

    cl(typeof x);
    cl(typeof "test");
    cl(typeof true);
    cl(typeof null);

    var u;
    cl(typeof u); // undefined
    var u = 1;
    cl(typeof u); // number
    var z = "99";
    cl(typeof z + u); // string1 (concaténation)
    cl(typeof u + z); // number99 (concaténation)
    cl(u + parseInt(z)); // 100 (addition)

    var a = "Bonjour";
    var b = "tout le monde";
    cl(a + " " + b); // Bonjour tout le monde

    cl(parseInt(a)); // NaN Not a Number

    cl(x/0); // Infinity

    var i = 2;
    var j = i++; // j = i ; i = i + 1 ; // Post incrémentation
    cl(j); // 2
    j = ++i; // i = i + 1 ; j = i ;
    cl(j); // 4

    // i+=2; incrémente de 2

    var str = " 2 +3  * 5";
    cl(eval(str)); // 17

    // Méthode pour string
    // lenght()
    // toUppercase()
    // toLowerCase()
    // trim()
    // substr()
    // indexOf()

    var strEx = " Bonjour";
    cl(strEx.length); // 8
    cl(strEx.toLowerCase()); //  bonjour
    cl(strEx.toUpperCase()); //  BONJOUR
    cl(strEx.trim()); // Bonjour
    cl(strEx.substr(3, strEx.length)); // njour
    cl(strEx.substring(-3)); // our
    cl(strEx.indexOf("ou")); // 5 on commence à zéro

    cl(strEx[3]); // n
}

maFonction();