let all;
let highEffort;
let lowEffort;
let retter = [];

function preload(){
    all = loadStrings('list.txt');
    highEffort = loadStrings('highEffort.txt');
    lowEffort = loadStrings('lowEffort.txt');
}

function setup(){
  createCanvas(600,600);
  all.splice(all.length-1 ,1);
  highEffort.splice(highEffort.length-1,1);
  lowEffort.splice(lowEffort.length-1,1);

  reroll();

}

function draw(){
  background(255);


  for (var i = 0; i < retter.length; i++) {
    text(retter[i],100,i*30 + 30);
  }

}

function reroll(){
  let nums = [];
  for (var i = 0; i < all.length; i++) {
    nums[i] = i;
  }
  console.log(nums);
  for (var i = 0; i < 7; i++) {
    let randNum = int(random(0,nums.length));
    retter[i] = all[nums[randNum]];
    nums.splice(randNum,1);

  }

}

function keyReleased() {
  if(key == "r"){
    reroll();
  }

}
