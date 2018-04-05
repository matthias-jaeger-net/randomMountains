// Tools for drawing a mountain landscape

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(255);
   fill(0, 10);
   noStroke();

   var lines = [];
   var total = 10;

   while (total--) {
      var left = createVector(-10, random(0, height));
      var right = createVector(width + 10, random(0, height));
      lines.push([left, right]);
   }

   total = lines.length;
   while (total--) {
      noiseShape(lines[total][0], lines[total][1], random(100, 300), random(100, 200), random(0.02, 0.1));
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
