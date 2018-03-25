function Mountain(layer) {

   let mx = 120;
   let my = 120;

   let mw = 300;
   let mh = 300;


   noFill();


   // top
   ellipse(mx + mw / 2, my, 5, 5);
   // bottom center
   ellipse(mx + mw / 2, my + mh, 5, 5);
   // bottom left
   ellipse(mx, my + mh, 5, 5);
   // bottom right
   ellipse(mx + mw, my + mh, 5, 5);


   rect(mx, my, mw, mh);

   // Calculate vertices
   let top = createVector(mx + mw / 2, my);
   let center = createVector(mx + mw / 2, my + mh);
   let left = createVector(mx, my + mh);
   let right = createVector(mx + mw, my + mh);

   // Draw left shape
   beginShape();
   vertex(left.x, left.y);
   vertex(center.x, center.y);
   vertex(top.x, top.y);
   endShape(CLOSE);

   beginShape();
   vertex(right.x, right.y);
   vertex(center.x, center.y);
   vertex(top.x, top.y);
   endShape(CLOSE);



   //translate(mx, my);
   w = 10; //floor(random(50, 50 + layer)) + layer;
   o = 0; //floor(random(-50, 50));

   let bright = color(layer + o / 2, 80, 60);
   let dark = color(layer + o / 2 + 10, 80, 60);

   fill(bright);
   beginShape();
   vertex(0 + mx, 0);
   vertex(w + mx, 0);
   vertex(w + o * 2 + mx, -w / 3);
   vertex(w + o + mx, -w);
   endShape(CLOSE);

   fill(dark);
   beginShape();
   vertex(0 + w + mx, 0);
   vertex(w + w + mx, 0);
   vertex(o + w + mx, -w);
   vertex(o * 2 + w + mx, -w / 3);
   endShape(CLOSE);
   pop();


}
