Feature: Edit user feature

Scenario: Edit user Scenario

Given user opens the browser
And successfull login into the application
And click on user from userlist
Then click on edit button
And edit the user info
Then click on update button
Then verify the updated username in the userlist
Then click logout button