function quadrado(){
    var n = [];

    n.push((document.getElementById('n1').value)*(document.getElementById('n1').value));
    n.push((document.getElementById('n2').value)*(document.getElementById('n2').value));
    n.push((document.getElementById('n3').value)*(document.getElementById('n3').value));
    n.push((document.getElementById('n4').value)*(document.getElementById('n4').value));
    n.push((document.getElementById('n5').value)*(document.getElementById('n5').value));


    document.querySelector('#result').innerHTML ="Resultado = "+ JSON.stringify(n);
    //Eu também poderia ter usado o array.join(separador), que retorna em string todos os elementos

}