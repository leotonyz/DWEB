var v=[4, 8, 7, 6]

alert(v)
alert(v[1])
v[2]=3
alert(v)

var soma = v[0]+v[3]
alert ("A soma do elemento 0 com o elemento 3 do vetor é: "+soma)

var lista = ["Juquinha", 1910, "Rua A", "Irati", "PR", 80.5]


alert(lista)
alert(list[0])

for(var i=0;i<lista.lenght;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}

lista.push("84500-000") //push insera um elemento na ulimta posição da lista
lista.push("teste")
lista.pop() //remover o último elemento da lista
alert(lista)

alert(lista)

lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha") //adiciona na primeira posição da lista
alert(lista)

var posicao

posicao = lista.indexOf("Irati") //retorna o indice do elemento procurado
alert(posicao)
