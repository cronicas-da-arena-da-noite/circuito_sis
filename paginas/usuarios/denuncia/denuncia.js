// =====================================
// PROTEÇÃO
// =====================================

const usuario =
    JSON.parse(
        localStorage.getItem("usuarioLogado")
    );

const usuarioAnonimo =
    localStorage.getItem("usuarioAnonimo");

if (!usuario && usuarioAnonimo !== "true") {
    location.href = "../login/login.html";
}

// =====================================
// ABRIR ARQUIVO
// =====================================

function abrirArquivo() {
    document.getElementById("arquivo").click();
}

// =====================================
// MOSTRAR NOME DO ARQUIVO
// =====================================

document.getElementById("arquivo")
    .addEventListener("change", () => {

        const arquivo =
            document.getElementById("arquivo").files[0];

        if (arquivo) {
            document.getElementById("arquivoNome").innerText =
                arquivo.name;
        }

    });

// =====================================
// ENVIAR DENÚNCIA
// =====================================

function enviarDenuncia() {

    const bairro =
        document.getElementById("bairro").value.trim();

    const rua =
        document.getElementById("rua").value.trim();

    const tipo =
        document.getElementById("tipo").value;

    const comentario =
        document.getElementById("comentario").value.trim();

    const arquivo =
        document.getElementById("arquivo").files[0];

    // VALIDAR
    if (bairro === "") {
        alert("Informe o bairro.");
        return;
    }

    if (rua === "") {
        alert("Informe a rua.");
        return;
    }

    if (tipo === "") {
        alert("Selecione o tipo do problema.");
        return;
    }

    // PROTOCOLO
    const protocolo =
        "PAL-" + Math.floor(100000 + Math.random() * 900000);

    // DENÚNCIAS
    let denuncias =
        JSON.parse(localStorage.getItem("denuncias")) || [];

    // USUÁRIO
    let usuarioId = null;
    let usuarioNome = "Anônimo";
    let usuarioEmail = "";

    if (usuario && usuarioAnonimo !== "true") {
        usuarioId = usuario.id;
        usuarioNome = usuario.nome;
        usuarioEmail = usuario.email;
    }

    // NOVA DENÚNCIA
    const novaDenuncia = {
        protocolo: protocolo,
        usuarioId: usuarioId,
        usuarioNome: usuarioNome,
        usuarioEmail: usuarioEmail,

        bairro: bairro,
        rua: rua,

        tipo: tipo,
        comentario: comentario,

        arquivo: arquivo ? arquivo.name : "",

        status: "Em análise",

        data: new Date().toLocaleDateString("pt-BR")
    };

    denuncias.push(novaDenuncia);

    localStorage.setItem(
        "denuncias",
        JSON.stringify(denuncias)
    );

    // MOSTRAR PROTOCOLO
    document.getElementById("codigo").innerText = protocolo;

    document.getElementById("modalSucesso")
        .classList.remove("escondido");

}

// =====================================
// FECHAR MODAL
// =====================================

function fecharModal() {

    const usuarioAnonimo =
        localStorage.getItem("usuarioAnonimo");

    if (usuarioAnonimo === "true") {
        location.href = "../../../index.html";
        return;
    }

    location.href = "../dashboard/dashboard.html";
}

// =====================================
// VOLTAR
// =====================================

function voltarDenuncia() {

    const usuarioAnonimo =
        localStorage.getItem("usuarioAnonimo");

    if (usuarioAnonimo === "true") {
        location.href = "../../../index.html";
    } else {
        location.href = "../dashboard/dashboard.html";
    }

    return false;
}