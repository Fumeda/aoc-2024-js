//get data
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const lines = data.split(/\n/);

const left_table = [];
const right_table = [];

let values = []

lines.map(function (element, index, array) {
    values.push(element.split("   "))
})


values.map(function (element, index, array) {
    left_table.push(element[0]);
    right_table.push(element[1]);
});

//function 1, calculate the distance between elements
left_table.sort(function (a, b) { return a - b });
right_table.sort(function (a, b) { return a - b });

let distance = 0

for(i=0;i<lines.length;i++){
    distance += Math.abs(left_table[i] - right_table[i]); 
}

console.log("The distance is: " + distance);

//function 2, calculate the similarity score
let similarity = 0;

for(i=0;i<lines.length;i++){
    similarity += left_table[i] * (right_table.filter((el) => el == Number(left_table[i])).length);
}
console.log("The similarity score is: " + similarity);