var Ncont = 0;
var Nmed = 0;

function media(){
    Ncont = Ncont + 1;
    console.warn(Ncont); //Verificar contador atual no console
    var n = parseFloat(document.getElementById('valueN').value);
    var newMed = ((Nmed+n)/Ncont);
    Nmed = newMed;
    alert(newMed);
}

main();