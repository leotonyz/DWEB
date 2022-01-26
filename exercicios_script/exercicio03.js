var a, b, c, d, e,f

a=prompt("Digite o valor da primeira nota: ")
b=prompt("Digite o valor da segunda nota: ")
c=prompt("Digite o valor da terceira nota: ")
d=prompt("Digite o valor da quarta nota: ")
e=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)
f=parseFloat(e)/4
if(f>=9){
    alert("O conceito do aluno é A")

}
if(8.0>f>8.9 ){
    alert("O conceito do aluno é B")
}
if (7<f>7.9){
    alert("O coceito do aluno é C")
}
if(f<7){
    alert("O conceito do aluno é D")
}
