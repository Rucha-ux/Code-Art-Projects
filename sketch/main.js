function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    //background('#fdc12e');
    
  //BG1
    
    push();
    
    r=map(mouseX,0,600,27,252);
    g=map(mouseX,0,600,46,122);
    b=map(mouseX,0,600,115,36);
    background(r,g,b);
    fill(mouseX,mouseX,mouseX);
    
    pop();
    
  //shape1
    fill('#FBD503');
    noStroke();
    beginShape();
    
    vertex(411.63,0);
    vertex(600,0);
    vertex(600,600);
    vertex(385.11,600);
    vertex(333.02,407.62);
    
    endShape();
  
  //sun
  
    push();
    
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 80;
    drawingContext.shadowColor = '#F4EB2C';
    lineProperties();
    fill('#F4EB2C');
    //ellipse(142,96.36,130.4);  
   // ellipse(mouseX/5,92.36,130.4); 
    ellipse(map(mouseX,0,600,-100,65),92.36,130.4); 
  
    
    pop();
    
    
    
  //pillar rect
    
    noStroke();
    fill('#c5beb7');
    rect(0,195,55.75,405);
    
    
    
  //pillar lines
    
    lineProperties();
    gradientLine(0, 187, 200, 187, 15, 28, 30);
    //line(0,190.27,200,190.27);
   
    lineProperties();
    line(65,190,65,600);
    
  
    
  //earth-ground
    
    lineProperties();
    fill('#ada16f');
    ellipse(299,1022,973.07);
    
    
  //3 prongs lines (birth-life-death)
    
    lineProperties();
    line(265.79,0,265.79,77.6);
    
    lineProperties();
    line(308,0,308,78.04);
    
    lineProperties();
    line(359,0,359,78.04);
    
    
    
  //scene division
    lineProperties();
    line(407.87,14.95,381.74,170.61);
    
  
    
  //skull 
    
    //base
    
    noFill();
    beginShape();
    vertex(339.35, 444.64);
    bezierVertex(346.16, 466, 354, 497, 353.78, 530.43);
    endShape();
    
    
    //body
    noFill();
    beginShape();
    //Points 
    
    strokeWeight(4);
    //point(194,310);
    //point(215.39,247.92);
    //point(254.32,150.61);
    //point(116,419);
    //point(117,417);
    //point(210,280);
    //point(250,140);
    //point(335,140)
    //point(434.89,234);
    //point(420,360);
    //point(300,452.28);
    //point(200,350);
    
    
    strokeWeight(23);
    strokeCap(ROUND);
    fill('#E4E4E4')
    //curveVertex(194,310);
    //curveVertex(215.39,247.92);
    //curveVertex(254.32,150.61);
    curveVertex(116,419);
    curveVertex(117,417);
    curveVertex(210,280);
    curveVertex(250,140);
    curveVertex(345,140);
    curveVertex(434.89,234);
    curveVertex(420,360);
    curveVertex(300,452.28);
    //curveVertex(200,350);
    
    
    
   //bezierVertex(210, 250.5, 410,214,280.6, 455);
    
    endShape(CLOSE);
    
    //expressions (TODS)
    lineProperties();
    strokeWeight(20);
    ellipse(241.42,287.31,48.73,55.78);
    
    lineProperties();
    strokeWeight(20);
    line(290.43,220.56,290.43,317.67);
    
    lineProperties();
    strokeWeight(20);
    ellipse(321.69,233.86,63.51);
    
    /*noFill();
    beginShape();
    vertex(143.39, 386.37);
    bezierVertex(182.26, 379.56, 246.12, 374.66, 309.1, 379.56);
    endShape();*/
    
    noFill();
    beginShape();
    vertex(143.39, 386.37);
    bezierVertex(182.26, 379.56-mouseX/30, 246.12, 374.66-mouseX/30, 309.1, 379.56);
    endShape()
    
    noFill();
    beginShape();
    vertex(294.87, 425.17);
    bezierVertex(294.87, 380.18, 340.62, 350, 344.23, 318.32);
    endShape();
    
    
  //stickman
    
    push();
    
    /*drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 40;
    drawingContext.shadowColor = '#9E5F18';*/
    
    //face
     fill('#421a00');
     noStroke();
     ellipse(489.65,30,56.25);
    
    //torso
     /* lineProperties();
     beginShape();
    
     vertex(550.83,67.55);
     vertex(411.97,86.66);
     vertex(482.03,179.66);
     vertex(550.83,164.37);
     vertex(550.83,36.98);
    
     endShape(); */
    
     lineProperties();
     gradientLine(550.83, 67.55, 411.97, 86.66, 15, 28, 30);
     gradientLine(408, 84,482.03,179.66, 15, 20, 30);
     gradientLine(472,172.66,550.83,164.37, 28, 20, 30);
     gradientLine(548,174,550.83,36.98, 28, 15, 30);
    
    
     /*lineProperties();
     //drawVaryingWidthLine(550.83, 67.55, 411.97, 86.66, 3, 8);
    drawVaryingWidthLine(550, 67, 411,86, 0.5, 1.5);
     drawVaryingWidthLine(420, 84,460,176, 0.5, 1.5);
     drawVaryingWidthLine(472,172,550,164, 0.5, 1.5);
     drawVaryingWidthLine(548,174,550,36, 0.5, 1.5);
    
    function drawVaryingWidthLine(x1, y1, x2, y2,  startWidth, endWidth) 
      { 
    const halfStartWidth = startWidth / 2
    const halfEndwidth = endWidth / 2
    beginShape();
      vertex(x1 + halfStartWidth, y1 - halfStartWidth);
      vertex(x2 + halfEndwidth, y2 - halfEndwidth);
      vertex(x2 - halfEndwidth, y2 + halfEndwidth);
      vertex(x1 - halfStartWidth, y1 + halfStartWidth);
      vertex(x1 + halfStartWidth, y1 - halfStartWidth);
    endShape();
  }*/
    
    
    //left leg
    
    push();
    
    rotate(map(mouseX,0,600,0,PI/178));
    
    lineProperties();
    gradientLine(497.32, 173.29, 507.51, 466.3, 15, 28, 30);
   
    fill('#421a00');
    noStroke();
    rect(466.58,456.84,49,31);
    
    pop();
    
    //right leg
    
    push();
    
    rotate(map(mouseX,0,600,0,-PI/178));
    
    lineProperties();
    gradientLine(503.69, 333.81, 581.4, 452.28, 15, 20, 30);
    
    fill('#421a00');
    noStroke();
    quad(557.79,463.81,585.62,445.2,597.54,463.03,569.71,481.64);
    
    pop();
    
    
    pop();  
  
    
  }
  
  function lineProperties(){
    noFill();
    strokeWeight(28);
    stroke('#421a00');
    strokeCap(SQUARE);
    
  }
  
  
  //copied code
  function gradientLine(
    start_x,
    start_y,
    end_x,
    end_y,
    start_weight,
    end_weight,
    segments
  ) {
    let prev_loc_x = start_x;
    let prev_loc_y = start_y;
    for (let i = 1; i <= segments; i++) {
      let cur_loc_x = lerp(start_x, end_x, i / segments);
      let cur_loc_y = lerp(start_y, end_y, i / segments);
      push();
      strokeWeight(lerp(start_weight, end_weight, i / segments));
      line(prev_loc_x, prev_loc_y, cur_loc_x, cur_loc_y);
      pop();
      prev_loc_x = cur_loc_x;
      prev_loc_y = cur_loc_y;
    }
      
      
  
  
  }
  