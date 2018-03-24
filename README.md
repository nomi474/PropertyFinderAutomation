<h1>Property Finder Website Test Automation</h1>

<p>Property Finder (http://propertyfinder.ae) is an online property and property agents search website. This project automates some of the functionality of the Property and Agent Search features of the application.</p>

<p>Test Automation done by Nauman Sheikh.</p>


<h2>Languages Used</h2>
<ul>
<li>Java</li>
</ul>

<h2>Notable Libraries</h2>
<ul>
<li>Selenium Webdriver</li>
<li>Junit</li>
<li>Cucumber</li>
</ul>

<h2>Design Patterns</h2>
<ul>
<li>Page Object Model</li>
<li>BDD (Behavior Driven Development)</li>
</ul>

To run this app you'll likely need a rough understanding of how Selenium works. You will also need: 
<ul>
<li>Selenium Server jar</li>
<li>Selenium Client jar for Java</li>
<li>Various jar files for Cucumber</li>
<li>Chrome driver executable for running automation on Chrome browser</li>
<li>Gecko driver executable for running automation on Firefox browser</li>
</ul>
<Strong>Note:</Strong> All these files are already provided in the repository. Once you download the zip file, you'll automatically get all the files mentioned above.

<h2>Supported Browser Versions</h2>
<ul>
<li>Google Chrome: Version 63</li>
<li>Firefox Quantum: Version 58 </li>
</ul>

1. First, clone the repo (ideally from your own fork):

    <strong>git clone git@github.com:nomi474/propertyfinderautomation.git</strong>

2. Unzip the archive files in the root directory. (C:\ for windows). The folder structure for the project should be C:\PropertyFinder

3. Launch Eclipse IDE and create a new Java Project. Import the C:\PropertyFinder folder into the project. You should be good to go from there.

Below are further details for running the automation code.

1. The code can be run for both firefox and chrome browsers. The browser setting can be changed by editing <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/global.properties">global.properties</a> file located under the PropertyFinder folder.
2. The code can be run in headless mode by changing the property to 'browser=phantom' in the  global.properties file
3. The website url can easily be changed in the <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/src/com/prf/stepdefinitionfiles/propertyfinder.feature">propertyfinder.feature</a> file. 
4. The html report for the test results can be viewed by looking at the <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/output/index.html">index.html</a> file.
5. Any failed test screenshot will be saved in the <a href="https://github.com/nomi474/PropertyFinderAutomation/tree/master/output">output folder</a>. Here's a <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/output/embedded0.png">screenshot</a> for a sample failed scenario. 
6. The screenshots for Agent Details page and the arabic page are in the <a href="https://github.com/nomi474/PropertyFinderAutomation/tree/master/screenshots">screenshots</a> folder.
7. Property search results are saved in the <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/properties.csv">properties.csv</a> file.
8. Agent details info is saved in the <a href="https://github.com/nomi474/PropertyFinderAutomation/blob/master/AgentDetails.txt">AgentDetails.txt</a> file.

