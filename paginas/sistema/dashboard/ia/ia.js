const btnIA = document.getElementById("btnIA");
const modalIA = document.getElementById("modalIA");

btnIA.onclick = () => {

    modalIA.classList.add("mostrar");

    let denuncias = carregarDenuncias();

    denuncias.forEach((denuncia) => {

        const statusValido = denuncia.status === "Em análise";

        const bairroValido = BAIRROS_IA.includes(denuncia.bairro);
        const ruaValida = RUAS_IA.includes(denuncia.rua);

        // DUPLA CHECAGEM OBRIGATÓRIA
        if (statusValido && bairroValido && ruaValida) {

            denuncia.status = "Encaminhado";

        }

    });

    salvarDenuncias(denuncias);

    setTimeout(() => {

        modalIA.classList.remove("mostrar");

        if (typeof mostrarInbox === "function") {
            mostrarInbox();
        }

    }, 2000);

};