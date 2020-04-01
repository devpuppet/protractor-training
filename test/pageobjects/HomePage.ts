import { browser, element, by, $ } from 'protractor';

export class HomePage {

    url: string = "http://localhost:8808";

    heading = element(by.xpath("//h2[contains(text(), 'Selenium Framework development')]"));

    headings = $(".well.hoverwell.thumbnail>h2");

    open(): void {
        browser.get(browser.baseUrl);
    }

    getAllHeadings(): void {
        this.headings.getText().then((text) => {
            console.log("Heading: " + text);
        });
    }

    clickFirstHeading(): void {
        this.heading.click();
    }

}