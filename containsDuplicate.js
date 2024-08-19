function Duplicate(values) {
//   let isDuplicate = false;

//   for (i = 0; i < values.length; i++) {
//     for (j = 0; j < values.length; j++) {
//       if (i !== j && values[i] === values[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (isDuplicate) break;
//   }

//   return isDuplicate

const s = new Set(values); return s.size !== values.length
}

console.log( Duplicate([1, 2, 3, 4]));
