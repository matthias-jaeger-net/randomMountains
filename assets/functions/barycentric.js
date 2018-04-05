/*
*   @function  barycentricCoordinates()
*
*   @param     (p) test if p is in triangle p1, p2, p3
*   @param     (p1) p5 vector
*   @param     (p2) p5 vector
*   @param     (p3) p5 vector
*/

function barycentricCoordinates(vertices, p) {

   let p1 = vertices[0];
   let p2 = vertices[1];
   let p3 = vertices[2];

   let alpha = ((p2.y - p3.y)*(p.x - p3.x) + (p3.x - p2.x)*(p.y - p3.y)) /
               ((p2.y - p3.y)*(p1.x - p3.x) + (p3.x - p2.x)*(p1.y - p3.y));
   let beta =  ((p3.y - p1.y)*(p.x - p3.x) + (p1.x - p3.x)*(p.y - p3.y)) /
               ((p2.y - p3.y)*(p1.x - p3.x) + (p3.x - p2.x)*(p1.y - p3.y));
   let gamma = 1.0 - alpha - beta;


   if (alpha > 0 && beta > 0 && gamma > 0) {
      return true;
   } else {
      return false;
   }

}
