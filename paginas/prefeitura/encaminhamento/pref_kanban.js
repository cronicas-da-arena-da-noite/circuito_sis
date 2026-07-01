const COLUNAS = [

    "Nova",

    "Em análise",

    "Aguardando informação / aprovação",

    "Aprovado",

    "Em execução",

    "Resolvido"

];

function montarKanban() {

    const kanban =
        document.getElementById(
            "kanban"
        );

    kanban.innerHTML = "";

    COLUNAS.forEach(nome => {

        const coluna =
            document.createElement(
                "div"
            );

        coluna.className =
            "kanban-coluna";

        coluna.innerHTML = `

            <div class="kanban-titulo">

                ${nome}

            </div>

            <div
                class="kanban-cards"
                id="${nome}">

            </div>

        `;

        kanban.appendChild(
            coluna
        );

    });

    carregarCards();

}

function carregarCards() {

    carregarDenuncias()

        .filter(d => d.status === "kanban")

        .forEach(d => {

            if (!d.departamento || d.departamento === "") {

                d.departamento = "Nova";

                atualizarDenuncia(d);
            }

            adicionarCard(d);

        });

}

function adicionarCard(denuncia){

    const coluna =
        document.getElementById(
            denuncia.departamento
        );

    if(!coluna)
        return;

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "kanban-card";

    card.innerHTML = `

        <strong>

            ${denuncia.protocolo}

        </strong>

        <div>

            ${denuncia.tipo}

        </div>

        <small>

            ${denuncia.bairro}

        </small>

    `;

    card.onclick = () => {

        abrirEditor(
            denuncia
        );

    };

    coluna.appendChild(
        card
    );

}