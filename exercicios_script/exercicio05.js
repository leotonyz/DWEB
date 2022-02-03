var a, b, termos, num, cont
a=0.0
b=0.0
termos=0.0
num=0.0
cont=0.0
a=prompt("Digite o valor do primeiro termo: ")
b=prompt("Digite a razão da PG: ")
termos=prompt("Digite a quantidade de termos: ")
document.write("A progressão geométrica é :   ")
document.write(a+"  ")
while (cont<termos-1) {
    num =parseInt(a)*parseInt(b)
    a=num
    document.write(num+"  ")
    cont++
}