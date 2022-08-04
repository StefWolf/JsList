let cont = 0;
let F = 0; //feminino
let M = 0; //masculino
const S = [];
const altura = [];

//ATIVIDADE AINDA EM DESENVOLVIMENTO!
function processarPessoas(){
    let sex = document.getElementById('sexo');
    cont++;
    if(sex.value == 'F'){
        F++;
        S.push('F');
    } else if(sex.value == 'M'){
        M++;
        S.push('M');
    }

    var tail = parseFloat(document.getElementById('altura').value);
    altura.push(tail);

    cont >=5 ? processDados() : document.querySelector("#result").innerHTML = "Continue add...";
}

function processDados(){
    let maior = 0;
    let contador = 0;
    let id;

    altura.map((tail) => {
      if(maior < tail){
        maior = tail;
        id = contador;
      }
      contador++;
      console.warn(S.length);
    });

    document.querySelector("#result").innerHTML = "Masculinos: "+M+" | Femininos: "+F+" <br /> Maior altura: "+maior+" | Sexo: "+S[id];
}