//Criando & Validando formulário com DOM e EventListener:


//Acesso ao input Name:
const inputName = document.querySelector("#name")
//Acesso ao input Email:
const inputEmail = document.querySelector("#email")
//Acesso ao input Submit:
const submitBtn = document.querySelector("#submit-button")
//Acesso a div class="msg"
const msgValue = document.querySelector(".msg")

//EventListener do submitBtn:
submitBtn.addEventListener("click", (eventListener) => {
    //Alterando "forma normal do evento"
    eventListener.preventDefault();

    //Atribuindo os valores do input
    const nameValue = inputName.value;
    const emailValue = inputEmail.value;

    //Validando valores do input no form:
    if (nameValue === "" || emailValue === "") {
        msgValue.textContent = "Por favor insira os dados abaixo!"
        msgValue.classList = "error"
        
        //Alterando set time da msg de erro em 3 segundos:
        setTimeout(() => {
            msgValue.textContent = "";
            msgValue.classList = "";
        }, 2000);
        return;
    } else {
        alert("Dados Enviados com Sucesso!!")
        inputEmail.value = "";
        inputName.value = "";
    }
});