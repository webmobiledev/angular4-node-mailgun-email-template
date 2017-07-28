import { EmailAppPage } from './app.po';

describe('email-app App', () => {
  let page: EmailAppPage;

  beforeEach(() => {
    page = new EmailAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
