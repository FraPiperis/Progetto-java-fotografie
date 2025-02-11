const CatFetch = "https://api.pexels.com/v1/search?query=cat"

function foto() {
     fetch (CatFetch, {
        headers: {
            Authorization: "RxV2jTZgbdTVCkBj0Vhqsfea64Z4NYrk2k3EQAR73MvmlKGEVWZVVfXf"
        }
    } )
    .then (Response => Response.json())
    .then((img) => renderFoto(img.photos))
    .catch(err => console.log(err))
}

