const meun = document.querySelector("nav .container ul");
const closeBtn = document.querySelector("#close-menu-btn");
const openBtn = document.querySelector("#open-menu-btn")

openBtn.addEventListener("click",()=>{
    openBtn.style.display= "none";
    closeBtn.style.display = "inline-block";
    meun.style.display = "flex"

})

const closeNav = () => {
    openBtn.style.display= "block";
    closeBtn.style.display = "none";
    meun.style.display = "none"
}
closeBtn.addEventListener("click",closeNav)










const love = document.querySelectorAll(" nav .container ul li");


const hate = () => {
    love.forEach(items=> {
    const link = items.querySelector("a")
    link.classList.remove("active");
    })
}

love.forEach(items => {
    const link = items.querySelector("a")
    link.addEventListener("click", () => {
        hate()
        link.classList.add("active");
    })
})
