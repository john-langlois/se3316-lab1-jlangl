pokemon = [
    {
        "name":"bulbasaur",
        "id" : "001",
        "type" : "grass, poison"
    },
    {
        "name":"ivysaur",
        "id" : "002",
        "type" : "grass, poison"
    },
    {
        "name":"venusaur",
        "id" : "003",
        "type" : "grass, poison"
    },
    {
        "name":"charmander",
        "id" : "004",
        "type" : "Fire"
    },
    {
        "name":"charmeleon",
        "id" : "005",
        "type" : "Fire"
    },
    {
        "name":"charizard",
        "id" : "006",
        "type" : "Fire, Flying"
    },
    {
        "name":"squirtle",
        "id" : "007",
        "type" : "Water"
    },
    {
        "name":"wartortle",
        "id" : "008",
        "type" : "Water"
    },
    {
        "name":"blastoise",
        "id" : "009",
        "type" : "Water"
    },
    {
        "name":"caterpie",
        "id" : "010",
        "type" : "Bug"
    },
    {
        "name":"metapod",
        "id" : "011",
        "type" : "Bug"
    },
    {
        "name":"butterfree",
        "id" : "012",
        "type" : "Bug, Flying"
    },
    {
        "name":"weedle",
        "id" : "013",
        "type" : "Bug, Poison"
    },
    {
        "name":"kakuna",
        "id" : "014",
        "type" : "Bug, Poison"
    },
    {
        "name":"beedrill",
        "id" : "015",
        "type" : "Bug, Poison"
    },
    {
        "name":"pidgey",
        "id" : "016",
        "type" : "Normal, Flying"
    },
    {
        "name":"pidgeotto",
        "id" : "017",
        "type" :"Normal, Flying"
    },
    {
        "name":"pidgeot",
        "id" : "018",
        "type" : "Normal, Flying"
    },
    {
        "name":"rattata",
        "id" : "019",
        "type" : "Normal"
    },
    {
        "name":"ratticate",
        "id" : "020",
        "type" : "Normal"
    },
];
pokemonSearchNumber=[];
pokemonSearchLetter = [];

//html elements for input field
let nameInput = document.getElementById("name-input");
let numberInput = document.getElementById("number-input")

//event listeners for input submission, both click and on enter
nameInput.addEventListener("keydown",nameEnter);
numberInput.addEventListener("keydown",numberEnter);

//Letter functionality
//On enter event
function nameEnter(event) {
    if(event.key == "Enter"){
        nameFilter(nameInput.value);
        nameInput.value = "";
    }
}

//filter through pokemon info, if found, return boolean
nameFilter = (input) =>{
    if(!input == null || !input == ""){
    pokemon.forEach(e => {
        if(((e.name.includes(input.toLowerCase())) && pokemonSearchLetter.length<5)){
            pokemonSearchLetter.push("NUMBER:"+e.id + " NAME:"+ e.name+ " ABILITIES: " +e.type+ '');
        }
    })
    alert(pokemonSearchLetter)
    pokemonSearchLetter.splice(0,pokemonSearchLetter.length)
}
    else{
        console.log("Enter a valid search")
    } 
}


//Number Functionality
//On enter event
function numberEnter(event) {
    if(event.key == "Enter"){
        numberFilter(numberInput.value);
        numberInput.value = "";
    }
}

//filter through pokemon info, if found, return boolean
numberFilter = (input) =>{
    if(!input == null || !input == ""){
    pokemon.forEach(e => {
        if(((e.id.includes(input.toLowerCase())) && pokemonSearchNumber.length<5)){
            pokemonSearchNumber.push("NUMBER:"+e.id + " NAME:"+ e.name+ " ABILITIES: " +e.type);
        }
    })
    alert(pokemonSearchNumber)
    pokemonSearchNumber.splice(0,pokemonSearchNumber.length)
}
    else{
        console.log("Enter a valid search")
    } 
}