const header=document.querySelector(".show")
console.log("header")

const deviceWidth =window.matchMedia("(max-width:767px)")

// if(deviceWidth.matches){
//     header.classList.add("hide")

window.addEventListener("resize",resize);
function resize(){
    console.log(window.innerWidth);
    if(deviceWidth.matches){
        header.classList.add("hide")
}