package com.cafeTownSend.StepDefinitions;

import static org.junit.Assert.assertTrue;

import org.apache.log4j.Logger;

import com.cafeTownSend.pages.EditPage;
import com.cafeTownSend.pages.HomePage;
import com.cafeTownSend.pages.LoginPage;
import com.cafeTownSend.util.Helper;
import com.cafeTownSend.util.LoggerHelper;
import com.cafeTownSend.util.PageObjectManager;
import com.cafeTownSend.util.WebBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class EditUserSteps extends WebBase {
	
	private String firstName=null;
	private String lastName=null;
	private String date=null;
	private String emailId=null;
	private HomePage homePage;
	private LoginPage loginPage;
	private PageObjectManager pageObjectManager;
	private EditPage editPage;
	private Logger log;
	
	@Given("^user opens the browser$")
	public void user_opens_the_browser() {
		
		try {
			
		log=LoggerHelper.getLogger(LoggerHelper.class);	
		log.info(" ** Executing Edit User Tests **");
		pageObjectManager=new PageObjectManager();
		WebBase.initialize();
		log.info(" ** Browser is launched **");
		
		}catch(NullPointerException n) {
			log.info(" ** Couldn't launch browser **");
			throw new RuntimeException(n.getMessage()+" WebBase or pageObjectManager object is not loaded in"+Object.class.getSimpleName());
		}
	}

	@And("^successfull login into the application$")
	public void successfull_login_into_the_application() {
		try {
		loginPage=pageObjectManager.getLoginPageObj();
	  loginPage.login(property.getProperty("username"), property.getProperty("password"));
	  log.info(" ** User Login is suceess **");
		}catch(NullPointerException e) {
			log.info(" ** User Login is failed **");
			throw new RuntimeException(e.getMessage()+" login page object is null in"+Object.class.getSimpleName());
		}
	}

	@And("^click on user from userlist$")
	public void click_on_user_from_userlist() {
		try {
		homePage=pageObjectManager.getHomePage();
		homePage.clickUserInList();
		log.info(" ** clicked user from Userlist **");
		}catch(NullPointerException e) {
			log.info(" ** unable to click user from Userlist **");
			throw  new RuntimeException(e.getMessage()+" home page object is null in"+Object.class.getSimpleName());
		}
	    
	}

	@Then("^click on edit button$")
	public void click_on_edit_button() {
		homePage.clickEditButton();
		log.info(" ** clicked edit button **");
	    
	}

	@Then("^edit the user info$")
	public void edit_the_user_info() {
		try {
		editPage=pageObjectManager.geteditPage();
		
		firstName=Helper.generateRandomString("automation");
		lastName=Helper.generateRandomString("user");
		 date= Helper.generateRandomDate();
		 emailId= Helper.generateRandomEmail(10);
		
		editPage.modifyUserValues(firstName, lastName, date, emailId);
		log.info(" ** successfully edited the user info **");
		}catch(NullPointerException e) {
			log.info(" ** Unable to edit the user info **");
			throw  new RuntimeException(e.getMessage()+" homePageObject is null in"+Object.class.getSimpleName());
		}
   
	}

	@Then("^click on update button$")
	public void click_on_update_button()  {
	    try {
		editPage.clickUpdateButton();
		log.info(" ** User Edit operation is succcess **");
	    }catch(NullPointerException e) {
	    	log.info(" ** User Edit operation is failed **");
	    	throw  new RuntimeException(e.getMessage()+" editPageObject is null in"+Object.class.getSimpleName());
	    }
	}

	@Then("^verify the updated username in the userlist$")
	public void verify_the_updated_username_in_the_userlist() {
		try {
		assertTrue(homePage.verifyUserExistInUserList(firstName+" "+lastName));
		log.info(" ** verified edited user displayed in user list **");
		}catch(AssertionError e){
			log.info(" ** verified edited user in not displayed in user list **");
			throw new RuntimeException(e.getMessage()+"assertion error in verifying the username");
			
		}
	    
	}
	
	@Then("^click logout button$")
	public void click_logout_button() {
		
		homePage.clickLogout();
		log.info("** Logout successfully **");
		driver.quit();
	    
	}



}
