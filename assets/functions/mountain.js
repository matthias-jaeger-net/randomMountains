function Mountain(x, y, w, h) {


   // Calculate colors
   let bright = color(255);
   let dark = color(0);


   // Calculate vertices
   let top = createVector(x + w / 2, y);
   let center = createVector(x + w / 2, y + h);
   let left = createVector(x, y + h);
   let right = createVector(x + w, y + h);


   top.x += random(-w/4, w/4);
   top.y += random(w/4);
   center.x += random(-w/4, w/4);

   // Calculate random splits
   let csplits = randomSplit(center, top, 9, w);
   let lsplits = randomSplit(top, left, 9, w);
   let rsplits = randomSplit(top, right, 9, w);



   // Draw left shape
   fill(80);
   beginShape();
      for (let v of lsplits) {
         vertex(v.x, v.y);
         ellipse(v.x, v.y, 5, 5);
      }
      for (let v of csplits) {
         vertex(v.x, v.y);
         ellipse(v.x, v.y, 5, 5);
      }
   endShape();

   fill(60);
   beginShape();
      for (let v of rsplits) {
         vertex(v.x, v.y);
         ellipse(v.x, v.y, 5, 5);
      }
      for (let v of csplits) {
         vertex(v.x, v.y);
         ellipse(v.x, v.y, 5, 5);
      }
   endShape();


   // Background

   let rridge = limitSplit(rsplits, 3);
   let redge = createVector(x + w, y + h / 2);
   let re_splits = randomSplit(redge, center, 9, w);

   fill(80);
   beginShape();
   for (let v of re_splits) {
      vertex(v.x, v.y);
   }
   vertex(right.x, right.y);
   vertex(center.x, center.y);
   endShape(CLOSE);

   let lridge = limitSplit(lsplits, 3);
   let ledge = createVector(x, y + h / 2);
   let le_splits = randomSplit(ledge, center, 9, w);

   fill(60);
   beginShape();
   for (let v of le_splits) {
      vertex(v.x, v.y);
   }
   vertex(left.x, left.y);
   vertex(center.x-w/2, center.y);
   endShape(CLOSE);



}
