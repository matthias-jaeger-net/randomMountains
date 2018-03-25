function setup() {
   createCanvas(windowWidth, windowHeight);
   noStroke();
   for (i = 255; i > 0; i--) {
      mountain(i);
   }
}
