// from data.js
var tableData = data;

// YOUR CODE HERE!

// select table body
var tbody = d3.select("tbody");

// append rows and cells
function table(data) {
data.forEach(function(visions) {
    var row = tbody.append("tr");
    Object.entries(visions).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

});
};
table(tableData);

// Select button from html
var button = d3.select("button");

// Add event listener
button.on("click", function() {

    d3.event.preventDefault();
    // select input element
    var inputElement = d3.select(".form-control");
    // grab value
    var inputValue = inputElement.property("value");
    // data filter
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    // clear rows
    tbody.selectAll("tr").remove();

    table(filteredData);

 });