Feature: User Login

Scenario Outline: Validate Login flow of CafeTown Application

Given user launch the chrome browser
Then user is on login page
And  enter "<username>" and "<password>"
Then verify "<valid or invalid>" credentials
Then close the browser

Examples:
|username|password|valid or invalid|
|Luke    |Skywalker|valid        |
|Test    |Test123  |invalid      |
