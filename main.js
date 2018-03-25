let mountains = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
   colorMode(HSB);

   let scl = height-200;
   let nx = 0;

   for (let i = scl; i > 0; i--) {
      scl--;
      mountains.push(new Mountain(random(-width, width), height - scl, scl*random(1, 3), scl));
   }
}
