import { QuickCryptPage } from './app.po';

describe('quick-crypt App', () => {
  let page: QuickCryptPage;

  beforeEach(() => {
    page = new QuickCryptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
