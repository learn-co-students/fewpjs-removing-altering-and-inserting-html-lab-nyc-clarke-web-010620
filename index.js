// Write your code here!

document.getElementById('main').remove()

let newHeader = document.createElement('h1')
newHeader.classList = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
newHeader.id = "victory"

document.body.appendChild(newHeader)