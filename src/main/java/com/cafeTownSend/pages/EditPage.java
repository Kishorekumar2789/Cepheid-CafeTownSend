package com.cafeTownSend.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cafeTownSend.util.WebBase;


public class EditPage extends WebBase {
	
	
	
	public EditPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.firstName']")
	WebElement firstname;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.lastName']")
	WebElement lastname;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.startDate']")
	WebElement startDate;
	
	@FindBy(xpath = ".//input[@ng-model='selectedEmployee.email']")
	WebElement email;
	
	@FindBy(xpath = ".//button[@ng-hide='isCreateForm']")
	WebElement updateButton;
	
	@FindBy(xpath = ".//p[@ng-click='deleteEmployee()']")
	WebElement deleteButton;
	
	
	
	
	
	
	
	public  void clickUpdateButton() {
		updateButton.click();
		
	}
	
	public void modifyUserValues(String fname,String lname,String date,String Email) {
		firstname.clear();
		firstname.sendKeys(fname);
		
		lastname.clear();
		lastname.sendKeys(lname);
		
		startDate.clear();
		startDate.sendKeys(date);
		
		email.clear();
		email.sendKeys(Email);
	}
	
	
	

}
