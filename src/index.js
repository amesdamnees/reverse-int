module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  const arr = str.split('');
  const reversed = arr.reverse();
  const joined = reversed.join('');
  const result = parseInt(joined, 10);
  return result;
};
