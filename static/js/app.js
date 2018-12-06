// Assign the data from `data.js` to a descriptive variable
var tableData = data;
ufoData(tableData);

// Assign function to data to store for loop
function ufoData(data)
{

var tbody = d3.select("tbody");
tbody.html("")

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the tableData report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});

}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Assign variable for filtered search
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  var dates = filteredData.map(tableData => tableData.datetime);

  ufoData(filteredData)

});

