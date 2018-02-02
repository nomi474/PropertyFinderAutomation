package com.prf.common;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.TakesScreenshot;

public class CommonFeatures {
	
	WebDriver driver;	
	
	public  CommonFeatures(WebDriver driver){
		this.driver = driver;
	}
	
	public void captureScreenshot(String fileName) {

		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			 // now copy the  screenshot to desired location using copyFile //method
			FileUtils.copyFile(scrFile, new File("C:/PropertyFinder/screenshots/" + fileName));
			}
			 
			catch (IOException e)
			 {
			  System.out.println(e.getMessage());
			 
			 }

	}
	
	public void maximizeBrowserWindow(){
		driver.manage().window().maximize();
	}
	
	public void implicitWait(int seconds){
    	driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}
	
	public void waitForElementToAppear(By locator){
		WebDriverWait wait = new WebDriverWait(driver, 10);
		//wait.until(ExpectedConditions.elementToBeClickable(locator));
	}	

    public boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    
    public void closeWebPage() {
    		driver.close();
    		driver.quit();
    }
}