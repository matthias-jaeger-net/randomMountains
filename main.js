function setup() {
   createCanvas(800, 800);
   colorMode(HSB);
   noStroke();
   for (i = 255; i > 0; i--) {
      mountain(i);
   }
}
