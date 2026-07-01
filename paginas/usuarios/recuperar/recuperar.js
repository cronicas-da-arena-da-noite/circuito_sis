document
    .getElementById("formCadastro")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        // =======================================================
        // 1 - PEGAR VALORES DO FORMULÁRIO
        // =======================================================

        const email =
            document
                .getElementById("nome")
                .value
                .trim()
                .toLowerCase();

        const pergunta =
            document
                .getElementById("pergunta")
                .value;

        const resposta =
            document
                .getElementById("resposta")
                .value
                .trim()
                .toLowerCase();

        const senha =
            document
                .getElementById("senha")
                .value
                .trim();

        const repetirSenha =
            document
                .getElementById("repetirSenha")
                .value
                .trim();

        // =======================================================
        // 2 - VERIFICAR SE SENHAS SÃO IGUAIS
        // =======================================================

        if (senha !== repetirSenha) {

            alert("A nova senha e a repetição não são iguais.");

            return;

        }

        // =======================================================
        // 3 - PEGAR USUÁRIOS DO LOCALSTORAGE
        // =======================================================

        let usuarios =
            JSON.parse(localStorage.getItem("usuarios"))
            || [];

        // =======================================================
        // 4 - PROCURAR USUÁRIO PELO EMAIL
        // =======================================================

        const usuarioEncontrado =
            usuarios.find(usuario =>
                usuario.email
                    .toLowerCase()
                    === email
            );

        if (!usuarioEncontrado) {

            alert("Email não encontrado.");

            return;

        }

        // =======================================================
        // 5 - VALIDAR PERGUNTA E RESPOSTA SECRETA
        // =======================================================

        const perguntaCorreta =
            usuarioEncontrado.pergunta;

        const respostaCorreta =
            usuarioEncontrado.resposta
                .toLowerCase();

        if (
            perguntaCorreta !== pergunta ||
            respostaCorreta !== resposta
        ) {

            alert("Pergunta ou resposta secreta incorreta.");

            return;

        }

        // =======================================================
        // 6 - ALTERAR SENHA
        // =======================================================

        usuarioEncontrado.senha = senha;

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        alert("Senha alterada com sucesso!");

        // voltar para login
        location.href = "../login/login.html";

    });