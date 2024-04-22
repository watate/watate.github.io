const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonImg = document.getElementById("pokemon-img");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const cleanInput = (input) => {
    return input.replace(/[!@#$%^&*(),.?":{}|<>]/g, '').toLowerCase();
}

const clearPokemon = () => {
    // Clear the text content of all the elements displaying Pokémon details
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    pokemonImg.innerHTML = "";  // Clear any images that might be displayed
    types.innerHTML = "";       // Clear all displayed types

    // Reset all stat fields
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
}


const getPokemon = async (event) => {
    event.preventDefault();
    clearPokemon();
    try {
        const pokemon = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + cleanInput(searchInput.value));
        const pdata = await pokemon.json();
        pokemonName.textContent = pdata.name.toUpperCase();
        pokemonId.textContent = `#${pdata.id}`;
        weight.textContent = `Weight: ${pdata.weight}`;
        height.textContent = `Height: ${pdata.height}`;
        pokemonImg.innerHTML = `<img id="sprite" src="${pdata.sprites.front_default}">`;
        for (const type of pdata.types) {
            types.innerHTML += `<div id="type">${type.type.name.toUpperCase()}</div>`;
        };
        hp.textContent = pdata.stats.find(stat => stat.stat.name === "hp")["base_stat"];
        attack.textContent = pdata.stats.find(stat => stat.stat.name === "attack")["base_stat"];
        defense.textContent = pdata.stats.find(stat => stat.stat.name === "defense")["base_stat"];
        specialAttack.textContent = pdata.stats.find(stat => stat.stat.name === "special-attack")["base_stat"];
        specialDefense.textContent = pdata.stats.find(stat => stat.stat.name === "special-defense")["base_stat"];
        speed.textContent = pdata.stats.find(stat => stat.stat.name === "speed")["base_stat"];
        
        searchInput.value = "";

    } catch (err) {
        alert("Pokémon not found");
        return;
    }
}

searchBtn.addEventListener("click", getPokemon);