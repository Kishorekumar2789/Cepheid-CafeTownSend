package com.cafeTownSend.util;



import com.cafeTownSend.pages.CreateUserPage;
import com.cafeTownSend.pages.EditPage;
import com.cafeTownSend.pages.HomePage;
import com.cafeTownSend.pages.LoginPage;

public class PageObjectManager  {

	
	private CreateUserPage createUserPage;
	private EditPage editPage;
	private HomePage homePage;
	private LoginPage loginPage;
	
	
	
	
	
	public HomePage getHomePage() {
		return (homePage == null) ? homePage = new HomePage() : homePage;
	}
	
	
	
	public CreateUserPage getCreateUserPage() {
		return (createUserPage == null) ? createUserPage = new CreateUserPage() : createUserPage;
		
	}
	
	public EditPage geteditPage() {
		return (editPage == null) ? editPage = new EditPage() : editPage;
		
	}
	
	public LoginPage getLoginPageObj() {
		return (loginPage == null) ? loginPage = new LoginPage() : loginPage;
	}
	
	
	
	
}
