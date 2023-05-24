var botao = document.getElementById("submit-button");

var formulario = document.getElementsByName("lead").item(0);

formulario.onsubmit = function() {
    let resposta = confirm("Tem certeza que esta tudo certo?");

    if (resposta) {
        console.log("VAMOOOO");
    } else {
        console.log("No.");
        document.getElementById("mesage").textContent = "Revisa então ai."
    }

    return resposta;
}

var nameTextField = document.getElementById("name");
nameTextField.onkeydown = function() {
    console.log(nameTextField.value);
    document.getElementById("mesage").textContent = "Olá " + nameTextField.value
}