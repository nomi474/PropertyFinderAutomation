package com.prf.pages;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.prf.common.CommonFeatures;

public class SearchPropertyPage {

	WebDriver driver;
	String totalPriceOnPaymentPage;
	CommonFeatures cf;
	
	/** Transaction Type dropdown on Search Property page. */
	public static final String CLICK_TRANSACTION_DROPDOWN = "form#search-form-property div.category-select.pure-u-1-1.pure-u-sm-1-4.pure-push > div > button[type=\"button\"] > span";
	
	/** Buy option from Transaction Type dropdown*/
	public static final String SELECT_BUY_TRANSACTION = "form#search-form-property div.category-select.pure-u-1-1.pure-u-sm-1-4.pure-push > div > div > ul > li:nth-child(2)";
	
	/** Property Type dropdown on Search Property page.*/
	public static final String CLICK_PROPERTY_DROPDOWN = "form#search-form-property div.settings.minimized > div > div:nth-child(1) > div > button[type=\"button\"] > span";
	
	/** Villa option from Property Type dropdown */
	public static final String SELECT_VILLA_PROPERTY_TYPE = "form#search-form-property div.settings.minimized > div > div:nth-child(1) > div > div > ul > li:nth-child(3)";
	
	/** Min beds dropdown on Search Property page.*/
	public static final String CLICK_MIN_BEDS_DROPDOWN = "div#bedroom_group div:nth-child(1) > div > button[type='button'] > span";
	
	/** 3 beds option from Min beds dropdown*/
	public static final String SELECT_MIN_3_BEDS = "div#bedroom_group div:nth-child(1) > div > div > ul > li:nth-child(5)";
	
	/** Max beds dropdown on Search Property page.*/
	public static final String CLICK_MAX_BEDS_DROPDOWN = "div#bedroom_group div:nth-child(2) > div > button[type='button'] > span";
	
	/** 7 beds option from Max beds dropdown*/
	public static final String SELECT_MAX_7_BEDS = "div#bedroom_group div:nth-child(2) > div > div > ul > li:nth-child(9)";
	
	/** Find button on Find Property page */
	public static final String  CLICK_FIND_PROPERTY_BUTTON= "button[type=\"submit\"]";
	
	/** Titles list for search results for Property search */
	public static final String PROPERTY_TITLES_LIST = "section#serp li > div.property-content > h2 > a > bdi";
	
	/** Prices list for search results for Property search*/
	public static final String PROPERTY_PRICES_LIST = "section#serp li > div.property-content > div.info-area > div > span.price";
	
	/**
	 * 
	 * @param driver
	 */
	public SearchPropertyPage(WebDriver driver){
		this.driver = driver;
	}
	
	public void selectBuyAsTransactionType(){
		driver.findElement(By.cssSelector(CLICK_TRANSACTION_DROPDOWN)).click();
		driver.findElement(By.cssSelector(SELECT_BUY_TRANSACTION)).click();
	}
	
	public void setVillaAsPropertyType(){
		driver.findElement(By.cssSelector(CLICK_PROPERTY_DROPDOWN)).click();
		driver.findElement(By.cssSelector(SELECT_VILLA_PROPERTY_TYPE)).click();
	}
	
	/**
	 * 
	 * @param location
	 */
	public void setLocationName(String location){
		WebElement property = driver.findElement(By.name("q"));
		property.clear();
		property.sendKeys(location);
		property.sendKeys(Keys.TAB);
	}
	
	
	public void setMinBeds(){
		driver.findElement(By.cssSelector(CLICK_MIN_BEDS_DROPDOWN)).click();
		driver.findElement(By.cssSelector(SELECT_MIN_3_BEDS)).click();
	}
	
	public void setMaxBeds(){
		driver.findElement(By.cssSelector(CLICK_MAX_BEDS_DROPDOWN)).click();
		driver.findElement(By.cssSelector(SELECT_MAX_7_BEDS)).click();
	}
	
	public void clickFindButton(){
		driver.findElement(By.cssSelector(CLICK_FIND_PROPERTY_BUTTON)).click();
	}

	public void savePropertySearchResults() throws IOException{
		List<WebElement> properties = new ArrayList<WebElement>(driver.findElements(By.cssSelector(PROPERTY_TITLES_LIST)));
		List<WebElement> prices = new ArrayList<WebElement>(driver.findElements(By.cssSelector(PROPERTY_PRICES_LIST)));
	    List<String> titles = new ArrayList<String>();
	    List<String> values = new ArrayList<String>();
	    BufferedWriter writer = new BufferedWriter(new FileWriter("C://PropertyFinder//properties.csv"));
	    
		for (WebElement property : properties) {
		    titles.add(property.getText());
		}
		
		for (WebElement price : prices) {
		    values.add(price.getText());
		}
		
		for(int i = 0; i < titles.size(); i++) {
		    writer.append(titles.get(i) + " - " +  values.get(i) + "\n");
		}
	    writer.close();
	}
}
