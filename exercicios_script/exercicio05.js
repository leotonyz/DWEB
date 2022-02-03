var pt, r, termos, num, cont
pt=0.0
r=0.0
termos=0.0
num=0.0
cont=0.0
pt=prompt("Primeiro termo: ")
r=prompt("Razão da PG: ")
termos=prompt("Quantidade de termos: ")
document.write("Progressão geométrica:   ")
document.write(pt+"  ")
while (cont<termos-1) {
    num =parseInt(pt)*parseInt(r)
    pt=num
    //alert(num)
    document.write(num+"  ")
    cont++
}