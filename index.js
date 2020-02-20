let main = document.getElementById("main")
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.appendChild(newHeader)
