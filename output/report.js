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
  "line": 9,
  "name": "I go to the page \"http://propertyfinder.qa\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select BUY from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Villa from Property type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter The Pearl for the location",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select 3 Beds for Min bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select 7 Beds for Max bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the Find property button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I sort the properties from high to low prices",
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
  "name": "I go to the page \"https://propertyfinder.ae\"",
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
  "name": "I go to the page \"https://propertyfinder.ae\"",
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
  "name": "I wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I capture Agent Phone Number",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I capture Agent Company Name",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I capture Agent Experience",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I capture Agent No of Active Listings",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I capture Agent LinkedIn URL",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I write Agent info in a file",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I capture Screenshot of the page as AgentDetails.jpg",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I change language to Arabic",
  "keyword": "And "
});
formatter.step({
  "line": 67,
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
  "duration": 15404416530,
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
  "duration": 12753767,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1190381164,
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
  "duration": 5663995,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectTransactionType()"
});
formatter.result({
  "duration": 415236075,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectPropertyType()"
});
formatter.result({
  "duration": 360759679,
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
  "duration": 378441441,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMinBeds()"
});
formatter.result({
  "duration": 176546065,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMaxBeds()"
});
formatter.result({
  "duration": 191838496,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressButton()"
});
formatter.result({
  "duration": 1562667944,
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
  "duration": 2275998,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.orderByPrice()"
});
formatter.result({
  "duration": 2214576254,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logResults()"
});
formatter.result({
  "duration": 1291605518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://propertyfinder.ae",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "duration": 5052891953,
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
  "duration": 4068885,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 2829817485,
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
  "duration": 7009772,
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
  "duration": 89666587,
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
  "duration": 89523921,
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
  "duration": 66842607,
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
  "duration": 98159468,
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
  "duration": 76566599,
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
  "duration": 86506145,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressFindAgentButton()"
});
formatter.result({
  "duration": 1531321750,
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
  "duration": 3330664,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCount()"
});
formatter.result({
  "duration": 43298184,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 3361775,
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
  "duration": 3542219,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.addNationality()"
});
formatter.result({
  "duration": 2579224374,
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
  "duration": 5569773,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCountByNationality()"
});
formatter.result({
  "duration": 120611448,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.compareNumOfAgents()"
});
formatter.result({
  "duration": 1779109,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat com.prf.pages.FindAgentsPage.compareAgentsCounts(FindAgentsPage.java:94)\r\n\tat com.prf.stepdefinitionfiles.Navigation.compareNumOfAgents(Navigation.java:165)\r\n\tat ✽.And I verify that the new count is less than the previous count(com\\prf\\stepdefinitionfiles\\propertyfinder.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://propertyfinder.ae",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.chooseFirstAgent()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentNationality()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentLanguages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentLicenseNum()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.goToAboutMeTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAboutMeInfo()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.clickCallAgentButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentPhoneNum()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentCompanyName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentExperience()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentNumOfListings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.captureAgentLinkedInUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.logAgentInfo()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.changeLanguage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("\u0027image/png\u0027,\u0027embedded0.png\u0027");
});