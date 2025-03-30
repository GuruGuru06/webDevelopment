let global =
{
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    aantalkaartenInSpel:6,
    KAARTEN: ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"],
    cardsTurned: []
}


const setup = () =>
{
    let cards = global.KAARTEN.concat(global.KAARTEN);
    cards.sort(()=> Math.random() - 0.5);

    let kaarten = document.getElementsByTagName("img");

    for (let i = 0; i < kaarten.length; i++)
    {
        kaarten.item(i).src="images/achterkant.png";
        kaarten[i].className = cards[i];
        kaarten.item(i).addEventListener("click", () =>turnAround(kaarten[i]));
    }




}

const turnAround=(card)=>
{
        card.src = "images/"+ card.className;
        global.cardsTurned.push(card);

        if(global.cardsTurned.length === 2)
        {
            compareCards();
        }

}

const turnBack=(card)=>
{
    card.src ="images/achterkant.png";
    global.cardsTurned.remove(card);
}

const compareCards =() =>
{
    if(global.cardsTurned[0].className === global.cardsTurned[1].className)
    {
        setTimeout( () =>{global.cardsTurned[0].style.visibility = "hidden";},500);
        setTimeout( () =>{global.cardsTurned[1].style.visibility = "hidden";},500);
        global.aantalkaartenInSpel--;
        checkIfGameEnds();
    }
    else
    {
        setTimeout( () =>turnBack(global.cardsTurned[0]),500);
        setTimeout( () =>turnBack(global.cardsTurned[1]),500);

    }

    setTimeout(   () =>{global.cardsTurned = []},500);

}

const checkIfGameEnds = () =>
{
    if(global.aantalkaartenInSpel === 0)
    {
        window.alert("You won!")
    }

}



window.addEventListener("load", setup);