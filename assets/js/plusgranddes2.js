function maFonction() {
    var a = prompt("premier nombre");
    var b = prompt("second nombre");
    if (a > b) {
        alert(a + " est plus grand que " + b + ".");
    } else if (b > a) {
        alert(b + " est plus grand que " + a + ".");
    }
    else alert("Les 2 nombres sont égaux.")
}