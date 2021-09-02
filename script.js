let btnMenu = document.querySelector("#btn-menu")
btnMenu.addEventListener("click", showMenu)

function showMenu() {
    let nav = document.getElementsByTagName("nav")[0]
    nav.classList.toggle("active")
}