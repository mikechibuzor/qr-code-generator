// Methods on HomePage
exports.validateEnteredUrl = (enteredUrl) => {
  // const expression = /^((https?):\/\/)?([w|W]{3}.)?[a-zA-Z0-9\-.]{3,}.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?$/;
  const expression = /^((https?):\/\/)?([w|W]{3}.)?[a-zA-Z0-9\-.]{3,}.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?$/;
  const result = expression.test(enteredUrl);
  return result;
};

exports.addHistoryObj = (history, payload) => {
  return history.push(payload).length > 0;
};

exports.showResultHandler = (historyCounter) => {
  if (historyCounter <= 9) {
    // this.qrCodeImageSource();
    const showResult = true;
    return showResult;
  }
  if (this.historyCounter >= 10) {
    // this.modalToggler();
    const modalTrigger = true;
    return modalTrigger;
  }
};

// Methods on TheHistory Component
exports.historyReset = (state) => {
  state.historyCounter = 0;
  state.history = [];
  const changedHistoryCounter = state.historyCounter;
  const changedHistory = state.history;
  return {
    changedHistoryCounter,
    changedHistory,
  };
};
