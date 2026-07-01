function denunciaRapida(){

    localStorage.setItem(
        "usuarioAnonimo",
        "true"
    );

}

const botaoIA = document.getElementById("botao_ia");

botaoIA.addEventListener("click", () => {
    window.location.href = "./paginas/usuarios/denuncia_ia/denuncia_ia.html";
});
