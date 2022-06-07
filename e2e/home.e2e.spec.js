describe('Home Screen Success', () => {
  // This will run every time we run the tests
  beforeAll(async () => {
    await device.launchApp();
  });

  // This will run before each test
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('renders components successfully', async () => {
    const letsGoText = await element(by.text('Hello, there!'));

    expect(letsGoText).toBeVisible();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
