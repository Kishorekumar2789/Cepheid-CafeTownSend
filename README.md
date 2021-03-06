
## Overview:
This is Behavior Driven Development Test Automation Framework using Selenium with Java, JUnit, TestNG and Maven.
This Behavior Driven framework is integrated with TestNg which gives more flexibility in CI/CD build pipeline

### Prerequisite:
Install below softwares:
1. Java- 8
2. Eclipse IDE - Oxygen

## Install below dependencies:
1. cucumber-java
2. cucumber-junit
3. cucumber-jvm-deps
4. cucumber-reporting
5. cucumber-testng
6. gherkin
7. junit
8. selenium-java
9. log4j
	
## Install below Plugins:
1. maven-compiler-plugin
2. maven-surefire-plugin
3. maven-source-plugin
4. maven-cucumber-reporting


## Highlights:
1. In this framework I fouced on Happy path testing
2. Tests are independent to each other.
3. No duplicate creation of class Objects.
4. Followed OOPS methodology on accessing the classes and methods.
5. Parallel execution can be configured if needed.


## Install Maven:
   1. Follow this link to install maven - https://mkyong.com/maven/how-to-install-maven-in-windows/
   2. Once installation is over, execute this command in command prompt mvn --version 
      Maven home: **MAVEN_HOME Path
	  Java version: 1.8.0_241, vendor: Oracle Corporation, runtime: **JDK PATH
	  Default locale: en_US, platform encoding: Cp1252
	  OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"

## Framework SetUp:
1. Download this project from git and unzip the project.
2. Open Ecllipse IDE.
3. choose file -> imports-> expand maven -> choose Existing Maven project.
4. Select project root from local and click finish.
5. All dependencies should be installed.
6. There are chances of error occurance due to incorrect path. for ex: chrome path.



## How to Execute Tests:
Designed this framework to execute tests in two different mode:
1. Execute tests from TestNG.xml - 
    Configred Test Runner class in TestNG.xml and execute as TestNG suite.
2. Execute tests from command line using Maven commands:
   In commandline - navigate to the Maven project folder
   Execute the below commands:
    -  mvn clean - clean the project workspace 
	-  mvn compile - compile the source code of the project using a suitable unit testing framework. Packaging the files into jar type
	-  mvn verify - I have set a goal in this dependency "maven-cucumber-reporting". 
3.   Referesh the project
4. Navigate to this location to view the report- **\target\cucumber-reports
5. Sample Pre-Execution reports are available in this folder: PreExecutionCucumber_Reports
	
## Framework Highlights:
1. In this framework I fouced on Happy path testing
2. Tests are independent to each other.
3. No duplicate creation of class Objects
4. Followed OOPS methodology on accessing the classs and methods
5. Prarllel execution can be configured if needed

## Framework Maintanence and Reusablity:
1. Designed Page Object model. if there is any change in UI easy to update the code
2. Handled webelements with proper explicit waits.
3. With this design pattern parallel execution and remote execution of automation scripts is very handy.
4. Cretaed this framework in Object share context. Only once Object is created and can be shared across the class in the framework
5. Introduced logger - easy to identify the failed tests
6. Created Helper methods which can be used across all action area.
7. Cretaed property util to read from property files
8. Integrated with Test NG, easy to perform different operation in CI/CD pipeline
9. Automation Tests can be executed from command line - ease of exection from Devops environment
10. Cucumber report will show the execution status of all the tests.























