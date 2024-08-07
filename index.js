const BUTTON_EL = document.querySelector(".btn")

BUTTON_EL.addEventListener("mouseover", (event)=>{
    const x = event.pageX - BUTTON_EL.offsetLeft;
    const y = event.pageY - BUTTON_EL.offsetTop;
    BUTTON_EL.style.setProperty("--xPos", x + "px")
    BUTTON_EL.style.setProperty("--yPos", y + "px")
})