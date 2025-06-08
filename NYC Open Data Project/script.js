//Info Page

let data, info, leftPanel, output;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/yjub-udmw.json?$limit=300";
  info = await fetch(link);
  data = await info.json();

  let leftPanel = document.getElementById("leftPanel");
  let build = "";
  let ct = 0;
  
  for(let i = 0; i < data.length; i++){
	let wifi = data[i];
	build += `<div class="fitted card">`;
	build += `<h3> ${wifi.name} </h3>`;
	build += `<h4> ${wifi.boroname} </h4>`;
	build += `<p> Zip Code: ${wifi.zip} </p>`;
	build += `<p> Wifi Provider: ${wifi.provider} </p>`;
	build += `<p> Type of Wifi: ${wifi.type} </p>`;
	if( wifi.latitude && wifi.longitude){
			build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
		}
	build += `</div>`;
	ct++;
	}
  result.innerHTML = `${ct} Results Found`	
  leftPanel.innerHTML = build;
  
  document.getElementById("provider").innerHTML = fillDropDown("provider");
}

function filterByProvider(){
	let leftPanel = document.getElementById("leftPanel");
	let prov = document.getElementById("provider").value;
	let build = "";
	let ct = 0;
	for(let i = 0; i < data.length; i++){
		let wifi = data[i];
		if(wifi.provider == prov){
			build += `<div class="fitted card">`;
      build += `<h3> ${wifi.name} </h3>`;
      build += `<h4> ${wifi.boroname} </h4>`;
      build += `<p> Zip Code: ${wifi.zip} </p>`;
      build += `<p> Wifi Provider: ${wifi.provider} </p>`;
      build += `<p> Type of Wifi: ${wifi.type} </p>`;
      if( wifi.latitude && wifi.longitude){
          build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
        }
      build += `</div>`;
	  ct++;
			}
		}
  result.innerHTML = `${ct} Results Found`	
  leftPanel.innerHTML = build;
}

function filterByBoroughAndType(){
	let leftPanel = document.getElementById("leftPanel");
	let boro = document.getElementById("boro").value;
  let both = document.getElementById("type3").value;
	let build = "";
	let ct = 0;
	for(let i = 0; i < data.length; i++){
		let wifi = data[i];
		if(wifi.boroname == boro && wifi.type == both){
			build += `<div class="fitted card">`;
      build += `<h3> ${wifi.name} </h3>`;
      build += `<h4> ${wifi.boroname} </h4>`;
      build += `<p> Zip Code: ${wifi.zip} </p>`;
      build += `<p> Wifi Provider: ${wifi.provider} </p>`;
      build += `<p> Type of Wifi: ${wifi.type} </p>`;
      if( wifi.latitude && wifi.longitude){
          build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
        }
      build += `</div>`;
	  ct++;
          }
		}
  result.innerHTML = `${ct} Results Found`	
  leftPanel.innerHTML = build;
}

function filterByZipOrBorough(){
	let leftPanel = document.getElementById("leftPanel");
	let zip = document.getElementById("zip").value;
  let boro = document.getElementById("borough").value;
	let build = "";
	let ct = 0;
	for(let i = 0; i < data.length; i++){
		let wifi = data[i];
		if(wifi.zip == zip || wifi.boroname == boro){
			build += `<div class="fitted card">`;
      build += `<h3> ${wifi.name} </h3>`;
      build += `<h4> ${wifi.boroname} </h4>`;
      build += `<p> Zip Code: ${wifi.zip} </p>`;
      build += `<p> Wifi Provider: ${wifi.provider} </p>`;
      build += `<p> Type of Wifi: ${wifi.type} </p>`;
      if( wifi.latitude && wifi.longitude){
          build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
        }
      build += `</div>`;
	  ct++;
          }
		}
  result.innerHTML = `${ct} Results Found`	
  leftPanel.innerHTML = build;
}

function filterByType(){
  let leftPanel = document.getElementById("leftPanel");
  let free = document.getElementById("type1");
  let limit = document.getElementById("type2");
  let build = "";
  let ct = 0;
	for(let i = 0; i < data.length; i++){
		let wifi = data[i];
		if(free.checked == true && limit.checked != true){
		  if(wifi.type == "Free"){
			build += `<div class="fitted card">`;
			build += `<h3> ${wifi.name} </h3>`;
			build += `<h4> ${wifi.boroname} </h4>`;
			build += `<p> Zip Code: ${wifi.zip} </p>`;
			build += `<p> Wifi Provider: ${wifi.provider} </p>`;
			build += `<p> Type of Wifi: ${wifi.type} </p>`;
			if( wifi.latitude && wifi.longitude){
				build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
			  }
			build += `</div>`;
			ct++;
		  }
		  }else if(limit.checked == true && free.checked != true){
			  if(wifi.type == "Limited Free"){
				build += `<div class="fitted card">`;
				build += `<h3> ${wifi.name} </h3>`;
				build += `<h4> ${wifi.boroname} </h4>`;
				build += `<p> Zip Code: ${wifi.zip} </p>`;
				build += `<p> Wifi Provider: ${wifi.provider} </p>`;
				build += `<p> Type of Wifi: ${wifi.type} </p>`;
				if( wifi.latitude && wifi.longitude){
					build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
				  }
				build += `</div>`;
				ct++;
          }
		  }else if(limit.checked == true && free.checked == true){
			  build += `<div class="fitted card">`;
			  build += `<h3> ${wifi.name} </h3>`;
			  build += `<h4> ${wifi.boroname} </h4>`;
			  build += `<p> Zip Code: ${wifi.zip} </p>`;
			  build += `<p> Wifi Provider: ${wifi.provider} </p>`;
			  build += `<p> Type of Wifi: ${wifi.type} </p>`;
			  if( wifi.latitude && wifi.longitude){
				  build += `<input type='button' value='MAP' onclick="showMap( ${wifi.latitude},${wifi.longitude} )">`;
				  }
			  build += `</div>`;
			  ct++;
		  }else{
        build = "";
		c++;
      }
	        result.innerHTML = `${ct} Results Found`	
			leftPanel.innerHTML = build;
        }
}

