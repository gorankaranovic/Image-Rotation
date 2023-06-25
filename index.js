const imgCon = document.querySelector(".image-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;
let timer;

prev.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    galleryMove();
})
next.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    galleryMove();
})

function galleryMove(){
    imgCon.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() =>{
        x -= 45;
        galleryMove();
    }, 3000)
}

galleryMove();