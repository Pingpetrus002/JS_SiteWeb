function verse(){


 
    const verse1 = document.getElementById("verse1");
    const verse2 = document.getElementById("verse2");
    const verse3 = document.getElementById("verse3");
    const selection = document.getElementById("dropdown");
    selection.value = '1';
    
    verse2.hidden = true;
    verse3.hidden = true;
    
    selection.addEventListener('change', () => {
          if (selection.value === '1') {
            verse1.hidden = false;
            verse2.hidden = true;
            verse3.hidden = true;
          } else if(selection.value === '2'){
              verse2.hidden = false;
              verse1.hidden = true;
              verse3.hidden = true;
            }
            else if(selection.value === '3'){
                verse3.hidden = false;
                verse1.hidden = true;
                verse2.hidden = true;
              }
      })

    }
    
    
    
    
    const promise = new Promise((resolve, reject) =>{
      setTimeout(() => {
          const randomNumber = Math.floor(Math.random() * 10)
          if (randomNumber % 2 === 0) {
              resolve(randomNumber)
             
          } else {
              reject(new Error('Le nombre est impair.'))
          }
          
        
      }, 1000)
      
    })
    promise 
        .then(result => console.log(result))
        .catch(error => console.error(error.message))
    
    
    const logPoke = (index, list) =>{

        for(i = 0; i < index; i++ ){

            console.log(list.results[i].name);


        }

    }
    
    function fetchSomePokemon(){
      return fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
    }
    
    fetchSomePokemon().then((httpResponse) => {

        console.log("httpResponse : ", httpResponse)
        return httpResponse.json()

    }).then((pokemonList) =>{

        logPoke(2, pokemonList);


    });


    
    console.log()


    verse();