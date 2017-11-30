import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Google Search Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', async function() {
    await page.navigateTo();
    await page.searchForText('Page Object - Martin Fowler');
    await browser.wait(() => element(by.xpath('//*[@id="logo"]/img')).isPresent(), 5000, 'Not found');
    await page.goToFirstLink();
    await expect(page.getCurrentUrl()).toEqual('https://martinfowler.com/bliki/PageObject.html');
    });
});
