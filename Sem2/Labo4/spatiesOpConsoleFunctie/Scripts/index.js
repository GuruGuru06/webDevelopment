const setup = () =>
{
    let button =document.getElementById('button');
    button.addEventListener('click',split );

}
const split =() =>
{
    let input = document.getElementById("input");

    console.log(addSpace(input.value));
}

const addSpace = (text) =>
{
    let result ="";
    result = text.replace(/ /g,"").split("").join(" ");
    return result;
}
window.addEventListener("load", setup);