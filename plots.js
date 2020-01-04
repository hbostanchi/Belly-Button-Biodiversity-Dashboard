
  // We use d3 to select an HTML element
var selector = d3.select("#selDataset");
// We use d3 to retrieve data "asynchronously"
d3
    .json("samples.json")
    .then((data) => {
        // for name in names:
        // 
        data.names.forEach(name => {
            selector
                .append('option')
                .text(name)
                .property('value', name);
        })
    });
// "Asynchronous"
// Javascript DEFINES the optionChanged function:
var optionChanged = (newSample) => {
    buildMetadata(newSample);
    buildCharts(newSample);
}
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var resultArray = data
            .metadata
            .filter(metadataObj => {
                return metadataObj.id == sample
            });
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
        // "header" element; h1, h2, h3, h4, h5, h6
        PANEL.html('');
        // METHOD 1: 
        // PANEL.append("h6").text('ID: ' + result.id);
        // PANEL.append("h6").text('ETHNICITY: ' + result.ethnicity);
        // PANEL.append("h6").text('GENDER: ' + result.gender);
        // PANEL.append("h6").text('AGE: ' + result.age);
        // PANEL.append("h6").text('LOCATION: ' + result.location);
        // PANEL.append("h6").text('BBTYPE: ' + result.bbtype);
        // PANEL.append("h6").text('WFREQ: ' + result.wfreq);
        // METHOD 2:
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(key.toUpperCase() + ': ' + value); //result.id);
        })
    });
}
function buildCharts(sample) {
    // console.log(...);
    d3.json("samples.json").then((data) => {
        var resultArray = data
            .samples
            .filter(sampleObj => {
                return sampleObj.id == sample
            });
        var result = resultArray[0];
        console.log(result);
        // Already in sorted order; based on sample_values; DESC
        // for the BAR CHART, grab the first 10
        // 
        var top_ten_otu_ids = result.otu_ids.slice(0, 10).map(numericIds => {
            return 'OTU ' + numericIds;
        }).reverse();
        var top_ten_sample_values = result.sample_values.slice(0, 10).reverse();
        var top_ten_otu_labels = result.otu_labels.slice(0, 10).reverse();
        // Plotly wants 3 things:
        var bar_trace = [
            {
                x: top_ten_sample_values, //top_ten_otu_labels, 
                y: top_ten_otu_ids,
                text: top_ten_otu_labels,
                type: 'bar',
                orientation: 'h'
            
            }
          ];
        
    
        // Apply the group bar mode to the layout
        var bar_layout = {
          title: "Greek gods search results",
          margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
          }
        };
        Plotly.newPlot(
            'bar', // 1) Where to put the plot; the string with the value of the id where you want the plot to go (no # needed)
            bar_trace, // 2) The "trace" ; the data
            bar_layout // 3) The "layout"; the metadata / configuration / prettiness <-- optional
        )


        var trace_bubble = [{
          x: result.otu_ids,
          y: result.sample_values,
          text: result.otu_labels,
          mode: 'markers',
          marker: {
            color: result.otu_ids,
            colorscale: "Viridis",
            size: result.sample_values            
          },
          
        }];

        var bubble_layout = {
          showlegend: false,
          title: 'otu_labels',
          xaxis: {title: 'OTU ID'}          
        }


        Plotly.newPlot("bubble", trace_bubble, bubble_layout);

    })
}     