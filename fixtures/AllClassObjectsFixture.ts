import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

type AllClassObjectsFixture = {
    pages: {
        loginPage: LoginPage;
        homePage: HomePage;
    }
}

export const test = base.extend<AllClassObjectsFixture>({
    pages: async({ page }, use ) => {
        const pages = {
            loginPage: new LoginPage(page),
            homePage: new HomePage(page),
        }
        await use(pages);
    }
})

export const expect = test.expect;