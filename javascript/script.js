// Array di oggetti
const items = [
    {
        image: "./img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    {
        image: "./img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum"
    },
    {
        image: "./img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        image: "./img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
    },
    {
        image: "./img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
    }
]

// Inizializzazione variabili
let itemTemplate = "";
let thumbTemplate = "";
let current = 0;

// Generazione pagina
generatePage();

// Eventi
const up = document.querySelector(".fa-circle-chevron-up");
const down = document.querySelector(".fa-circle-chevron-down");
up.addEventListener("click", previous);
down.addEventListener("click", next);

// Funzioni
// Funzione per generare la pagina
function generatePage() {
    for(let i = 0; i < items.length; i++) {
        let active = "";
        if(i === current) {
            active = "active";
        }
        itemTemplate += `
        <div class="item ${active}">
            <img src="${items[i]['image']}" alt="${items[i]['title']}">
            <div class="title">
                <h2>${items[i]['title']}</h2>
                <p>${items[i]['text']}</p>
            </div>
        </div>`;
        thumbTemplate += `
        <div class="thumb ${active}">
            <img src="${items[i]['image']}" alt="${items[i]['title']}">
        </div>`
    }
    let itemsContainer = document.querySelector(".items-container");
    itemsContainer.innerHTML = itemTemplate;
    let thumbsContainer = document.querySelector(".thumbs-container");
    thumbsContainer.innerHTML += thumbTemplate;
}
// Funzione per mandare indietro le immagini
function previous() {
    const imgs = document.getElementsByClassName("item");
    imgs[current].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[current].classList.remove("active");
    if(current === 0) {
        current = 4;
    } else {
        current--;
    }
    imgs[current].classList.add("active");
    thumbs[current].classList.add("active");
}
// Funzione per mandare avanti le immagini
function next() {
    const images = document.getElementsByClassName("item");
    images[current].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[current].classList.remove("active");
    if(current === 4) {
        current = 0;
    } else {
        current++;
    }
    images[current].classList.add("active");
    thumbs[current].classList.add("active");
}