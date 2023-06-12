// Define initialize function
function init() {
    let initAge = "85+ years";
    plotLineCharts(initAge);
};
init();

// Define optionChanged function from index.html
function optionChanged(newAge) {
    plotLineCharts(newAge);
};

// Settling a variable that will be used in plotLineCharts to destroy previous chart to repopulate
var chartExists = null;

// Defining function for linecharts, which will change upon dropdown selection
function plotLineCharts(ageGroup) {
    const demographicsAggData = "http://127.0.0.1:5000/api/demographicsAggregate.json"
    d3.json(demographicsAggData).then(dataArray => {
        // Set data to an array for manipulation and then filter by age group
        let filteredDemographics = dataArray.filter(age => age.Age == ageGroup);
        console.log(filteredDemographics);
        // Create arrays for each region
        traceRegion1List = [];
        traceRegion2List = [];
        traceRegion3List = [];
        traceRegion4List = [];
        // Loop through each row and push to array matching the Region
        for (let i=0; i < filteredDemographics.length; i++) {
            row = filteredDemographics[i];
            if (row["Census Region Code"] == "CENS-R1"){
                    traceRegion1List.push(row);
                }                
            else if (row["Census Region Code"] == "CENS-R2") {
                    traceRegion2List.push(row);
                }
            else if (row["Census Region Code"] == "CENS-R3") {
                    traceRegion3List.push(row);
                }
            else {
                traceRegion4List.push(row);
            }
        };

        console.log(traceRegion4List);
        // Checking the chartExists variable, and clearing it if there's any data there
        if (chartExists!=null) {
            chartExists.destroy();
        }
        // Hardcoding the years in for x-axis labels
        const dataYears = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
            2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
        
        // Creating the chart in chart.js and assigning it to the chartExists variable
        // Assigning to the chartExists variable allows for the check and destroy
        // necessary to draw a new Chart
        chartExists = new Chart(
            document.getElementById('lineCharts'),
            {
                type: 'line',
                data: {
                    labels: dataYears,
                    datasets: [
                        {
                            label: "Region 1",
                            data: traceRegion1List.map(_ => _["Crude Rate"]),
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension:0.1
                        },
                        {
                            label: "Region 2",
                            data: traceRegion2List.map(_ => _["Crude Rate"]),
                            fill: false,
                            borderColor: 'rgb(252, 186, 3)',
                            tension:0.1
                        },
                        {
                            label: "Region 3",
                            data: traceRegion3List.map(_ => _["Crude Rate"]),
                            fill: false,
                            borderColor: 'rgb(252, 3, 227)',
                            tension:0.1
                        },
                        {
                            label: "Region 4",
                            data: traceRegion4List.map(_ => _["Crude Rate"]),
                            fill: false,
                            borderColor: 'rgb(16, 173, 2)',
                            tension:0.1
                        }
                    ]
                }
            }
        );
    })
};
