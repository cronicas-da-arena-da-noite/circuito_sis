let denunciaAtual = null;

function abrirEditor(denuncia) {

    denunciaAtual = denuncia;

    protocolo.value = denuncia.protocolo || "";
    usuario.value = denuncia.usuarioNome || "";
    email.value = denuncia.usuarioEmail || "";
    tipo.value = denuncia.tipo || "";
    bairro.value = denuncia.bairro || "";
    rua.value = denuncia.rua || "";
    comentario.value = denuncia.comentario || "";
    arquivo.value = denuncia.arquivo || "";

    btnSalvar.innerHTML = "Salvar";

}

btnSalvar.onclick = () => {

    if (!denunciaAtual) return;

    denunciaAtual.usuarioNome = usuario.value;
    denunciaAtual.usuarioEmail = email.value;
    denunciaAtual.tipo = tipo.value;
    denunciaAtual.bairro = bairro.value;
    denunciaAtual.rua = rua.value;
    denunciaAtual.local = rua.value + ", " + bairro.value;
    denunciaAtual.comentario = comentario.value;
    denunciaAtual.arquivo = arquivo.value;

    if (telaAtual === "caixa_de_entrada") {

        denunciaAtual.status = "Encaminhado";

    } else if (telaAtual === "encaminhar") {

        denunciaAtual.status = "Prefeitura";

    }

    atualizarDenuncia(denunciaAtual);

    limparFormulario();

    if (telaAtual === "caixa_de_entrada") {

        mostrarInbox();

    } else {

        mostrarEncaminhar();

    }

    alert("Denúncia salva com sucesso.");

};

function limparFormulario() {

    denunciaAtual = null;

    protocolo.value = "";
    usuario.value = "";
    email.value = "";
    tipo.value = "";
    bairro.value = "";
    rua.value = "";
    comentario.value = "";
    arquivo.value = "";

}