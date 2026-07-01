let telaAtual = "caixa_de_entrada";

window.onload = () => {

    mostrarInbox();

};

btnDashboard.onclick = () => {

    telaAtual = "caixa_de_entrada";

    tituloPagina.innerHTML = "Caixa de Entrada";

    btnDashboard.classList.add("active");
    btnEncaminhar.classList.remove("active");

    mostrarInbox();

};

btnEncaminhar.onclick = () => {

    telaAtual = "encaminhar";

    tituloPagina.innerHTML = "Encaminhar";

    btnDashboard.classList.remove("active");
    btnEncaminhar.classList.add("active");

    mostrarEncaminhar();

};

btnSair.onclick = () => {

    localStorage.removeItem("adminLogado");

    location.href = "../login.html";

};