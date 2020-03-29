let t;

let lowEffortLoaded = false;
let highEffortLoaded = false;

let rotation = 0;


function setup() {
  // put setup code here
  createCanvas(600,600);
  angleMode(DEGREES);
  textAlign(CENTER,CENTER);
  // loadFile("retter-liste.txt")


  let request = async () => {
    let response = await fetch("list.txt");
    let text = await response.text();
    let arr = text.split("\n");
    console.log(arr.length);
    console.log(arr[arr.length-1]);
    let nums = [];
    for (var i = 0; i < arr.length; i++) {
      nums[i] = i;
    }
    console.log(nums);
    let retter = [];
    for (var i = 0; i < 7; i++) {
      let randNum = int(random(0,nums.length));
      retter[i] = arr[nums[randNum]];
      nums.splice(randNum,1);
      // array.splice(i, 1)

    }

    console.log(retter);
    lowEffortLoaded = true;
    highEffortLoaded = true;



  }
  request();



}

function draw() {
  background(0);

if (lowEffortLoaded && highEffortLoaded) {
  loaded();
} else {
  loading();
}

}

function loading() {
translate(width/2,height/2);
fill(255);
noStroke();
text("loading, please wait",0,100);
rotate(rotation);
for (var i = 0; i < 10; i++) {
  push();
  rotate(i/10*360);
  translate(0,50);
  fill(255,255,255,i/10*255);
  ellipse(0,0,10,10);
  pop();
}
rotation += 0.1 * deltaTime;
if (rotation > 360) {
  rotation -= 360;
}
console.log("hei");
}

function loaded() {

}
