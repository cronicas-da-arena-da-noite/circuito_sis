let telaAtual = "recebidas";


window.onload = () => {

    mostrarInbox();

};



btnDashboard.onclick = () => {


    telaAtual = "recebidas";


    tituloPagina.innerHTML =
        "Denúncias Recebidas";


    btnDashboard.classList.add("active");

    btnEncaminhar.classList.remove("active");


    mostrarInbox();


};





btnEncaminhar.onclick = () => {


    telaAtual = "atendimento";


    tituloPagina.innerHTML =
        "Em Atendimento";



    btnDashboard.classList.remove("active");

    btnEncaminhar.classList.add("active");



    mostrarEncaminhar();


};





btnSair.onclick = () => {


    localStorage.removeItem(
        "adminLogado"
    );


    location.href =
        "../login.html";


};