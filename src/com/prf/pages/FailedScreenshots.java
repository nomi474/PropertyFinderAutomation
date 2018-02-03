package com.prf.pages;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class FailedScreenshots extends TestWatcher {

    private WebDriver driver;

    public FailedScreenshots(WebDriver driver) {
        this.driver = driver;
    }

    @Override
    protected void failed(Throwable e, Description description) {
        String methodName = description.getMethodName();
        String fileName = description.getTestClass().getSimpleName() + "-" + methodName + ".png";

        try {
            File destiny = new File(fileName);
            FileUtils.copyFile(((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE), destiny);
        } catch (IOException ioe) {
            throw new RuntimeException(ioe);
        }
    }

    @Override
    protected void finished(Description description) {
        driver.quit();
    }
}
