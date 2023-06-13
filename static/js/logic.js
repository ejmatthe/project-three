// Define initialize function
function init() {
    let initAge = "85+ years";
    plotLineCharts(initAge);
    plotPieCharts();
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

// Functions for pie charts 
function plotPieCharts() {
    const causeData = "http://127.0.0.1:5000/api/causes.json"
    d3.json(causeData).then(data => {
    let causeAnnual = data.filter(year => year.Year == "2020");
    labels = ["Firearm", "Suffocation", "Poisoning", "Cut/Piercing", "Drowning"];
    labelsDemo = ["White", "Black", "Asian or Pacific Islander", "American Indian or Alaskan Native"]
    colors = ["rgb(255,0,0)", "rgb(0,128,0)", "rgb(0,0,255)", "rgb(255,20,147)", "rgb(128,0,128)"]
    firearmTotal = 0;
    suffocationTotal = 0;
    poisoningTotal = 0;
    cutTotal = 0;
    drowningTotal = 0;
    for (let i=0; i < causeAnnual.length; i++) {
        row = causeAnnual[i];
        if (row["Injury Mechanism"] == "Firearm") {
            firearmDeath = parseFloat(row["Crude Rate"])
            firearmTotal += firearmDeath;
        }
        else if (row["Injury Mechanism"] == "Suffocation") {
            suffocationDeath = parseFloat(row["Crude Rate"])
            suffocationTotal += suffocationDeath;
        }
        else if (row["Injury Mechanism"] == "Poisoning") {
            poisoningDeath = parseFloat(row["Crude Rate"])
            poisoningTotal += poisoningDeath;
        }
        else if (row["Injury Mechanism"] == "Cut/Pierce") {
            cutDeath = parseFloat(row["Crude Rate"])
            cutTotal += cutDeath;
        }
        else if (row["Injury Mechanism"] == "Drowning") {
            drowningDeath = parseFloat(row["Crude Rate"])
            drowningTotal += drowningDeath;
        }}
        let sizes = [firearmTotal, suffocationTotal, poisoningTotal, cutTotal, drowningTotal];
        pieData = [{
            values: sizes,
            labels: labels,
            type: 'pie',
            marker: {
                colors: colors
            }
        }]
        var layout = {
            height: 800,
            width: 800,
        };
        Plotly.newPlot("pieCharts", pieData, layout)
    })
    const demographicsData = "http://127.0.0.1:5000/api/demographics.json"
    d3.json(demographicsData).then(dataDemo => {
        let demoAnnual = dataDemo.filter(year => year.Year == "2020");
        console.log(demoAnnual)
        whiteTotal = 0;
        blackTotal = 0;
        asianTotal = 0;
        nativeTotal = 0;
        for (let i=0; i < demoAnnual.length; i++) {
            rowDemo = demoAnnual[i];
            if (rowDemo["Race"] == "White") {
                whiteDeath = rowDemo["Deaths"]
                whiteTotal = whiteTotal + whiteDeath;
            }
            else if (rowDemo["Race"] == "Black or African American") {
                blackDeath = rowDemo["Deaths"]
                blackTotal += blackDeath;
            }
            else if (rowDemo["Race"] == "Asian or Pacific Islander") {
                asianDeath = rowDemo["Deaths"]
                asianTotal += asianDeath;
            }
            else if (rowDemo["Race"] == "American Indian or Alaska Native") {
                nativeDeath = rowDemo["Deaths"]
                nativeTotal += nativeDeath;
            }
        
        }
        console.log(whiteTotal)
        var sizesDemo = [whiteTotal, blackTotal, asianTotal, nativeTotal]
        pieData2 = [{
            values: sizesDemo,
            labels: labelsDemo,
            type: 'pie',
            marker: {
                colors: colors
            }
        }]
        var layout = {
            height: 800,
            width: 800,
        };
        Plotly.newPlot("pieCharts2", pieData2, layout)
    })
}
