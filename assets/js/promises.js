let cl = console.log;

function test() {

    function faireQqc() {
        return new Promise((successCallback, failureCallback) => {
            console.log("Je vais faire quelque chose...");
            // réussir une fois sur deux
            if (Math.random() > .5) {
                successCallback("J'ai réussi à la faire!");
            } else {
                failureCallback("J'ai échoué!");
            }
        })
    }

    const promise = faireQqc();

    faireQqc().then(function (result) {
        return faireAutreChose(result);
    })
        .then(function (newResult) {
            return faireUnTroisiemeTruc(newResult);
        })
        .then(function (finalResult) {
            console.log('Résultat final : ' + finalResult);
        })
        .catch(failureCallback);
}
test();

function faireAutreChose() {
    cl("faire Autre Chose");
    return "Z";
}

function faireUnTroisiemeTruc() {
    cl("faire Un Troisieme Truc");
    return "C";
}

function failureCallback() {
    cl("failure Callback");
    return reject;
}