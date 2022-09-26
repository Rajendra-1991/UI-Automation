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

    public get solution () {
        return $('//*[@id="menu-item-93"]/a/span[1]');
    }
    public get frameWork(){
        return $('//*[@id="menu-item-95"]/a/span[1]');
    }
    public get resources(){
        return $('//*[@id="menu-item-205"]/a/span[1]');
    }
    public get aboutUs(){
        return $('//*[@id="menu-item-242"]/a/span[1]');
    }
    public get contact(){
        return $('//*[@id="menu-item-372"]/a/span')
    }
    public get saksoftGroup(){
        return $('//*[@id="menu-item-453"]/a/span[1]');
    }
    public get addBtn(){
        return $('//*[@id="menu-main-menu"]/li[7]/a');
    }


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
    public async verifySolution () {
    await (await this.solution).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.solution).isDisplayed()).toBe(true);
    }
    public async verifyFramework(){
    await (await this.frameWork).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.frameWork).isDisplayed()).toBe(true);
    }
    public async verifyResorces(){
    await (await this.resources).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.resources).isDisplayed()).toBe(true);
    }
    public async verifyAboutUs(){
    await (await this.aboutUs).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.aboutUs).isDisplayed()).toBe(true);
    }
    public async verifyContact(){
    await (await this.contact).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.contact).isDisplayed()).toBe(true);
    }
    public async verifySaksoftGroup(){
    await (await this.saksoftGroup).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.saksoftGroup).isDisplayed()).toBe(true);
    }
    public async verifyAddBtn(){
    await (await this.addBtn).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.addBtn).isDisplayed()).toBe(true);
    }
}

export default new HomePage();
