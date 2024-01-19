
// Variables required to pull information
let circle = document.querySelector(".circle")
let imageCup = document.querySelector(".starbucks")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let pink = document.querySelector(".pink")
let btn = document.querySelector(".btn")
let title = document.querySelector(".title")
let body = document.querySelector("body")
//--------

// Click Events
green.addEventListener("click", () => {
   imageCup.src = "./images/img1.png"
   circle.style.background = "#017143"
   btn.style.background = "#017143"
   title.style.color = "#017143"
   body.style.background = "#f3fffa"
})

yellow.addEventListener("click", () => {
    imageCup.src = "./images/img2.png"
    circle.style.background = "#eb7496"
    btn.style.background = "#eb7496"
    title.style.color = "#eb7496"
    body.style.background = "#fcecf1"
})

pink.addEventListener("click", () => {
    imageCup.src = "./images/img3.png"
    circle.style.background = "#d752b1"
    btn.style.background = "#d752b1"
    title.style.color = "#d752b1"
    body.style.background = "#fbeff8"
})
//---------