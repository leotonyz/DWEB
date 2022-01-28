function fatorial(){
    var numero = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resposta');
    var resultado=1;
    
    numero=prompt("Digite o valor do número: ")
  
    for(var count=1 ; count<=numero ; count++)
     resultado *= count;
  
    resposta.innerHTML =resultado;
  }

  alert(resultado)