import { browser, element, by, $ } from 'protractor';

export class HomePage {

    heading = element(by.xpath("//h2[contains(text(), 'Selenium Framework development')]"));

    headings = $(".well.hoverwell.thumbnail>h2");

    openBrowser(url: string) {
        browser.get(url);
    }

    getAllHeadings() {
        this.headings.getText().then((text) => {
            console.log("Heading: " + text);
        });
    }

    clickFirstHeading() {
        this.heading.click();
    }

}