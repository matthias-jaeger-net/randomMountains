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
