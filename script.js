function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
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
