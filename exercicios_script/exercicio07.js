var idade=[], sexo=[], cont=0.0, f=0.0, m=0.0, maior=0.0, menor=0.0

while(cont<5){
    idade[cont]=prompt(cont+ " - Digite a idade: ")
    cont++
}
cont=0.0
while(cont<5){
    sexo[cont]=prompt(cont+ " - Digite o sexo ( F para feminino, M para masculino): ")
    cont++
}
cont=0.0
while (cont<5) {
    if (sexo[cont]=='F') {
        f++
    }
    else if (sexo[cont]=='M') {
        m++
    }
}
document.write("Pessoas por sexo\nFeminino: "+f+"\nMaculino: "+m)
cont=0.0
while (cont<5) {
    if (idade[cont]>=18){
        maior++
    }
    else if (idade[cont]<18) {
        menor++
    }
}
document.write("Pessoas por idade\nMaior de idade: "+maior+"\nMenor de idade: "+menor)
cont=0.0