

function setup() {
  // put setup code here
  createCanvas(600,600);
  // loadFile("retter-liste.txt")
  console.log((await loadFile("retter-liste.txt")));
}

function draw() {
  // put drawing code here
}

function loadFile(path) {
  let d1;
   fetch(path).then((response) => {
    return response.text();

  }).then((data) => {
    console.log(typeof(data));
  })
  return d1;
}

function convertToArray(file) {

}
