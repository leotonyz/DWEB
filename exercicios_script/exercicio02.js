var a, b, c, d, e, f
f=2

a=prompt("Caso deseje realizar a conversão de Dolar para Real, digite o valor 1. Caso contrário, digite 2 ")
if(a<f){
    b=prompt("Digite o valor que desejas converter: ")
    c=parseFloat(b)*5.45
    alert("O valor convertido é: "+c)
}
else if(a=f){
d=prompt("Digite o valor que desejas converter: ")
e=parseFloat(d)/5.45
alert("O valor convertido é: "+e)}
