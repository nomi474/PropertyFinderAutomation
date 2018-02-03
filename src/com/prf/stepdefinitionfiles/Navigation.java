package com.prf.stepdefinitionfiles;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import com.prf.common.CommonFeatures;
import com.prf.pages.SearchPropertyPage;
import com.prf.pages.FindAgentsPage;
import com.prf.pages.AgentDetailsPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Navigation{
	
	WebDriver driver;		
	SearchPropertyPage sp;
	FindAgentsPage fa;
	CommonFeatures cf;
	AgentDetailsPage ad;

	public Navigation(){
		Properties p=new Properties();
		try {
	    	FileInputStream fi=new FileInputStream("C:\\PropertyFinder\\global.properties");
			p.load(fi);
	    	} catch (IOException ioe){
	    		
	    	}
			if(p.getProperty("browser").contains("firefox"))
			{
				System.setProperty("webdriver.gecko.driver", "C:\\PropertyFinder\\geckodriver.exe");
				driver = new FirefoxDriver();
			} else if (p.getProperty("browser").contains("chrome")){
				System.setProperty("webdriver.chrome.driver", "C:\\PropertyFinder\\chromedriver.exe");
				driver = new ChromeDriver();
			} else if (p.getProperty("browser").contains("phantom")) {
				System.setProperty("phantomjs.binary.path","C:\\PropertyFinder\\phantomjs.exe");
				driver = new PhantomJSDriver();
			}
		}
	
	@Given("^I go to the page \"([^\"]*)\"$")
	public void goToLandingPage(String url){
		driver.get(url);
	}
	
	@And("^I wait for ([^\"]*) seconds$")
	public void waitForTime(int seconds){
		cf = new CommonFeatures(driver);
		cf.implicitWait(seconds);
	}
	
	@And("^I maximize the browser window$")
	public void maximizeWindow(){
		cf.maximizeBrowserWindow();
	}
		
	@And("^I select BUY from dropdown$")
	public void selectTransactionType(){
		sp = new  SearchPropertyPage(driver);
		sp.selectBuyAsTransactionType();
	}
	
	@And("^I select Villa from Property type dropdown$")
	public void selectPropertyType(){
		sp.setVillaAsPropertyType();
	}
	
	@And("^I enter ([^\"]*) for the location$")
	public void enterLocationName(String location){
		sp.setLocationName(location);
	}
	
	@And("^I select 3 Beds for Min bed dropdown$")
	public void selectMinBeds(){
		sp.setMinBeds();
	}
	
	@And("^I select 7 Beds for Max bed dropdown$")
	public void selectMaxBeds(){
		sp.setMaxBeds();
	}
	
	@And("^I click on the Find property button$")
	public void pressButton(){
		sp.clickFindButton();
	}
	
	@And("^I write search results in a file$")
	public void logResults() throws IOException{
		sp.savePropertySearchResults();
	}
	
	@And("^I click on the Find Agent link$")
	public void goToFindAgentsPage(){
		fa = new FindAgentsPage(driver);
		fa.launchFindAgentsPage();
	}
	
	@And("^I click on dropdown with visible text ([^\"]*)$")
	public void clickLanguageDropdown(String lang){
		fa.selectLanguageDropdown(lang);
	}
	
	@And("^I select ([^\"]*) from the languages dropdown$")
	public void addLanguage(String lang){
		fa.selectLanguage(lang);
	}
	
	@And("^I click on the Find Agent button$")
	public void pressFindAgentButton(){
		fa.clickFindAgentButton();
	}

	@And("^I capture the matching agents count$")
	public void captureAgentsCount(){
		fa.getAgentsCount();
	}

	@And("^I select India from the Nationality dropdown$")
	public void addNationality(){
		fa.selectNationality();
	}
	
	@And("^I capture the matching agents count by Nationality$")
	public void captureAgentsCountByNationality(){
		fa.getAgentsCountByNationality();
	}
	
	@And("^I verify that the new count is less than the previous count$")
	public void compareNumOfAgents(){
		fa.compareAgentsCounts();
	}

	@And("^I click on the first agent on the page$")
	public void chooseFirstAgent(){
		ad = new AgentDetailsPage(driver);
		ad.clickFirstAgent();
	}
	
	@And("^I capture Agent Name$")
	public void captureAgentName(){
		ad.saveAgentName();
	}

	@And("^I capture Agent Nationality$")
	public void captureAgentNationality(){
		ad.saveAgentNationality();
	}

	@And("^I capture Agent Languages$")
	public void captureAgentLanguages(){
		ad.saveAgentLanguages();
	}

	@And("^I capture Agent License No$")
	public void captureAgentLicenseNum(){
		ad.saveAgentLicenseNum();
	}

	@And("^I click on About Me tab$")
	public void goToAboutMeTab(){
		ad.selectAboutMeTab();
	}

	@And("^I capture Agent About Me information$")
	public void captureAboutMeInfo(){
		ad.saveAboutMeInfo();
	}

	@And("^I click on Call agent button$")
	public void clickCallAgentButton(){
		ad.clickCallAgentButton();
	}

	@And("^I capture Agent Phone Number$")
	public void captureAgentPhoneNum(){
		ad.saveAgentPhoneNum();
	}
	
	@And("^I capture Agent Company Name$")
	public void captureAgentCompanyName(){
		ad.saveAgentCompanyName();
	}
	
	@And("^I capture Agent Experience$")
	public void captureAgentExperience(){
		ad.saveAgentExperience();
	}
	
	@And("^I capture Agent No of Active Listings$")
	public void captureAgentNumOfListings(){
		ad.saveAgentNumOfListings();
	}
 
	@And("^I capture Agent LinkedIn URL$")
	public void captureAgentLinkedInUrl(){
		ad.saveAgentLinkedInUrl();
	}
	
	@And("^I write Agent info in a file$")
	public void logAgentInfo() throws IOException{
		ad.saveAgentInfo();
	}

	
	@And("^I change language to Arabic$")
	public void changeLanguage(){
		ad.toggleLanguage();
	}
	
	@And("^I capture Screenshot of the page as ([^\"]*)$")
	public void takeScreenshot(String photo){
		cf=new CommonFeatures(driver);
		cf.captureScreenshot(photo);
	}
}