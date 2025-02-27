const setup = () =>
{
    console.log("Aantal met indexOf:", countOccurrencesIndexOf(text, "an"));
    console.log("Aantal met lastIndexOf:", countOccurrencesLastIndexOf(text, "an"));

}
const text = "De man van An geeft geen hand aan ambetante verwanten";

function countOccurrencesIndexOf(str, seq) {
    let count = 0;
    let pos = str.indexOf(seq);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(seq, pos + 1);
    }
    return count;
}

function countOccurrencesLastIndexOf(str, seq) {
    let count = 0;
    let pos = str.lastIndexOf(seq);
    while (pos !== -1) {
        count++;
        pos = str.lastIndexOf(seq, pos - 1);
    }
    return count;
}
window.addEventListener("load", setup);

