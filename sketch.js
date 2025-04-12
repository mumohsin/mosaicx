//this is the legal intellectual property  of Muhammad Usama Mohsin and should not be replicated or used for commercial use unless first consulting the owner of the intellectual property

let x1, x2, y2, x3, y3, x4;
let range = 250; // color range
let field;


function setup() {
  let maxSize = min(windowWidth, windowHeight) - 20;
  createCanvas((maxSize*2/3), maxSize);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  translate(width / 2, height / 2);
  let petals = floor(random(8, 40));
  let layers = random(4, 40);
  let ang = 360 / petals;
  let rMax = width / 4 ;
// fill an array with color
  let numColors = random(4, 8);
  let palette = [];
  let col = random(360);
  for (let p = 0; p < numColors - 1; p++) {
    palette.push(col);
    col = col + range / numColors;
    if (col > 359) {
      col = col - range;
    }
  }

 let hue = palette[floor(random(numColors-1))];  
        let sat = random(50, 100);
        let brt = random(50, 100);
        let alph = 100; //random(40, 100);
        fill(hue, sat, brt, alph);
     
  rectMode(CENTER);
  noStroke();
  rect(0, 0, (width*3/4),(height-(0.25*width)));
      

  
  
  //This is the outer circle of medallion
push();
  hue = palette[floor(random(numColors-1))];  
         sat = 100;//random(0, 100);
         brt = 25;//random(0, 100);
         alph = 100; //random(40, 100);
        fill(hue, sat, brt, alph);
   for (let k = 0; k < 10; k ++) {
      
    noStroke();
     ellipse(0, 0, height/3, height/1.5);
    rotate(12*ang);
  }
  pop();
  
  // This below creates the medallion in the center of the carpet
  //create each layer with different variables
  // 
  push();
  for (let j = layers; j > 0; j--) {
    let ly = j / layers;
     let currR = (j / layers) * rMax;
    //current radius
        x1 = random(0.35 * currR, 0.45 * currR);
        x2 = random(0.5 * currR, 0.7 * currR);
        let maxY2 = x2 * tan(ang) * 0.9;
        y2 = random(0.06 * currR, maxY2);
        //y2= x2*tan(ang);
        x3 = random(x2 * 1.1, 0.85 * currR);
        let maxY3 = x3 * tan(ang) * 0.9;
        y3 = random(0.06 * currR, maxY3);
        x4 = random(0.88 * currR, 0.99 * currR);
        let hue = palette[floor(random(numColors-1))];
        let sat = 100; //random(70, 100);
        let brt = 100; //random(70, 100);
        let alph = 35; //random(40, 100);
        fill(hue, sat, brt, alph);

    // draw the petals for one layer
    for (let i = 0; i < petals; i++) {
      noStroke();
      //stroke(0,0,0);
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, y2);
      curveVertex(x3, y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, -y2);
      curveVertex(x3, -y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      //stroke(hue,sat,brt,alph);
      strokeWeight(5);
      //line(x1,0,x4,0);
      rotate(ang);
    }rotate(ang/2); 
  }
  pop();


  

  //this is making the outermost and innermost borders
      hue = palette[floor(random(numColors-1))];  
         sat = random(50, 100);
         brt = random(50, 100);
         alph = 100; //random(40, 100);
        fill(hue, sat, brt, alph);
beginShape();
noStroke();  
vertex((-width/2), (-height/2));
vertex((width/2), (-height/2));
vertex((width/2), (height/2));
vertex((-width/2), (height/2));
vertex(((-width/2)+(width/32)), ((height/2)-(width/32)));
vertex(((width/2)-(width/32)), ((height/2)-(width/32)));
vertex(((width/2)-(width/32)), ((-height/2)+(width/32)));
vertex(((-width/2)+(width/32)), ((-height/2)+(width/32)));
vertex(((-width/2)+(width/32)), ((height/2)-(width/32)));
vertex(((-width/2)), (height/2)); 
endShape(CLOSE);  
  
beginShape();
noStroke();  
vertex(((-width/2)+(width*3/32)), ((-height/2)+(width*3/32)));
vertex(((width/2)-(width*3/32)), ((-height/2)+(width*3/32)));
vertex(((width/2)-(width*3/32)), ((height/2)-(width*3/32)));
vertex(((-width/2)+(width*3/32)), ((height/2)-(width*3/32)));

vertex(((-width/2)+(width/8)), ((height/2)-(width/8)));
vertex(((width/2)-(width/8)), ((height/2)-(width/8)));
vertex(((width/2)-(width/8)), ((-height/2)+(width/8)));
vertex(((-width/2)+(width/8)), ((-height/2)+(width/8)));
vertex(((-width/2)+(width/8)), ((height/2)-(width/8)));
vertex(((-width/2)+(width*3/32)), ((height/2)-(width*3/32)));
endShape(CLOSE);  
 
    //this is middle big border
      hue = palette[floor(random(numColors-1))];  
         sat = random(50, 100);
         brt = random(50, 100);
         alph = 100; //random(40, 100);
        fill(hue, sat, brt, alph);
beginShape();
noStroke();  
vertex(((-width/2)+(width/32)), ((-height/2)+(width/32)));
vertex(((width/2)-(width/32)), ((-height/2)+(width/32)));
vertex(((width/2)-(width/32)), ((height/2)-(width/32)));
vertex(((-width/2)+(width/32)), ((height/2)-(width/32)));

vertex(((-width/2)+(width*3/32)), ((height/2)-(width*3/32)));
vertex(((width/2)-(width*3/32)), ((height/2)-(width*3/32)));
vertex(((width/2)-(width*3/32)), ((-height/2)+(width*3/32)));
vertex(((-width/2)+(width*3/32)), ((-height/2)+(width*3/32)));
vertex(((-width/2)+(width*3/32)), ((height/2)-(width*3/32)));
vertex(((-width/2)+(width/32)), ((height/2)-(width/32)));
endShape(CLOSE);
}


//trying to work on the pattern to fill the frame 
// I need to figure out how to do create Graphic and then try and fill the border shape with that. That's probably the approach that would be needed
 function draw() {

  let frameY = (height - (width / 16));
  let frameX = (width - (width / 16 ));
  let borderMax = (width / 16);
    for(let x = borderMax; x < frameX+borderMax; x += (1.55*borderMax)){
        let y = borderMax;
      noStroke();
      fill(255, 0, 255, 100);
      circle(x, y, 0.5* borderMax);
      
    }
      for(let y = borderMax; y < frameY+borderMax; y += (1.57*borderMax)){
       let x = borderMax;
      noStroke();
      fill(255, 0, 255, 100);
      circle(x, y, 0.5* borderMax);
   }
    let frameY2 = (height - (width / 16));
  let frameX2 = (width - (width / 16 ));
  let borderMax2 = (height*245/256);
    for(let x2 = borderMax; x2 < frameX2+borderMax; x2 += (1.55*borderMax)){
        let y2 = borderMax2;
      noStroke();
      fill(255, 0, 255, 100);
      circle(x2, y2, 0.5* borderMax);
      
    }
     let borderMax3 = (width*15/16);

      for(let y2 = borderMax; y2 < frameY2+borderMax; y2 += (1.57*borderMax)){
       let x2 = borderMax3;
      noStroke();
      fill(255, 0, 255, 100);
      circle(x2, y2, 0.5* borderMax);
   }
 }