let Ncont = 0;
let Nmed = 0;

function media(){
    Ncont = Ncont + 1;
    console.warn(Ncont); //Verificar contador atual no console
    let n = parseFloat(document.getElementById('valueN').value);
    let newMed = ((Nmed+n)/Ncont);
    Nmed = newMed;
    alert(newMed);
}

main();