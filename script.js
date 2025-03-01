// find the area of a triangle where three sides are 5, 6, 7.

const triangleValues = () => {
  let a = 5;
  let b = 6;
  let c = 7;

  const values = (a + b + c) / 2;
  const area = Math.sqrt(values * ((values - a) * (values - b) * (values - c)));
  return area;
};

console.log(triangleValues());
