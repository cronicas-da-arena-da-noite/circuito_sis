function mostrarEncaminhar() {

    const lista = document.getElementById("listaDenuncias");

    lista.innerHTML = "";

    carregarDenuncias()

        .filter(d => d.status === "Encaminhado")

        .forEach(d => {

            const div = document.createElement("div");

            div.className = "item";

            div.innerHTML = `
                <strong>${d.protocolo}</strong>
                <div>${d.usuarioNome}</div>
                <div>${d.tipo}</div>
                <div>${d.rua || ""}, ${d.bairro || ""}</div>
                <div>${d.data}</div>
            `;

            div.onclick = () => abrirEditor(d);

            lista.appendChild(div);

        });

}