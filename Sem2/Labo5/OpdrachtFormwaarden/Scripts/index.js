const setup = () =>
{
    document.getElementById("button")
    .addEventListener("click",printForm)
}

const printForm =() =>
{
    event.preventDefault();
    let bestellingOutput = "bestelling bestaat uit ";

    const isRoker = document.getElementById("is_roker").checked;
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked')?.value;
    const buurland = document.getElementById("buurland").value;
    const bestellingSelect = document.getElementById("bestelling");
    const bestelling = Array.from(bestellingSelect.selectedOptions).map(option => option.value);

    if(isRoker)
    {
        console.log("is roker")
    }
    else
    {
        console.log("is geen roker")
    }

    console.log("moedertaal is "+moedertaal);
    console.log("Favoriete buurland is ", buurland);

    for(let i = 0;i<bestelling.length;i++)
    {
        bestellingOutput += bestelling[i] + " ";

    }
    console.log (bestellingOutput )
}

window.addEventListener("load", setup);