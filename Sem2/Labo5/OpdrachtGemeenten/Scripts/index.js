const setup = () =>
{
    let dropBox = document.getElementById("dropBox")
    let input;
    let gemeentes = [];
    let optie;
    while(true)
    {
        input = window.prompt("Gemeente");
        if (input === "stop")
        {
            break;
        }
        gemeentes.push(input);
    }

    gemeentes.sort();

    for(let i = 0;i<gemeentes.length;i++)
    {
        optie = document.createElement("option");
        optie.textContent = gemeentes[i];
        dropBox.add(optie);

    }






}

window.addEventListener("load", setup);