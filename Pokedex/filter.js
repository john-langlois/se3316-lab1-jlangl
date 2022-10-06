pokemon = [
    {
        "name":"bulbasaur",
        "id" : "001",
        "type" : "grass,poison",
        "src": "pokemon/1.png"
    },
    {
        "name":"ivysaur",
        "id" : "002",
        "type" : "grass,poison",
        "src": "pokemon/2.png"
    },
    {
        "name":"venusaur",
        "id" : "003",
        "type" : "grass,poison",
        "src": "pokemon/3.png"
    },
    {
        "name":"charmander",
        "id" : "004",
        "type" : "fire",
        "src": "pokemon/4.png"
    },
    {
        "name":"charmeleon",
        "id" : "005",
        "type" : "fire",
        "src": "pokemon/5.png"
    },
    {
        "name":"charizard",
        "id" : "006",
        "type" : "fire,flying",
        "src": "pokemon/6.png"
    },
    {
        "name":"squirtle",
        "id" : "007",
        "type" : "water",
        "src": "pokemon/7.png"
    },
    {
        "name":"wartortle",
        "id" : "008",
        "type" : "water",
        "src": "pokemon/8.png"
    },
    {
        "name":"blastoise",
        "id" : "009",
        "type" : "water",
        "src": "pokemon/9.png"
    },
    {
        "name":"caterpie",
        "id" : "010",
        "type" : "bug",
        "src": "pokemon/10.png"
    },
    {
        "name":"metapod",
        "id" : "011",
        "type" : "bug",
        "src": "pokemon/11.png"
    },
    {
        "name":"butterfree",
        "id" : "012",
        "type" : "bug,flying",
        "src": "pokemon/12.png"
    },
    {
        "name":"weedle",
        "id" : "013",
        "type" : "bug,poison",
        "src": "pokemon/13.png"
    },
    {
        "name":"kakuna",
        "id" : "014",
        "type" : "bug,poison",
        "src": "pokemon/14.png"
    },
    {
        "name":"beedrill",
        "id" : "015",
        "type" : "bug,poison",
        "src": "pokemon/15.png"
    },
    {
        "name":"pidgey",
        "id" : "016",
        "type" : "normal,flying",
        "src": "pokemon/16.png"
    },
    {
        "name":"pidgeotto",
        "id" : "017",
        "type" :"normal,flying",
        "src": "pokemon/17.png"
    },
    {
        "name":"pidgeot",
        "id" : "018",
        "type" : "normal,flying",
        "src": "pokemon/18.png"
    },
    {
        "name":"rattata",
        "id" : "019",
        "type" : "normal",
        "src": "pokemon/19.png"
    },
    {
        "name":"ratticate",
        "id" : "020",
        "type" : "normal",
        "src": "pokemon/20.png"
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
        nameFilter(nameInput.value);
}
//filter through pokemon info, if found, return boolean
nameFilter = (input) =>{
    pokemonSearch = []
    let child = searchResult.lastElementChild;
  while (child) {
    searchResult.removeChild(child);
    child = searchResult.lastElementChild;
  }
    if(!input == null || !input == "" && nameCheck(input)){ 
        pokemon.forEach(e => {
            if(((e.name.includes(input.toLowerCase())) && pokemonSearch.length<5)){
                let typeArr = e.type.split(',')
                pokemonSearch.push([e.name,e.id,e.src,typeArr[0],typeArr[1]])
            }
        })
        pokemonSearch.forEach(e=>{
            cardDisplay(e)
        })
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
        numberFilter(numberInput.value);
}

//filter through pokemon info, if found, return boolean
numberFilter = (input) =>{
pokemonSearch = []
    let child = searchResult.lastElementChild;
  while (child) {
    searchResult.removeChild(child);
    child = searchResult.lastElementChild;
  }
    
    if(!input == null || !input == "" && numberCheck(input)){
    pokemon.forEach(e => {
        if(((e.id.includes(input.toLowerCase())) && pokemonSearch.length<5)){
            let typeArr = e.type.split(',')
            pokemonSearch.push([e.name,e.id,e.src,typeArr[0],typeArr[1]])
        }
    })
    pokemonSearch.forEach(e=>{
        cardDisplay(e)
    })
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


//creating each component that makes up the card component 
function cardDisplay(arr){
        var card = document.createElement("li");
        card.id = 'dynamic-ul'
        let card_article =  document.createElement("article")
        card.appendChild(card_article)

        card_article.classList.add('bg-search')

        let card_image = document.createElement("img")
        card_image.src = arr[2]
        card_image.alt = ""
        card_article.appendChild(card_image)

        let card_text = document.createElement("div")
        let text_title = document.createElement("h3")
        let text_id = document.createElement("h2")
        let btn1 = document.createElement("btn")
        

        card_text.classList.add('text')
        btn1.classList.add(arr[3],"search-button")

        let btn2 = document.createElement("btn")
        btn2.classList.add(arr[4],"search-button")
        
    
        card_article.appendChild(card_text)
        card_text.appendChild(text_title)
        card_text.appendChild(text_id)
        card_text.appendChild(btn1)
        card_text.appendChild(btn2)

    
        text_title.innerText = arr[0]
        text_id.innerText = arr[1]
        btn1.innerText = arr[3]
        btn2.innerText = arr[4]

        searchResult.appendChild(card)
}