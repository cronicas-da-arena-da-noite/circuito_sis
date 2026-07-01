document
    .getElementById("btnEntrar")
    .addEventListener("click", (e) => {

        e.preventDefault();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        // validação simples de email
        if (!email.includes("@") || !email.includes(".")) {

            alert("Informe um email válido (ex: nome@gmail.com)");

            return;

        }

        const senha =

            document
                .getElementById("senha")
                .value
                .trim();

        if (email === "") {

            alert(
                "Informe o email ou telefone."
            );

            return;

        }

        if (senha === "") {

            alert(
                "Informe a senha."
            );

            return;

        }

        const usuarios =

            JSON.parse(
                localStorage.getItem(
                    "usuarios"
                )
            )

            ||

            [];

        const usuario =

            usuarios.find(usuario =>

                usuario.email === email

                &&

                usuario.senha === senha

            );

        if (!usuario) {

            alert(
                "Usuário ou senha inválidos."
            );

            return;

        }

        localStorage.setItem(

            "usuarioLogado",

            JSON.stringify(usuario)

        );

        localStorage.setItem(
            "usuarioAnonimo",
            "false"
        );

        location.href =
            "../dashboard/dashboard.html";

    });