/* Function to fill-in(populate) the Dropdown menu - DO NOT TOUCH !!
          ||  
         \||/
          \/
*/
function fillDropDown(key){
  let list = [];
  let build = "";
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    // alternate way to access JSON value
    // cannot use .key (will look for prop of "key")
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let i of list){
      build += `<option>${i}</option>`;
  }
  return build;
}

//Analysis Page

async function init2(){
  let link = "https://data.cityofnewyork.us/resource/yjub-udmw.json?$limit=300";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function ByBorough(){
  //Discussion 1: Define variables to keep tally of locations by borough
  let q = 0, m = 0, bk = 0, bx = 0, s = 0;
  //Discussion 2: Traverse the data and use a decision to determine which tally variable to increment.
  for( let i = 0; i < data.length; i++){
	  let wifi = data[i];
	  if(wifi.boroname == "Queens"){
		  q++;
	  }else if(wifi.boroname == "Manhattan"){
		  m++;
	  }else if(wifi.boroname == "Brooklyn"){
		  bk++;
	  }else if(wifi.boroname == "Bronx"){
      bx++;
    }else if(wifi.boroname == "Staten Island")
      s++;
  }
  
  //Discussion 3: Build the data structure required for charts. (An array of arrays with the first position in each array representing the data label).
  let chartData = [
    ["Queens", q],
    ["Manhattan", m],
    ["Brooklyn", bk],
    ["Bronx", bx],
    ["Staten Island", s]
  ];
  
  //Discussion 4: Retrieve the type of chart to produce from the user's selection in the drop down box.
  let chartType = document.getElementById("chartType").value;
  
  //Discussion 5: Display the chart of the aggregated data.
  displayChart(chartData,"output",chartType);
  let build = "";
  build+=`<div class="container center">`
  build+=`<h3> Description: </h3>`
  build+=`<p> Chart shows which how many wifi locations are available in each borough throughout NYC. </p>`
  build+=`</div>`
  output2.innerHTML = build;
}

function ByProvider(){
  //Discussion 1: Define variables to keep tally of locations by provider
  let a1 = 0, a2 = 0, b = 0, c = 0, dbk = 0, f = 0, h = 0, l = 0, m = 0, cha = 0, pl = 0, q = 0, s = 0, t = 0;
  
  //Discussion 2: Traverse the data and use a decision to determine which tally variable to increment.
  for( let i = 0; i < data.length; i++){
	  let wifi = data[i];
	  if(wifi.provider == "ALTICEUSA"){
		  a1++;
	  }else if(wifi.provider == "AT&T"){
		  a2++;
	  }else if(wifi.provider == "BPL"){
		  b++;
	  }else if(wifi.provider == "Chelsea"){
		  c++;
	  }else if(wifi.provider == "Downtown Brooklyn"){
		  dbk++;
	  }else if(wifi.provider == "Fiberless"){
		  f++;
	  }else if(wifi.provider == "Harlem"){
		  h++;
	  }else if(wifi.provider == "LinkNYC - Citybridge"){
		  l++;
	  }else if(wifi.provider == "Manhattan Down Alliance"){
		  m++;
	  }else if(wifi.provider == "NYCHA"){
		  cha++;
	  }else if(wifi.provider == "NYPL"){
		  pl++;
	  }else if(wifi.provider == "QPL"){
		  q++;
	  }else if(wifi.provider == "SPECTRUM"){
		  s++;
	  }else if(wifi.provider == "Transit Wireless"){
		  t++;
  }
  }
  
  //Discussion 3: Build the data structure required for charts. (An array of arrays with the first position in each array representing the data label).
  let chartData1 = [
    ["ALTICEUSA", a1],
    ["AT&T", a2],
    ["BPL", b],
    ["Chelsea", c],
    ["Downtown Brooklyn", dbk],
	["Fiberless", f],
	["Harlem", h],
	["LinkNYC - Citybridge", l],
	["Manhattan Down Alliance", m],
	["NYCHA", cha],
	["NYPL", pl],
	["QPL", q],
	["SPECTRUM", s],
	["Transit Wireless", t]
  ];
  
  //Discussion 4: Retrieve the type of chart to produce from the user's selection in the drop down box.
  let chartType1 = document.getElementById("chartType1").value;
  
  //Discussion 5: Display the chart of the aggregated data.
  displayChart(chartData1,"output",chartType1);
  let build = "";
  build+=`<div class="container center">`
  build+=`<h3> Description: </h3>`
  build+=`<p> Chart shows which how many wifi locations are available by each wifi provider in the dataset throughout NYC. </p>`
  build+=`</div>`
  output2.innerHTML = build;
}

// displayChart() accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
	}, 
	 axis: {
      // Only rotate if it's the specific chart you want horizontal
      rotated: chart_type == `bar` 
	 }
  });   
}
