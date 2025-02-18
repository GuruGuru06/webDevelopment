
const setup = () =>
{
  let famm = ["thibeau","thomas","kobe","jasmine","robbe"];
  console.log(famm.length);

  console.log(famm[0]);
  console.log(famm[2]);
  console.log(famm[4]);

  const voegNaamtoe = () =>
  {
    famm.push( prompt("voeg niewe naam toe"));
  }
  voegNaamtoe();
  console.log(famm);
  console.log(famm.toString());
}

window.addEventListener("load", setup);