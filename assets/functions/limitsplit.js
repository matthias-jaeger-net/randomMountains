function limitSplit(split, limit) {
   let result = [];
   let data = split;
   let range = split.length;
   for (let i = 0; i < range - limit; i++) {
      result.push(data[i]);
   }
   return result;
}
