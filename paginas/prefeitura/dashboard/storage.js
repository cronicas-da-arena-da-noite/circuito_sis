const STORAGE = "denuncias";

function carregarDenuncias() {

    const lista =
        JSON.parse(
            localStorage.getItem(STORAGE)
        ) || [];

    lista.forEach(d=>{

        if(
            !d.departamento
        ){

            d.departamento =
                "Nova";

        }

    });

    return lista;

}

function salvarDenuncias(lista) {

    localStorage.setItem(STORAGE, JSON.stringify(lista));

}

function buscarProtocolo(protocolo) {

    return carregarDenuncias().find(d => d.protocolo === protocolo);

}

function atualizarDenuncia(denuncia) {

    let lista = carregarDenuncias();

    lista = lista.map(item => {

        if (item.protocolo === denuncia.protocolo) {
            return denuncia;
        }

        return item;

    });

    salvarDenuncias(lista);

}