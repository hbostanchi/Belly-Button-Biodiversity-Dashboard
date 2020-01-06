# Belly-Button-Biodiversity-Dashboard
##Module Overview
In this module, you will use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. The completed work will be displayed in a portfolio you create.
By the end of this module, we will be able to:
Create basic plots with Plotly, including bar charts, line charts, and pie charts.
•	Use D3.json() to fetch external data, such as CSV files and web APIs.
•	Parse data in JSON format.
•	Use functional programming in JavaScript to manipulate data.
•	Use JavaScript’s Math library to manipulate numbers.
•	Use event handlers in JavaScript to add interactivity to a data visualization.
•	How to use interactivity to enhance your visualizations.
•	Deploy an interactive chart to GitHub Pages.

##Resources
•	Data Source: index.html,  plots.js, samples.json, 
•	Software: VS Code, Web browser, Command-line interface, GitHub
##Summary
This is a simple line chart with three data points. Notice that gridlines are supplied automatically.if we place our mouse over the top right corner of the chart, and you’ll see the following menu appear. It has options such as zoom, zoom out, and pan. This menu also comes with the Plotly library and will be available for every visualization you create.
![1](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/1.png)
![2](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/2.png)
In the Demographics Info panel, display all the key-value pairs of the selected individual’s demographic data. The result should look like the following:
##Challenge Overview
Continue working with the samples.json dataset, and complete the following tasks.

When an individual’s ID is selected, the top 10 bacterial species (OTUs) should be visualized with a bar chart. Create a horizontal bar chart to display the top 10 OTUs found in that individual.
Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hover text for the chart.
Your bar chart should look like the following.

![3](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/3.png)
In the Demographics Info panel, display all the key-value pairs of the selected individual’s demographic data. The result should look like the following:

![4](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/4.png)
Create a bubble chart that displays each sample:
Use otu_ids for the x-axis values.
Use sample_values for the y-axis values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.
![5](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/5.png)
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. In other words, the dashboard should not be blank when a user opens it in a browser.
When a new ID number is selected from the dropdown menu, all the plots and the info panel should be updated.
Customize the layout to create an attractive dashboard. Use your imagination!
The completed project should resemble the following dashboard, though it should not be identical:
![6](https://github.com/hbostanchi/Belly-Button-Biodiversity-Dashboard/blob/master/images/6.png)
