let food;
let veganDays;
let button;
let retter = [];

function preload(){
  food = loadJSON('foodlist.json');
}

function setup() {
  createCanvas(600,600);
  background(200);
  veganDays = createSelect();
  veganDays.position(40,40);
  veganDays.option(0);
  veganDays.option(1);
  veganDays.option(2);
  veganDays.option(3);
  veganDays.option(4);
  veganDays.option(5);
  veganDays.option(6);
  veganDays.option(7);
  // veganDays.disable('Please select');
  veganDays.selected(0);

  button = createButton('create plan');
  button.position(40,80);
  button.mousePressed(reRoll);



  console.log(food.food.main.length);
}

function draw() {
  background(200);

  for (var i = 0; i < retter.length; i++) {
    text(retter[i],100,i*30 + 150);
  }

}

function reRoll() {
  let nums = [];
  for (var i = 0; i < food.food.main.length; i++) {
    nums[i] = i;
  }
  console.log(nums);
  for (var i = 0; i < 7; i++) {
    let randNum = int(random(0,nums.length));
    retter[i] = food.food.main[nums[randNum]].name;
    nums.splice(randNum,1);

  }
}
