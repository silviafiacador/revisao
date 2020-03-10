document.getElementById('botao').addEventListener('click',function(silvia) {
    //validando o nome
    var nome = document.getElementById("nome").value;
    
    if(nome.length < 3) {
        /*tem erro - preventDefault() vai cancelar a ação de submit - ele previne o acontecimento do evento submit*/
        silvia.preventDefault();
        document.getElementById("nome").style.backgroundColor ="red";
    }
    else{
        document.getElementById("nome").style.backgroundColor="white";
    }
    // fim da validação do nome
    
    //validando o email
    var email=document.getElementById("email").value;
    //o campo email precisa de conter: "@", "." e não pode estar vazio
    if (email.indexOf("@")==-1 || 
        email.indexOf(".")==-1 ||
        email.length==0)
    {
        silvia.preventDefault();
        document.getElementById("email").style.borderColor="red";
    }
    else {
        document.getElementById("email").style.borderColor="green";
    }

    //fim da validação do email




});
