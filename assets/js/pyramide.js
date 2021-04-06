function maFonction() {
    let cl = console.log;
    for (var i = 0; i < 5 ; i++) {
        var str = "";
        for (var j = 0 ; j <= i ; j++) {
            str = str + " * "
        }
        cl(str);
    }
}

maFonction();