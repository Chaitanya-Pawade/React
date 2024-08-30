// import React, { useEffect, useState } from "react";

// export default function Task() {
//   const [inputNo, setInputNo] = useState(""); // state to take input as number
//   const [inputArray, setInputArray] = useState([]); // state to maintain input array converted

//   const [evenNo, setEvenNo] = useState(""); //state to maintain even number array
//   const [occurences, setOccurences] = useState({}); // state to store occurence of each
//   const[inputNo2,setInputNo2] = useState("");
//   const[numArray,setNumArray] = useState([]);
//   const[alphabetArray,setAlphabetArray] = useState([]);
//   const[symbolArray,setSymbolArray] = useState([]);
//   const [totalNumCount,setTotalNumCount] = useState(0);

//   function handleChange1(e) {
//     setInputNo(e.target.value);
//   }
//   function handleInputNo2(e){
//     setInputNo2(e.target.value);
//   }

//   function handleSubmit(e) {
//     // console.log("input number before submit", inputNo);
//     e.preventDefault();
//     const inputArray = inputNo.split("").map(Number);
//     // console.log("input number after split in array", inputArray);

//     // console.log(inputArray);

//     // setInputArray(inputArray);
//     findSumOfOddAndEven(inputArray);
//     findOccurencesOfNumbers(inputArray);
//     SplitData();
//     CombinedNumArray(inputArray);

//   }
// // useEffect(()=> {
// //   SplitData();
// //   CombinedNumArray();
// // })
//   function findSumOfOddAndEven(inputNo) {
//     // console.log("inputNo", inputNo);
//     // const inputArray = inputNo.split("").map(Number);
//     const uniqueValues = [...new Set(inputNo)];
//     // console.log(uniqueValues);

//     console.log("unique values", uniqueValues);

//     const nonZero = uniqueValues.filter((val) => val !== 0);
//     let sum = nonZero.length;

//     setEvenNo(sum);
//   }

//   function findOccurencesOfNumbers(arr) {
//     const counts = {};

//     arr.forEach((num) => {
//       if (counts[num]) {
//         counts[num]++;
//       } else {
//         counts[num] = 1;
//       }
//     });

//     setOccurences(counts);
//   }
//   // console.log(occurences);

//   function SplitData(){
//     let numbers = [];
//     let alphabet = [];
//     let symbols = [];

//     for(let i = 0; i < inputNo2.length; i++) {
//       let char = inputNo2[i];

//       if(char.match(/[a-z]/i)) {
//         alphabet.push(char);
//       } else if(char.match(/[0-9]/)) {
//         numbers.push(char);
//       } else {
//         symbols.push(char);
//       }

//       // console.log(numbers);
//       // console.log(inputNo)
//       // let num = Array.from(numArray.map(Number));
//       setNumArray(numbers);
//       // console.log(alphabet);
//       setAlphabetArray(alphabet)
//       // console.log(symbols);
//       setSymbolArray(symbols)

//   }

// }

// function CombinedNumArray(inputArray){
//   // let num = inputNo.split('').map(Number);

//   // console.log(num);
//   let finalArray = [...inputArray,...numArray];
//   // console.log(numArray);
//   let uniqueArray = [...new Set(finalArray)];
//   let noZeroArray =uniqueArray.filter(num => num !== 0);
//   let finalNumCount = noZeroArray.length;
//   setTotalNumCount(finalNumCount);
//   console.log();

// }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Input
//             <input
//               type="text"
//               value={inputNo}
//               onChange={handleChange1}
//             ></input>
//           </label>
//           <label>
//             Input2
//             <input type="text" value={inputNo2}onChange={handleInputNo2} ></input>
//           </label>
//           <br />
//           <br />
//           <button type="submit">Submit</button>
//           <br />
//           <br />
//           <p>Sum of Odd and Even numbers : {totalNumCount}</p>

//           <ul>
//             {Object.entries(occurences).map(([key, value]) => (
//               <li key={key}>
//                 {key}: {value}
//               </li>
//             ))}
//           </ul>
//           <p>Numbers from Input 2: {numArray.join(", ")}</p>
//           <p>Alphabets from Input 2: {alphabetArray.join(", ")}</p>
//           <p>Symbols from Input 2: {symbolArray.join(", ")}</p>

//           {/* <ul>
//             {occurences &&
//               Object.entries(occurences).map(([key, value]) => (
//                 <li key={key}>
//                   {key}: {value}
//                 </li>
//               ))}
//           </ul> */}
//         </div>
//       </form>
//     </>
//   );
// }

import React from "react";
import { useState, useEffect } from "react";

