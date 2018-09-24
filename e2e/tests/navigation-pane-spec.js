/*globals browser*/
'use strict';
let chai = require('chai');
let endpoint = require('../config/endpoints');
let expect = chai.expect;
let EC = protractor.ExpectedConditions;
let BasePage = require('../page-objects/base-page');
let BaseHelper = require('../../helpers/base-helper');
let basePage = new BasePage();
let baseHelper = new BaseHelper();
const defaultTimeout = 30000;

describe('Navigation pane', () => {
  before((done) => {
    browser.get(endpoint.dashboard).then(done);
  });

  it('collapse/expand navigation pane', (done) => {
    browser.wait(EC.visibilityOf(basePage.ngxAdminLogo()), defaultTimeout)
    .then(() => baseHelper.clickByElement(basePage.hamburgerButton()))
    .then(() => browser.wait(EC.visibilityOf(basePage.collapsedNavPane())), defaultTimeout)
    .then(() => basePage.collapsedNavPane().isPresent())
    .then((isPresent) => {
        expect(isPresent).to.be.true;
        return baseHelper.clickByElement(basePage.hamburgerButton());
    })
    .then(() => browser.wait(EC.visibilityOf(basePage.expandedNavPane()), defaultTimeout))
    .then(() => basePage.expandedNavPane().isPresent())
    .then((isPresent) => {
        expect(isPresent).to.be.true;
        done();
    });
  });
});



