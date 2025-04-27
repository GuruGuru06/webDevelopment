const storeSliderValues = () =>
{
    let sliders =
        {
            red: document.getElementById("sldRed").value,
            green: document.getElementById("sldGreen").value,
            blue: document.getElementById("sldBlue").value
        };
    localStorage.setItem("sliderValues", JSON.stringify(sliders));
};

const restoreSliderValues = () =>
{
    let sliders = JSON.parse(localStorage.getItem("sliderValues"));
    if (sliders)
    {
        document.getElementById("sldRed").value = sliders.red;
        document.getElementById("sldGreen").value = sliders.green;
        document.getElementById("sldBlue").value = sliders.blue;
    }
};

const storeSwatches = () =>
{
    let swatches = [];
    let swatchComponents = document.getElementById("swatchComponents").children;

    for (let i = 0; i < swatchComponents.length; i++)
    {
        let swatch = swatchComponents[i];
        swatches.push
        ({
            red: swatch.dataset.red,
            green: swatch.dataset.green,
            blue: swatch.dataset.blue
        });
    }

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () =>
{
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    if (swatches)
    {
        for (let i = 0; i < swatches.length; i++)
        {
            let color = swatches[i];
            addSwatchComponent(color.red, color.green, color.blue);
        }
    }
};
