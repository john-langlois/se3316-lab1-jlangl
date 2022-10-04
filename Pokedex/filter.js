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
pokemonSearch = []

//html elements for input field
let nameInput = document.getElementById("name-input");
let numberInput = document.getElementById("number-input")
let searchResult = document.getElementById("search-result")

//event listeners for input submission, both click and on enter
nameInput.addEventListener("keyup",nameEnter);
numberInput.addEventListener("keyup",numberEnter);

//Letter functionality
//On enter event
function nameEnter() {
    if(!nameInput.value == ""){
        nameFilter(nameInput.value);
    }
}
//filter through pokemon info, if found, return boolean
nameFilter = (input) =>{
    if(!input == null || !input == "" && nameCheck(input)){ 
        pokemon.forEach(names=>{
            for(let value in names){
                if(value.name.includes(input.toLowerCase()) && pokemonSearch.length < 5 ){
                    pokemonSearch.push(names[value])
        }
    }
    })
    console.log(pokemonSearch)
    pokemonSearch.splice(0,pokemonSearch.length)
}
}
//Function to check if input is only characters from A-Z
function nameCheck(cond){
    let allowedLetters = /^[A-Za-z]+$/;
        if(cond.match(allowedLetters)){
            return true;
        }
        else{
            alert("Please enter only characters from a-z")
            nameInput.value = "";
        }
}

//Number Functionality
//On enter event
function numberEnter() {
    if(!numberInput.value == ""){
        numberFilter(numberInput.value);
    }
}

//filter through pokemon info, if found, return boolean
numberFilter = (input) =>{
    if(!input == null || !input == "" && numberCheck(input)){
    pokemon.forEach(e => {
        if(((e.id.includes(input.toLowerCase())) && pokemonSearch.length<5)){
            pokemonSearch.push(e.id,e.name,e.type);
        }
    })

    console.log(pokemonSearch)
    pokemonSearch.splice(0,pokemonSearch.length)
}
}

//Function to check if input is only numbers between 1-20
function numberCheck(cond){
        if(cond >= 1 && cond <= 20){
            return true;
        }
        else{
            alert("Please enter only numbers from 1-20")
            numberInput.value = ""
        }
}

function cardDisplay(){
    let card = document.createElement("li");
    let card_article =  document.createElement("article")
    card.appendChild(card_article)
    let card_image = document.createElement("img")
    card_article.appendChild(card_image)

    document.getElementById("search-results").appendChild(card)
    
}