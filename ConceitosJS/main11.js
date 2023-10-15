// Eventos na DOM:
// EventListener como conhecido, são eventos de interatividade através da DOM no desenvolvimento WEB em elementos HTML, permitindo criar "atividades" de acordo com movimentos, clique, envio de formularios e etc...

//Adicionando EventListener ao "cliar" em enviar o formulário:
const botaoSubmit = document.querySelector('#submit-button')
const inputNome = document.querySelector("#name")
const inputEmail = document.querySelector("#email")

botaoSubmit.addEventListener("click", function (eventListener) {
    eventListener.preventDefault();
    console.log("Formulário Enviado com Sucesso!!")

    let nameValue = inputNome.value;
    let emailValue = inputEmail.value;

    if (nameValue === "" || emailValue === "") {
        if (nameValue === "") {
            alert("Insira o nome no formulário antes de enviar!!")
        } else if (emailValue === "") {
            alert("Insira o email no formulário antes de enviar!!")
        } else {
            alert("Dados não informados!!")
        }
    } else {
        //alert("Dados enviado com Sucesso!!")
        
        const formulario = document.querySelector("#my-form")
        formulario.style.background = "red"
    }
})