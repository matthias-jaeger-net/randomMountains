function setup() {
   createCanvas(windowWidth, windowHeight);

   let dark = returnShader(900, width / 2, height);
   image(dark, 0, 0);

   let bright = returnShader(100, width / 2, height);
   image(bright, width / 2, 0);
}


/*
*   @function  returnShader()
*   @param     (density) Number of random points
*   @param     (boxwidth) Width of the bounding box in pixels
*   @param     (boxheight) Height of the bounding box in pixels
*/

function returnShader(density, boxwidth, boxheight) {
   // A new p5 offsceen graphics buffer
   let graphic = createGraphics(boxwidth, boxheight);
   graphic.background(255);
   graphic.stroke(0);
   graphic.strokeWeight(4);

   // Shade the graphic accoding to the density
   for (let i = 0; i < density; i++) {
      graphic.point(random(boxwidth), random(boxheight));
   }
   // Return the graphic to be used in setup();
   // let shader = returnShader(100, width, height);
   return graphic;
}
