
/*
 You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
*/


let money = 1000;
let orange = 600;
let apples = 200;

let totalCost = orange + apples;
let returnMoney = money - totalCost;
console.log(`shopkeeper will return : ${returnMoney}`);