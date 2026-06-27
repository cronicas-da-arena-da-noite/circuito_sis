function excluirDenuncia(protocolo){


    const confirmar =
        confirm(
            "Deseja realmente excluir esta denúncia?"
        );


    if(!confirmar)
        return;




    let denuncias =
        carregarDenuncias();




    denuncias =
        denuncias.filter(
            d =>
            d.protocolo !== protocolo
        );



    salvarDenuncias(
        denuncias
    );



    limparFormulario();


    mostrarInbox();


}






function mostrarInbox(){


    const lista =
        document.getElementById(
            "listaDenuncias"
        );



    lista.innerHTML = "";





    carregarDenuncias()


    .filter(
        d =>
        d.status === "Prefeitura"
    )



    .forEach(d => {



        const div =
        document.createElement(
            "div"
        );



        div.className =
            "item";





        div.innerHTML = `

        <strong>
            ${d.protocolo}
        </strong>


        <div>
            ${d.usuarioNome}
        </div>


        <div>
            ${d.tipo}
        </div>


        <div>
            ${d.rua || ""}
            ,
            ${d.bairro || ""}
        </div>


        <div>
            ${d.data}
        </div>


        <button class="lixeira">
            🗑️
        </button>

        `;





        div.onclick = () =>
            abrirEditor(d);





        div
        .querySelector(".lixeira")
        .onclick = (e)=>{


            e.stopPropagation();


            excluirDenuncia(
                d.protocolo
            );


        };




        lista.appendChild(
            div
        );



    });



}