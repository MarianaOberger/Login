function mostarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn_senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function mostarSenhaCadastro(){
    var inputPass = document.getElementById('senha_cadastro')
    var btnShowPass = document.getElementById('btn_senha_cadastro')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}