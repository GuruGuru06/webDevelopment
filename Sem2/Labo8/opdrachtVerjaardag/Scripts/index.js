const setup = () =>
{
    const date = new Date(2006, 1,9);
    const today = new Date();

    const tijdTussen = Math.abs(today-date);
    const dagenTussen = Math.round(tijdTussen / (1000 * 60 * 60 * 24));

    console.log(dagenTussen);

}

window.addEventListener("load", setup);