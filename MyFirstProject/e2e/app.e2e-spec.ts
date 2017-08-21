import { MyFirstProjectPage } from './app.po';

describe('my-first-project App', () => {
  let page: MyFirstProjectPage;

  beforeEach(() => {
    page = new MyFirstProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
