
// Déclaration des variables


let tabUrl = [];
let tabName = [];
let tabDegat= [];
let tabCost = [];


arme1 = document.getElementById('arme1')
arme2 = document.getElementById('arme2')
arme3 = document.getElementById('arme3')
arme4 = document.getElementById('arme4')

dropdown =  document.getElementById('dropdown')



a1 = document.getElementById('1')
a2 = document.getElementById('2')
a3 = document.getElementById('3')
a4 = document.getElementById('4')


arme1.hidden = false;
arme2.hidden = true;
arme3.hidden = true;
arme4.hidden = true;




//Fonction qui appelle l'api et stock les 4 premies images,nom,firerate et cout dans un tab


function fetchPhotos() {
    return fetch('https://valorant-api.com/v1/weapons/');
}

fetchPhotos().then((httpResponse) => {

    console.log("httpResponse : ", httpResponse)
    return httpResponse.json()

}).then((weaponsList) => {

    for (i = 0; i<4; i++){

        resultUrl = weaponsList.data[i].displayIcon;
        resultName = weaponsList.data[i].displayName;
        resultDegat = weaponsList.data[i].weaponStats.fireRate
        resultCost = weaponsList.data[i].shopData.cost

        tabUrl.push(resultUrl);
        tabName.push(resultName);
        tabDegat.push(resultDegat)
        tabCost.push(resultCost)
        

        

    }

    console.log(tabCost)

    //Affichage des noms et des images


    arme1.innerHTML = "<img class='w-100' id='arme1' src='" + tabUrl[0] + "'>  <br> <p class='text-center mt-4'>"+ tabName[0] +" </p> <br> <p class='text-center'>Cout : "+ tabCost[0] +"</p>  <br> <p class='text-center'>Fire Rate : "+ tabDegat[0] +"</p>";
    arme2.innerHTML = "<img class='w-100' id='arme1' src='" + tabUrl[1] + "'>  <br> <p class='text-center mt-5'>"+ tabName[1] +"</p> <br> <p class='text-center '>Cout : "+ tabCost[1]  +"</p> <br> <p class='text-center'>Fire Rate : "+ tabDegat[1] +"</p>";                                                 
    arme3.innerHTML = "<img class='w-100' id='arme1' src='" + tabUrl[2] + "'>  <br> <p class='text-center mt-4'>"+ tabName[2] +"</p> <br> <p class='text-center '>Cout : "+ tabCost[2]  +"</p> <br> <p class='text-center'>Fire Rate : "+ tabDegat[2] +"</p>";
    arme4.innerHTML = "<img class='w-100' id='arme1' src='" + tabUrl[3] + "'>  <br> <p class='text-center mt-4'>"+ tabName[3] +"</p> <br> <p class='text-center '>Cout : "+ tabCost[3]  +"</p> <br> <p class='text-center'>Fire Rate : "+ tabDegat[3] +"</p>";


    a1.textContent = tabName[0];
    a2.textContent = tabName[1];
    a3.textContent = tabName[2];
    a4.textContent = tabName[3];


    
})


dropdown.addEventListener('change', () =>{ 

    if (dropdown.value === '1'){

        arme1.hidden = false;

        arme2.hidden = true;
        arme3.hidden = true;
        arme4.hidden = true;


    }
    if (dropdown.value === '2'){

        arme1.hidden = true;

        arme2.hidden = false;
        arme3.hidden = true;
        arme4.hidden = true;



        
    }
    if (dropdown.value === '3'){

        arme1.hidden = true;

        arme2.hidden = true;
        arme3.hidden = false;
        arme4.hidden = true;


        
    }
    if (dropdown.value === '4'){


        arme1.hidden = true;

        arme2.hidden = true;
        arme3.hidden = true;
        arme4.hidden = false;

        
    }



})

