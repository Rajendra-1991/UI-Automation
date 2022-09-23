import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    

    public get homePage () {
        return $('p.title-anim');
    }

    public get menu () {
        return $$('span.menu-text');
    }

    // public get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async verifyHomePage () {
    await (await this.homePage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect(await (await this.homePage).isDisplayed()).toBe(true);
    
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async verifyMenu () {
        await(await this.menu[0]).getText();
    }
}

export default new HomePage();
