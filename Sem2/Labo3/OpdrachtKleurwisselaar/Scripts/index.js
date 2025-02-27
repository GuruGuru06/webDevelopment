const setup = () =>
{
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");

   b1.addEventListener("click", () =>changeColor(b1));
    b2.addEventListener("click", () =>changeColor(b2));
    b3.addEventListener("click", () =>changeColor(b3));

}

const changeColor = (button) =>
{
    button.classList.toggle("color");
}

window.addEventListener("load", setup);