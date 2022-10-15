const gameData = [
    {
        gameName: "Spider-Man",
        description: "Play as Spider-Man and swing through New York City as defeating evil.",
        age: 14
    },
    {
        gameName: "MVP Baseball",
        description: "Play as some of the best teams as you try to make your way to the top of the MLB.",
        age: 12
    }, 
    {
        gameName: "Mario Kart",
        description: "Race through various obstacles with your friends and see whos comes out on top.",
        age: 7
    },
    {
        gameName: "NBA 2K23",
        description: "Play against your friends in the most realsitc basketball game to date!",
        age: 14
    },
    {
        gameName: "Ghost of Tsushima",
        description: "Battle through ancient Japan as a wandering samurai fighting your way through evils in search of treasure.",
        age: 18
    },
    {
        gameName: "Fortnite",
        description: "Battle royal where you can build to help protect your lead and strive for victory.",
        age: 12
    }
    
];   

const displayGames = () => {
    let clearDisplay = document.querySelector(".list");
    clearDisplay.innerHTML = ` `
    gameData.forEach((element) => {
        if (element.gameName != ' '){
            let displayGame = document.querySelector(".list");
            displayGame.innerHTML += `<br>${element.gameName}</br>`;
        }
    })

};
displayGames();

const choice = () => {
    let choice = document.querySelector("#choice").value;
    console.log(choice)
    if(choice === "C"){
        console.log("create");
        createObject();
    }
    else if(choice === "R"){
        console.log("read");
        readObject();
    }
    else if(choice === "U"){
        console.log("update");
        updateObject();
    }
    else if(choice === "D"){
        console.log("Delete");
        deleteObject();
    }
    else{
        alert("Something went wrong or invalid input")
    }
};

const createObject = function(){
    let createName = prompt("Enter the game name: ");
    let createDescription = prompt("Enter description of the game: ");
    let createAge = prompt("Enter the age rating of the game: ");
    gameData.push({
        gameName: createName,
        description: createDescription,
        age: createAge,
    })
    displayGames();
};

const readObject = function(){
    let readGame = prompt("Enter the game name from the list you want to learn more about (case sensitive): ")
    let selectedChoice = gameData.find((element) => element.gameName === readGame)
    let infoDisplay = document.querySelector(".info");
    infoDisplay.innerHTML = `The game you chose was ${selectedChoice.gameName}. The description of the game is: ${selectedChoice.description}.
    and the age rating for ${selectedChoice.gameName} is ${selectedChoice.age}.`
};

const updateObject = function(){
    let updateChoice = prompt("Enter the game name from the list that you want to update its information (case sensitive):  ")
    let selectedUpdate = gameData.findIndex((element => element.gameName === updateChoice))
    gameData[selectedUpdate].gameName = prompt("Enter what you would like the name to change to: ");
    gameData[selectedUpdate].description = prompt("Enter what you would like to change the description to: ");
    gameData[selectedUpdate].age = prompt("Enter what you would like to change the age rating to: ");
    displayGames()
}

const deleteObject = function(){
    let deleteChoice = prompt("Enter the game from the list that you want to delete: ")
    let selectDelete = gameData.findIndex(index => index.gameName === deleteChoice);
    gameData.splice(selectDelete,1)
    displayGames()
};
