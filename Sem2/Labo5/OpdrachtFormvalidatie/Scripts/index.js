const setup = () =>
{
    let button = document.getElementById("button");
    button.addEventListener("click",validate);

}
const validate = () =>
{
    event.preventDefault();
    let voornaam = document.getElementById("voornaam");
    let errorVN = document.getElementById("errorVN");
    let naam = document.getElementById("naam");
    let errorN = document.getElementById("errorN");
    let bdate = document.getElementById("bdate");
    let errorBD = document.getElementById("errorBD");
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEM");
    let kinderen = document.getElementById("kinderen");
    let kinderennum = parseFloat(kinderen.value)
    let errorKinderen = document.getElementById("errorK");
    let isValid = true;

    if(voornaam.value.length > 30)
    {
        errorVN.innerText = "max. 30 karakters";
        voornaam.classList.add("error");
        isValid = false;
    }
    else
    {
        voornaam.classList.remove("error");
        errorVN.innerText = "";
    }

    if(naam.value.length > 50)
    {
        errorN.innerText = "max 50 karakters";
        naam.classList.add("error");
        isValid = false;

    }
    else if(naam.value ==="")
    {
            errorN.innerText = "verplicht veld";
            naam.classList.add("error");
            isValid = false;
    }
    else
    {
        naam.classList.remove("error");
        errorN.innerText = "";
    }

    if(bdate.value === "" )
    {
        errorBD.innerText = "verplicht veld";
        bdate.classList.add("error");
        isValid = false;
    }
    else if(bdate.value.substr(2,1) !=="-"&& bdate.value.substr(5,1) !=="-" )
    {
        errorBD.innerText = "formaat is niet jjjj-mm-dd";
        bdate.classList.add("error");
        isValid = false;
    }
    else
    {
        errorBD.innerText = "";
        bdate.classList.remove("error");
    }

    if(email.value === "")
    {
        errorEmail.innerText = "verplicht veld";
        email.classList.add("error");
        isValid = false;
    }
    else if(!(email.value.includes("@")&& email.value.indexOf('@') >= 1 && email.value.indexOf("@") < email.value.length -1))
    {
        errorEmail.innerText = "geen geldig email adres";
        email.classList.add("error");
        isValid = false;
    }
    else
    {
        errorEmail.innerText = "";
        email.classList.remove("error");
    }

    if(isNaN(kinderennum) || kinderennum <= 0)
    {
        errorKinderen.innerText = "is geen positief getal";
        kinderen.classList.add("error");
        isValid = false;
    }
    else if(kinderennum > 99)
    {
        errorKinderen.innerText = "is te vruchtbaar";
        kinderen.classList.add("error");
        isValid = false;
    }
    else
    {
        errorKinderen.innerText = "";
        kinderen.classList.remove("error");
    }

    if(isValid)
    {
        window.alert("proficiat!");
    }




}
window.addEventListener("load", setup);