import page from "./page";

class SolutionMove extends page{
    public get solution(){
        return $('//*[@id="menu-item-93"]/a/span[1]');
    
    }
    public get qualityAsurance(){
        return $('//*[@id="menu-item-163"]/a/span');
    }


    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    
    }
    clickElement(element){
        element.waitForDisplayed();
        element.click(element);
    }

}
export default new SolutionMove();


