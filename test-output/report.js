$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Delete.feature");
formatter.feature({
  "line": 1,
  "name": "Delete user feature",
  "description": "",
  "id": "delete-user-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Delete user Scenario",
  "description": "",
  "id": "delete-user-feature;delete-user-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "successful login into application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any user from the list",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click  ok button to delete the user from user list",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should be deleted from the user list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click logout option and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteUserSteps.user_open_the_chrome_browser()"
});
formatter.result({
  "duration": 6949733000,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.successful_login_into_application()"
});
formatter.result({
  "duration": 899919700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.select_any_user_from_the_list()"
});
formatter.result({
  "duration": 1327008700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_on_delete_button()"
});
formatter.result({
  "duration": 102559500,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_ok_button_to_delete_the_user_from_user_list()"
});
formatter.result({
  "duration": 11618600,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.user_should_be_deleted_from_the_user_list()"
});
formatter.result({
  "duration": 5833865100,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_logout_option_and_close_the_Browser()"
});
formatter.result({
  "duration": 808480600,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "CafeTown application test",
  "description": "",
  "id": "cafetown-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Login flow of CafeTown Application",
  "description": "",
  "id": "cafetown-application-test;validate-login-flow-of-cafetown-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user logs into application",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user land on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate logged in username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click logout button and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_open_the_browser()"
});
formatter.result({
  "duration": 6129530800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 5286100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_application()"
});
formatter.result({
  "duration": 330820600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_land_on_homepage()"
});
formatter.result({
  "duration": 5222800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 88156700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_logout_button_and_close_the_Browser()"
});
formatter.result({
  "duration": 1139814300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cp class\u003d\"main-button\" ng-click\u003d\"logout()\"\u003e...\u003c/p\u003e is not clickable at point (930, 245). Other element would receive the click: \u003cdiv class\u003d\"main-view-wrapper main-view-wrapper-employees\" ng-class\u003d\"{login:\u0027main-view-wrapper-loggedIn\u0027,\n      employees:\u0027main-view-wrapper-employees\u0027,\n      edit:\u0027main-view-wrapper-edit\u0027,\n      create:\u0027main-view-wrapper-create\u0027}[viewState.current]\" style\u003d\"\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WTSELVSE112038L\u0027, ip: \u0027192.168.10.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SESA53~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 45d90c32014e9fc537e18769f6055c8c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.cafeTownSend.pages.HomePage.clickLogout(HomePage.java:80)\r\n\tat com.cafeTownSend.StepDefinitions.HomePageSteps.click_logout_button_and_close_the_Browser(HomePageSteps.java:64)\r\n\tat ✽.Then click logout button and close the Browser(Login.feature:10)\r\n",
  "status": "failed"
});
});