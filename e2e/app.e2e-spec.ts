import { AppleEventHubFrontendPage } from './app.po';

describe('apple-event-hub-frontend App', function() {
  let page: AppleEventHubFrontendPage;

  beforeEach(() => {
    page = new AppleEventHubFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
