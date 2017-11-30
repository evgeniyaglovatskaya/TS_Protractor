import { browser, by, element } from 'protractor';

const searchField = element(by.css('#lst-ib'));
// const searchField = '#lst-ib';
const firstLink = 'div.g:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)';
const searchBtn = 'btnK';


export class AppPage {
  async navigateTo() {
    browser.ignoreSynchronization = true;
    await browser.get('http://www.google.com.ua');
   await browser.wait(() => searchField.isPresent(), 5000, 'Not found');
  }

  async searchForText(text: string) {
    await browser.wait(() => searchField.isPresent(), 5000, 'Not found');
    await searchField.sendKeys(text);
    await element(by.name(searchBtn)).click();
    // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }


  async goToFirstLink() {
    await element(by.css(firstLink)).click();
  }

  async getCurrentUrl() {
    const title = element(by.xpath('//*[@id="main"]/h1/a'));
    await browser.wait(() => title.isPresent(), 5000, 'Not found');
    return await browser.getCurrentUrl();
  }
}
