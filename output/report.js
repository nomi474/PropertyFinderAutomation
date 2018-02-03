$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\prf\\stepdefinitionfiles\\propertyfinder.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Test various scenarios on Property Finders web site",
  "description": "",
  "id": "test-various-scenarios-on-property-finders-web-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search and save matching property details",
  "description": "",
  "id": "test-various-scenarios-on-property-finders-web-site;search-and-save-matching-property-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I go to the page \"http://propertyfinder.qa\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select BUY from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Villa from Property type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter The Pearl for the location",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select 3 Beds for Min bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select 7 Beds for Max bed dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the Find property button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I sort the properties from high to low prices",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I write search results in a file",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I close browser window",
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
  "duration": 27834833036,
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
  "duration": 24219534,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 79206596,
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
  "duration": 9791991,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectTransactionType()"
});
formatter.result({
  "duration": 1287524188,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectPropertyType()"
});
formatter.result({
  "duration": 585687035,
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
  "duration": 261624656,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMinBeds()"
});
formatter.result({
  "duration": 526817310,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMaxBeds()"
});
formatter.result({
  "duration": 482174238,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressButton()"
});
formatter.result({
  "duration": 4188434499,
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
  "duration": 6297772,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.orderByPrice()"
});
formatter.result({
  "duration": 3965374698,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logResults()"
});
formatter.result({
  "duration": 329897040,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 624037668,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Find Agents",
  "description": "",
  "id": "test-various-scenarios-on-property-finders-web-site;find-agents",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I go to the page \"https://propertyfinder.ae\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I wait for 7 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on dropdown with visible text Languages",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Hindi from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on dropdown with visible text Hindi",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select English from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on dropdown with visible text 2 selected",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Arabic from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on the Find Agent button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I capture the matching agents count",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select India from the Nationality dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I capture the matching agents count by Nationality",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify that the new count is less than the previous count",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I close browser window",
  "keyword": "And "
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
  "duration": 105382542771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 16531541,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 3797858402,
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
  "duration": 9802213,
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
  "duration": 249913556,
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
  "duration": 303943729,
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
  "duration": 291618407,
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
  "duration": 291825963,
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
  "duration": 281051751,
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
  "duration": 274740201,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressFindAgentButton()"
});
formatter.result({
  "duration": 2532019527,
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
  "duration": 9360436,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCount()"
});
formatter.result({
  "duration": 38362633,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 60723947,
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
  "duration": 6750660,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.addNationality()"
});
formatter.result({
  "duration": 1206310927,
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
  "duration": 7127994,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCountByNationality()"
});
formatter.result({
  "duration": 274033979,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.compareNumOfAgents()"
});
formatter.result({
  "duration": 2393776,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 673442513,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Capture Agents Details",
  "description": "",
  "id": "test-various-scenarios-on-property-finders-web-site;capture-agents-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I go to the page \"https://propertyfinder.ae\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on the first agent on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I capture Agent Name",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I capture Agent Nationality",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I capture Agent Languages",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I capture Agent License No",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on About Me tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I capture Agent About Me information",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on Call agent button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I capture Agent Phone Number",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I capture Agent Company Name",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I capture Agent Experience",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I capture Agent No of Active Listings",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I capture Agent LinkedIn URL",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I write Agent info in a file",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I capture Screenshot of the page as AgentDetails.jpg",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I change language to Arabic",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I capture Screenshot of the page as ArabicPage.jpg",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I close browser window",
  "keyword": "And "
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
  "duration": 16204876707,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 7075669266,
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
  "duration": 12874655,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.chooseFirstAgent()"
});
formatter.result({
  "duration": 1987144455,
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
  "duration": 10072435,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentName()"
});
formatter.result({
  "duration": 48549735,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNationality()"
});
formatter.result({
  "duration": 22123535,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLanguages()"
});
formatter.result({
  "duration": 24849756,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLicenseNum()"
});
formatter.result({
  "duration": 22430203,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToAboutMeTab()"
});
formatter.result({
  "duration": 80174151,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAboutMeInfo()"
});
formatter.result({
  "duration": 30867084,
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
  "duration": 4406218,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.clickCallAgentButton()"
});
formatter.result({
  "duration": 293858405,
  "status": "passed"
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
  "duration": 4390218,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentPhoneNum()"
});
formatter.result({
  "duration": 15051098,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentCompanyName()"
});
formatter.result({
  "duration": 17800873,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentExperience()"
});
formatter.result({
  "duration": 15283097,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNumOfListings()"
});
formatter.result({
  "duration": 13637321,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLinkedInUrl()"
});
formatter.result({
  "duration": 34307525,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logAgentInfo()"
});
formatter.result({
  "duration": 880889,
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
  "duration": 123929223,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.changeLanguage()"
});
formatter.result({
  "duration": 1569745716,
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
  "duration": 153642086,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 429900507,
  "status": "passed"
});
});