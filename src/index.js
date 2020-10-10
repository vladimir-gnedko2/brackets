module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var matches = {};

  bracketsConfig.forEach((x) => (matches[x[0]] = x[1]));

  for (var i = 0; i < str.length; i++) {
      var bracket = str.charAt(i);
      if (matches[bracket] == bracket && stack[stack.length - 1] == bracket) {
          stack.pop();
      } else if (matches[bracket]) {
          stack.push(bracket);
      } else if (bracket != matches[stack.pop()]) {
          return false;
      }
  }
  return stack.length == 0;
};
