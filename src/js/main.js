// add scripts

var clickedArray = []; 
var count = -1;



$(document).on('ready', function() { 
	console.log('sanity check!');
	playGame();
	$('#batterLup').hide();
	$('#batterR').hide();
	$('#results').hide();
	
	for (var i = 0; i <= 25 ; i++){
	    	$('#' + i).on('click',function(){
	    	$this = $(this);
	    	if ($this.hasClass('selected')) {
				clickedArray.push(5);
				$('#playerResults').append('<tr><td>'+(pitchArr[count].type)+'</td><td>'+(pitchArr[count].desc)+'</td><td>'+'<span class="label label-primary"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span><bold>  + 5</bold></span>'+'</td></tr>');
				
	    	}
	    	else if ($this.hasClass('bonusselected')) { 
				clickedArray.push(10);
				$('#playerResults').append('<tr><td>'+(pitchArr[count].type)+'</td><td>'+(pitchArr[count].desc)+'</td><td>'+'<span class="label label-success"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span><bold>  + 10</bold></span>'+'</td></tr>');
			
	    	}
	    	else { 
				clickedArray.push(0);
				$('#playerResults').append('<tr><td>'+(pitchArr[count].type)+'</td><td>'+(pitchArr[count].desc)+'</td><td>'+'<span class="label label-danger"><span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span><bold>  + 0</bold></span>'+'</td></tr>');
			
	    	}
	    	
			playGame();

			
	    })
	 }
});

$("#searchInput").keyup(function () {
    //split the current value of searchInput
    var data = this.value.split(" ");
    //create a jquery object of the rows
    var jo = $("#playerResults").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    })
    //show the rows that match.
    .show();
}).focus(function () {
    this.value = "";
    $(this).css({
        "color": "black"
    });
    $(this).unbind('focus');
}).css({
    "color": "#C0C0C0"
});

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
	{loc: 0, bonus: 17, loc2: 0, type:'Change Up', desc: 'Low and away'},
	{loc: 17, bonus: 12, loc2: 7, type:'Fastball', desc: 'Outside corner'},
	{loc: 17, bonus: 18, loc2: 19, type:'Change Up', desc: 'Low strike'},
	{loc: 20, bonus: 15, loc2: 10, type:'Fastball', desc: 'Inside and off the plate'},
	{loc: 22, bonus: 23, loc2: 24, type:'Breaking Ball', desc: 'Chase middle down'},
	{loc: 0, bonus: 17, loc2: 0, type:'Change Up', desc: 'Low and away'}
]

$(document).ready(function(){
	$('#mainSection').hide();
	$('#starting').click(function() {
		$('#loginStart').hide();
		$('#mainSection').show();
		
	});

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
	    	$('#batterRup').hide();
			$('#batterR').show();
			$('#batterLup').show();
			$('#batterL').hide();
	    }

	    if (count >= 20){
	    	$('#results').show();
	    	$('#bbox').hide();
	    	$('#instructions').hide();
	    }
	    if (pitchArr[count]) {
		    $('#type').html(pitchArr[count].type);
			$('#description').html(pitchArr[count].desc);
			// $('#playerResults').append('<td>'+(pitchArr[count].type)+'</td><td>'+(pitchArr[count].desc)+'</td><td>'+'</td>');
			var bonus = (pitchArr[count].bonus)
			var expected1 = (pitchArr[count].loc)
			var expected2 = (pitchArr[count].loc2)
			var oldHighlight = $('.selected')[0];
			var oldHighlight2 = $('.bonusselected')[0];
			var oldHighlight3 = $('.selected')[1];
			$(oldHighlight3).removeClass('selected');
			$(oldHighlight).removeClass('selected');
			$(oldHighlight2).removeClass('bonusselected');
			$('#' + bonus).addClass('bonusselected');
			$('#' + expected1).addClass('selected');
			$('#' + expected2).addClass('selected');
		}
 

		 var playerRunningScore = 0;
	      
	      for (var i = 0; i < clickedArray.length; i++){
	    	playerRunningScore += parseInt(clickedArray[i]);
	    }
	      

	    $('#playerScore').html(playerRunningScore);
	    $('#playerFinal').html(playerRunningScore);
	   	var last_element = clickedArray[clickedArray.length - 1];
	   //call update UI function 
	    
	    console.log(clickedArray)
	    console.log(playerRunningScore)
		console.log(count);
		console.log(last_element)
		// console.log(pitchArr[count].desc)
		// console.log(pitchArr[count].type)
		console.log(pitchArr[i])
    	
}
