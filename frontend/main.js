const searchForm = document.getElementById("game-form");
const searchFormInput = document.getElementById("gamename");

let gamesData = [
    {
        id: 1,
        game_name: "clash of clans",
        game_category: ["Arcade"],
        game_platform: ["Mobile"],
        game_popularity: "High"
    },
    {
        id: 2,
        game_name: "apex legends",
        game_category: ["Arcade"],
        game_platform: ["PC"],
        game_popularity: "High"
    },
    {
        id: 3,
        game_name: "a bird story",
        game_category: ["Adventure"],
        game_platform: ["PC"],
        game_popularity: "Medium"
    }
]

//1. search on form submit
//2. search on each input enter
//3. search on click of dropdown result list


searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const gameName = document.getElementById("gamename");

    if(gameName.value != '') {
        console.log("Game entered by user: " + gameName.value)
        //fetch the games name from the DB
        let enteredValue = gameName.value.toLowerCase();
        let foundGames = gamesData.find((game) => {
            console.log("Game found in Find Loop: " + game.game_name);
            if(game.game_name == enteredValue) {
                console.log("Game Matched: " + game.game_name);
                return game;
            }
        });

        console.log(foundGames);
    }
   
});

searchFormInput.addEventListener("input", function (event) {
    event.preventDefault();
    
    const results = document.getElementById("searched-results");
    results.style.display = "block";
    results.innerHTML = "";
    
    let insertedValue = searchFormInput.value;

    if(insertedValue.length < 1) {
        results.style.display = "none";
        results.innerHTML = "";
        return;
    }

    const createdUl = document.createElement("ul");
    
    gamesData.filter((game) => {
        if(game.game_name.includes(insertedValue.toLowerCase())) {
            return game;
        }
    }).forEach((game) => {

        const li = document.createElement("li");
        li.innerText = game.game_name;
        createdUl.appendChild(li);
    });

    results.appendChild(createdUl);
});

