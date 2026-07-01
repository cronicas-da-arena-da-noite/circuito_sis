/* =======================================================
   DADOS (ARMAZENAMENTO TEMPORÁRIO)
======================================================= */

const denuncia = {
    bairro: "",
    rua: "",
    tipo: "",
    comentario: "",
    arquivo: ""
};

/* =======================================================
   FUNÇÃO GERAL DE TROCA DE ETAPA
======================================================= */

function trocar(etapaAtual, proximaEtapa) {

    document.getElementById(etapaAtual).style.display = "none";
    document.getElementById(proximaEtapa).style.display = "flex";
}

/* =======================================================
   BOTÕES DE NAVEGAÇÃO
======================================================= */

document.getElementById("botao0").onclick = function () {
    trocar("etapa0", "etapa1");
};

document.getElementById("botao1").onclick = function () {

    const bairro = document.getElementById("bairro").value.trim();

    if (bairro === "") {
        alert("Informe o bairro");
        return;
    }

    denuncia.bairro = bairro;

    trocar("etapa1", "etapa2");
};

document.getElementById("botao2").onclick = function () {

    const rua = document.getElementById("rua").value.trim();

    if (rua === "") {
        alert("Informe a rua");
        return;
    }

    denuncia.rua = rua;

    trocar("etapa2", "etapa3");
};

document.getElementById("botao3").onclick = function () {

    const tipo = document.getElementById("tipo").value;

    if (tipo === "") {
        alert("Selecione o tipo");
        return;
    }

    denuncia.tipo = tipo;

    trocar("etapa3", "etapa4");
};

document.getElementById("botao4").onclick = function () {

    const file = document.getElementById("arquivo").files[0];

    if (file) {
        denuncia.arquivo = file.name;
    }

    trocar("etapa4", "etapa5");
};

document.getElementById("botao5").onclick = function () {

    const comentario = document.getElementById("comentario").value.trim();

    if (comentario === "") {
        alert("Escreva o comentário");
        return;
    }

    denuncia.comentario = comentario;

    trocar("etapa5", "etapa6");

    preencherResumo();
};

/* =======================================================
   RESUMO FINAL
======================================================= */

function preencherResumo() {

    document.getElementById("rBairro").innerText = denuncia.bairro;
    document.getElementById("rRua").innerText = denuncia.rua;
    document.getElementById("rTipo").innerText = denuncia.tipo;
    document.getElementById("rComentario").innerText = denuncia.comentario;
    document.getElementById("rArquivo").innerText = denuncia.arquivo || "Nenhum arquivo";
}

/* =======================================================
   ENVIAR FINAL
======================================================= */

document.getElementById("enviar_denuncia").onclick = function () {

    const protocolo = "PAL-" + Math.floor(100000 + Math.random() * 900000);

    const novaDenuncia = {
        protocolo: protocolo,
        bairro: denuncia.bairro,
        rua: denuncia.rua,
        tipo: denuncia.tipo,
        comentario: denuncia.comentario,
        arquivo: denuncia.arquivo,
        status: "Em análise",
        data: new Date().toLocaleDateString("pt-BR")
    };

    let lista = JSON.parse(localStorage.getItem("denuncias")) || [];

    lista.push(novaDenuncia);

    localStorage.setItem("denuncias", JSON.stringify(lista));

    alert("Denúncia enviada! Protocolo: " + protocolo);

    location.reload();
};