var idadeMenor = 0;
var idadeMaior = 0;

function addIdade(){
    var idade = parseInt(document.getElementById('Idade').value);
    if(idade < 18){
        idadeMenor++;
    } else {
        idadeMaior++;
    }

    document.querySelector("#result").innerHTML = "Menores: "+idadeMenor+" | Maiores: "+idadeMaior;
}