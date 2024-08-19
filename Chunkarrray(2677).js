// Function to chunk an array into smaller arrays of a specified size
function chunkArray(array, size) {
    const result = [];
    
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    
    return result;
  }
  

 console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9],4));
  
  