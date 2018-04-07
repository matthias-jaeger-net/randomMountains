// Tools for drawing a mountain landscape

function setup() {
   createCanvas(windowWidth, windowHeight);

   // Image Effects using a p5 image object
   var img = createImage(800, 800);
   img.loadPixels();
   for(x = 0; x < img.width; x++) {
      for(y = 0; y < img.height; y++) {
         a = map(y, 0, img.height, 255, 0);
         //img.set(x, y, [a, random(20, 80), a, random(20, 80)]);
         // A beautiful error
        img.set(x, y, [0, random(20, 80), a, random(20, 80)]);
      }
   }
   img.updatePixels();
   background(img);

   //fill(10, 0, random(100, 255), 20);
   noStroke();

   var moonwidth = random(100, 900)
   fill(255, 102);
   ellipse(width/2+random(-0.5,0.5), height/4+random(-0.5,0.5), moonwidth, moonwidth);


   var lines = [];
   var total = 10;

   while (total--) {
      var left = createVector(-10, random(0, height));
      var right = createVector(width + 10, random(0, height));
      lines.push([left, right]);
   }

   total = lines.length;
   while (total--) {
      fill(random(255), random(255), map(total, 0, lines.length, 100, 30), 30);
      noiseShape(lines[total][0], lines[total][1], random(100, 300), random(100, 200), random(0.02, 0.1));
   }
}

function draw() {

   if(frameCount < 100) {
      fill(0, 5);
      var darstart = createVector(-100, random(height/2, height));
      var darkend = createVector(width + 100, random(height/2, height));
      noiseShape(darstart, darkend, 26, 100, random(0.03, 0.73));

   } else {
      noLoop();
   }


}

/*
*   noiseShape()
*
*   @param     (tar) Target p5 vector object
*   @param     (pos) Position p5 vector object
*   @param     (density) Division factor
*/

function noiseShape(tar, pos, density, scaler, ninc) {
   var points = [];

   var target = tar.copy();
   var position = pos.copy();
   var direction = target.sub(position);
   var leng = direction.mag();
   var unit = direction.normalize();
   var segment = leng / density;

   points.push(position.add(target));
   position = pos.copy();

   var n = 0;

   for (var i = 1; i < density + 1; i++) {
      points[i] = position.add(unit.mult(segment * i));
      if (i < density) {
         points[i].y = points[i].y + noise(n) * scaler;
         n += ninc;
      }
      position = pos.copy();
      unit = direction.normalize();
   }

   beginShape();
   index = points.length;
   while (index--) {
      vertex(points[index].x, points[index].y);
   }
   vertex(width, height);
   vertex(0, height);
   endShape(CLOSE);
}
