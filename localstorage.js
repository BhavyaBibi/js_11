
const input=document.querySelector("input")
const loginBtn =document.querySelector("#login")
const logoutBtn=document.querySelector("#logout")
const h1 = document.querySelector("h1")

    loginBtn.onclick =()=>{
        if(input.value){
            localStorage.setitem("token"input.value)
        }

    }



