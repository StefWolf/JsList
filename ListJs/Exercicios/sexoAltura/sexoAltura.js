var cont = 0;
var F = 0; //feminino
var M = 0; //masculino
var S = [];
var altura = [];

function processarPessoas(){
    var sex = toString(document.getElementById('sexo').value);
    cont++;
    if(sex = "feminino"){
        F++;
        S.push('F');
    } else if(sex = "masculino"){
        M++;
        S.push('M');
    }

    var tail = parseFloat(document.getElementById('altura').value);
    altura.push(tail);

    cont >=5 ? processDados() : document.querySelector("result").innerHTML = "Continue add...";
}

function processDados(){
    var maior = 0;
    var contador = 0;
    var id;

    altura.map((tail) => {
      if(maior < tail){
        maior = tail;
        id = contador;
      }
      contador++;
    });

    document.querySelector("#result").innerHTML = "Masculinos: "+M+" | Femininos: "+F+" <br /> Maior altura: "+maior+" | Sexo: "+S[id];
}