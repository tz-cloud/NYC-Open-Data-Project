function get(id){
  return document.getElementById(id);
}

//Discussion 5: Using concepts of modular programming, create a function that accepts the data, an id to the div to display the chart and the type of chart
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}