export default function Task() {
  const [input1, setInput1] = useState("");
  const [inputArray1, setInputArray1] = useState([]);
  const [combinedNumArr, setCombinedNumArr] = useState([]);
  const [evenOddCountTotal, setEvenOddCountTotal] = useState(0);
  const [occurrences, setOccurrences] = useState({});

  const [input2, setInput2] = useState("");
  const [nums2, setNums2] = useState([]);
  const [stringArr, setStringArr] = useState([]);
  const [specialChar, setSpecialChar] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [alphabetOccurrences, setAlphabetOccurrences] = useState({});
  const [symbolCount, setSymbolCount] = useState({});

  function handleInput1(e) {
    let newNumber = e.target.value;

    let Arr = Array.from(e.target.value.toString()).map(Number);
    setInputArray1(Arr);
    const regex = /^[0-9]*$/;

    if (regex.test(newNumber)) {
      setInput1(newNumber);
    }
    // let uniqueArray = [...new Set(e.target.value)];
    // let evenArray = uniqueArray
  }

  function handleInput2(e) {
    setInput2(e.target.value);
  }

  function DivideData() {
    let numbers = [];
    let letters = [];
    let specials = [];

    for (let i = 0; i < input2.length; i++) {
      let char = input2.charAt(i);

      if (/[0-9]/.test(char)) {
        numbers.push(char);
      } else if (/[a-zA-Z]/.test(char)) {
        letters.push(char);
      } else {
        specials.push(char);
      }
    }

    setNums2(numbers);

    setStringArr(letters);

    setSpecialChar(specials);
  }

  function EvenOddCount() {
    let number = Array.from(nums2.map(Number));
    let completeArray = [...inputArray1, ...number];

    let uniqueArray = [...new Set(completeArray)];

    let UniqueArrayWithoutZero = uniqueArray.filter((num) => num !== 0);

    let count = UniqueArrayWithoutZero.length;

    setEvenOddCountTotal(count);
  }

  function CombinedArray() {
    let completeArray = [...inputArray1, ...nums2];
    let uniqueArray = [...new Set(completeArray)];
    let UniqueArrayWithoutZero = uniqueArray.filter((num) => num !== 0);
    setCombinedNumArr(UniqueArrayWithoutZero);
  }

  function countOccurrences(arr) {
    const counts = {};

    arr.forEach((num) => {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    });
    // return counts;
    setOccurrences(counts);
  }

  function GetVowels(arr) {
    const vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const foundVowels = arr.filter((char) =>
      vowelsList.includes(char.toLowerCase())
    );
    const finalVowels = foundVowels.map((char) => char.toUpperCase());
    console.log(finalVowels);

    setVowels(finalVowels);
    console.log(vowels);
  }

  function CountAlphabets(arr) {
    const alphabetCounts = {};

    // Count the occurrences of each lowercase character in the input array
    arr.forEach((char) => {
      const lowerChar = char.toLowerCase(); // Convert char to lowercase
      if (lowerChar >= "a" && lowerChar <= "z") {
        const upperChar = lowerChar.toUpperCase(); // Convert to uppercase
        if (alphabetCounts[upperChar]) {
          alphabetCounts[upperChar]++;
        } else {
          alphabetCounts[upperChar] = 1;
        }
      }
    });

    // Sort alphabetically by keys (alphabets)
    const sortedAlphabetCounts = {};
    Object.keys(alphabetCounts)
      .sort()
      .forEach((key) => {
        sortedAlphabetCounts[key] = alphabetCounts[key];
      });
    setAlphabetOccurrences(sortedAlphabetCounts);
  }

  function countSymbols(arr) {
    const counts = {};

    arr.forEach((Symbol) => {
      if (counts[Symbol]) {
        counts[Symbol]++;
      } else {
        counts[Symbol] = 1;
      }
    });
    // return counts;
    setSymbolCount(counts);
  }

  function handleSubmit(e) {
    e.preventDefault();

    DivideData();
    EvenOddCount();
    countOccurrences(combinedNumArr);
    GetVowels(stringArr);
    CountAlphabets(stringArr);
    countSymbols(specialChar);
  }

  useEffect(() => {
    CombinedArray();
  }, [inputArray1, nums2]);

  useEffect(() => {
    DivideData();
  }, [input2]);

  return (
    <>
   <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      <div className="card shadow-sm rounded">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label htmlFor="inputNumber" className="form-label fw-bold">
                Input Number
              </label>
              <input
                pattern="[0-9]*"
                type="text"
                value={input1}
                id="inputNumber"
                onChange={handleInput1}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputString" className="form-label fw-bold">
                Input String
              </label>
              <input
                value={input2}
                type="text"
                id="inputString"
                onChange={handleInput2}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Calculate
            </button>
          </form>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold mb-4">Sum of Even and Odd Numbers</h5>
              <input
                type="text"
                disabled
                value={evenOddCountTotal}
                className="form-control"
              />
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold mb-4">Occurrence of Numbers</h5>
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Number</th>
                    <th>Occurrence</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(occurrences).map((item) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{occurrences[item]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold mb-4">Vowels in the String</h5>
              <input
                type="text"
                disabled
                value={vowels}
                className="form-control"
              />
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold mb-4">Alphabets and their Counts</h5>
              <table className="table table-bordered table-hover">
                <thead className="table-danger">
                  <tr>
                    <th>Alphabet</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody className="table-info">
                  {Object.entries(alphabetOccurrences).map(([char, count]) => (
                    <tr key={char}>
                      <td>{char}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
