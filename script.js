const checkbox = document.getElementById("check")
const startPosition = {x: "50%", y: "50%"}
const counterElement = document.getElementById("counter")
let counter = 0



function setCheckboxPosition(pos) {
    checkbox.style.left = pos.x
    checkbox.style.top = pos.y
}

function randomizePosition() {
    const x = `${Math.random()*100}%`
    const y = `${Math.random()*100}%`

    return {x: x, y: y}
}

function checkboxClicked(event) {
    event.preventDefault()
    setCheckboxPosition(randomizePosition())

    counter += 1
    counterElement.innerHTML = counter
}



setCheckboxPosition(startPosition)
checkbox.addEventListener("click", checkboxClicked)