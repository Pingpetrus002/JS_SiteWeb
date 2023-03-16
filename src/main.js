

// Déclaration des variables

let tabUrl = [];
let tabName = [];


map1 = document.getElementById('map1')
map2 = document.getElementById('map2')
map3 = document.getElementById('map3')
map4 = document.getElementById('map4')


button = document.getElementById('btn-click');



map1.hidden = true;
map2.hidden = true;
map3.hidden = true;
map4.hidden = true;


//Fonction qui appelle l'api et stock les 4 premies images et nom dans un tab

function fetchPhotos() {
    return fetch('https://valorant-api.com/v1/maps/');
}

fetchPhotos().then((httpResponse) => {

    console.log("httpResponse : ", httpResponse)
    return httpResponse.json()

}).then((mapsList) => {

    for (i = 0; i<4; i++){

        resultUrl = mapsList.data[i].displayIcon;
        resultName = mapsList.data[i].displayName;

        tabUrl.push(resultUrl);
        tabName.push(resultName);
        

        

    }

    console.log(tabUrl)

    //Affichage des noms et des images


    map1.innerHTML = "<img class='w-100' id='map1' src='" + tabUrl[0] + "'>  <br> <p class='text-center mt-2'>"+ tabName[0] +"</p>";
    map2.innerHTML = "<img class='w-100' id='map1' src='" + tabUrl[1] + "'>  <br> <p class='text-center mt-2'>"+ tabName[1] +"</p>";                                                    
    map3.innerHTML = "<img class='w-100' id='map1' src='" + tabUrl[2] + "'>  <br> <p class='text-center mt-2'>"+ tabName[2] +"</p>";
    map4.innerHTML = "<img class='w-100' id='map1' src='" + tabUrl[3] + "'>  <br> <p class='text-center mt-2'>"+ tabName[3] +"</p>";



    
})

//Ecoute le bouton afficher

button.addEventListener('click', () =>{

    // Montre les maps
    

    

    if (button.textContent === 'Afficher'){

        map1.hidden = false;
        map2.hidden = false;
        map3.hidden = false;
        map4.hidden = false;

        button.textContent = "Cacher"



    }

        // Caché les maps



    else if (button.textContent === 'Cacher'){
        

        map1.hidden = true;
        map2.hidden = true;
        map3.hidden = true;
        map4.hidden = true;


        button.textContent = "Afficher"


    }
    



})