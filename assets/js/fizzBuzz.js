function maFonction() {
    let cl = console.log;
    for (var i = 0; i <= 100 ; i++) {
        if (i == 0) {
            cl(i);
            continue;
        }

        var t = false;
        var c = false;

        if (i%3 == 0) {
            t = true;
        }
        if (i%5 == 0) {
            c = true;
        }
        
        if (!c && !t) {
            cl(i)
        }
        else if (c && t) {
            cl("FizzBuzz");
        }
        else if (c) {
            cl("Fizz");
        }
        else if (t) {
            cl("Buzz");
        }
        else {
            cl("erreur:" + i)
        }
    }
}

maFonction();