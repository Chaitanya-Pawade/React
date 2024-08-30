import { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function SimpleCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(300000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  const increaseSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  // const increaseSalary = () => {
  //   setSalary(salary + 10000);
  // };

  return (
    <>
      <h2>1.simple call back</h2>
      <Title></Title>

      <Count text={"Age"} count={age}></Count>
      <Button handler={incrementAge}>Increment Age</Button>

      <Count text={"Salary"} count={salary} />
      <Button handler={increaseSalary}> Increase Salary </Button>
    </>
  );
}

export default SimpleCallback;
