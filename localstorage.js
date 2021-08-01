// localstorage.setItem("id")
// localstorage.getItem()
// localstorage.removeItem()
// localstorage.clear()


localStorage.setItem("id","0")
localStorage.setItem("name","abc")

localStorage.setItem("name","Debug")
localStorage.removeItem("id")

console.log(localStorage.key(0))
localStorage.clear()


document.write(localStorage.getItem("id"))
document.write(localStorage.getItem("name"))


