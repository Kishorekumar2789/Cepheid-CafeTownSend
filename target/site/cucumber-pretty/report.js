$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create User feature",
  "description": "",
  "id": "create-user-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create user Scenario",
  "description": "",
  "id": "create-user-feature;create-user-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "successful login into the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on createUser button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter the user detials \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cStartDate\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "logout from application",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-user-feature;create-user-scenario;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "StartDate",
        "Email"
      ],
      "line": 13,
      "id": "create-user-feature;create-user-scenario;;1"
    },
    {
      "cells": [
        "Peter",
        "Von",
        "2020-03-10",
        "peter@gmail.com"
      ],
      "line": 14,
      "id": "create-user-feature;create-user-scenario;;2"
    },
    {
      "cells": [
        "Ajay",
        "kumar",
        "2020-07-23",
        "ajay.kumar@gmail.com"
      ],
      "line": 15,
      "id": "create-user-feature;create-user-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Create user Scenario",
  "description": "",
  "id": "create-user-feature;create-user-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "successful login into the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on createUser button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter the user detials \"Peter\" \"Von\" \"2020-03-10\" \"peter@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "logout from application",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUserSteps.user_opens_chrome_browser()"
});
formatter.result({
  "duration": 6950877100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.successful_login_into_the_application()"
});
formatter.result({
  "duration": 296949600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.user_clicks_on_createUser_button()"
});
formatter.result({
  "duration": 448717200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 24
    },
    {
      "val": "Von",
      "offset": 32
    },
    {
      "val": "2020-03-10",
      "offset": 38
    },
    {
      "val": "peter@gmail.com",
      "offset": 51
    }
  ],
  "location": "CreateUserSteps.enter_the_user_detials(String,String,String,String)"
});
formatter.result({
  "duration": 539674300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.click_Add_button()"
});
formatter.result({
  "duration": 15269400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.logout_from_application()"
});
formatter.result({
  "duration": 745093100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create user Scenario",
  "description": "",
  "id": "create-user-feature;create-user-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user opens chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "successful login into the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on createUser button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter the user detials \"Ajay\" \"kumar\" \"2020-07-23\" \"ajay.kumar@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "logout from application",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUserSteps.user_opens_chrome_browser()"
});
formatter.result({
  "duration": 6079817100,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.successful_login_into_the_application()"
});
formatter.result({
  "duration": 327988600,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.user_clicks_on_createUser_button()"
});
formatter.result({
  "duration": 468832900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 24
    },
    {
      "val": "kumar",
      "offset": 31
    },
    {
      "val": "2020-07-23",
      "offset": 39
    },
    {
      "val": "ajay.kumar@gmail.com",
      "offset": 52
    }
  ],
  "location": "CreateUserSteps.enter_the_user_detials(String,String,String,String)"
});
formatter.result({
  "duration": 702394000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.click_Add_button()"
});
formatter.result({
  "duration": 13681500,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserSteps.logout_from_application()"
});
formatter.result({
  "duration": 774666100,
  "status": "passed"
});
formatter.uri("Delete.feature");
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
  "name": "select any user from the Userlist",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click  Ok button in window pop up",
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
  "duration": 6466838700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.successful_login_into_application()"
});
formatter.result({
  "duration": 298346800,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.select_any_user_from_the_Userlist()"
});
formatter.result({
  "duration": 1014026400,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_on_delete_button()"
});
formatter.result({
  "duration": 81731700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_Ok_button_in_window_pop_up()"
});
formatter.result({
  "duration": 8704100,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.user_should_be_deleted_from_the_user_list()"
});
formatter.result({
  "duration": 5987761900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteUserSteps.click_logout_option_and_close_the_Browser()"
});
formatter.result({
  "duration": 810186400,
  "status": "passed"
});
formatter.uri("EditUser.feature");
formatter.feature({
  "line": 1,
  "name": "Edit user feature",
  "description": "",
  "id": "edit-user-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Edit user Scenario",
  "description": "",
  "id": "edit-user-feature;edit-user-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "successfull login into the application",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on user from userlist",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on edit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "edit the user info",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on update button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the updated username in the userlist",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "EditUserSteps.user_opens_the_browser()"
});
formatter.result({
  "duration": 6020446400,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.successfull_login_into_the_application()"
});
formatter.result({
  "duration": 296753900,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.click_on_user_from_userlist()"
});
formatter.result({
  "duration": 1039179200,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.click_on_edit_button()"
});
formatter.result({
  "duration": 98872300,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.edit_the_user_info()"
});
formatter.result({
  "duration": 667549800,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.click_on_update_button()"
});
formatter.result({
  "duration": 61024900,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.verify_the_updated_username_in_the_userlist()"
});
formatter.result({
  "duration": 1397999900,
  "status": "passed"
});
formatter.match({
  "location": "EditUserSteps.click_logout_button()"
});
formatter.result({
  "duration": 769671900,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate Login flow of CafeTown Application",
  "description": "",
  "id": "user-login;validate-login-flow-of-cafetown-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify \"\u003cvalid or invalid\u003e\" credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-login;validate-login-flow-of-cafetown-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "valid or invalid"
      ],
      "line": 12,
      "id": "user-login;validate-login-flow-of-cafetown-application;;1"
    },
    {
      "cells": [
        "Luke",
        "Skywalker",
        "valid"
      ],
      "line": 13,
      "id": "user-login;validate-login-flow-of-cafetown-application;;2"
    },
    {
      "cells": [
        "Test",
        "Test123",
        "invalid"
      ],
      "line": 14,
      "id": "user-login;validate-login-flow-of-cafetown-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Login flow of CafeTown Application",
  "description": "",
  "id": "user-login;validate-login-flow-of-cafetown-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"Luke\" and \"Skywalker\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify \"valid\" credentials",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 6006376200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 4121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 7
    },
    {
      "val": "Skywalker",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.enter_and(String,String)"
});
formatter.result({
  "duration": 327974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 8
    }
  ],
  "location": "LoginPageSteps.verify_credentials(String)"
});
formatter.result({
  "duration": 44914900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 610527600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Login flow of CafeTown Application",
  "description": "",
  "id": "user-login;validate-login-flow-of-cafetown-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter \"Test\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify \"invalid\" credentials",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 6034883100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 5698900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 7
    },
    {
      "val": "Test123",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.enter_and(String,String)"
});
formatter.result({
  "duration": 312247300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 8
    }
  ],
  "location": "LoginPageSteps.verify_credentials(String)"
});
formatter.result({
  "duration": 563974700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 638590500,
  "status": "passed"
});
});