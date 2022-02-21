function Enviar(){
    var login= document.getElementById("login")
    var senha= document.getElementById("senha")
    var a

    if(login.value=="aluno"){
        
        
        if(senha.value=="1234"){
            alert("Seja bem vindo!")
            a=true
        }
        else {
            if(senha.value==""){
                alert("Digite a senha")
                a=false
            }
            else if(senha.value!="1234"){
                alert("Sua senha está incorreta!")
                a=false
            }
           
        }
    }
    else{
        if(login.value==""){
            alert("Digite o login")
            a=false
        }
        else if(login.value!="aluno"){
            alert("Seu login está incorreto")
            a=false
        }
    }
    return a
}