// add scripts

var clickedArray = []; 
var count = 0;



$(document).on('ready', function() {
  console.log('sanity check!');

 $('#batterLup').hide();
 $('#batterR').hide();
 $('#results').hide();



	
//call update UI function to read the data for next pitch

	$('.box').on('click', function() {
		playGame();
	});
		// function() {
	    
// 	    //counts number of pitches by the buttons clicked
// 	    count ++

// 		if (count >= 5){
// 	    	$('#batterRup').hide();
// 			$('#batterR').show();
// 			$('#batterLup').show();
// 			$('#batterL').hide();
// 	    }
// 	    if (count >= 10){
// 	    	$('#batterRup').show();
// 			$('#batterR').hide();
// 			$('#batterLup').hide();
// 			$('#batterL').show();
// 	    }

// 	    if (count >= 15){
// 	    	$('#results').show();
// 	    	$('#bbox').hide();
// 	    	$('#instructions').hide();
// 	    }
// 	    if (pitchArr[count]) {
// 		    $('#type').html(pitchArr[count].type);
// 			$('#description').html(pitchArr[count].desc);
// 			var bonus = (pitchArr[count].bonus)
// 			var expected1 = (pitchArr[count].loc)
// 			var expected2 = (pitchArr[count].loc2)
// 			var oldHighlight = $('.selected')[0];
// 			var oldHighlight2 = $('.bonusselected')[0];
// 			var oldHighlight3 = $('.selected2')[0];
// 			$(oldHighlight3).removeClass('selected2');
// 			$(oldHighlight).removeClass('selected');
// 			$(oldHighlight2).removeClass('bonusselected');
// 			$('#' + bonus).addClass('bonusselected');
// 			$('#' + expected1).addClass('selected');
// 			$('#' + expected2).addClass('selected2');
// 		}
 

//  var playerRunningScore = 0;

// 	    $('#' + expected1).on('click',function(){
// 	    	var buttonClicked1 = 2; 
// 			clickedArray.push(buttonClicked1);
	    
// 	    })
// 	     $('#' + expected2).on('click',function(){
// 	    	var buttonClicked2 = 2; 
// 			clickedArray.push(buttonClicked2);
	    
// 	    })
// 	      $('#' + bonus).on('click',function(){
// 	    	var buttonClicked3 = 10; 
// 			clickedArray.push(buttonClicked3);

// 	    })
	      
// 	      for (var i = 0; i < clickedArray.length; i++){
// 	    	playerRunningScore += parseInt(clickedArray[i]);
// 	    }
// 	      console.log(clickedArray)



// 	    // get the value of the button that was clicked
// 		//  var buttonClicked = this.id; 


// 	 //   // store it as the last element in the array
// 	 // var playerRunningScore = 0;
// 	 //    clickedArray.push(buttonClicked);
// 	 //    console.log(clickedArray)
// 	 //     for (var i = 0; i < clickedArray.length; i++){
// 	 //     	playerRunningScore += parseInt(clickedArray[i]);
// 	 //    }
// 	 //   	 console.log(buttonClicked);	
// 	 //     console.log(playerRunningScore);


// 	    $('#playerScore').html(playerRunningScore);
// 	    $('#playerFinal').html(playerRunningScore);
// 	   //call update UI function 
	    
// console.log(count);
    	
// 	});


});


// new function called update UI pitch type, location 
// based on the length of clicked array and the index of the array.
//  
//  


  

var pitchArr = [
	
	{loc: 17, bonus: 12, loc2: 7, type:'Fastball', desc: 'Outside corner'},
	{loc: 17, bonus: 18, loc2: 19, type:'Change Up', desc: 'Low strike'},
	{loc: 20, bonus: 15, loc2: 10, type:'Fastball', desc: 'Inside and off the plate'},
	{loc: 22, bonus: 23, loc2: 24, type:'Breaking Ball', desc: 'Chase middle down'},
	{loc: 0, bonus: 17, loc2: 0, type:'Change Up', desc: 'Low and away'},
	{loc: 9, bonus: 14, loc2: 19, type:'Fastball', desc: 'Outside corner'},
	{loc: 17, bonus: 18, loc2: 19, type:'Change Up', desc: 'Low strike'},
	{loc: 6, bonus: 11, loc2: 16, type:'Fastball', desc: 'Inside and off the plate'},
	{loc: 22, bonus: 23, loc2: 24, type:'Breaking Ball', desc: 'Chase middle down'},
	{loc: 0, bonus: 17, loc2: 0, type:'Change Up', desc: 'Low and away'},
	{loc: 17, bonus: 12, loc2: 7, type:'Fastball', desc: 'Outside corner'},
	{loc: 17, bonus: 18, loc2: 19, type:'Change Up', desc: 'Low strike'},
	{loc: 20, bonus: 15, loc2: 10, type:'Fastball', desc: 'Inside and off the plate'},
	{loc: 22, bonus: 23, loc2: 24, type:'Breaking Ball', desc: 'Chase middle down'},
	{loc: 0, bonus: 17, loc2: 0, type:'Change Up', desc: 'Low and away'}
]



// pitchArr.forEach(function(pitch){
// 	console.log(pitch);

// })



// button id = setLoc;
// function setSpot() {
// 	var id = setLoc;
// 	$(id).html(10);
// 	$(id).setclass('.selected');
// }


