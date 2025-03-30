const setup = () =>
{
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementsByClassName("button");

    for (let i = 0; i < sliders.length; i++)
    {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    button.addEventListener("click", update);


}

const update = () =>
{
    let sliders = document.getElementsByClassName("slider");
    let colorDemos=document.getElementsByClassName("colorDemo");


    let Rv = document.getElementsByClassName("R");
    let Gv = document.getElementsByClassName("G");
    let Bv = document.getElementsByClassName("B");

    let R = sliders[0].value;
    let G = sliders[1].value;
    let B = sliders[2].value;

    colorDemos[0].style.backgroundColor="rgb("+R+", "+G+", "+B+")";

    Rv[0].textContent = R;
    Gv[0].textContent =G;
    Bv[0].textContent = B;

}

const save = () =>{
    let colorDemos=document.getElementsByClassName("colorDemo");
    document.createElement(<div>dsqfdsqfds</div>);

}

window.addEventListener("load", setup);