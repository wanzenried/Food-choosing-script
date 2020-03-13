let t;


function setup() {
  // put setup code here
  createCanvas(600,600);
  // loadFile("retter-liste.txt")


  let request = async () => {
    let response = await fetch("list.txt");
    let text = await response.text();
    let arr = text.split("\n");
    console.log(arr.length);
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



  }
  request();



}

function draw() {
  // put drawing code here
  // console.log(t == undefined);

}
