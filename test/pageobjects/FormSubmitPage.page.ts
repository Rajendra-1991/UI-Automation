import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Formsubmitpage extends Page {
    /**
     * define selectors using getter methods
     */
    

    public get formBtn () {
        return $('//*[@id="menu-main-menu"]/li[7]/a');  
    }

    public get name () {
        return $('//input[@id="name"]');
    }
    public get email(){
        return $('//input[@id="email_address"]');
    }
    public get phone(){
        return $('//input[@id="phone"]');
    }
    public get website(){
        return $('//input[@id="website"]');
    }
    public get message(){
        return $('//textarea[@id="message"]');
    }
    public get subBtn(){
        return $('//button[@type="submit"]');
    }


    /**
     *@param name
     *@param email
     *@param website
     *@param phone
     *@param message
     */
    public async verifyFormBtn () {
    await (await this.formBtn).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect(await (await this.formBtn).isDisplayed()).toBe(true);
    
    }
    
public async formSubmit(name: string, email: string, website: string, phone: string, message: string){
    await (await this.name).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    this.name.addValue(name);
    await (await this.email).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    this.email.addValue(email);
    await (await this.phone).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    this.phone.addValue(phone);
    await (await this.website).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'});
    this.website.addValue(website);
    await (await this.message).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'});
    this.message.addValue(message);

}
public async verifyFormSubBtn(){
    await (await this.subBtn).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'});
    expect(await (await this.subBtn).isDisplayed()).toBe(true);

}
  
       
    
}

export default new Formsubmitpage();
