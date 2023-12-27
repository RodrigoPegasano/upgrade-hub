// CÓDIGO POKEAPI

const ol = document.querySelector('ol');

// Búcle para recorrer los 150 primeros pokémon
for (let id = 1; id <= 150; id++) {

    // Fetch para buscar los pokémon por id
    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const res = await response.json();
        pokemonNewCard(res);
        // console.log(res);
    }

    const pokemonNewCard = (pokemon) => {

        // Creamos un li que será para cada card de cada pokémon
        const newLi = document.createElement('li');

        // Separamos los datos que vamos a querer de cada pokémon
        // pokemonName: busca el nombre del pokémon y lo pasa a mayúsculas
        // pokemonId: busca el id del pokémon
        // pokemonType: busca el tipo de pokemon
        const pokemonName = pokemon.name.toUpperCase();
        const pokemonId = pokemon.id;
        const pokemonType1 = pokemon.types[0].type.name;

        // Condicional para que agregue la imágen del tipo de pokemon dependiendo del valor de la variable "pokemonType"
        let typeImage;

        if (pokemonType1 == "grass") {
            typeImage = "../PokeAPI/images/pokemon-types/grass.svg";
            typeAlt = "grass";
        } else if (pokemonType1 == "water") {
            typeImage = "../PokeAPI/images/pokemon-types/water.svg";
            typeAlt = "water";
        } else if (pokemonType1 == "ghost") {
            typeImage = "../PokeAPI/images/pokemon-types/ghost.svg";
            typeAlt = "ghost";
        } else if (pokemonType1 == "rock") {
            typeImage = "../PokeAPI/images/pokemon-types/rock.svg";
            typeAlt = "rock";
        } else if (pokemonType1 == "electric") {
            typeImage = "../PokeAPI/images/pokemon-types/electric.svg";
            typeAlt = "electric";
        } else if (pokemonType1 == "bug") {
            typeImage = "../PokeAPI/images/pokemon-types/bug.svg";
            typeAlt = "bug";
        } else if (pokemonType1 == "normal") {
            typeImage = "../PokeAPI/images/pokemon-types/normal.svg";
            typeAlt = "normal";
        } else if (pokemonType1 == "fire") {
            typeImage = "../PokeAPI/images/pokemon-types/fire.svg";
            typeAlt = "fire";
        } else if (pokemonType1 == "poison") {
            typeImage = "../PokeAPI/images/pokemon-types/poison.svg";
            typeAlt = "poison";
        } else if (pokemonType1 == "ice") {
            typeImage = "../PokeAPI/images/pokemon-types/ice.svg";
            typeAlt = "ice";
        } else if (pokemonType1 == "dragon") {
            typeImage = "../PokeAPI/images/pokemon-types/dragon.svg";
            typeAlt = "dragon";
        } else if (pokemonType1 == "ground") {
            typeImage = "../PokeAPI/images/pokemon-types/ground.svg";
            typeAlt = "ground";
        } else if (pokemonType1 == "psychic") {
            typeImage = "../PokeAPI/images/pokemon-types/psychic.svg";
            typeAlt = "psychic";
        } else if (pokemonType1 == "fighting") {
            typeImage = "../PokeAPI/images/pokemon-types/fighting.svg";
            typeAlt = "fighting";
        } else if (pokemonType1 == "fairy") {
            typeImage = "../PokeAPI/images/pokemon-types/fairy.svg";
            typeAlt = "fairy";
        }

        // Constante con el contenido que queremos adicionar en HTML
        const pokemonContentHTML = `
                <div class="card">
                    <p class="pokemon-number">${pokemonId}</p>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
                    <p class="pokemon-name">${pokemonName}</p>
                    <div class="type">
                        <img class="type-image" src=${typeImage} alt=${typeAlt}>
                        <p class="pokemon-type">${pokemonType1}</p>
                    </div>
                </div>
                `

        // Agrega el contenido HTML arriba a la página
        newLi.innerHTML = pokemonContentHTML;

        // Un evento para que los cards tengan color al pasar el mouse por arriba
        newLi.addEventListener("mouseover", () => {

            // Condicionales para el color de fondo dependiendo del tipo de pokemon
            if (pokemonType1 == "grass") {
                newLi.style.backgroundColor = "rgb(98, 188, 90, 0.9)";
            } else if (pokemonType1 == "water") {
                newLi.style.backgroundColor = "rgb(77, 143, 214, 0.9)";
            } else if (pokemonType1 == "ghost") {
                newLi.style.backgroundColor = "rgb(81, 105, 172, 0.95)";
            } else if (pokemonType1 == "rock") {
                newLi.style.backgroundColor = "rgb(200, 182, 138, 0.9)";
            } else if (pokemonType1 == "electric") {
                newLi.style.backgroundColor = "rgb(244, 210, 57, 0.9)";
            } else if (pokemonType1 == "bug") {
                newLi.style.backgroundColor = "rgb(145, 192, 44, 0.95)";
            } else if (pokemonType1 == "normal") {
                newLi.style.backgroundColor = "rgb(145, 152, 163, 0.9)";
            } else if (pokemonType1 == "fire") {
                newLi.style.backgroundColor = "rgb(255, 155, 84, 0.9)";
            } else if (pokemonType1 == "poison") {
                newLi.style.backgroundColor = "rgb(171, 106, 199, 0.9)";
            } else if (pokemonType1 == "ice") {
                newLi.style.backgroundColor = "rgb(116, 207, 192, 0.9)";
            } else if (pokemonType1 == "dragon") {
                newLi.style.backgroundColor = "rgb(10, 110, 197, 0.9)";
            } else if (pokemonType1 == "ground") {
                newLi.style.backgroundColor = "rgb(217, 118, 69, 0.9)";
            } else if (pokemonType1 == "psychic") {
                newLi.style.backgroundColor = "rgb(249, 112, 119, 0.9)";
            } else if (pokemonType1 == "fighting") {
                newLi.style.backgroundColor = "rgb(204, 62, 105, 0.9)";
            } else if (pokemonType1 == "fairy") {
                newLi.style.backgroundColor = "rgb(236, 145, 230, 0.9)";
            }

        })

        // Un evento para que los cards no tengan color al sacar el mouse de arriba
        newLi.addEventListener("mouseout", () => {

            newLi.style.backgroundColor = "#F0F0F0";

        })

        // Le asignamos el contenido en NewLI al Ol existente en nuestro HTML
        ol.appendChild(newLi);

    }

    getPokemon();

}

