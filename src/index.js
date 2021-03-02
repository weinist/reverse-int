module.exports = function reverse (n) {
  if(n < 0) {
    n = -n;
  }
  n = n.toString().split('').reverse().join('');
  return +n;
}
