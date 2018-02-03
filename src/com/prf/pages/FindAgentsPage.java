package com.prf.pages;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import com.prf.common.CommonFeatures;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import junit.framework.Assert;

public class FindAgentsPage {
	
	WebDriver driver;
	int totalAgentsCount = 0;
	int countryAgentsCount = 0;
	CommonFeatures cf;

	/** Find Agent link at the tope of the page. */
	public static final String FIND_AGENT_LINK = "header#header nav > ul > li:nth-child(4) > a.js-find-agent";
	
	/** Find button on the 'Find Agents' page. */
	public static final String FIND_AGENT_BUTTON = "button.button.button-fullheight.button-connectedright.button-uppercase";
	
	/** Text showing the count of maching agents for a search */
	public static final String NUM_AGENTS_TEXT = "div.heading > h1.title";
	
	/** Nationality dropdown on the Agent Search results page. */
	public static final String CLICK_NATIONALITY_DROPDOWN = "div:nth-child(5) > div > div.dropdown_text.dropdown_text-serp";
	
	/** Element locator for selecting India from the Nationality dropdown. */
	public static final String SELECT_NATIONALITY_INDIA = "div.dropdown_popup.dropdown_popup-opened > div:nth-child(33)";
	
	/**
	 * 
	 * @param driver
	 */
	public FindAgentsPage(WebDriver driver){
		this.driver = driver;	
	}
	
	public void launchFindAgentsPage(){
		driver.findElement(By.cssSelector(FIND_AGENT_LINK)).click();
	}
	
	/**
	 * 
	 * @param lang
	 */
	public void selectLanguageDropdown(String lang) {

			 driver.findElement(By.xpath("//div[4]/div/div[2]//*[contains(text(), '" + lang + "')]")).click();
	}

	/**
	 * 
	 * @param lang
	 */
	public void selectLanguage(String lang){
		chooseLanguage(lang);
	}
	
	public void clickFindAgentButton() {
		driver.findElement(By.cssSelector(FIND_AGENT_BUTTON)).click();
	}
	
	public void getAgentsCount(){
		String  numAgentsText = driver.findElement(By.cssSelector(NUM_AGENTS_TEXT)).getText();
		String[] parts = numAgentsText.split(" Matching");
		totalAgentsCount = Integer.parseInt(parts[0]);
	}

	public void selectNationality(){
		//clears browser cache
		driver.manage().deleteAllCookies();
		driver.findElement(By.cssSelector(CLICK_NATIONALITY_DROPDOWN)).click();
		driver.findElement(By.cssSelector(SELECT_NATIONALITY_INDIA)).click();
	}
	
	public void getAgentsCountByNationality(){
		//clears browser cache
		driver.manage().deleteAllCookies();
		String countryAgentsText = driver.findElement(By.cssSelector(NUM_AGENTS_TEXT)).getText();
		String[] parts = countryAgentsText.split(" Matching");
		countryAgentsCount = Integer.parseInt(parts[0]);	
	}
	
	public void compareAgentsCounts(){
			Assert.assertTrue(countryAgentsCount < totalAgentsCount);
	}
	
	/**
	 * 
	 * @param lang
	 */
	private void chooseLanguage(String lang) {
		String language = "//div[4]/div/div[2]//*[contains(text(), '" + lang + "')]";
		driver.findElement(By.xpath(language)).click();
	}
}
