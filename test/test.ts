import { browser } from '../node_modules/protractor';
import { HomePage } from './pageobjects/HomePage';

var homePage = new HomePage();

describe("Basic Test Suite", () => {

    beforeEach(() => {
        homePage.open();
    });

    it("Verify page headings", () => {
        homePage.getAllHeadings();
    });

    it("Verify page headings.", () => {
        homePage.getAllHeadings();
        homePage.clickFirstHeading();
    });

});