// CÓDIGO PARA EL INPUT
// Al escribir el nombre de un pokemon, lo busca y muestra en la página
// Problema 1: Al borrar, no vuelve a mostrar todos
// Problema 2: Al escribir otro pokemon, lo agrega en la página pero el que buscamos antes sigue ahí
const input = document.querySelector('.search-input');
const button = document.querySelector('.search-button');

const newOl = document.createElement('ol');
newOl.id = "pokedex";

// Evento para cuando escribimos algo en el input
input.addEventListener("input", () => {

    ol.remove();

    element = input.value;

    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
        const res = await response.json();
        // pokemonNewCard(res);
        console.log(res);
        searchPokemon(res);
    }

    const searchPokemon = (pokemon) => {

        const divPokemons = document.querySelector('.all-pokemons');

        const newLi = document.createElement('li');

        const pokemonName = pokemon.name.toUpperCase();
        const pokemonId = pokemon.id;
        const pokemonType1 = pokemon.types[0].type.name;

        let typeImage;

        // Condicional para que agregue la imágen del tipo de pokemon dependiendo del valor de la variable "pokemonType"
        if (pokemonType1 == "grass") {
            typeImage = "../PokeAPI/images/pokemon-types/grass.svg";
            typeAlt = "grass";
        } else if (pokemonType1 == "water") {
            typeImage = "../PokeAPI/images/pokemon-types/water.svg";
            typeAlt = "water";
        } else if (pokemonType1 == "ghost") {
            typeImage = "../PokeAPI/images/pokemon-types/ghost.svg";
            typeAlt = "ghost";
        } else if (pokemonType1 == "rock") {
            typeImage = "../PokeAPI/images/pokemon-types/rock.svg";
            typeAlt = "rock";
        } else if (pokemonType1 == "electric") {
            typeImage = "../PokeAPI/images/pokemon-types/electric.svg";
            typeAlt = "electric";
        } else if (pokemonType1 == "bug") {
            typeImage = "../PokeAPI/images/pokemon-types/bug.svg";
            typeAlt = "bug";
        } else if (pokemonType1 == "normal") {
            typeImage = "../PokeAPI/images/pokemon-types/normal.svg";
            typeAlt = "normal";
        } else if (pokemonType1 == "fire") {
            typeImage = "../PokeAPI/images/pokemon-types/fire.svg";
            typeAlt = "fire";
        } else if (pokemonType1 == "poison") {
            typeImage = "../PokeAPI/images/pokemon-types/poison.svg";
            typeAlt = "poison";
        } else if (pokemonType1 == "ice") {
            typeImage = "../PokeAPI/images/pokemon-types/ice.svg";
            typeAlt = "ice";
        } else if (pokemonType1 == "dragon") {
            typeImage = "../PokeAPI/images/pokemon-types/dragon.svg";
            typeAlt = "dragon";
        } else if (pokemonType1 == "ground") {
            typeImage = "../PokeAPI/images/pokemon-types/ground.svg";
            typeAlt = "ground";
        } else if (pokemonType1 == "psychic") {
            typeImage = "../PokeAPI/images/pokemon-types/psychic.svg";
            typeAlt = "psychic";
        } else if (pokemonType1 == "fighting") {
            typeImage = "../PokeAPI/images/pokemon-types/fighting.svg";
            typeAlt = "fighting";
        } else if (pokemonType1 == "fairy") {
            typeImage = "../PokeAPI/images/pokemon-types/fairy.svg";
            typeAlt = "fairy";
        }

        const pokemonContentHTML = `
            <div class="card">
                <p class="pokemon-number">${pokemonId}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png">
                <p class="pokemon-name">${pokemonName}</p>
                <div class="type">
                    <img class="type-image" src=${typeImage} alt=${typeAlt}>
                    <p class="pokemon-type">${pokemonType1}</p>
                </div>
            </div>
            `

        // Agrega el contenido HTML arriba a la página
        newLi.innerHTML = pokemonContentHTML;

        // Un evento para que los cards tengan color al pasar el mouse por arriba
        newLi.addEventListener("mouseover", () => {

            if (pokemonType1 == "grass") {
                newLi.style.backgroundColor = "rgb(98, 188, 90, 0.9)";
            } else if (pokemonType1 == "water") {
                newLi.style.backgroundColor = "rgb(77, 143, 214, 0.9)";
            } else if (pokemonType1 == "ghost") {
                newLi.style.backgroundColor = "rgb(81, 105, 172, 0.95)";
            } else if (pokemonType1 == "rock") {
                newLi.style.backgroundColor = "rgb(200, 182, 138, 0.9)";
            } else if (pokemonType1 == "electric") {
                newLi.style.backgroundColor = "rgb(244, 210, 57, 0.9)";
            } else if (pokemonType1 == "bug") {
                newLi.style.backgroundColor = "rgb(145, 192, 44, 0.95)";
            } else if (pokemonType1 == "normal") {
                newLi.style.backgroundColor = "rgb(145, 152, 163, 0.9)";
            } else if (pokemonType1 == "fire") {
                newLi.style.backgroundColor = "rgb(255, 155, 84, 0.9)";
            } else if (pokemonType1 == "poison") {
                newLi.style.backgroundColor = "rgb(171, 106, 199, 0.9)";
            } else if (pokemonType1 == "ice") {
                newLi.style.backgroundColor = "rgb(116, 207, 192, 0.9)";
            } else if (pokemonType1 == "dragon") {
                newLi.style.backgroundColor = "rgb(10, 110, 197, 0.9)";
            } else if (pokemonType1 == "ground") {
                newLi.style.backgroundColor = "rgb(217, 118, 69, 0.9)";
            } else if (pokemonType1 == "psychic") {
                newLi.style.backgroundColor = "rgb(249, 112, 119, 0.9)";
            } else if (pokemonType1 == "fighting") {
                newLi.style.backgroundColor = "rgb(204, 62, 105, 0.9)";
            } else if (pokemonType1 == "fairy") {
                newLi.style.backgroundColor = "rgb(236, 145, 230, 0.9)";
            }

        })

        // Un evento para que los cards no tengan color al sacar el mouse de arriba
        newLi.addEventListener("mouseout", () => {

            newLi.style.backgroundColor = "#F0F0F0";

        })

        divPokemons.appendChild(newOl);
        newOl.appendChild(newLi);

    }

    getPokemon();

})