let arr = [];
console.log(arr.indexOf(arr));

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let ans = arr1.splice(-1, 3); // from index 1 to remove no of elements(3)
console.log(ans);

console.log(arr1);

var arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let ans1 = arr2.toString();
console.log(ans1);
console.log(typeof ans1);

let match = ans1.match(/a/g);
console.log(match);
console.log(match.length);
 
// find vowels
let str = 'the wedding ceremony of a pranav';

let voewls = ['a','e','i','o','u','A','E','I','O','U'];
let vowelsSet = new Set();

for(let i=0; i<str.length; i++){
    if(voewls.includes(str[i])){ 
        vowelsSet.add(str[i])
    }
}
console.log(vowelsSet);
vowelsArray = Array.from(vowelsSet);
console.log(vowelsArray);


// find vowels count

function vowelCount(str){

    let vowelList = 'aeiouAEIOU';

    let words = str.split('');
console.log(words);

let  vowelsCount = words.map(word => {
     return vowelList.includes(word) ? 1 : 0;

});
console.log(vowelsCount);
var totalCount = vowelsCount.reduce(function(acc, curr) {
    return acc + curr;
  },0);

  return totalCount;
}


console.log(vowelCount('the wedding ceremony of a pranav'));



// 
function sumValues(x,y,z){
    return x + y + z;
}
console.log(sumValues(...[10,20,30]));

// 

const name  = 'code step by step';
console.log(!typeof name === 'object');  // false
console.log(!typeof name === 'string');  // false

// how to find os name

//? navigator.platform

// 
for(var i=0; i<3; i++){
    setTimeout(() => console.log(i),1);
}                        // o/p 3 3 3

//
for(let i=0; i<3; i++){
    setTimeout(() => console.log(i),1);
}        // o/p 0 1 2

//

let a = 3;
let b = new Number(3);
console.log(typeof b);
console.log(typeof a);
console.log(a == b);
console.log(a === b);

//  
for(let i=1; i<5; i++){
    if(i === 3) continue;
        console.log(i)
}

// 
function getName(member){
    member.name = 'sunil';
}

const person = {name : 'anil'};

getName(person);
console.log(person);