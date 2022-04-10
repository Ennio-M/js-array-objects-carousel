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
let current = 0;

// Generazione pagina
generatePage();
let loopFunction = setInterval(next, 3000);

// Eventi
const stopButton = document.getElementById("stop");
const resume = document.getElementById("resume");
stopButton.addEventListener("click", stopLoop);
resume.addEventListener("click", resumeFunction);

// Funzioni
// Funzione per generare la pagina
function generatePage() {
    const itemsContainer = document.querySelector(".items-container");
    const thumbsContainer = document.querySelector(".thumbs-container");
    for(let i = 0; i < items.length; i++) {
        let active = "";
        if(i === current) {
            active = "active";
        }
        const carouselImage = addImage(i, active);
        itemsContainer.append(carouselImage[0]);
        thumbsContainer.append(carouselImage[1]);
    }
}
// Funzione per generare le immagini
function addImage(i, active) {
    const item = document.createElement("div");
    const thumb = document.createElement("div");
    const imgItem = document.createElement("img");
    const imgThumb = document.createElement("img");
    const title = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    item.setAttribute("class", `item ${active}`);
    thumb.setAttribute("class", `thumb ${active}`);
    imgItem.setAttribute("src", `${items[i]['image']}`);
    imgItem.setAttribute("alt", `${items[i]['title']}`);
    imgThumb.setAttribute("src", `${items[i]['image']}`);
    imgThumb.setAttribute("alt", `${items[i]['title']}`);
    title.setAttribute("class", "title");
    h2.innerHTML = `${items[i]['title']}`;
    p.innerHTML = `${items[i]['text']}`;
    title.append(h2, p);
    item.append(imgItem, title);
    thumb.append(imgThumb);
    return [item, thumb];
}

// Funzione per mandare avanti le immagini
function next() {
    const elements = removeActive();
    if(current === 4) {
        current = 0;
    } else {
        current++;
    }
    elements[0][current].classList.add("active");
    elements[1][current].classList.add("active");
}
// Funzione per rimuovere la classe active
function removeActive() {
    const images = document.getElementsByClassName("item");
    images[current].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[current].classList.remove("active");
    return [images, thumbs];
}

// Funzione per fermare il loop
function stopLoop() {
    clearInterval(loopFunction);
}
// Funzione per riprendere il loop
function resumeFunction() {
    loopFunction = setInterval(next, 3000);
}