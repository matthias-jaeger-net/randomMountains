// Draw split point
function randomSplit(targ, pos, fac, w) {
   let points = [];

   let target = targ.copy();
   let position = pos.copy();
   let direction = target.sub(position);
   let leng = direction.mag();
   let unit = direction.normalize();

   let segment = leng / fac;

   let scl = w / 100;

   points.push(position.add(target));
   position = pos.copy();

   for (let i = 1; i <= fac; i++) {
      points[i] = position.add(unit.mult(segment * i));
      if (i < fac-1) {
         points[i].x += random(-scl, scl);
      }
      position = pos.copy();
      unit = direction.normalize();
   }

   return points;
}
