//Dynamically generate buttons using only jQuery 


//Initial array of animals

var animals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'parrot', 
'ferret', 'sugar glider', 'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 
'pygmy goat', 'chicken','capybara', 'teacup pig', 'serval', 'salamander', 'frog'];

//========================================================================================

//function for sending the JSON content for each button into gifsArea div
	function displayAnimalInfo(){

		//Search endpoint needs a limit (e.g., 10 gifs)

		var animal = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animal+"&limit=10&api_key=dc6zaTOxFJmzC";   

		// Goes to the URL and retrieves the data 
		$.ajax({url: queryURL, method: 'GET'})

			
		//When its finished getting the query
		.done(function(response) {
			

			//Setting the variable of image_url to the specific object
			var imageUrl = response.data.image_original_url;

			//Created a variable called a cat image
			var animalImage = $('<img>'); 	


			//Given the catImage the source path and an alt tag (screen readers). 
            animalImage.attr('src', imageUrl);
            animalImage.attr('alt', 'animal image');

				$('#gifsDisplay').prepend(animalImage);

				
				console.log(response); 
				/*html(JSON.stringify(response)); */
		});  

	} 

	

// ======================================================================================

// Deletes the animals prior to adding new animals (or there will be repeat animals)

	function renderButtons(){

		$('#animalButtons').empty();

		//Loops through array of animals
		for (var i = 0; i < animals.length; i++){

		//Then dynamically generate buttons for each movie in the array

			var a = $('<button type="button" class="btn btn primary btm-sm">'); 
		
			a.addClass('animal'); //Added class
			a.attr('data-name', animals[i]); //Added data-attribute
			a.text(animals[i]); //Displays animal text on button
			$('#animalButtons').append(a); //Adds buttons to HTML


		}


	}

//=====================================================================

// This function handles events where one button is clicked
	$('#addAnimal').on('click', function(){

		// This line of code will grab the input from the textbox
		var animal = $('#animal-input').val().trim();

		// The movie from the textbox is then added to our array
		animals.push(animal);
		
		// Our array then runs which handles the processing of our animal array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	}) 

//========================================================================
	$(document).on('click', '.animal', displayAnimalInfo); 

	renderButtons();  

	


