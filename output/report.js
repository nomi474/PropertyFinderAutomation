$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\prf\\stepdefinitionfiles\\propertyfinder.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Test various scenarios on Property Finders web site",
  "description": "\r\nIn order to search property\r\nAs a customer\r\nI want to know how to search a property",
  "id": "test-various-scenarios-on-property-finders-web-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Search and save matching property details",
  "description": "",
  "id": "test-various-scenarios-on-property-finders-web-site;search-and-save-matching-property-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Scenario:\tSearch for property"
    }
  ],
  "line": 10,
  "name": "I go to the page \"http://propertyfinder.qa\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select BUY from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Villa from Property type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter The Pearl for the location",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select 3 Beds for Min bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select 7 Beds for Max bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the Find property button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I write search results in a file",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Scenario: Find Agents"
    }
  ],
  "line": 24,
  "name": "I go to the page \"https://www.propertyfinder.ae\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on dropdown with visible text Languages",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Hindi from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on dropdown with visible text Hindi",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select English from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on dropdown with visible text 2 selected",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select Arabic from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on the Find Agent button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I capture the matching agents count",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select India from the Nationality dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I capture the matching agents count by Nationality",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify that the new count is less than the previous count",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#Scenario: Capture Agents Details"
    }
  ],
  "line": 45,
  "name": "I go to the page \"http://propertyfinder.ae\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on the first agent on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I capture Agent Name",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I capture Agent Nationality",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I capture Agent Languages",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I capture Agent License No",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on About Me tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I capture Agent About Me information",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on Call agent button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I capture Agent Phone Number",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I capture Agent Company Name",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I capture Agent Experience",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I capture Agent No of Active Listings",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I capture Agent LinkedIn URL",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I write Agent info in a file",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I capture Screenshot of the page as AgentDetails.jpg",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I change language to Arabic",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I capture Screenshot of the page as ArabicPage.jpg",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://propertyfinder.qa",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "duration": 19217396097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 16910230,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 80322702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 16127118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BUY",
      "offset": 9
    }
  ],
  "location": "Navigation.selectTransactionType(String)"
});
formatter.result({
  "duration": 1014581340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Villa",
      "offset": 9
    }
  ],
  "location": "Navigation.selectPropertyType(String)"
});
formatter.result({
  "duration": 571393143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Pearl",
      "offset": 8
    }
  ],
  "location": "Navigation.enterLocationName(String)"
});
formatter.result({
  "duration": 279714347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Beds",
      "offset": 9
    }
  ],
  "location": "Navigation.selectMinBeds(String)"
});
formatter.result({
  "duration": 517050452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 Beds",
      "offset": 9
    }
  ],
  "location": "Navigation.selectMaxBeds(String)"
});
formatter.result({
  "duration": 534542904,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressButton()"
});
formatter.result({
  "duration": 4852032823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 7851114,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logResults()"
});
formatter.result({
  "duration": 275836122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.propertyfinder.ae",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "duration": 3984208438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 8032892,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 2445745087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 12840451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Languages",
      "offset": 38
    }
  ],
  "location": "Navigation.clickLanguageDropdown(String)"
});
formatter.result({
  "duration": 256625003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hindi",
      "offset": 9
    }
  ],
  "location": "Navigation.addLanguage(String)"
});
formatter.result({
  "duration": 294531242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hindi",
      "offset": 38
    }
  ],
  "location": "Navigation.clickLanguageDropdown(String)"
});
formatter.result({
  "duration": 281597903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 9
    }
  ],
  "location": "Navigation.addLanguage(String)"
});
formatter.result({
  "duration": 264886340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 selected",
      "offset": 38
    }
  ],
  "location": "Navigation.clickLanguageDropdown(String)"
});
formatter.result({
  "duration": 256804114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arabic",
      "offset": 9
    }
  ],
  "location": "Navigation.addLanguage(String)"
});
formatter.result({
  "duration": 250981001,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressFindAgentButton()"
});
formatter.result({
  "duration": 2611225161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 9228004,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCount()"
});
formatter.result({
  "duration": 37056016,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 3517182452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 14760895,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.addNationality()"
});
formatter.result({
  "duration": 1118297831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 4561780,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCountByNationality()"
});
formatter.result({
  "duration": 264655229,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.compareNumOfAgents()"
});
formatter.result({
  "duration": 2384890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://propertyfinder.ae",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "duration": 4042321796,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 1392262842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 10555561,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.chooseFirstAgent()"
});
formatter.result({
  "duration": 1996643554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 4633780,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentName()"
});
formatter.result({
  "duration": 52020468,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNationality()"
});
formatter.result({
  "duration": 32488459,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLanguages()"
});
formatter.result({
  "duration": 68816920,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLicenseNum()"
});
formatter.result({
  "duration": 20839120,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToAboutMeTab()"
});
formatter.result({
  "duration": 56509358,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAboutMeInfo()"
});
formatter.result({
  "duration": 29531568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 12614227,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.clickCallAgentButton()"
});
formatter.result({
  "duration": 346900598,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentPhoneNum()"
});
formatter.result({
  "duration": 20318676,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentCompanyName()"
});
formatter.result({
  "duration": 16003118,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentExperience()"
});
formatter.result({
  "duration": 18237342,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNumOfListings()"
});
formatter.result({
  "duration": 16405341,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLinkedInUrl()"
});
formatter.result({
  "duration": 52814690,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logAgentInfo()"
});
formatter.result({
  "duration": 2730668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AgentDetails.jpg",
      "offset": 36
    }
  ],
  "location": "Navigation.takeScreenshot(String)"
});
formatter.result({
  "duration": 201467200,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.changeLanguage()"
});
formatter.result({
  "duration": 2047962243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ArabicPage.jpg",
      "offset": 36
    }
  ],
  "location": "Navigation.takeScreenshot(String)"
});
formatter.result({
  "duration": 195188976,
  "status": "passed"
});
});