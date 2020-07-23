package com.cafeTownSend.StepDefinitions;

import org.apache.log4j.Logger;

import com.cafeTownSend.pages.CreateUserPage;
import com.cafeTownSend.pages.HomePage;
import com.cafeTownSend.pages.LoginPage;
import com.cafeTownSend.util.LoggerHelper;
import com.cafeTownSend.util.PageObjectManager;
import com.cafeTownSend.util.WebBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class CreateUserSteps extends WebBase {
	
	private HomePage homePage;
	private LoginPage loginPage;
	private PageObjectManager pageObjectManager;
	private CreateUserPage createUserPage;
	private Logger log;

	@Given("^user opens chrome browser$")
	public void user_opens_chrome_browser()  {
		try {
		
		pageObjectManager=new PageObjectManager();
		log=LoggerHelper.getLogger(LoggerHelper.class);
		log.info(" ** Executing Create User Tests ** ");
		WebBase.initialize();
		log.info(" ** Browser is launched **");
		}catch(NullPointerException e) {
			log.info("** Browser launch is failed **");
			throw new RuntimeException(e.getMessage()+" WebBase or pageObjectManager throws null "+Object.class.getSimpleName());
		}
	}
	
	
	
	@And("^successful login into the application$")
	public void successful_login_into_the_application() {
		
		try {
		loginPage=pageObjectManager.getLoginPageObj();
		loginPage.login(property.getProperty("username"), property.getProperty("password"));
		log.info("** User login is success **");
		}catch(NullPointerException e) {
			log.info("** User login is failed **");
			throw new RuntimeException(e.getMessage()+" loginPage Object throws null "+Object.class.getSimpleName());
		}
	  
	}

	@And("^user clicks on createUser button$")
	public void user_clicks_on_createUser_button() {
		
		try {
		homePage=pageObjectManager.getHomePage();
		homePage.clickCreateButton();
		log.info("** Create button is clicked **");
		}catch(NullPointerException m) {
			log.info("** unable to clicj create button **");
			throw new RuntimeException(m.getMessage()+" homePage Object throws null "+Object.class.getSimpleName());
			
		}
	   
	}
	
	@Then("^enter the user detials \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void enter_the_user_detials(String firstName, String lastName, String startDate, String email)  {
		try {
		createUserPage=pageObjectManager.getCreateUserPage();
		createUserPage.enterUserDetails(firstName, lastName, startDate,email);
		log.info("** User info is entered successfully **");
		}catch(NullPointerException c) {
			log.info("** Issue on entering user info **");
			throw new RuntimeException(c.getMessage()+" createPage Object throws null "+Object.class.getSimpleName());
		}
	}

	@Then("^click Add button$")
	public void click_Add_button()  {
		
		try {
		createUserPage.clickAddButton();
		log.info("** New User s created successfully **");
		}catch(NullPointerException a) {
			log.info("** User Creation is failed **");
			throw new RuntimeException(a.getMessage()+" createPage Object throws null "+Object.class.getSimpleName());
		}
	}

	@Then("^logout from application$")
	public void logout_from_application() {
		
		homePage.clickLogout();
		log.info("** Logout successfully **");
		driver.quit();
	    
	}


}
