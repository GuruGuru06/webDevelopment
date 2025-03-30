let global=
    {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0,// id van de timeout timer, zodat we die kunnen annuleren
        INTERVAL: 0

    }


const setup = () => {


    let button = document.getElementById('button');
    button.addEventListener('click',startGame)

};

const randomLocation = () =>
{
    let image = document.getElementById('object');

    image.style.left = Math.floor(Math.random() * (601 - 48))+"px";
    image.style.top = Math.floor(Math.random() * (801 -48))+"px";
}

const checkIfBomb =() =>
{
    let image = document.getElementById('object');
    if(image.src.endsWith( "images/0.png"))
    {
        window.alert("you died");
        clearInterval(global.INTERVAL);
    }
}

const changeImage = () =>
{
    let image = document.getElementById('object');
    image.src = "images/"+Math.floor(Math.random() * 5)+".png";
}

const newObject = () =>
{
    randomLocation();
    changeImage();
}

const click =()=>
{
    let image = document.getElementById('object');
    if(image.src.endsWith( "images/0.png"))
    {
        window.alert("you died");
        clearInterval(global.INTERVAL);
    }
    else
    {
        let scoreBoard = document.getElementById('score');
        newObject();
        global.score++;
        scoreBoard.innerText = "Jouw score: "+global.score;

    }


}

const startGame = () =>
{
    let image = document.getElementById('object');
    image.addEventListener('click',click)
   global.INTERVAL = setInterval(newObject, 1000);
}








window.addEventListener("load", setup);


