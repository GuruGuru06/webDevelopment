const setup = () =>
{
    let button =document.getElementById('button');
    button.addEventListener('click',split );

}
const split =() =>
{
    let input = document.getElementById("input");

console.log( input.value.replace(/ /g,"").split("").join(" "));

}
window.addEventListener("load", setup);