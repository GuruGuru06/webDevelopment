const setup = () =>
{
    console.log(printTrigrams("onoorbaar"));

}
const printTrigrams = (woord) =>
{
    let output="";

    for (let i = 0; i < woord.length -2; i++)
    {
        output += woord.substring(i, i+3) +"\n";
    }

    return output;
}

window.addEventListener("load", setup);