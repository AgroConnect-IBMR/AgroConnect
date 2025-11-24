function creatUser() {
    const inputName = document.querySelector("#nome")
    const inputEmail = document.querySelector("#email")
    const inputPassword = document.querySelector("#senha")
    const inputCidade = document.querySelector("#cidade")
    const inputPerfil = document.querySelector("#perfil")
    const registraBtn = document.querySelector("#registrar")
    const idNum = users.length + 1

    registraBtn.addEventListener("click", (event) => {
        event.preventDefault()
        const novoUser = {
            id: idNum,
            user: inputName.value,
            email: inputEmail.value,
            passaword: inputPassword.value,
            cidade: inputCidade.value,
            perfil: inputPerfil.value
        }

        if (inputEmail.value !== "" && inputPassword.value !== "" && inputName.value !== "" && inputCidade.value !== "" && inputPerfil.value !== "") {
            users.push(novoUser)
            localStorage.setItem("users", JSON.stringify(users))
            inputName.value = ""
            inputEmail.value = ""
            inputPassword.value = ""
            inputCidade.value = ""
            inputPerfil.value = ""
        }
    })
}
creatUser()