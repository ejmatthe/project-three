# Project 3 Overview
The goal for this project was to create a dashboard of different visualizations that allow the user to get a basic understanding of the data and some of the differences that impact suicides nationwide. While it is a problem that affects everyone in this country, regardless of age, race, class, or status, there are still notable differences based on demographic differences. To better understand the problem, our dashboard includes visualizations that show the differences in rates between different census defined regions.

## Background Information
Our data was once again sourced from the Centers for Disease Control and Prevention (CDC), using their CDC Wonder system. This provides some benefits, as well as some limitations. A major benefit is that the data can be considered reliable and consistent. The data is also largely already cleaned, organized and readable. However, there is also a major limitation. The main trade-off is that, as a result of the data's reliability and consistency, the available data only goes up through 2020 at the time of our project. There may be trends or patterns developing that are missed due to this limitation.

<p align="center">
  <img src="https://github.com/ejmatthe/project-three/blob/f91bda6db7e138a8dc3a96eb306a51555186eda8/Resources/full-stack-web-developer.png" />
</p>


With data in hand, we began to work on the project, using a wide variety of tools. The main ones used include:
  * Jupyter Notebook
  * SQLite
  * SQL Alchemy
  * Flask
  * D3 JS
  * Chart.JS
  * Plotly



## Code 
### Jupyter Notebook
Jupyter Notebook is the environment we used to clean and shape our data after getting it from CDC Wonder but before loading it into our database. We used three separate datasets - one that grouped deaths by region, age group and race, another that grouped by region and cause of death, and a third one that grouped only by region and age (all three were also grouped by year, in order to provide a way to look at yearly trends). In the same Jupyter Notebook instance, we used SQL Alchemy to then load those three datasets into our database for later use.
### Flask Server
Creating the dashboard relied on 3 separate files - "app.py", "index.html", and "logic.js". Logic.JS will be covered in the next sub-section. Index.HTML is essentially the skeleton or structure for our dashboard. It calls in relevant JavaScript libraries, creates a dropdown menu for the first chart (as well as the options in the menu), and then creates tags for the charts to populate. App.py does the real heavy-lifting. After importing libraries and dependences, it uses SQLAlchemy to open up a connection to the database and then Flask to create some sites and objects to navigate. It sets the default home to run the same HTML code as "index.html" on the landing page. It then defines three other pathways that creates JSON files from specific tables in the database. This will be the data used in the JavaScript code.
### Javascript
As mentioned in the prior section, logic.js is the main JavaScript file. The index.html page loads and runs the script. There are 4 main functions - an "init" function to populate data and charts when the page first loads, an "optionChanged" function to update the charts when a dropdown is selected, a function to plot the line charts and one to plot the pie charts. The last 2 functions are where we use the other 3 Flask pathways, as they call in data from the JSON file to use as a basis for the plots. The line chart is designed using Chart.JS, and as such, adds a couple extra nuances. One such nuance is that it cannot print a new plot on an existing one. In order to work around that, there is a variable that is originally set to be "null". The line plot function checks that variable, and if it is anything other than "null", it destroys the variable. Then, after that step, the function sets the same variable to match the Chart.JS plot, which populates it. The pie charts use for loops to cycle through the JSON files it calls, in order to find records that match the necessary criteria, and assign them to a variable. Once the loop is finished, Plotly designs and populates the pie chart. Finally, the US Map runs off of two of its own script files as well as some additional constraints in the HTML.

## Conclusion
We were able to make a dashboard that is functional, fluid, and responsive. The next project will utilize a raw data source that can further be filtered to derive the crude suicide rate for each age group by race, gender, and means of suicide. 

Interactive charts on suicide using world suicide data will enhance the visual experience. 
