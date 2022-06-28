var stockData = [ 
    { 
        Symbol: "AAPL", 
        Company: "Apple Inc.", 
        Headquarters: "California",
        Price: "$132.54",
        Calls: "$85.00",
        Puts: "$85.00"
    }, 
    { 
        Symbol: "INTC", 
        Company: "Intel Corporation", 
        Headquarters: "California",
        Price: "$33.45",
        Calls: "$35.00",
        Puts: "$30.00" 
    }, 
    { 
        Symbol: "GOOG", 
        Company: "Google Inc", 
        Headquarters: "California",
        Price: "$554.52",
        Calls: "$1900.00",
        Puts: "$1800.00"
    }, 
    // Additions to stock data
    {
        Symbol: "UNH",
        Company: "UnitedHealth Group Incorporated",
        Headquarters: "Minnesota",
        Price: "$407.08",
        Calls: "$215.00",
        Puts: "$225.00"
    },
    {
        Symbol: "MMM",
        Company: "3M Company",
        Headquarters: "Minnesota",
        Price: "$176.99",
        Calls: "$170.00",
        Puts: "$135.00"
    },
    {
        Symbol: "GIS",
        Company: "General Mills Inc",
        Headquarters: "Minnesota",
        Price: "$60.69",
        Calls: "$27.50",
        Puts: "$27.50"
    },
    {
        Symbol: "BTC-USD",
        Company: "Bitcoin USD",
        Headquarters: "California",
        Price: "$47767.23",
        Calls: "N/A",
        Puts: "N/A"
    },
    {
        Symbol: "ETH-USD",
        Company: "Ethereum USD",
        Headquarters: "Switzerland",
        Price: "$3291.11",
        Calls: "N/A",
        Puts: "N/A"
    }
]; 

function generateTableHead(table, data) {
let thead = table.createTHead();
let row = thead.insertRow();
for (let key of data) {
let th = document.createElement("th");
let text = document.createTextNode(key);
th.appendChild(text);
row.appendChild(th);
}
}

function generateTable(table, data) {
for (let element of data) {
let row = table.insertRow();
for (key in element) {
  let cell = row.insertCell();
  let text = document.createTextNode(element[key]);
  cell.appendChild(text);
}
}
}

let table = document.querySelector("table");
let data = Object.keys(stockData[0]);
generateTableHead(table, data); //create headings for table
generateTable(table, stockData); //populate with data from stockData var







// GIVEN CODE
function convertArrayOfObjectsToCSV(args) { 
    var result, ctr, keys, columnDelimiter, lineDelimiter, data; 

    data = args.data || null;         if (data == null || !data.length) { 
        return null; 
    } 

    columnDelimiter = args.columnDelimiter || ',';         lineDelimiter = args.lineDelimiter || '\n'; 

    keys = Object.keys(data[0]); 

    result = ''; 
    result += keys.join(columnDelimiter); 
    result += lineDelimiter; 

    data.forEach(function(item) { 
        ctr = 0; 
        keys.forEach(function(key) { 
            if (ctr > 0) result += columnDelimiter; 

            result += item[key]; 
            ctr++; 
        }); 
        result += lineDelimiter; 
    }); 

    return result; 
} 

function downloadCSV(args) { 
    var data, filename, link; 

    var csv = convertArrayOfObjectsToCSV({             data: stockData 
    }); 
    if (csv == null) return; 

    filename = args.filename || 'export.csv'; 

    if (!csv.match(/^data:text\/csv/i)) { 
        csv = 'data:text/csv;charset=utf-8,' + csv; 
    } 
    data = encodeURI(csv); 

    link = document.createElement('a');         link.setAttribute('href', data);         link.setAttribute('download', filename); 
    link.click();     }