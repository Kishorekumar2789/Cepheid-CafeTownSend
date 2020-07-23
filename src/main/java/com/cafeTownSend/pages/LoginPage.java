package com.cafeTownSend.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cafeTownSend.util.WebBase;
import com.cafeTownSend.util.WebdriverWaits;

public class LoginPage extends WebBase {
	
	
	
	//Page Factory
	@FindBy(xpath = ".//input[@ng-model='user.name']")
	private WebElement userNameField;
	
	@FindBy(xpath = ".//input[@ng-model='user.password']")
	private WebElement passwordField;
	
	@FindBy(xpath = ".//button[@type='submit']")
	private WebElement submitButton;
	
	@FindBy(xpath = ".//p[@ng-show='showMessage()']")
	WebElement loginErrorMessage;
	
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	
	
	public String getPageTitle() {
		return driver.getTitle();
		
	}
	
	
	public void login(String Username,String Password) {
		userNameField.sendKeys(Username);
		passwordField.sendKeys(Password);
		submitButton.click();
		
	}
	
	public String validateLoginErrorMessage() {
		return WebdriverWaits.visibilityOfelement(loginErrorMessage).getText();
	}
	
	
}
