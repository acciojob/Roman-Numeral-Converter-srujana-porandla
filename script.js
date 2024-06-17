function convertToRoman(num) {
  	const obj = {
		 0: ['M', 1000],
         1: ['CM', 900], // 900 = 1000 - 100 = M - C
         2: ['D', 500],
         3: ['CD', 400], // 400 = 500 - 100 = D - C
         4: ['C', 100],
         5: ['XC', 90],  // 90 = 100 - 10 = C - X
         6: ['L', 50],
         7: ['XL', 40],  // 40 = 50 - 10 = L - X
         8: ['X', 10],
         9: ['IX', 9],   // 9 = 10 - 1 = X - I
          10: ['V', 5],
         11: ['IV', 4],  // 4 = 5 - 1 = V - I
         12: ['I', 1]
      /*0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]*/
    };
	let roman = ""; 
	const romanSymbols = Object.values(obj);

    // Loop through the symbols, subtracting from the number and adding to the result
    for (let i = 0; i < romanSymbols.length; i++) {
        let symbol = romanSymbols[i][0];
        let value = romanSymbols[i][1];
        
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
