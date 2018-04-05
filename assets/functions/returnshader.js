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
