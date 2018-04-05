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
      noiseLine(lines[total][0], lines[total][1], random(100, 300), random(100, 200), random(0.02, 0.1));
   }

}

/*
*   @function  shadeMountain()
*   @param     (density) Number of random points
*   @param     (boxwidth) Width of the bounding box in pixels
*   @param     (boxheight) Height of the bounding box in pixels
*/

function shadeMountain(x, y, w, h) {
   // Calculate vertices
   let t = createVector(x + w / 2, y);
   let c = createVector(x + w / 2, y + h);
   let l = createVector(x, y + h);
   let r = createVector(x + w, y + h);

   let triangleA = [t, c, l];
   let triangleB = [t, c, r];

   strokeWeight(3);
   noFill();
   noiseLine(t, c, 300, 10, 0.2);
   noiseLine(t, l, 300, 10, 0.2);
   noiseLine(t, r, 300, 10, 0.4);

   //Shade background images
   let dark = returnShader(9900, w, h, triangleA);
   image(dark, 0, 0);

   let bright = returnShader(1900, w, h, triangleB);
   image(bright, 0, 0);
}


/*
*   @function  returnShader()
*   @param     (density) Number of random points
*   @param     (boxwidth) Width of the bounding box in pixels
*   @param     (boxheight) Height of the bounding box in pixels
*/

function returnShader(density, boxwidth, boxheight, vertices) {

   // A new p5 offsceen graphics buffer
   let graphic = createGraphics(boxwidth, boxheight);
   graphic.stroke(0);
   graphic.strokeWeight(4);

   // Shade the graphic accoding to the density
   for (let i = 0; i < density; i++) {
      let p = createVector(random(boxwidth), random(boxheight))
      if (barycentricCoordinates(vertices, p)) {
         graphic.point(p.x, p.y);
      }
   }
   // Return the graphic to be used in setup();
   // let shader = returnShader(100, width, height);
   return graphic;
}

/*
*   @function  barycentricCoordinates()
*
*   @param     (p) test if p is in triangle p1, p2, p3
*   @param     (p1) p5 vector
*   @param     (p2) p5 vector
*   @param     (p3) p5 vector
*/

function barycentricCoordinates(vertices, p) {

   let p1 = vertices[0];
   let p2 = vertices[1];
   let p3 = vertices[2];

   let alpha = ((p2.y - p3.y)*(p.x - p3.x) + (p3.x - p2.x)*(p.y - p3.y)) /
               ((p2.y - p3.y)*(p1.x - p3.x) + (p3.x - p2.x)*(p1.y - p3.y));
   let beta =  ((p3.y - p1.y)*(p.x - p3.x) + (p1.x - p3.x)*(p.y - p3.y)) /
               ((p2.y - p3.y)*(p1.x - p3.x) + (p3.x - p2.x)*(p1.y - p3.y));
   let gamma = 1.0 - alpha - beta;


   if (alpha > 0 && beta > 0 && gamma > 0) {
      return true;
   } else {
      return false;
   }

}

/*
*   noiseLine()
*
*   @param     (tar) Target p5 vector object
*   @param     (pos) Position p5 vector object
*   @param     (density) Division factor
*/

function noiseLine(tar, pos, density, scaler, ninc) {
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
