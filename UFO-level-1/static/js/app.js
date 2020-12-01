// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the datetime
var date = d3.select("#datetime");

// Load data into HTML
// Iterate through each data object from data.js
tableData.forEach((dataobject) => {
    // Insert a row by appending 'tr' on html
    var newRow = tbody.append('tr');

    // Iterate through each key and value
    Object.entries(dataobject).forEach(([key, value]) => {
        // add new cells by appending 'td' on html
        var newCell = newRow.append('td');
        // load the values from tableData
        newCell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// We can use the `on` function in d3 to attach an event to the handler function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Remove existing table
    d3.select("tbody").html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // Iterate through each data object that responds to the above event handler
    filteredData.forEach((dataobject) => {
        // Insert a row by appending 'tr' on html
        var newRow = tbody.append('tr');
    
        // Iterate through each key and value
        Object.entries(dataobject).forEach(([key, value]) => {
            // add new cells by appending 'td' on html
            var newCell = newRow.append('td');
            // load the values from tableData
            newCell.text(value);
        });
    });
};