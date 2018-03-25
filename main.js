let mountains = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
   colorMode(HSB);
/*
   let scl = 500;
   let nx = 0;

   for (let i = scl; i > 0; i--) {
      scl--;
      mountains.push(new Mountain(random(-width, width), height - scl, scl * random(1, 3), scl));
   }

*/

   let w = width / 3;
   let h = height / 3 ;

   let x = 0;
   let y = height -  h;

   mountains.push(new Mountain(x + w * 0, y, w, h));
   mountains.push(new Mountain(x + w * 1, y, w, h));
   mountains.push(new Mountain(x + w * 2, y, w, h));


}
