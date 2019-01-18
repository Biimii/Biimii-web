//Rectangles going from left to right at different speeds
var count = 0;
// initialize a counter variable
function setup() {
createCanvas(800, 300);
}
function draw() {
background(220);
// declaration of variables
var x=-width/5 + count;

var y= height/5 ;
// rectangle 1
  fill(66, 134, 244)
  rect(x,y,100,30)
  count= count+ 1;
// rectangle 2
  fill(161,57,173);
rect(x+ count ,y+50,100, 30);

  //rectangle 3
  fill(193,27,63);
rect(x+ count*2  ,y+100,100,30)
 ;
//rectangle 4
    fill(196,133,31);
rect(x+count*3 ,y+150,100,30);
  ;  
  //rectangle 5 
    fill(4,232,4173);
rect(x+count*4 ,y+200,100,30);
  ;
}
