function Enviar(){
let nomeUsuario = document.getElementById('Nome').value
let emailUsuario = document.getElementById('Email').value
let senhaUsuario = document.getElementById('Senha').value
let generoUsuario = document.querySelector("input[name='Genero']:checked").value

alert('Seu nome é: ' + nomeUsuario + '\n' 
    + 'Seu email é:' + emailUsuario + '\n'
    + 'Sua senha foi registrada:' + senhaUsuario + '\n'
    + 'Seu genero é:' + generoUsuario + '\n')

    window.location.href='style.html'

}