package com.prf.stepdefinitionfiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Features"
		)

public class TestRunner {
	Navigation nav = new Navigation();
}
