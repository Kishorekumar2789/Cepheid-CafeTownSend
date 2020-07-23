package com.cafeTownSend.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cafeTownSend.util.Helper;
import com.cafeTownSend.util.WebBase;



public class CreateUserPage extends WebBase  {

	
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.firstName']")
	WebElement firstName;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.lastName']")
	WebElement lastName;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.startDate']")
	WebElement startDate;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.email']")
	WebElement email;
	
	@FindBy(xpath = ".//button[@ng-show='isCreateForm']")
	WebElement addButton;
	
	
	
	public CreateUserPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	
	
	public void clickAddButton() {

		Helper.clickElementByJS(addButton);
		
	}
	
	
	public void enterUserDetails(String fname,String Lname, String date, String Email) {
		firstName.sendKeys(fname);
		lastName.sendKeys(Lname);
		startDate.sendKeys(date);
		email.sendKeys(Email);
		Helper.clickElementByJS(addButton);
		
	}
	
	
	
	
	
	
	
}
