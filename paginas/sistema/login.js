document
.getElementById("btnEntrar")
.addEventListener("click",()=>{

    const login =

    document
    .getElementById("login")
    .value
    .trim();

    const senha =

    document
    .getElementById("senha")
    .value
    .trim();

    if(login === ""){

        alert(
            "Informe o usuário."
        );

        return;
    }

    if(senha === ""){

        alert(
            "Informe a senha."
        );

        return;
    }

    const usuarioValido =
    "gruposenai";

    const senhaValida =
    "gruposenai123palhoca";

    if(
        login !== usuarioValido
        ||
        senha !== senhaValida
    ){

        alert(
            "Usuário ou senha inválidos."
        );

        return;
    }

    localStorage.setItem(
        "adminLogado",
        "true"
    );

    location.href =
    "../sistema/dashboard/dashboard.html";

});