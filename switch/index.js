const mouth = document.querySelector(".mouth")

const leftEye = document.querySelector(".eye1")

const rightEye = document.querySelector(".eye2")

const switchBtn = document.querySelector(".switchBtn")

const tongue = document.querySelector(".tongue")

const allElement = [mouth, leftEye, rightEye, switchBtn, tongue]

switchBtn.addEventListener("click", happyFace)

function happyFace() {
    allElement.forEach(element => { element.classList.toggle("happy") })
}
