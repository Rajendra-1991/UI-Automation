import FormSubmitPagePage from '../pageobjects/FormSubmitPage.page';
import HomePage from  '../pageobjects/HomePage.page';
import Page from '../pageobjects/page';
import solutionmovePage from '../pageobjects/solutionmove.page';


describe('Automate 360Logica webpage', () => {
    it('should Lunch the browser and URl', async () => {
        await HomePage.open("");
        await HomePage.verifyHomePage();
        await HomePage.verifySolution();
        await HomePage.verifyFramework();
        await HomePage.verifyResorces();
        await HomePage.verifyContact();
        await HomePage.verifySaksoftGroup();
        await HomePage.verifyAboutUs();
        await HomePage.verifyAddBtn();

    });
    it('should mouseOver on Solution menu and click each submenu', async () => {
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.qualityAsurance);
        await solutionmovePage.verifyQualityAssurancePage();
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.testAutomation);
        await solutionmovePage.verifyTestAutomationPage();
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.performanceTesting);
        await solutionmovePage.verifyPerformanceTestingPage();
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.cyberSecurityPage);
        await solutionmovePage.verifyCyberSecurityPage();
        await solutionmovePage.moveToElement(solutionmovePage.solution);
        await solutionmovePage.clickElement(solutionmovePage.digitalTranformation);
        await solutionmovePage.verifyDigitalTransformationPage();

    });
    it('should enter the form details and submit the form', async () => {

        let name = "Rajendra Narayan Jena";
        let email= "rajendra.n@360logica.com";
        let phone = "988989890890";
        let website= "www.360logica.com";
        let message="any";

        await FormSubmitPagePage.verifyFormBtn();
        await FormSubmitPagePage.formSubmit(name,email,phone,website,message);
        await FormSubmitPagePage.verifyFormSubBtn

    });
});


