
 var names = [
'Sophia',
'Emma',
'Olivia',
'Isabella',
'Ava',
// 'Lily',
// 'Zoe',
// 'Chloe',
// 'Mia',
// 'Madison',
// 'Emily',
// 'Ella',
// 'Madelyn',
// 'Abigail',
// 'Aubrey',
// 'Addison',
// 'Avery',
// 'Layla',
// 'Hailey',
// 'Amelia',
// 'Hannah',
// 'Charlotte',
// 'Kaitlyn',
// 'Harper',
// 'Kaylee',
// 'Sophie',
// 'Mackenzie',
// 'Peyton',
// 'Riley',
// 'Grace',
// 'Brooklyn',
// 'Sarah',
// 'Aaliyah',
// 'Anna',
// 'Arianna',
// 'Ellie',
// 'Natalie',
// 'Isabelle',
// 'Lillian',
// 'Evelyn',
// 'Elizabeth',
// 'Lyla',
// 'Lucy',
// 'Claire',
// 'Makayla',
// 'Kylie',
// 'Audrey',
// 'Maya',
// 'Leah',
// 'Gabriella',
// 'Annabelle',
// 'Savannah',
// 'Nora',
// 'Reagan',
// 'Scarlett',
// 'Samantha',
// 'Alyssa',
// 'Allison',
// 'Elena',
// 'Stella',
// 'Alexis',
// 'Victoria',
// 'Aria',
// 'Molly',
// 'Maria',
// 'Bailey',
// 'Sydney',
// 'Bella',
// 'Mila',
// 'Taylor',
// 'Kayla',
// 'Eva',
// 'Jasmine',
// 'Gianna',
// 'Alexandra',
// 'Julia',
// 'Eliana',
// 'Kennedy',
// 'Brianna',
// 'Ruby',
// 'Lauren',
// 'Alice',
// 'Violet',
// 'Kendall',
// 'Morgan',
// 'Caroline',
// 'Piper',
// 'Brooke',
// 'Elise',
// 'Alexa',
// 'Sienna',
// 'Reese',
// 'Clara',
// 'Paige',
// 'Kate',
// 'Nevaeh',
// 'Sadie',
// 'Quinn',
// 'Isla',
// 'Eleanor'
 ];

 var positions = [];




$(document).ready(function(){


start();



});



var Customer = function (name, cash){
	this.name = name || 'Unknow';
	this.cash = cash || Math.floor(Math.random() * 5000);
};


 


function start (){
	for (var i = 0; i < names.length; i++) {
	positions.push({
	index: i,
	created: false
	});
};




var customerCreator = setInterval(addCustomer, 1);

var testJson = [
  {
    "index": 0,
   "users": 30,
   "name": "Jose"
  },
  {
    "index": 1,
   "users": 20,
   "name": "Julio"
  },
  {
    "index": 2,
   "users": 45,
   "name": "nano"
  },
  {
    "index": 3,
   "users": 20,
   "name": "Beto"
  },
  {
    "index": 4,
   "users": 10,
   "name": "Luis"
  }
];

function addCustomer(){
	var _index = Math.floor(Math.random() * names.length)
	console.log(names[_index]);

	if (checkList()){
		console.log('full');

		createGraphic(testJson)
		clearInterval(customerCreator);
		report();
	} else{
		console.log('there are positions available');

	if(positions[_index].created){
		console.log("It is created");

	} else {
		console.log("It is new")
		positions[_index].created = true;
	}
	if (!window[names[_index]]){
		window[names[_index]] = new Customer(names[_index])
		console.log(window[names[_index]]);
		var _cashier = Math.floor(Math.random() * 6);
		$('.cashier-' + _cashier + ' .users').append($('<li/>', {
		html: window[names[_index]].name + ' <strong>' + window[names[_index]].cash + '</strong>'
		}));
		$('.cashier-' + _cashier + ' .amount').html(calcAmount('.cashier-' + _cashier));




	}

	}
	}
}


function checkList (){
	var trueValues = 0;
	for (var i = 0; i < positions.length; i++) {
		if(positions[i].created){
			trueValues++;
		}
		if (positions.length == trueValues){
	  return true;
		}
	}
}


function calcAmount(listId){

	var amount = 0;
	$.each($(listId).find('li strong'), function(index, element){
		amount = amount + parseInt($(element).html());
	});
	return amount;
}


function report(){
	$.each($('.cashier .users'), function (index, element){
		console.log('Cashier Number ' + (index + 1) + ' had ' + $(element).find('li').length);
	});
}



function createGraphic(data){
 
console.log('Data ', data);


    var svg = d3.select(".svg-container")
        .append("svg")
        .attr("width", data.length * 100)
        .attr("height", 100);    


// d3.csv("js/data.csv", function(d) {
//   d.value = +d.value;
//   if (d.value) return d;
// }, function(error, classes){
// 	console.log(error);
// 	console.log(classes);

// });


for (var i = 0, temp = 0; i < data.length; i++) {
	temp = (100 * i) + 50;
	console.log(data[i]);
	    svg.append("circle")
        // .style("stroke", "gray")
        .style("fill", "blue")
        .attr("id", data[i].index)
        .attr("data-name", data[i].name)
				.attr("cx", temp)
        .attr("cy", 50)
        .attr("r", 0)
				.transition()
				.delay(100)
				.duration(1000)
        .attr("r", data[i].users)

};


// $('#0')


				// .transition().delay(100)
				// .duration(1000)
        // .on("mouseover", function(){d3.select(this).style("fill", "red");})
        // .on("mouseout", function(){d3.select(this).style("fill", "white");})
				
        
  

// var svg = d3.select(".svg-container svg"),
//     width = +svg.attr("width");

// var format = d3.format(",d");

// var color = d3.scaleOrdinal(d3.schemeCategory20c);

// var pack = d3.pack()
//     .size([width, width])
//     .padding(1.5);

//  console.log(svg);

// JCA load array d3



// d3.csv("js/data.csv", function(d) {
//   d.value = +d.value;
//   if (d.value) return d;
// }, function(error, classes) {
//   if (error) throw error;

//   var root = d3.hierarchy({children: classes})
//       .sum(function(d) { return d.value; })
//       .each(function(d) {
//         if (id = d.data.id) {
//           var id, i = id.lastIndexOf(".");
//           d.id = id;
//           d.package = id.slice(0, i);
//           d.class = id.slice(i + 1);
//         }
//       });


// });

}