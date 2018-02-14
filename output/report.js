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
  "duration": 17087702262,
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
  "duration": 24859122,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 53443579,
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
  "duration": 4258224,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectTransactionType()"
});
formatter.result({
  "duration": 203285868,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectPropertyType()"
});
formatter.result({
  "duration": 182138303,
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
  "duration": 376811278,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMinBeds()"
});
formatter.result({
  "duration": 162615183,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectMaxBeds()"
});
formatter.result({
  "duration": 218280097,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressButton()"
});
formatter.result({
  "duration": 1482406436,
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
  "duration": 6691114,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.orderByPrice()"
});
formatter.result({
  "duration": 1749179444,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logResults()"
});
formatter.result({
  "duration": 545471353,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 1750950556,
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
  "duration": 9567242030,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 78560924,
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
  "duration": 20904009,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 2551279356,
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
  "duration": 10256005,
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
  "duration": 1027111,
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
  "duration": 115649384,
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
  "duration": 306666,
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
  "duration": 96191598,
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
  "duration": 328889,
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
  "duration": 98888488,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressFindAgentButton()"
});
formatter.result({
  "duration": 1047483132,
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
  "duration": 4620447,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentsCount()"
});
formatter.result({
  "duration": 61373361,
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
  "duration": 5777336,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.addNationality()"
});
formatter.result({
  "duration": 3643166953,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027div:nth-child(5) \u003e div \u003e div.dropdown_text.dropdown_text-serp\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"96\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:25251\",\"User-Agent\":\"Apache-HttpClient/4.5.3 (Java/1.8.0_151)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"div:nth-child(5) \u003e div \u003e div.dropdown_text.dropdown_text-serp\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/0b63fd70-09d0-11e8-91e0-e5e80e71e8fc/element\"}}\nCommand duration or timeout: 3.56 seconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.prf.pages.FindAgentsPage.selectNationality(FindAgentsPage.java:80)\r\n\tat com.prf.stepdefinitionfiles.Navigation.addNationality(Navigation.java:155)\r\n\tat ✽.And I select India from the Nationality dropdown(com\\prf\\stepdefinitionfiles\\propertyfinder.feature:35)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:141)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.prf.pages.FindAgentsPage.selectNationality(FindAgentsPage.java:80)\r\n\tat com.prf.stepdefinitionfiles.Navigation.addNationality(Navigation.java:155)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:42)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027div:nth-child(5) \u003e div \u003e div.dropdown_text.dropdown_text-serp\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"96\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:25251\",\"User-Agent\":\"Apache-HttpClient/4.5.3 (Java/1.8.0_151)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"div:nth-child(5) \u003e div \u003e div.dropdown_text.dropdown_text-serp\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/0b63fd70-09d0-11e8-91e0-e5e80e71e8fc/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-UQR0DS5\u0027, ip: \u0027192.168.1.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
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
  "location": "Navigation.captureAgentsCountByNationality()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.compareNumOfAgents()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("\u0027image/png\u0027,\u0027embedded0.png\u0027");
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
  "duration": 12546443354,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 62877361,
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
  "duration": 5708447,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToFindAgentsPage()"
});
formatter.result({
  "duration": 987894217,
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
  "duration": 6296892,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.chooseFirstAgent()"
});
formatter.result({
  "duration": 2090609818,
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
  "duration": 5739114,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentName()"
});
formatter.result({
  "duration": 54354246,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNationality()"
});
formatter.result({
  "duration": 57641804,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLanguages()"
});
formatter.result({
  "duration": 51820023,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLicenseNum()"
});
formatter.result({
  "duration": 54587579,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToAboutMeTab()"
});
formatter.result({
  "duration": 158451181,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAboutMeInfo()"
});
formatter.result({
  "duration": 51809800,
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
  "duration": 4049780,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.clickCallAgentButton()"
});
formatter.result({
  "duration": 92646708,
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
  "duration": 3544446,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentPhoneNum()"
});
formatter.result({
  "duration": 61515138,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentCompanyName()"
});
formatter.result({
  "duration": 57865359,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentExperience()"
});
formatter.result({
  "duration": 61018250,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentNumOfListings()"
});
formatter.result({
  "duration": 58607581,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.captureAgentLinkedInUrl()"
});
formatter.result({
  "duration": 50814244,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.logAgentInfo()"
});
formatter.result({
  "duration": 1682667,
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
  "duration": 539099796,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.changeLanguage()"
});
formatter.result({
  "duration": 549395800,
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
  "duration": 577182923,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.closeBrowser()"
});
formatter.result({
  "duration": 306618803,
  "status": "passed"
});
});