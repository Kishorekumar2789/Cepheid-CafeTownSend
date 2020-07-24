package com.cafeTownSend.Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@RunWith(Cucumber.class)
@CucumberOptions(
		features="LocalPath\\Cepheid-Maven\\src\\main\\java\\com\\cafeTownSend\\features",
		glue = {"com/cafeTownSend/StepDefinitions"},
		plugin = {"pretty","html:target/site/cucumber-pretty","json:target/cucumber.json"},
		dryRun = false,
		monochrome = true
		
		)


public class TestRunner extends AbstractTestNGCucumberTests  {

}
