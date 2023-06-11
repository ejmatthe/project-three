
// Defining function for linecharts, which will change upon dropdown selection
function plotLineCharts(ageGroup) {
    const demographicsData = "http://127.0.0.1:5000/api/demographics.json"
    d3.json(demographicsData).then(data => {
        // Set data to an array for manipulation and then filter by age group
        let dataArray = data
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
            else if (row["Census Region Code"] = "CENS-R3") {
                    traceRegion3List.push(row);
                }
            else {
                traceRegion4List.push(row);
            }
        };
        // Create traces for each Region
        const traceRegion1 = {
            x: traceRegion1List.map(year => year.Year),
            y: traceRegion1List.map(_ => _["Crude Rate"]),
            type: "scatter",
            name: "Region 1"
        }
        const traceRegion2 = {
            x: traceRegion2List.map(year => year.Year),
            y: traceRegion2List.map(_ => _["Crude Rate"]),
            type: "scatter",
            name: "Region 2"
        }
        const traceRegion3 = {
            x: traceRegion3List.map(year => year.Year),
            y: traceRegion3List.map(_ => _["Crude Rate"]),
            type: "scatter",
            name: "Region 3"
        }
        const traceRegion4 = {
            x: traceRegion4List.map(year => year.Year),
            y: traceRegion4List.map(_ => _["Crude Rate"]),
            type: "scatter",
            name: "Region 4"
        }
        console.log(traceRegion1);

        // Combines traces in array and make the plot
        let traceGroup = [traceRegion1, traceRegion2, traceRegion3, traceRegion4];
        Plotly.newPlot("bar", traceGroup);
    })
};

// This is meant to hard-code a variable and use the function to make sure the logic works.
plotLineCharts("35-44 years");