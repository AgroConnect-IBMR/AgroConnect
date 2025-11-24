function login() {
    const inputEmail = document.querySelector("#emailL")
    const inputPassword = document.querySelector("#passwordL")
    const loginBtn = document.querySelector("#logar")

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault()
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == inputEmail.value && users[i].passaword == inputPassword.value) {
                console.log("Login bem sucedido!")
                window.location.replace("dashboard.html")
                return
            } else { window.alert("Email ou senha incorretos!") }
        }
    })
}
login()