// // Function needed to set the location and identify the appropriate button
// 
// button id = spot#
// function (#) {
// 	var id = 'spot' + #;
// 	
// 	// this selects the value based on the id # of that button and the style
// 	
// 	$(id).html(10);
// 	$(id).setclass('.selected');
// }

// // Creating a JSON object of pitch sequences. this will feed the 
// // above function to set the selected pitch and the location.
// 
// pitchArrRighty = [
// 	
// 	{loc: 12, type:'Fastball'},
// 	{loc: 18, type:'Change Up'},
// 	{loc: 20, type:'Fastball'}
// 	{loc: 23, type:'Breaking Ball'}
// 	{loc: 17, type:'Change Up'}
// 	
// ]
// pitchArrLefty= [
// 
// 	{loc: 17, type:'Change Up'},
// 	{loc: 15, type:'Fastball'},
// 	{loc: 10, type:'Breaking Ball'}
// 	{loc: 3, type:'Fastball'}
// 	{loc: 25, type:'Change Up'}
// 	
// 	]

// // this will loop through the JSON object to select the pitch and apply it to
// // the DOM location and type
// 
// pitchArr.foreach(function(pitch){
// 	setloc(pitch.loc);
// 	$(#location).html(pitch.type);
// })

$(document).ready(function(){
	$('#mainSection').hide();
	$('#starting').click(function() {
		$('#loginStart').hide();
		$('#mainSection').show();
		playGame();
	});
	// function(){
	// 	
	// 	$('#type').html(pitchArr[count].type);
	// 	$('#description').html(pitchArr[count].desc);
	// 	var bonus = (pitchArr[count].bonus)
	// 	var expected1 = (pitchArr[count].loc)
	// 	var expected2 = (pitchArr[count].loc2)
	// 	var oldHighlight = $('.selected')[0];
	// 	var oldHighlight2 = $('.bonusselected')[0];
	// 	var oldHighlight3 = $('.selected2')[0];
	// 	$(oldHighlight3).removeClass('selected2');
	// 	$(oldHighlight).removeClass('selected');
	// 	$(oldHighlight2).removeClass('bonusselected');
	// 	$('#' + bonus).addClass('bonusselected');
	// 	$('#' + expected1).addClass('selected');
	// 	$('#' + expected2).addClass('selected2');

	// })
	// $('#player').click(function(){
	// 	$('#loginStart').hide();
	// 	$('#coach').hide();
	// 	$('#coachFields').hide();
	// 	$('#playerFields').show();
	// })
	// $('#coach').click(function(){
	// 	$('#loginStart').hide();
	// 	$('#coachFields').show();
	// 	$('#playerFields').hide();

	// })

});

function playGame() {
	//counts number of pitches by the buttons clicked
	    count ++
		if (count >= 5){
	    	$('#batterRup').hide();
			$('#batterR').show();
			$('#batterLup').show();
			$('#batterL').hide();
	    }
	    if (count >= 10){
	    	$('#batterRup').show();
			$('#batterR').hide();
			$('#batterLup').hide();
			$('#batterL').show();
	    }

	    if (count >= 15){
	    	$('#results').show();
	    	$('#bbox').hide();
	    	$('#instructions').hide();
	    }
	    if (pitchArr[count]) {
		    $('#type').html(pitchArr[count].type);
			$('#description').html(pitchArr[count].desc);
			var bonus = (pitchArr[count].bonus)
			var expected1 = (pitchArr[count].loc)
			var expected2 = (pitchArr[count].loc2)
			var oldHighlight = $('.selected')[0];
			var oldHighlight2 = $('.bonusselected')[0];
			var oldHighlight3 = $('.selected2')[0];
			$(oldHighlight3).removeClass('selected2');
			$(oldHighlight).removeClass('selected');
			$(oldHighlight2).removeClass('bonusselected');
			$('#' + bonus).addClass('bonusselected');
			$('#' + expected1).addClass('selected');
			$('#' + expected2).addClass('selected2');
		}
 

		 var playerRunningScore = 0;

	    $('#' + expected1).on('click',function(){
	    	var buttonClicked1 = 2; 
			clickedArray.push(buttonClicked1);
	    
	    })
	     $('#' + expected2).on('click',function(){
	    	var buttonClicked2 = 2; 
			clickedArray.push(buttonClicked2);
	    
	    })
	      $('#' + bonus).on('click',function(){
	    	var buttonClicked3 = 10; 
			clickedArray.push(buttonClicked3);

	    })
	      
	      for (var i = 0; i < clickedArray.length; i++){
	    	playerRunningScore += parseInt(clickedArray[i]);
	    }
	      console.log(clickedArray)



	    // get the value of the button that was clicked
		//  var buttonClicked = this.id; 


	 //   // store it as the last element in the array
	 // var playerRunningScore = 0;
	 //    clickedArray.push(buttonClicked);
	 //    console.log(clickedArray)
	 //     for (var i = 0; i < clickedArray.length; i++){
	 //     	playerRunningScore += parseInt(clickedArray[i]);
	 //    }
	 //   	 console.log(buttonClicked);	
	 //     console.log(playerRunningScore);


	    $('#playerScore').html(playerRunningScore);
	    $('#playerFinal').html(playerRunningScore);
	   //call update UI function 
	    
		console.log(count);
    	
}
