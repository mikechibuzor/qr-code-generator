exports.generateText = (name, age) => {
  return `${name} is ${age} years old`;
};

// Methods on HomePage
exports.validateEnteredUrl = (enteredUrl) => {
  const expression = /^((https?):\/\/)?(([w|W]{3}.)?)+([a-zA-Z0-9\-.]{3,}.[a-zA-Z]{2,})(.[a-zA-Z]{2,})?$/;
  const result = expression.test(enteredUrl);
  return result;
};
