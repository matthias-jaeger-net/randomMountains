function Mountain(layer) {

   let mx = 0;
   let rx = random(-width, width);

   push();
   translate(0, height);
   translate(rx, 0);
   w = floor(random(50, 50 + layer)) + layer;
   o = 0 //floor(random(-50, 50));

   let bright = color(layer + o / 2, 80, 60);
   let dark = color(layer + o / 2 + 10, 80, 60);

   fill(bright);
   beginShape();
   vertex(0, 0);
   vertex(w, 0);
   vertex(w + o * 2, -w/3);
   vertex(w + o, -w);
   endShape(CLOSE);

   fill(dark);
   translate(w, 0);
   beginShape();
   vertex(0, 0);
   vertex(w, 0);
   vertex(o, -w);
   vertex(o * 2, -w/3);
   endShape(CLOSE);
   pop();

}
