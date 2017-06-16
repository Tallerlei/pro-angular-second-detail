import { ProAngularSecondDetailPage } from './app.po';

describe('pro-angular-second-detail App', () => {
  let page: ProAngularSecondDetailPage;

  beforeEach(() => {
    page = new ProAngularSecondDetailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
