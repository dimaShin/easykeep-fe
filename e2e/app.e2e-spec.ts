import { EasykeepFePage } from './app.po';

describe('easykeep-fe App', function() {
  let page: EasykeepFePage;

  beforeEach(() => {
    page = new EasykeepFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
