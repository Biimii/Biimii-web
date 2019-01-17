function setup() {
  createCanvas(800, 800);
}	
var CenterX= 600 
var CenterY= 500

function draw() {
  background(220,220,220);
	line(CenterX, CenterY, CenterX-400, CenterY);
	line(CenterX, CenterY, CenterX+100, CenterY-100);
	line(CenterX+100,CenterY-100 , CenterX-100, CenterY-310);
	line(CenterX-100, CenterY-310, CenterX-310, CenterY-310);
	line(CenterX-310, CenterY-310, CenterX-400, CenterY);
 

	//TOWER OF LONDON
	ellipse(CenterX-50, CenterY-50, 50, 50) 
	fill (100, 186, 140)
	
	//ST PAUL'S 
	ellipse(CenterX-290, CenterY-100, 100, 100) 
	fill (100, 186, 140)
}
