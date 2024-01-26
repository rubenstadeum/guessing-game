const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const userNumber = Number(inputNumber.value)

    if (inputNumber.value.trim() !== "") {
        if (!isNaN(userNumber) && userNumber >= 0 && userNumber <= 10) {
            if(Number(inputNumber.value == randomNumber)) {
                toggleScreen()
        
                screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`   
            }
            
            inputNumber.value = "" 
            xAttempts++

        } else {
            alert("Por favor, insira um número entre 0 e 10.");
        }
    } else {
        alert("Coloque um número válido para continuar");
    }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}