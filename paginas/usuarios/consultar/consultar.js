// =====================================
// VOLTAR
// =====================================

function voltar() {

  history.back();

}

// =====================================
// CONSULTAR
// =====================================

function consultarDenuncia() {

  // =====================================
  // PEGAR CODIGO
  // =====================================

  const codigo =

    document
      .getElementById("codigo")
      .value
      .trim()
      .toUpperCase();

  // =====================================
  // PEGAR DENUNCIAS
  // =====================================

  const denuncias =

    JSON.parse(
      localStorage.getItem(
        "denuncias"
      )
    )

    ||

    [];

  // =====================================
  // PROCURAR
  // =====================================

  const denuncia =

    denuncias.find(item =>

      item.protocolo === codigo

    );

  // =====================================
  // ESCONDER
  // =====================================

  document
    .getElementById("resultado")
    .classList
    .add("escondido");

  document
    .getElementById("naoEncontrado")
    .classList
    .add("escondido");

  // =====================================
  // NÃO ENCONTROU
  // =====================================

  if (!denuncia) {

    document
      .getElementById("naoEncontrado")
      .classList
      .remove("escondido");

    return;

  }

  // =====================================
  // MOSTRAR DADOS
  // =====================================

  document
    .getElementById("tipoDenuncia")
    .innerText =

    denuncia.tipo;

  document
    .getElementById("bairroDenuncia")
    .innerText =

    denuncia.bairro || "Não informado";

  document
    .getElementById("ruaDenuncia")
    .innerText =

    denuncia.rua || "Não informada";

  document
    .getElementById("comentarioDenuncia")
    .innerText =

    denuncia.comentario || "Sem comentário";

  document
    .getElementById("dataDenuncia")
    .innerText =

    denuncia.data;

  document
    .getElementById("usuarioDenuncia")
    .innerText =

    denuncia.usuarioNome

    ||

    denuncia.usuario

    ||

    "Não informado";

  document
    .getElementById("arquivoDenuncia")
    .innerText =

    denuncia.arquivo || "Sem arquivo";

  document
    .getElementById("statusDenuncia")
    .innerText =

    denuncia.status;

  // =====================================
  // STATUS COR
  // =====================================

  const status =

    document.getElementById(
      "statusDenuncia"
    );

  if (denuncia.status === "Resolvido") {

    status.style.background =
      "#dcfce7";

    status.style.color =
      "#166534";

  }

  else if (denuncia.status === "Rejeitado") {

    status.style.background =
      "#fee2e2";

    status.style.color =
      "#991b1b";

  }

  else {

    status.style.background =
      "#fef3c7";

    status.style.color =
      "#92400e";

  }

  // =====================================
  // MOSTRAR CARD
  // =====================================

  document
    .getElementById("resultado")
    .classList
    .remove("escondido");

}