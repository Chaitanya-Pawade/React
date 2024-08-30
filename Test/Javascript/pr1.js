import React, { useState } from "react";

export default function All() {
  const [input, setInput] = useState("");
  const [evenCount, setEvenCount] = useState(0);
  const [oddCount, setOddCount] = useState(0);
  const [sumOfThreeHighestNums, setSumOfThreeHighestNums] = useState(0); // Initialize as 0 instead of []
  const [sumOfThirdHighestAndLowest, setSumOfThirdHighestAndLowest] = useState(0); // Initialize as 0 instead of []
  const [allZeros, setAllZeros] = useState([]);
  const [GoldenNo, setGoldenNo] = useState("");
  const [GoldenNo1, setGoldenNo1] = useState("");
  const [sumOfEvenNums, setSumOfEvenNums] = useState(0);
  const [sumOfOddNums, setSumOfOddNums] = useState(0);
  const [replaceRepeatedNums, setReplaceRepeatedNums] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputArray = input.split("").map(Number);
    console.log(inputArray);

    const uniqueValues = [...new Set(inputArray)];
    console.log(uniqueValues);

    findEvenCount(uniqueValues);
    findOddCount(uniqueValues);
    findSumOfThreeHighestNums(uniqueValues);
    findsumOfThirdHighestAndLowest(uniqueValues);
    findAllZeros(uniqueValues);
    findGoldenNumber(uniqueValues);
    findGoldenNumber2(uniqueValues);
    findSumOfEvenNums(uniqueValues);
    findSumOfOddNums(uniqueValues);
    const replacedArray = replaceRepeatedNumbers(inputArray); // Corrected assignment

    setReplaceRepeatedNums(replacedArray); // Update state with replaced array
  }

  // Q 1 find even nums
  function findEvenCount(uniqueValues) {
    let count = 0;
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] % 2 === 0) {
        count++;
      }
    }
    setEvenCount(count);
  }

  // Q 2 find odd numbers
  function findOddCount(uniqueValues) {
    let count = 0;
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] % 2 !== 0) {
        count++;
      }
    }
    setOddCount(count);
  }

  // Q 3 find sum of 3 highest numbers
  function findSumOfThreeHighestNums(uniqueValues) {
    const sorted = uniqueValues.sort((a, b) => b - a);
    const sum = sorted.slice(0, 3).reduce((acc, val) => acc + val, 0); // Initialize accumulator with 0

    setSumOfThreeHighestNums(sum);
  }

  // Q 4 find 3rd highest number + lowest number
  function findsumOfThirdHighestAndLowest(uniqueValues) {
    const sortedArray = [...uniqueValues].sort((a, b) => a - b);
    const lowestValue = sortedArray[0];
    const thirdHighestNumber = sortedArray[sortedArray.length - 3];

    const sum = thirdHighestNumber + lowestValue;
    setSumOfThirdHighestAndLowest(sum);
  }

  // Q 5 All zeros are on the right side (at the end)
  function findAllZeros(uniqueValues) {
    let nonZero = uniqueValues.filter((val) => val !== 0);
    let zeros = uniqueValues.filter((val) => val === 0);
    let zerosOnTheRight = nonZero.concat(zeros);
    setAllZeros(zerosOnTheRight);
  }

  // Q 6 check if the sum of elements divided by 5 is a golden number
  function findGoldenNumber(uniqueValues) {
    let sumOfEle = uniqueValues.reduce((sum, val) => sum + val, 0); // Initialize accumulator with 0

    if (sumOfEle % 5 === 0) {
      setGoldenNo("Yes, it is a golden number");
    } else {
      setGoldenNo("No, it is not a golden number");
    }
  }

  // Q 7 check if the sum of elements divided by count of elements is a golden number
  function findGoldenNumber2(uniqueValues) {
    let sumOfEle = uniqueValues.reduce((sum, val) => sum + val, 0); // Initialize accumulator with 0

    if (sumOfEle % uniqueValues.length === 0) {
      setGoldenNo1("Yes, it is a golden number");
    } else {
      setGoldenNo1("No, it is not a golden number");
    }
  }

  // Q 8 find sum of even numbers
  function findSumOfEvenNums(uniqueValues) {
    let sum = 0;
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] % 2 === 0) {
        sum += uniqueValues[i];
      }
    }
    setSumOfEvenNums(sum);
  }

  // Q 9 find sum of odd numbers
  function findSumOfOddNums(uniqueValues) {
    let sum = 0;
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] % 2 !== 0) {
        sum += uniqueValues[i];
      }
    }
    setSumOfOddNums(sum);
  }

  // Q 10 replace repeated numbers with zero
  function replaceRepeatedNumbers(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] === inputArray[i + 1]) {
        inputArray[i + 1] = 0;
      }
    }
    return inputArray; // Return modified array
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input</label>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Submit</button>
        </div>
        <div>
          <p>Count of even numbers is : {evenCount}</p>
          <p>Count of odd numbers is : {oddCount}</p>
          <p>Addition of 3 highest numbers (non-repeating) : {sumOfThreeHighestNums}</p>
          <p>Sum of 3rd highest number + lowest number : {sumOfThirdHighestAndLowest}</p>
          <p>All Zeros on the right side : {allZeros.join(', ')}</p>
          <p>Golden No : {GoldenNo}</p>
          <p>Golden No1 : {GoldenNo1}</p>
          <p>Sum of even numbers : {sumOfEvenNums}</p>
          <p>Sum of odd numbers : {sumOfOddNums}</p>
          <p>Replace repeated numbers with zero : {replaceRepeatedNums.join(', ')}</p>
        </div>
      </form>
    </>
  );
}

let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7];

// Set to track seen digits
let seen = new Set();

// Result array
let result = [];

for (let num of arr) {
  console.log(num);
    if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
        console.log(result);
    } else {
        // Count how many times num has appeared so far
        let count = result.filter(item => item === num).length;
        console.log(count);
        // Append zeros for each removed occurrence
        result.push(...Array(count).fill(0));
    }
}

console.log(result);
