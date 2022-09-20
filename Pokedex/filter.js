pokemon = [
    {
        "name":"bulbasaur",
        "id" : "001",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"ivysaur",
        "id" : "002",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"venusaur",
        "id" : "003",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"charmander",
        "id" : "004",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"charmeleon",
        "id" : "005",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"charizard",
        "id" : "006",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"squirtle",
        "id" : "007",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"wartortle",
        "id" : "008",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"blastoise",
        "id" : "009",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"caterpie",
        "id" : "010",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"metapod",
        "id" : "011",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"butterfree",
        "id" : "012",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"weedle",
        "id" : "013",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"kakuna",
        "id" : "014",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"beedrill",
        "id" : "015",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"pidgey",
        "id" : "016",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"pidgeotto",
        "id" : "017",
        "type" :"grass, poison, vine whip"
    },
    {
        "name":"pidgeot",
        "id" : "018",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"rattata",
        "id" : "019",
        "type" : "grass, poison, vine whip"
    },
    {
        "name":"ratticate",
        "id" : "020",
        "type" : "grass, poison, vine whip"
    },
];
pokemonSearchNumber=[];
pokemonSearchLetter = [];

let nameInput = document.getElementById("nameInput");
let submit =  document.getElementById("nameSubmit");
//submit.addEventListener("click",nameFilter(nameInput));

nameFilter = (input) =>{
    pokemon.forEach(e => {
        if((e.name.includes(input.toLowerCase())||e.type.includes(input.toLowerCase()))&& pokemonSearchLetter.length<5){
        pokemonSearchLetter.push("NUMBER:"+e.id + " NAME:"+ e.name+ " ABILITIES: " +e.type);
        }
        else if(input == null || input == ""){
            alert("Please enter a valid search of letters")
            }
        })
    console.log(pokemonSearchLetter)
    }

    numberFilter = (input) =>{
        pokemon.forEach(e => {
            if((e.id.includes(input.toLowerCase()))&& pokemonSearchNumber.length<5){
            pokemonSearchNumber.push("NUMBER:"+e.id + " NAME:"+ e.name+ " ABILITIES: " +e.type);
            }
        })
        console.log(pokemonSearchNumber)
    }

    nameFilter("B");
    numberFilter("3")

    
