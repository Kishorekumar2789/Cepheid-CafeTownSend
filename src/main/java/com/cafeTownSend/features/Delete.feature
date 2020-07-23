Feature: Delete user feature

Scenario: Delete user Scenario
 
Given user open the chrome browser
And successful login into application
Then select any user from the Userlist
And click on delete button
Then click  Ok button in window pop up
Then user should be deleted from the user list
Then click logout option and close the Browser