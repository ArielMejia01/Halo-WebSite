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

//Configurar logica para mostrar los videos
//Haremos un arreglo de objetos con id de videos que queremos mostrar
const videos = [
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "XCbMVbeKlCg",
    },
    {
        id: "Fmdb-KmlzD8",
    },
    {
        id: "lOthvD1rMbQ",
    },
    {
        id: "nXDk86lQhto",
    },
];
//Variables inciales
const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');

//Referencias a los botones
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');

//Contador
let current = 0;

//Cargar el primer elemento de la lista
//Dos eventos que manejaran el numerador current
/*Cuando se de click en bNext la variable current aumentara a 1. Luego
se llamara una funcion renderizar para que dibuje el video*/

bNext.addEventListener('click', (e) =>{
    let changed = current;
    //si current es menor o igual a 1 quiere decir que ya llego al final
    //si eso es verdad entonces current +1 si no solo regreso current, para
    //que siga dando click pero ya no va a avanzar.
    current = current + 1 < videos.length ? current + 1 : current;

    //con esta decision evitamos que el usuario este  dando clicks adicionales
    if(current != changed){
        //renderizar el video, videos es el arreglo en la posicion current y la propiedad id
        renderCurrentVideo(videos[current].id);
    }    
});

bPrev.addEventListener('click', (e) =>{
    let changed = current;
    //Si current -1 (porque estoy decrementandolo)e s mayor o igual que 0 entonces si decrementa -1 si no regresa current
    current = current -1 >= 0 ? current -1 : current;

    //con esta decision evitamos que el usuario este  dando clicks adicionales
    if(current != changed){
        //renderizar el video, videos es el arreglo en la posicion current y la propiedad id
        renderCurrentVideo(videos[current].id);
    }  
});

//Mostrar los videos de acuerdo a la posicion inicial
renderCurrentVideo(videos[current].id);
renderVideos();

//Funcion para extraer el video segun el id
function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="579" src="https://www.youtube.com/embed/${id}" title="ENTRENAMIENTO INTENSO ⚡💪" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
};

//Obtener la vista previa del video que quiero mostrar en la galeria.
// En esta funcion extraemos con un enlace de get youtube thumbnail la miniatura
//de un video y solo agregamos nuestro id para mostrar la caratula.
function renderVideos(){
    const html = videos.map(video =>{
        return `
        <div class="item">
            <a href="#">
                <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
            </a>
        <div/>`;
    });

    videosContainer.innerHTML = html.join('');
}