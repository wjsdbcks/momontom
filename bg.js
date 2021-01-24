const body = document.querySelector("body");
const BG_DIV = document.querySelector(".BG_location");
const icon = BG_DIV.querySelector("i");
const BG_LOCATION = BG_DIV.querySelector(".js-location");

const IMG_NUMBER = 6;

function writeLocation(name){
    icon.classList.add("fas", "fa-map-marker")
    BG_LOCATION.innerText = `${name}`
}

function paintLocation(imageNumber) {
    if(imageNumber + 1 === 1){
        writeLocation("Slottsskogsgatan 45A, 414 70 Göteborg, Sweden, Kungsladugård")
    } else if(imageNumber + 1 === 2){
        writeLocation("Ilmarinkatu 30, 33500 Tampere, Finland, Tampere")
    }else if(imageNumber + 1 === 3){
        writeLocation("Langtang National Park, Nepal")
    }else if(imageNumber + 1 === 4){
        writeLocation("Wanaka, Otago, New Zealand")
    }else if(imageNumber + 1 === 5){
        writeLocation("Pragser Wildsee, Italy")
    }else{
        writeLocation("Saint-Adolphe-d'Howard, QC, Canada")
    }
}

function paintImage(imageNumber){
    const image = new Image();
    image.src = `images/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    paintLocation(randomNumber);

}

init();