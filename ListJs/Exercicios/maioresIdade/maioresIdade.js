let idadeMenor = 0;
let idadeMaior = 0;

function addIdade(){
    const idade = parseInt(document.getElementById('Idade').value);
    if(idade < 18){
        idadeMenor++;
    } else {
        idadeMaior++;
    }

    document.querySelector("#result").innerHTML = "Menores: "+idadeMenor+" | Maiores: "+idadeMaior;
}