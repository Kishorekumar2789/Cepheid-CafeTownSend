package com.cafeTownSend.StepDefinitions;


import static org.junit.Assert.assertTrue;

import org.apache.log4j.Logger;

import com.cafeTownSend.pages.HomePage;
import com.cafeTownSend.pages.LoginPage;
import com.cafeTownSend.util.Helper;
import com.cafeTownSend.util.LoggerHelper;
import com.cafeTownSend.util.PageObjectManager;
import com.cafeTownSend.util.WebBase;
import com.cafeTownSend.util.WebdriverWaits;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DeleteUserSteps extends WebBase {
	
	private HomePage homePage;
	private LoginPage loginPage;
	private PageObjectManager pageObjectManager;
	private Logger log;
	
	private String userName=null;
	
	@Given("^user open the chrome browser$")
	public void user_open_the_chrome_browser()  {
		try {
		log=LoggerHelper.getLogger(LoggerHelper.class);		
		pageObjectManager=new PageObjectManager();
		log.info("** Executing DeleteUser Tests **");
		WebBase.initialize();
		log.info("** Browser is launched **");
		}catch(NullPointerException e) {
			log.info("** Browser launch is faield **");
			throw new RuntimeException(e.getMessage()+" WebBase or PageObjectManager is Null"+Object.class.getSimpleName());
		}
	    
	}

	@And("^successful login into application$")
	public void successful_login_into_application() {
	  
		try {
		loginPage=pageObjectManager.getLoginPageObj();
		loginPage.login(property.getProperty("username"), property.getProperty("password"));
		log.info("** User Login is success **");
		}catch(NullPointerException e) {
			log.info("** User Login is failed **");
			throw new RuntimeException(e.getMessage()+" loginPageObject is Null"+Object.class.getSimpleName());
		}
	}
	
	@Then("^select any user from the Userlist$")
	public void select_any_user_from_the_Userlist()  {
		try {
		homePage=pageObjectManager.getHomePage();
		userName=homePage.getNameFromUserList();
		homePage.clickUserInList();
		log.info("** User is clicked from Userlist **");
		}catch(NullPointerException e) {
			log.info("** Unable to click User from User list**");
			throw new RuntimeException(e.getMessage()+" homePageObject is Null"+Object.class.getSimpleName());
		}
	}

	@And("^click on delete button$")
	public void click_on_delete_button()  {
	   try {
		homePage.clickDeleteButton();
		log.info("** Delete button is clicked **");
	   }catch(NullPointerException e) {
		   log.info("** Unable to click Delete button **");
		   throw new RuntimeException(e.getMessage()+" homePageObject is Null"+Object.class.getSimpleName());
	   }
	}
	
	@Then("^click  Ok button in window pop up$")
	public void click_Ok_button_in_window_pop_up()  {
		
	    try {
		assertTrue(WebdriverWaits.isAlertPresent());
	    Helper.acceptPopOver();
	    log.info("** Delete pop is displayed and user is deleted successfully**");
	    }catch(AssertionError e) {
	    	  log.info("** Delete pop is failed to display **");
	    	throw new RuntimeException(e.getMessage()+" Assertion error on window pop over "+Object.class.getSimpleName());
	    }
	}

	

	@Then("^user should be deleted from the user list$")
	public void user_should_be_deleted_from_the_user_list() {
	   
		try {
		assertTrue(homePage.verifyUserDeletedFromUserList(userName));
		  log.info("** Deleted user is not availabe in User List**");
		}catch(AssertionError a) {
			log.info("** Search of delete user is failed **");
			throw new RuntimeException(a.getMessage()+" Assertion error delete user confirmation "+Object.class.getSimpleName());
			
		}
		
	}
	
	@Then("^click logout option and close the Browser$")
	public void click_logout_option_and_close_the_Browser() {
	   
		homePage.clickLogout();
		log.info("** Logout successfully **");
		driver.quit();
		
	}

}
