var EC = protractor.ExpectedConditions;
let defaultTimeout = 300000;

var BaseHelper = function () {
  this.clickByElement = function (element) {
    return browser.wait(EC.visibilityOf(element), defaultTimeout)
    .then(() => browser.wait(EC.elementToBeClickable(element)), defaultTimeout)
    .then(() => element.click());
  };
};
module.exports = BaseHelper;