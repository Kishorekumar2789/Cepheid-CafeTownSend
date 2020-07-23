package com.cafeTownSend.StepDefinitions;

import static org.junit.Assert.assertEquals;

import org.apache.log4j.Logger;

import com.cafeTownSend.pages.HomePage;
import com.cafeTownSend.pages.LoginPage;
import com.cafeTownSend.util.LoggerHelper;
import com.cafeTownSend.util.PageObjectManager;
import com.cafeTownSend.util.WebBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginPageSteps extends WebBase {
	
	

	private HomePage homePage;
	private LoginPage loginPage;
	private PageObjectManager pageObjectManager;
	private Logger log;
	
	
	@Given("^user launch the chrome browser$")
	public void user_launch_the_chrome_browser() {
    try {
    	pageObjectManager = new PageObjectManager();
    	log=LoggerHelper.getLogger(LoggerHelper.class);
		
		log.info("** Launching chrome browser **");
		WebBase.initialize();
	}catch(NullPointerException e) {
		throw new RuntimeException(e.getMessage()+" WebBase or pageObjectManager object is not loaded in "+Object.class.getName());
	}
	}
	@Then("^user is on login page$")
	public void user_is_on_login_page() {

		try {
		loginPage = pageObjectManager.getLoginPageObj();
		assertEquals(loginPage.getPageTitle(), property.getProperty("pageTitle"));
		log.info(" ** Page Title assertion success **");
		}catch(NullPointerException e) {
			throw new RuntimeException("Page objects are null");
		}catch(AssertionError e) {
			log.info(" ** Page title assertion is failed **");
			throw new RuntimeException(e.getMessage()+" failed due to Page Title Assertion");
			
		}

	}
	
	@Then("^enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String username, String password) {
	
		try {
			loginPage.login(username, password);
			log.info(" ** login is success **");
		}catch(NullPointerException e) {
			log.info(" ** login is failed **");
			throw new RuntimeException(e.getMessage()+"either username or password values are empty");
		
		
		}
	}
		
	@Then("^verify \"([^\"]*)\" credentials$")
	public void verify_credentials(String isValid) {
		try {
		homePage=pageObjectManager.getHomePage();
	    
		if(isValid.equalsIgnoreCase("valid")) {
			
			assertEquals(driver.getTitle(), property.getProperty("pageTitle"));
			log.info(" ** Page Title assertion is success **");
			assertEquals(homePage.getUserLoggedInUsername(), "Hello " + property.getProperty("username"));
			log.info(" ** Logged In username assertion is success **");
		}else if(isValid.equalsIgnoreCase("invalid")){
			
			assertEquals(loginPage.validateLoginErrorMessage(), property.getProperty("loginErrorMessage"));
			log.info(" ** verification of login Error message is success! **");
    
}	 
		}catch(AssertionError e) {
			log.info("** Page Title assertion is failed **");
			throw new RuntimeException(e.getMessage()+"Aseertion error on Title Valdaiton");
		}catch(NullPointerException n) {
			throw new RuntimeException(n.getMessage()+" Home page object is Null");
		}
		
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		log.info("Closing the browser");
		log.info("** Logout successfully **");
		driver.quit();
	   
	}
	

}