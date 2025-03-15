const setup = () =>
{
   let zin ="Gisteren zat de jongen op de stoep en at de helft van de appel";
   zin = zin.replace(/\bde\b/g, "het");
   console.log(zin);

}



window.addEventListener("load", setup);