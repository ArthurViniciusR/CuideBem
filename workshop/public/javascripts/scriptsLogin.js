let form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

function login(){
    let email = document.querySelector("#IDemail").value
    let senha = document.querySelector("#IDsenha").value
    let login = false

    if(email == "dev@gmail.com" && senha == "12345"){
        login = true
        
    }
    console.log(login)
    
}