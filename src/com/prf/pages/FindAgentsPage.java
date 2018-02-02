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
	Properties p;
	
	public FindAgentsPage(WebDriver driver){
		this.driver = driver;	
	}
		
	public void launchFindAgentsPage(){
		driver.findElement(By.cssSelector("header#header nav > ul > li:nth-child(4) > a.js-find-agent")).click();
	}
	
	public void selectLanguageDropdown(String lang) {
		
		p=new Properties();
		try {
	    	FileInputStream fi=new FileInputStream("C:\\PropertyFinder\\global.properties");
			p.load(fi);
	    	} catch (IOException ioe){
	    	}	
		 if (!(p.getProperty("browser").contains("phantom"))) {
			 driver.findElement(By.xpath("//div[4]/div/div[2]//*[contains(text(), '" + lang + "')]")).click();
		 }
	}

	public void selectLanguage(String lang){
		chooseLanguage(lang);
	}
	
	public void clickFindAgentButton() {
		driver.findElement(By.cssSelector("button.button.button-fullheight.button-connectedright.button-uppercase")).click();
	}
	
	public void getAgentsCount(){
		String  numAgentsText = driver.findElement(By.cssSelector("div.heading > h1.title")).getText();
		String[] parts = numAgentsText.split(" Matching");
		totalAgentsCount = Integer.parseInt(parts[0]);
		System.out.println("Total agents count: " + totalAgentsCount);
	}

	public void selectNationality(){
		if (!(p.getProperty("browser").contains("phantom"))) {
			driver.findElement(By.cssSelector("div:nth-child(5) > div > div.dropdown_text.dropdown_text-serp")).click();
			driver.findElement(By.cssSelector("div.dropdown_popup.dropdown_popup-opened > div:nth-child(33)")).click();
		}
	}
	
	public void getAgentsCountByNationality(){
		//clears browser cache
		driver.manage().deleteAllCookies();
		String countryAgentsText = driver.findElement(By.cssSelector("div.section_agentbroker-list div.section div div.heading h1")).getText();
		String[] parts = countryAgentsText.split(" Matching");
		countryAgentsCount = Integer.parseInt(parts[0]);	
		System.out.println("Country agents count: " + countryAgentsCount);
	}
	
	public void compareAgentsCounts(){
		if (!(p.getProperty("browser").contains("phantom"))) {
			Assert.assertTrue(countryAgentsCount < totalAgentsCount);
		}
	}
	
	private void chooseLanguage(String lang) {
		String language = "//div[4]/div/div[2]//*[contains(text(), '" + lang + "')]";
		driver.findElement(By.xpath(language)).click();
	}
}
