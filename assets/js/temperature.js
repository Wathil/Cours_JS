function maFonction() {
    let seuil = 28;
    var b = prompt("température?");
    if (b < seuil) {
        alert(b + " est inférieur au seuil " + seuil + ".");
    } else if (b > seuil) {
        alert(b + " est supérieur au seuil " + seuil + ".");
    }
    else alert(b + " est au seuil.")
}