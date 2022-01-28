var maior, menor, i, a

for(i=0;i<5;i++){
    a=prompt("Insira um valor: ")
    if (i==0){
        maior=a
        menor=a
    }
    else{
        if(a<menor){
            menor=a
        }
        if(a>maior){
            maior=a
        }
    }
}

alert("O maior valor inserido é "+maior+" o menor valor inserido é: "+menor)