// Copier un tableau

// Si l'opérateur d'affectation simple avait été utilisé, alors array2 aurait reçu 
// une référence à array1 et les modifications apportées dans un tableau seraient 
// reflétées dans l'autre tableau, ce qui dans la plupart des cas n'est pas souhaitable.
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);

// Insérer les éléments d'un tableau dans un autre
// On peut voir que l'opérateur spread peut être utilisé pour ajouter un tableau 
// après n'importe quel élément du deuxième tableau. 
// En d'autres termes, il n'y a aucune limitation selon laquelle 
// baked_desserts ne peut être ajouté qu'au début ou à la fin du tableau desserts2.

let baked_desserts = ['cake', 'cookie', 'donut'];

let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);

//Ajout de baked_desserts après le flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

// Tableau d'arguments
function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
}

// Au lieu d'avoir à passer chaque élément comme les nombres [0], 
// les nombres [1] et ainsi de suite, les opérateurs d'étalement permettent 
// aux éléments de tableau d'être passés en tant qu'arguments individuels.
let numbers = [1, 2, 3];
multiply(...numbers);

// Autre exemple 
// Passer des éléments du tableau comme arguments à l'objet math
let numbers2 = [1, 2, 300, -1, 0, -100];

// L'objet Math de Javascript ne prend pas un seul tableau comme argument mais 
// avec l'opérateur spread, et le tableau qui represente l'ensemble de nos arguments 
// avec une seule ligne de code.
console.log(Math.min(...numbers2));