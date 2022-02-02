function somar(){
    var n1,n2,resultado

    n1= parseFloat(document.getElementsById("n1").value)
    n2= parseFloat(document.getElementById("n2").value)
    resultado=n1+n2

    document.getElementsById("resultado").innerHTML = `O resultado da soma é  ${res}`
}