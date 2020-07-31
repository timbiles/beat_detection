const findEighthDiff = (num1, num2) => {
  // takes 2 nums (1 + )
  return num1 + num2;
};

const findTripletDiff = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const findSixteenthDiff = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};

const totalInaccuracy = (arr) => {
  let total = 0;
  const inn = arr.reduce((tot, item, index, array) => {
    if (array[index + 1]) {
      tot += Math.abs(item - array[index + 1]);
    }
    total += item;
    return tot;
  }, 0);

  return [inn, total];
};

const findPercentage = (innacurate) => {
  console.log('inaccurate/total >>', innacurate[0], '/', innacurate[1]);

  const average = (innacurate[0] * 100) / innacurate[1];
  const percentage = 100 - average;
  return `${percentage.toFixed(2)}%`;
};

// ♩ ♩ ♩ ♩ | ♩
const patternOne = (data, setPercentage) => {
  const accuracy = [];
  accuracy.push(data[2]);
  accuracy.push(data[3]);
  accuracy.push(data[4]);
  accuracy.push(data[5]);

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

// ♩ ♩ ♫ ♩ | ♩
const patternTwo = (data, setPercentage) => {
  const accuracy = [];
  accuracy.push(data[2]);
  accuracy.push(data[3]);
  accuracy.push(findEighthDiff(data[4], data[5]));
  accuracy.push(data[6]);

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

// ♫ ♫ ♩ ♫ | ♩
const patternThree = (data, setPercentage) => {
  const accuracy = [];

  accuracy.push(findEighthDiff(data[2], data[3]));
  accuracy.push(findEighthDiff(data[4], data[5]));
  accuracy.push(data[6]);
  accuracy.push(findEighthDiff(data[7], data[8]));

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

// ♩  ♪♪♪  ♫  ♩ | ♩
const patternFour = (data, setPercentage) => {
  const accuracy = [];

  accuracy.push(data[2]);
  accuracy.push(findTripletDiff(data[3], data[4], data[5]));
  accuracy.push(findEighthDiff(data[6], data[7]));
  accuracy.push(data[8]);

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

const patternFive = (data, setPercentage) => {
  const accuracy = [];

  accuracy.push(findSixteenthDiff(data[2], data[3], data[4], data[5]));
  accuracy.push(findEighthDiff(data[6], data[7]));
  accuracy.push(findTripletDiff(data[8], data[9], data[10]));
  accuracy.push(findTripletDiff(data[11], data[12], data[13])); // TODO -- actually calculate this pattern

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

const patternSix = (data, setPercentage) => {
  const accuracy = [];

  accuracy.push(findEighthDiff(data[2], data[3]));
  accuracy.push(findTripletDiff(data[4], data[5], data[6]));
  accuracy.push(findEighthDiff(data[7], data[8]));
  accuracy.push(data[9]);
  accuracy.push(data[10]);

  const inn = totalInaccuracy(accuracy);
  console.log('ACC', accuracy);

  const percentage = findPercentage(inn);
  setPercentage(percentage);
};

export const calculatePercentage = {
  patternOne,
  patternTwo,
  patternThree,
  patternFour,
  patternFive,
  patternSix,
};
