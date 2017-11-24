import { AppPage } from './app.po';

describe('Google Search Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    page.searchForText('Page Object - Martin Fowler');
    page.goToFirstLink();
    expect(page.getCurrentUrl()).toEqual('https://martinfowler.com/bliki/PageObject.html');
    });
});
