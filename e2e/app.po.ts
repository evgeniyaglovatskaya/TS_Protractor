import { browser, by, element } from 'protractor';


const searchField = '#lst-ib';
const firstLink = 'div.g:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)';
const searchBtn = 'btnK';


export class AppPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('http://www.google.com.ua');
  }

  searchForText(text:string) {
    element(by.css(searchField)).sendKeys(text);
    element(by.name(searchBtn)).click();
    // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  getParagraphText() {
    return element(by.css('body > app-root:nth-child(1) > app-test:nth-child(1) > h1:nth-child(1)')).getText();
  }

  goToFirstLink() {
    element(by.css(firstLink)).click();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
