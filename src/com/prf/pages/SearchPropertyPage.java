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
	
	public SearchPropertyPage(WebDriver driver){
		this.driver = driver;
	}
	
	public void setTransactionType(String tranType){
		driver.findElement(By.cssSelector("form#search-form-property div.category-select.pure-u-1-1.pure-u-sm-1-4.pure-push > div > button[type=\"button\"] > span")).click();
		driver.findElement(By.cssSelector("form#search-form-property div.category-select.pure-u-1-1.pure-u-sm-1-4.pure-push > div > div > ul > li:nth-child(2)")).click();
	}
	
	public void setPropertyType(String propType){
		driver.findElement(By.cssSelector("form#search-form-property div.settings.minimized > div > div:nth-child(1) > div > button[type=\"button\"] > span")).click();
		driver.findElement(By.cssSelector("form#search-form-property div.settings.minimized > div > div:nth-child(1) > div > div > ul > li:nth-child(3)")).click();
	}
	
	public void setLocationName(String location){
		WebElement property = driver.findElement(By.name("q"));
		property.clear();
		property.sendKeys(location);
		property.sendKeys(Keys.TAB);
	}
	
	public void setMinBeds(String minBeds){
		driver.findElement(By.cssSelector("div#bedroom_group div:nth-child(1) > div > button[type='button'] > span")).click();
		WebElement min = driver.findElement(By.cssSelector("div#bedroom_group div:nth-child(1) > div > div > ul > li:nth-child(5)"));
		min.click();
	}
	
	public void setMaxBeds(String maxBeds){
		driver.findElement(By.cssSelector("div#bedroom_group div:nth-child(2) > div > button[type='button'] > span")).click();
		WebElement max = driver.findElement(By.cssSelector("div#bedroom_group div:nth-child(2) > div > div > ul > li:nth-child(9)"));
		max.click();
	}
	
	public void clickFindButton(){
		driver.findElement(By.cssSelector("button[type=\"submit\"]")).click();
		//driver.findElement(By.xpath("//button[@type='submit']/div[@class='text'][text()='Find']")).click();
	}

	public void savePropertySearchResults() throws IOException{
		List<WebElement> properties = new ArrayList<WebElement>(driver.findElements(By.cssSelector("section#serp li > div.property-content > h2 > a > bdi")));
		List<WebElement> prices = new ArrayList<WebElement>(driver.findElements(By.cssSelector("section#serp li > div.property-content > div.info-area > div > span.price")));
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
