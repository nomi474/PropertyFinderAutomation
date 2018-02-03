Feature: Test various scenarios on Property Finders web site

In order to search property
As a customer
I want to know how to search a property

@tester
Scenario:	Search and save matching property details
#Scenario:	Search for property
	Given I go to the page "http://propertyfinder.qa"
	And I wait for 5 seconds
	And I maximize the browser window
	And I wait for 5 seconds
	And I select BUY from dropdown
	And I select Villa from Property type dropdown
	And I enter The Pearl for the location
	And I select 3 Beds for Min bed dropdown
	And I select 7 Beds for Max bed dropdown
	And I click on the Find property button
	And I wait for 3 seconds
	And I write search results in a file
	
#Scenario: Find Agents
	Given I go to the page "https://propertyfinder.ae"
	And I wait for 3 seconds
	And I click on the Find Agent link
	And I wait for 5 seconds
	And I click on dropdown with visible text Languages
	And I select Hindi from the languages dropdown
	And I click on dropdown with visible text Hindi
	And I select English from the languages dropdown
	And I click on dropdown with visible text 2 selected
	And I select Arabic from the languages dropdown
	And I click on the Find Agent button
	And I wait for 3 seconds
	And I capture the matching agents count
	And I maximize the browser window
	And I wait for 3 seconds
	And I select India from the Nationality dropdown
	And I wait for 3 seconds
	And I capture the matching agents count by Nationality
	And I verify that the new count is less than the previous count

#Scenario: Capture Agents Details
	Given I go to the page "https://propertyfinder.ae"
	And I click on the Find Agent link
	And I wait for 3 seconds
	Then I click on the first agent on the page
	And I wait for 3 seconds
	And I capture Agent Name
	And I capture Agent Nationality
	And I capture Agent Languages
	And I capture Agent License No
	And I click on About Me tab
	And I capture Agent About Me information
	And I wait for 2 seconds
	And I click on Call agent button
	And I wait for 1 seconds
	And I capture Agent Phone Number
	And I capture Agent Company Name
	And I capture Agent Experience
	And I capture Agent No of Active Listings
	And I capture Agent LinkedIn URL
	And I write Agent info in a file
	And I capture Screenshot of the page as AgentDetails.jpg
	And I change language to Arabic
	And I capture Screenshot of the page as ArabicPage.jpg