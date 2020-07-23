package com.cafeTownSend.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cafeTownSend.util.Helper;
import com.cafeTownSend.util.WebBase;
import com.cafeTownSend.util.WebdriverWaits;



public class HomePage extends WebBase {

	
	
	@FindBy(id = "greetings")
	private WebElement loggedInUsername;
	
	@FindBy(xpath = ".//p[contains(text(),'Logout')]")
	private WebElement logoutButton;
	
	@FindBy(id = "bAdd")
	private WebElement createButton;
	
	@FindBy(id = "bEdit")
	private WebElement editButton;
	
	@FindBy(id = "bDelete")
	private WebElement deleteButton;
	
	@FindBy(xpath = ".//div[@id='employee-list-container']/ul/li")
	private List<WebElement> userList;
	
	
	public HomePage() {
		 PageFactory.initElements(driver, this);
		 }
	
	
	public void clickCreateButton() {
		WebdriverWaits.visibilityOfelement(createButton).click();
		
		
	}
	
	public void clickEditButton() {
		WebdriverWaits.visibilityOfelement(editButton).click();
		
	}
	
	public void clickDeleteButton() {
		WebdriverWaits.visibilityOfelement(deleteButton).click();
	}
	
	
	public String getUserLoggedInUsername() {
		
		return WebdriverWaits.visibilityOfelement(loggedInUsername).getText();
	}
	
	public void createUser() {
		
	}
	
	public int  checkUseList() {
		return userList.size();
	}
	
	public void clickLogout() {
		
	 //Helper.clickElementByJS(WebdriverWaits.visibilityOfelement(logoutButton));
		WebdriverWaits.isElementClickable(logoutButton).click();
	// Helper.clicButtonByAction(logoutButton);
		//logoutButton.click();
	}
	
	public void clickUserInList() {
		
		userList.get(0).click();
		
	}
	
    public void doubleClickOnUser() {
		
		Helper.performDoubleClick(WebdriverWaits.isElementClickable(userList.get(0)));
		
	}
	
	
    public String getNameFromUserList() {
		
		return userList.get(0).getText();
		
	}
    
    public boolean verifyUserDeletedFromUserList(String user) {
    	
    	boolean userdeleted=false;
    	
    	for(WebElement users:userList) {
    		
    		if(users.getText().equalsIgnoreCase(user))
    			userdeleted=false;
    		else
        		userdeleted=true;
    	}
	
    	return userdeleted;
    	
    	
    	
    }
    
public boolean verifyUserExistInUserList(String user) {
	
	
    	
    	boolean userdeleted=false;
    	
    	for(WebElement users:userList) {
 	
    		if(users.getText().trim().contains(user.trim())) {
    			System.out.println("after confirmation: "+users.getText());
    			userdeleted=true;
    			break;
    		}else {
        		userdeleted=false;
    		}
    	}
    	
    	
	
    	return userdeleted;
    	
    	
    	
    }
}
