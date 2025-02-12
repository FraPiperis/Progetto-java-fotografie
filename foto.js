
const FunzioneGatto = "https://api.pexels.com/v1/search?query=cat"
function funzionefetch() { 
    return fetch (FunzioneGatto, {
    headers: {
        Authorization: "RxV2jTZgbdTVCkBj0Vhqsfea64Z4NYrk2k3EQAR73MvmlKGEVWZVVfXf"
    }
})
.then (response => response.json())
.then (immagini => { console.log(immagini) 
        Visualizza(immagini)    
})
.catch (err => console.log(err))
}

function Visualizza(immagini) { 
    const contenitore = document.getElementById("contenitore")
    contenitore.innerHTML=""

    immagini.photos.forEach(photo => {
        const Card = document.createElement("div")
        Card.classList.add("Card", "col-6", "col-md-4")

        const image = document.createElement("img")
        Card.classList.add("Card-img")
        image.src = photo.src.medium

        Card.appendChild(image); 
        contenitore.appendChild(Card);
    });
}

funzionefetch(); 
