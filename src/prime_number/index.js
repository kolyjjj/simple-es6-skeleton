const primeNumber = function(start, end) {
  if (start < 0 || end <= 0 || start > end) return null;
  let result = [];
  for (let i = start; i <= end; i++) {
    if (isPrimeNumber(i)) result.push(i);
  }
  return result.length === 0 ? null : result;
};

export function isPrimeNumber(num) {
  if (num <= 1) return false;
  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default primeNumber;
