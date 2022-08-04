let cont = 0;
let num = [];

function maiorN(){
    cont++;
    const n = parseInt(document.getElementById('valueN').value);
    num.push(n);

    cont >= 5 ? showLarger() : 
        document.querySelector("#contador").innerHTML = "Quantidades adicionadas: "+ cont;
}

function showLarger(){
    let result = 0;
    num.map((n) => {
        if(result < n){
            result = n;
        } 
    })

    document.querySelector("#contador").innerHTML = "<strong>Processo finalizado!</strong>";
    document.querySelector("#result").innerHTML ="Maior número é: "+ result;

}


