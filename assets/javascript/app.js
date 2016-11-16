//Dynamically generate buttons using only jQuery 


//Initial array of animals

var animals = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'pidgey', 'pidgeotto', 'rattata', 'spearow', 
'fearow', 'ekans', 'pikachu', 'arbok', 'raichu', 'sandslash', 
'nidoran', 'clefairy','vulpix', 'jigglypuff', 'zubat', 'oddish', 'venonat'];

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
			
			var results = response.data;
			

			for (var i= 0; i < results.length; i++){


				var animalDiv = $('<div>');

				var p = $('<p>').text("Rating: " + results[i].rating);

				var animalImage = $('<img>'); 

				 animalImage.attr('src', results[i].images.fixed_height.url);
					
					animalImage.addClass('pokémon');	
					animalImage.attr('src', results[i].images.fixed_height.url);
				 	animalImage.attr('data-animate', results[i].images.fixed_height.url);
				 	animalImage.attr('data-still', results[i].images.fixed_height_still.url);


					animalDiv.append(p);
					animalDiv.append(animalImage);


					$('#gifsDisplay').prepend(animalDiv);


			}


			$('.pokémon').on('click', function(){


			var state = $(this).attr('data-state');


			if (state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }




			});




			//Setting the variable of image_url to the specific object
			//var imageUrl = response.data.image_original_url;

			//Created a variable called a cat image
				


			//Given the catImage the source path and an alt tag (screen readers). 
           
            //animalImage.attr('alt', 'animal image');

				

				
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
