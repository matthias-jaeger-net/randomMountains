function Mountain(x, y, w, h) {

   // Calculate colors
   let bright = color(255);
   let dark = color(0);


   // Calculate vertices
   let top = createVector(x + w / 2, y);
   let center = createVector(x + w / 2, y + h);
   let left = createVector(x, y + h);
   let right = createVector(x + w, y + h);

   // Calculate offsets
   top.x = top.x + random(-w / 4, w / 4);
   top.y = top.y + random(w / 4);
   center.x = center.x + random(-w / 4, w / 4);

   // Calculate random splits
   let csplits = randomSplit(top, center, floor(random(20)), w);
   let lsplits = randomSplit(left, top, floor(random(20)), w);
   let rsplits = randomSplit(right, top, floor(random(20)), w);


   // Draw left shape
   beginShape();
      for (let lsplit of lsplits) {
         vertex(lsplit.x, lsplit.y);
      }
      for (let csplit of csplits) {
         vertex(csplit.x, csplit.y);
      }
   endShape();

   // Draw right shape
   beginShape();
      for (let rsplit of rsplits) {
         vertex(rsplit.x, rsplit.y);
      }
      for (let csplit of csplits) {
         vertex(csplit.x, csplit.y);
      }
   endShape();

}
