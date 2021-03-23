export const postFuncionarios = (dados) => {
    fetch("http://localhost:8080/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    .then((response) => response.json())
    .then((dados) => {
        console.log("Enviado com sucesso", dados)
    })
    .catch((erro) => console.error("Erro: ", erro))
}