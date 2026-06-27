const usuario =

JSON.parse(
    localStorage.getItem(
        "usuarioLogado"
    )
);

if(!usuario){

    location.href =
    "../login/login.html";

}

document
.getElementById("nomeUsuario")
.innerText =
usuario.nome;