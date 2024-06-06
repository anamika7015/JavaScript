// fetch = Function used for making HTTP requests to fetch resources.
//        (JSON style data, images,files)
//         Simplifies asynchronous data feching in javaScript and 
//        used for interscting with APIs to retrieve and send
//        data asynchronous over the web.
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(Response =>{
// if(!Response.ok){
//     throw new Error("could not fetch resources");
// }
// return Response.json();
// } )
// .then(data => console.log(data))
// .catch(error => console.error(error));

fetchData();

async function fetchData() {
    try{

      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

      const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
       if (!Response.ok) {
        throw new Error("could not fetch resources")
       }
       const data = await Response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    }
    catch(error){
console.error(error);
    }
}