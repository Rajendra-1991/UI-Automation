import HomePage from  '../pageobjects/HomePage.page';
import Page from '../pageobjects/page';
import solutionmovePage from '../pageobjects/solutionmove.page';


describe('Automate 360Logica webpage', () => {
    it('should Lunch the browser and URl', async () => {
        await HomePage.open("");
        await HomePage.verifyHomePage();
        await HomePage.verifyMenu();
    });
    it('should mouseOver and click QualityAssurance', async () => {
        await HomePage.open("");
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.qualityAsurance);
    });
});


