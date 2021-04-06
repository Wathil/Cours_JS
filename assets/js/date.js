
function alertDate() {
    let cl = console.log;
    alert((new Date()).toLocaleString());
}

 // Exercice 1 :

    // Écrivez un programme JavaScript pour afficher le jour et l'heure actuels.
    // Indication :
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
    
    var today = new Date();
    var day = today.getDay();
    // var month = today.getMonth() + 1;
    // console.log(month);
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    //var prepand = (hour >= 12) ? "PM" : "AM";
    var prepand;
    if (hour >= 12) {
        prepand = "PM";
    } else {
        prepand = "AM";
    }
    // "3" == 3 // true
    // "3" === 3 // false
    // 1 == true // true
    // 1 === true // false
    // "1" == true // true
    // "1" === true // false
    console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + " h " + minute
        + " m " + second + " s " + prepand);
    
        // switch (new Date().getDay()) {
        //     case 0:
        //         console.log("dimanche");
        //         break;
        //     case 1:
        //         console.log("lundi");
        //         break;
        //     case 2:
        //         console.log("mardi");
        //         break;
        //     case 3:
        //         console.log("mercredi");
        //         break;
        //     case 4:
        //         console.log("jeudi");
        //         break;
        //     case 5:
        //         console.log("vendredi");
        //         break;
        //     case 6:
        //         console.log("samedi");
        //         break;
        // }