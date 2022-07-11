//Referencias
const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

//Agregar listeners
/*Cambiar el estilo, intercambiar el estilo de show si lo
tiene lo va a quitar y sino lo tiene lo va a poner.*/
bShowMobileLinks.addEventListener("click",(e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) =>{
    e.preventDefault();
    moreMenu.classList.toggle("show");
});