import { useState } from "react";
import "../Components/All.css"

export default function All() {
  const [input, setInput] = useState("");
  const [evenCount, setEvenCount] = useState(0);
  const [oddCount, setOddCount] = useState(0);
  const [sumOfThreeHighestNums, setSumOfThreeHighestNums] = useState([]);
  const [sumOfThirdHighestAndLowest, setSumOfThirdHighestAndLowest] = useState(
    []
  );
  const [allZerosAtTheEnd, setAllZerosAtTheEnd] = useState([]);
  const [GoldenNo, setGoldenNo] = useState("");
  const [GoldenNo1, setGoldenNo1] = useState("");
  const [sumOfEvenNums, setSumOfEvenNums] = useState(0);
  const [sumOfOddNums, setSumOfOddNums] = useState(0);
  const [replaceRepeatedNums, setReplaceRepeatedNums] = useState(0);
  const [error, setError] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  function handleChange(e) {
    if (/^[0-9]*$/.test(+e.target.value)) {
      setInput(e.target.value);
      if (e.target.value.length < 3) {
        setError("Please enter at least 3 numbers");
        setIsValidInput(false);
      } else {
        const inputArray = e.target.value.split("").map(Number);
        const uniqueValues = [...new Set(inputArray)];

        if (uniqueValues.length < 3) {
          setError("Please enter at least 3 unique numbers");
          setIsValidInput(false);
        } else {
          setError("");
          setIsValidInput(true);
        }
      }
    } else {
      setError("Invalid input");
    }
    // setInput(e.target.value);
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
    allZerosMoveToEnd(inputArray);
    findGoldenNumber(uniqueValues);
    findGoldenNumber2(uniqueValues);
    findSumOfEvenNums(uniqueValues);
    findSumOfOddNums(uniqueValues);
    replaceRepeatedNumbers(inputArray);
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
    const sum = sorted.slice(0, 3).reduce((acc, val) => acc + val);

    setSumOfThreeHighestNums(sum);
  }

  //Q 4 find 3rd highest number + lowest number
  function findsumOfThirdHighestAndLowest(uniqueValues) {
    const sortedArray = [...uniqueValues].sort((a, b) => a - b);
    console.log(sortedArray);
    const lowestValue = sortedArray[0];
    console.log(lowestValue);
    const thirdHighestNumber = sortedArray[sortedArray.length - 3];
    console.log(thirdHighestNumber);

    const sum = thirdHighestNumber + lowestValue;
    setSumOfThirdHighestAndLowest(sum);
  }

  // Q 5 All zeros  are on the right side (at the end)

  function allZerosMoveToEnd(inputArray) {
    let result = [];
    let zeros = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] !== 0) {
        result.push(inputArray[i]);
      } else {
        zeros.push(0);
      }
    }
    let zerosOnTheRight = result.concat(zeros);
    // const combinedArray = [...result, ...zeros];
    setAllZerosAtTheEnd(zerosOnTheRight);
  }

  // Q 6 addition of elements / 5 then find it is golden or not golden

  function findGoldenNumber(uniqueValues) {
    let sumOfEle = uniqueValues.reduce((sum, val) => sum + val);

    if (sumOfEle % 5 === 0) {
      setGoldenNo("Yes, it is a golden number");
    } else {
      setGoldenNo("No, it is not a golden number");
    }
  }
  // Q 7 divide by count of elements and check is it a golden number or not

  function findGoldenNumber2(uniqueValues) {
    let sumOfEle = uniqueValues.reduce((sum, val) => sum + val);

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

  // Q 10

  function replaceRepeatedNumbers(inputArray) {
    let uniqueArr = [...new Set(inputArray)];
    console.log(uniqueArr);
    let lastArr = uniqueArr.filter((num) => num !== 0);
    let lengthDifference = inputArray.length - lastArr.length;
    console.log(lengthDifference);
    let zeroCount = [];

    for (let i = 1; i <= lengthDifference; i++) {
      zeroCount.push(0);
    }
    let newArr = lastArr.concat(zeroCount);
    setReplaceRepeatedNums(newArr);
  }
//   return (
//     <div className="container p-5">
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Input</label>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={handleChange}
//                 className="form-control"
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary m-3"
//               disabled={!isValidInput}
//             >
//               Submit
//             </button>
//             {error && <p className="text-danger">{error}</p>}
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-md-12">
//             <h4 className="text-center">Results</h4>
//             <ul className="list-group">
//               <li className="list-group-item">
//                 Count of even numbers is : {evenCount}
//               </li>
//               <li className="list-group-item">
//                 Count of odd numbers is : {oddCount}
//               </li>
//               <li className="list-group-item">
//                 Addition of 3 highest numbers (non-repeating) :{" "}
//                 {sumOfThreeHighestNums}
//               </li>
//               <li className="list-group-item">
//                 Sum of 3rd highest number + lowest number :{" "}
//                 {sumOfThirdHighestAndLowest}
//               </li>
//               <li className="list-group-item">
//                 All Zeros on the right side : {allZerosAtTheEnd}
//               </li>
//               <li className="list-group-item">Golden No : {GoldenNo}</li>
//               <li className="list-group-item">Golden No1 : {GoldenNo1}</li>
//               <li className="list-group-item">
//                 Sum of even numbers : {sumOfEvenNums}
//               </li>
//               <li className="list-group-item">
//                 Sum of odd numbers : {sumOfOddNums}
//               </li>
//               <li className="list-group-item">
//                 All repeated numbers are on the end : {replaceRepeatedNums}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </form>
//     </div>
//   );



return (
<div className="container py-5">
  <form onSubmit={handleSubmit} className="border rounded-lg p-4 bg-light">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-sm">
          <div className="card-body bg-white rounded-lg">
            <h5 className="card-title text-center mb-4">Input</h5>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              className="form-control rounded-lg"
              placeholder="Enter numbers separated by space"
            />
            <button
              type="submit"
              className="btn btn-primary btn-block mt-3 rounded-lg"
              disabled={!isValidInput}
            >
              Submit
            </button>
            {error && (
              <p className="text-danger font-weight-bold mt-3">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </form>

  <div className="row justify-content-center mt-5">
    <div className="col-md-10">
      <h4 className="text-center font-weight-bold mb-4">Results</h4>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center "> 
              <h5 className="card-title ">Count of even numbers</h5>
              <h5 className="badge badge-pill badge-success text-success">{evenCount}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-wrap">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Count of odd numbers</h5>
              <h5 className="badge badge-pill badge-danger text-success">{oddCount}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Sum of three highest numbers</h5>
              <h5 className="badge badge-pill badge-info text-success">{sumOfThreeHighestNums}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Sum of 3rd highest + lowest number</h5>
              <h5 className="badge badge-pill badge-warning text-success">{sumOfThirdHighestAndLowest}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">All zeros on the right side</h5>
              <h5 className="badge badge-pill badge-secondary text-success">{allZerosAtTheEnd}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Golden No</h5>
              <h5 className="badge badge-pill badge-dark text-success">{GoldenNo}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Golden No1</h5>
              <h5 className="badge badge-pill badge-dark text-success">{GoldenNo1}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Sum of even numbers</h5>
              <h5 className="badge badge-pill badge-success text-success">{sumOfEvenNums}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">Sum of odd numbers</h5>
              <h5 className="badge badge-pill badge-danger text-success">{sumOfOddNums}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4 mb-4">
          <div className="card result-card">
            <div className="card-body text-center">
              <h5 className="card-title">All repeated numbers at the end</h5>
              <h4 className="badge badge-pill badge-info text-success">{replaceRepeatedNums}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


)
}
