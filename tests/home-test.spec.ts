import { test } from '../fixtures/AllClassObjectsFixture';

test('opens Salesforce Home using saved session', async ({ pages }) => {
  await pages.homePage.navigateToHomePage();
  await pages.homePage.isHomeHeadingVisible();
});