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
  "duration": 15753228664,
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
  "duration": 5715994,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1158702970,
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
  "duration": 9603103,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectTransactionType()"
});
formatter.result({
  "duration": 413698299,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectPropertyType()"
});
formatter.result({
  "duration": 360462346,
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
  "duration": 415605853,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMinBeds()"
});
formatter.result({
  "duration": 190699386,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMaxBeds()"
});
formatter.result({
  "duration": 191730052,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressButton()"
});
formatter.result({
  "duration": 1349250801,
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
  "duration": 2915997,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.orderByPrice()"
});
formatter.result({
  "duration": 2427041843,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logResults()"
});
formatter.result({
  "duration": 1385272991,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 996297336,
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
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on dropdown with visible text Languages",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Hindi from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on dropdown with visible text Hindi",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select English from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on dropdown with visible text 2 selected",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select Arabic from the languages dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the Find Agent button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I capture the matching agents count",
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
  "duration": 12239589121,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1153660752,
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
  "duration": 11319101,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 3933666282,
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
  "duration": 11946212,
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
  "duration": 88282588,
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
  "duration": 133249660,
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
  "duration": 61692389,
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
  "duration": 79411930,
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
  "duration": 61208835,
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
  "duration": 101995021,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressFindAgentButton()"
});
formatter.result({
  "duration": 1557743504,
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
  "duration": 2915109,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCount()"
});
formatter.result({
  "duration": 41211964,
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
  "duration": 2139554,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.addNationality()"
});
formatter.result({
  "duration": 537729300,
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
  "duration": 3284441,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCountByNationality()"
});
formatter.result({
  "duration": 2755573107,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.compareNumOfAgents()"
});
formatter.result({
  "duration": 2141332,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 894792094,
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
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on the Find Agent link",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on the first agent on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I capture Agent Name",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I capture Agent Nationality",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I capture Agent Languages",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I capture Agent License No",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on About Me tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I capture Agent About Me information",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on Call agent button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I wait for 1 seconds",
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
formatter.step({
  "line": 67,
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
  "duration": 13090363919,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1136495879,
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
  "duration": 3546219,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 1500851554,
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
  "duration": 8882215,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.chooseFirstAgent()"
});
formatter.result({
  "duration": 3012514655,
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
  "duration": 5216440,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentName()"
});
formatter.result({
  "duration": 48823957,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNationality()"
});
formatter.result({
  "duration": 40245742,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLanguages()"
});
formatter.result({
  "duration": 51013732,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLicenseNum()"
});
formatter.result({
  "duration": 38487966,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToAboutMeTab()"
});
formatter.result({
  "duration": 134101659,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAboutMeInfo()"
});
formatter.result({
  "duration": 77603487,
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
  "duration": 2761331,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.clickCallAgentButton()"
});
formatter.result({
  "duration": 189619832,
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
  "duration": 4947552,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentPhoneNum()"
});
formatter.result({
  "duration": 66641274,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentCompanyName()"
});
formatter.result({
  "duration": 52020843,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentExperience()"
});
formatter.result({
  "duration": 52973286,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNumOfListings()"
});
formatter.result({
  "duration": 46603514,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLinkedInUrl()"
});
formatter.result({
  "duration": 31362194,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logAgentInfo()"
});
formatter.result({
  "duration": 1020444,
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
  "duration": 621347892,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.changeLanguage()"
});
formatter.result({
  "duration": 2806423283,
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
  "duration": 398129868,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 914670298,
  "status": "passed"
});
});