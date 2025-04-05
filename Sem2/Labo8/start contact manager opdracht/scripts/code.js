let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () =>
{
    let list = document.getElementById("lstPersonen");


    valideer();
    let isValid = true;
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++)
    {
        if(input[i].classList.contains("invalid"))
        {
         isValid = false;
        }
    }

    if(isValid) {
        let persoon =
            {
                voornaam: document.getElementById("txtVoornaam").value,
                familienaam: document.getElementById("txtFamilienaam").value,
                geboortedatum: document.getElementById("txtGeboorteDatum").value,
                email: document.getElementById("txtEmail").value,
                aantalKinderen: document.getElementById("txtAantalKinderen").value
            }

        if (list.selectedIndex === -1) {


            personen.push(persoon);

            let option = document.createElement("option");
            option.textContent = persoon.voornaam + " " + persoon.familienaam;
            option.value = persoon.familienaam + persoon.geboortedatum;
            list.appendChild(option);
        }
        else
        {
            let persoonIndex;
            for(let i = 0; i < personen.length; ++i)
            {
                if(personen[i].voornaam +" "+personen[i].familienaam === list.options[list.selectedIndex].textContent)
                {
                    persoonIndex=i;
                }
            }

            personen[persoonIndex] = persoon;

        }
    }





};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let list = document.getElementById("lstPersonen");

    document.getElementById("txtVoornaam").value ="";
    document.getElementById("txtFamilienaam").value ="";
    document.getElementById("txtGeboorteDatum").value="";
    document.getElementById("txtEmail").value="";
    document.getElementById("txtAantalKinderen").value="";
    list.selectedIndex = -1;
};

const showInfo = () =>
{
    let list = document.getElementById("lstPersonen");

    let persoonIndex = -1;
    console.log(personen + persoonIndex);
    for (let i = 0; i < personen.length; ++i) {
        // Concatenate voornaam and geboortedatum correctly
        if (personen[i].voornaam +" "+personen[i].familienaam === list.options[list.selectedIndex].textContent) {
            persoonIndex = i;
            break;
        }}



    document.getElementById("txtVoornaam").value =personen[persoonIndex].voornaam;
    document.getElementById("txtFamilienaam").value =personen[persoonIndex].familienaam;
    document.getElementById("txtGeboorteDatum").value=personen[persoonIndex].geboortedatum;
    document.getElementById("txtEmail").value=personen[persoonIndex].email;
    document.getElementById("txtAantalKinderen").value=personen[persoonIndex].aantalKinderen;





}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change",showInfo );
};


window.addEventListener("load", setup);