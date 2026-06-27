document
.getElementById("formCadastro")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    const nome =

    document
    .getElementById("nome")
    .value
    .trim();

    const email =

    document
    .getElementById("email")
    .value
    .trim();

    const senha =

    document
    .getElementById("senha")
    .value
    .trim();

    const repetirSenha =

    document
    .getElementById("repetirSenha")
    .value
    .trim();

    const pergunta =

    document
    .getElementById("pergunta")
    .value;

    const resposta =

    document
    .getElementById("resposta")
    .value
    .trim();

    if(senha !== repetirSenha){

        alert(
            "As senhas não coincidem."
        );

        return;

    }

    let usuarios =

    JSON.parse(
        localStorage.getItem(
            "usuarios"
        )
    )

    ||

    [];

    const usuarioExistente =

    usuarios.find(usuario=>

        usuario.email
        .toLowerCase()

        ===

        email
        .toLowerCase()

    );

    if(usuarioExistente){

        alert(
            "Usuário já cadastrado."
        );

        return;

    }

    const novoUsuario = {

        id:Date.now(),

        nome:nome,

        email:email,

        senha:senha,

        pergunta:pergunta,

        resposta:resposta

    };

    usuarios.push(
        novoUsuario
    );

    localStorage.setItem(

        "usuarios",

        JSON.stringify(
            usuarios
        )

    );

    localStorage.setItem(

        "usuarioLogado",

        JSON.stringify(
            novoUsuario
        )

    );

    alert(
        "Cadastro realizado com sucesso!"
    );

    location.href =
    "../login/login.html";

});