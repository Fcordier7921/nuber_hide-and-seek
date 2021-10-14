let btn = document.querySelector('#changer');
let ville = document.querySelector('#ville');
let température = document.querySelector('#temperature_label');

let villeDefaut = 'paris';
apiMeteo(villeDefaut);

btn.addEventListener('click', () => {

    let changeVille = prompt('Entré le nom de la ville !');
    villeDefaut = changeVille.replaceAll(' ', '-');
    console.log(villeDefaut);
    apiMeteo(villeDefaut);



})

function apiMeteo(villeDefaut) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + villeDefaut + "&appid=66fef5e558f25f18da4839afa6a52ee9&units=metric";
    fetch(url) //fetch en premier argumetnl'url de l'api qui retoune un promesse
        .then(reponse => reponse.json()) //on utilise json retour une promesse des donné
        .then(data => { //on retrouve nos donné

            if (data.message === "city not found") {
                alert("Un probléme et intervenue, la ville non trouver! " +
                    "revener plutard")
            } else {
                let VilleChoisie = data.name
                let tempVille = data.main.temp
                ville.textContent = VilleChoisie;
                température.textContent = tempVille;
            }


        })
}