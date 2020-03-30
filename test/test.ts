import { browser } from '../node_modules/protractor';
import { HomePage } from './pageobjects/HomePage';

describe("Basic Test Suite", () => {

    var homePage = new HomePage();

    it("Verify page headings", () => {
        homePage.openBrowser("http://localhost:8808");
        homePage.getAllHeadings();
        homePage.clickFirstHeading();
    });

});