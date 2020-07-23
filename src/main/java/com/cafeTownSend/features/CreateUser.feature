Feature: Create User feature

Scenario Outline: Create user Scenario

Given user opens chrome browser
And successful login into the application
And user clicks on createUser button
Then enter the user detials "<FirstName>" "<LastName>" "<StartDate>" "<Email>"
Then click Add button
Then logout from application

Examples:
|FirstName|LastName|StartDate|Email|
|Peter    |Von     |2020-03-10|peter@gmail.com|
|Ajay     |kumar   |2020-07-23|ajay.kumar@gmail.com|