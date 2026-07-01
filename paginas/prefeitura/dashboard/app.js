window.onload = () => {

    mostrarInbox();

};

btnDashboard.onclick = () => {

    location.href =
        "../dashboard/dashboard.html";

};

btnEncaminhar.onclick = () => {

    location.href =
        "../encaminhamento/encaminhamento.html";

};

btnSair.onclick = () => {

    localStorage.removeItem(
        "adminLogado"
    );

    location.href =
        "../login.html";

};