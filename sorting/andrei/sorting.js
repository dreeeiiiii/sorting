const search = document.getElementById("search");
const image = document.getElementById("image");


async function FetchingData (){
    const pokemonsName = document.getElementById("pokemonsName").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsName}`);

        if(!response.ok){
            throw new Error("please Enter a pokemon");
        }
        const data = await response.json();
        const pokemonPicture = data.sprites.front_default;
        

        image.src = pokemonPicture;
        image.style.display = "block";
        
    }
    catch(error){
        console.error(error);
    }
}