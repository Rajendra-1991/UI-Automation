import page from "./page";

class SolutionMove extends page{
    public get solution(){
        return $('//*[@id="menu-item-93"]/a/span[1]');
    
    }
    public get qualityAsurance(){
        return $('//*[@id="menu-item-163"]/a/span');
    }
    public get testAutomation(){
        return $('//*[@id="menu-item-102"]/a/span');
    }
    public get performanceTesting(){
        return $('//*[@id="menu-item-103"]/a/span');
    }
    public get cybersecurity(){
        return $('//*[@id="menu-item-94"]/a');
    }
    public get digitalTranformation(){
        return $('//*[@id="menu-item-162"]/a/span');
    }
    public get qualityAssurancePage(){
        return $('//*[@id="wrapper"]/div[3]/div/div/div/div[2]/div/span/span');
    }
    public get testAutomationPage(){
        return $('//*[@id="wrapper"]/div[3]/div/div/div/div[2]/div/span/span');
    }
    public get performanceTestingPage(){
        return $('//*[@id="wrapper"]/div[3]/div/div/div/div[2]/div/span/span');
    }
    public get cyberSecurityPage(){
        return $('//*[@id="wrapper"]/div[3]/div/div/div/div[2]/div/span/span');
    }
    public get DigitalTransfermationPage(){
        return $('//*[@id="wrapper"]/div[3]/div/div/div/div[2]/div/span/span');
    }


    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    
    }
    clickElement(element){
        element.waitForDisplayed();
        element.click(element);
    }

public async verifyQualityAssurancePage(){
    await (await this.qualityAssurancePage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.qualityAssurancePage).isDisplayed()).toBe(true);
}
public async verifyTestAutomationPage(){
    await (await this.testAutomationPage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.testAutomationPage).isDisplayed()).toBe(true);
}
public async verifyPerformanceTestingPage(){
    await (await this.performanceTestingPage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.performanceTestingPage).isDisplayed()).toBe(true);
}
public async verifyCyberSecurityPage(){
    await (await this.cyberSecurityPage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.cyberSecurityPage).isDisplayed()).toBe(true);
}
public async verifyDigitalTransformationPage(){
    await (await this.DigitalTransfermationPage).waitForDisplayed({timeout: 6000, timeoutMsg: 'element not found'})
    expect (await(await this.DigitalTransfermationPage).isDisplayed()).toBe(true);
}




}
export default new SolutionMove();


