const works = [
    {
        "image": "./assets/images/texture-mur-gris.webp"
    },
    {
        "image": "./assets/images/ancienne-surface-texturee-peinte-pour-toile-fond.webp"
    },
    {
        "image": "./assets/images/surface-vide-papier-peint-decoratif-toile-fond.webp"
    }
]

// on récupère les flèches

let arrowLeft = document.querySelector(".works-middle-arrow-left");
let arrowRight = document.querySelector(".works-middle-arrow-right")
let index = 0;

// on ajoute les bulletsPoints au projet

let bulletPointContainer = document.querySelector(".works-middle-dots");

for(let i = 0; i < works.length; i++) {
    
    let bulletPoint = document.createElement("span");
    bulletPointContainer.appendChild(bulletPoint);
    bulletPoint.classList.add("works-middle-dots-dot");

}

// on récupère les bulletPoint et on attribut le bulletPoint selectionné

let elementBulletPoint = document.getElementsByClassName('works-middle-dots-dot');
elementBulletPoint[index].classList.add("works-middle-dots-dot_selected");

// On récupère la dic qui tiens les images 

let newImage = document.querySelector(".works-middle-image");

// on attribut les événement à nos flèche 

arrowLeft.addEventListener("click", () => {
    if(index === 0) {
        index = 2;
        elementBulletPoint[index].classList.add("works-middle-dots-dot_selected")
        elementBulletPoint[0].classList.remove("works-middle-dots-dot_selected");
        newImage.src = works[index].image;
    } else {
        index --;
        newImage.src = works[index].image;
        elementBulletPoint[index].classList.add("works-middle-dots-dot_selected");
        elementBulletPoint[index + 1].classList.remove("works-middle-dots-dot_selected");
    }
})

arrowRight.addEventListener("click", () => {
    if(index === 2) {
        index = 0;
        elementBulletPoint[index].classList.add("works-middle-dots-dot_selected")
        elementBulletPoint[2].classList.remove("works-middle-dots-dot_selected");
        newImage.src = works[index].image;
    } else {
        index ++;
        newImage.src = works[index].image;
        elementBulletPoint[index].classList.add("works-middle-dots-dot_selected");
        elementBulletPoint[index - 1].classList.remove("works-middle-dots-dot_selected");
    }
})

/*function autoSlide() {
    if (index === works.length - 1) {
        index = 0;
    } else {
        index++;
    }
    newImage.src = works[index].image;
    updateBulletPointSelection();
}

function updateBulletPointSelection() {
    for (let i = 0; i < elementBulletPoint.length; i++) {
        if (i === index) {
            elementBulletPoint[i].classList.add("works-middle-dots-dot_selected");
        } else {
            elementBulletPoint[i].classList.remove("works-middle-dots-dot_selected");
        }
    }
}

const autoSlideInterval = setInterval(autoSlide, 5000);*/

const links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 

        const targetId = link.getAttribute("href").substring(1);

        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});








