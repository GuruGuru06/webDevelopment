const change = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}



const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", change);



}

window.addEventListener("load", setup);