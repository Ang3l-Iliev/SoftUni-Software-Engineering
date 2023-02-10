function main(firstNum, secondNum, thirdNum) {
  function sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  let sumFirstAndSecond = sum(firstNum, secondNum);
  function subtract(sumFirstAndSecond, thirdNum) {
    return sumFirstAndSecond - thirdNum;
  }
  let finalResult = subtract(sumFirstAndSecond, thirdNum);

  console.log(finalResult);
}

main(23, 6, 10);
