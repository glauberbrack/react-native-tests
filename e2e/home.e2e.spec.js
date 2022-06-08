/* eslint-disable no-undef */

describe('Home Screen Success', () => {
  // This will run every time we run the tests
  beforeAll(async () => {
    await device.launchApp();
  });

  // This will run before each test
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // This will get our first component on reload
  it('renders components successfully', async () => {
    const letsGoText = await element(by.text('Hello, there!'));

    await expect(letsGoText).toBeVisible();
  });

  // This will trigger an action
  it('change text to How you doing?', async () => {
    const homeButton = await element(by.text("Let's go!"));

    // The action will be click in the button
    await homeButton.tap();

    const letsGoText = await element(by.text('Hello, there!'));
    const howYouDoingText = await element(by.text("Let's go!"));

    await expect(letsGoText).not.toBeVisible();
    await expect(howYouDoingText).toBeVisible();
  });
});
