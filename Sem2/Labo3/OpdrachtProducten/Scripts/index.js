const setup = () =>
{
    let button = document.getElementById("button")
    button.addEventListener("click",herbereken)

}
const herbereken = () =>
{
    let input = document.getElementsByClassName("input");
    let output = document.getElementsByClassName("output");
    let prijs = document.getElementsByClassName("prijs");
    let btw = document.getElementsByClassName("btw");
    let totaal  = document.getElementById("totaal");
    let berekening;
    let totaleBerekening = 0;

    for( let i = 0; i < input.length; i++ )
    {
        berekening = (input[i].value * parseFloat(prijs[i].textContent) * ((parseFloat(btw[i].textContent)/100) +1) );
        output[i].textContent = berekening.toFixed(2) +" Eur";
        totaleBerekening += berekening;
    }
    totaal.textContent = totaleBerekening.toFixed(2);

}
window.addEventListener("load", setup);