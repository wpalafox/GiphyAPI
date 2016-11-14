//Dynamically generate buttons using only jQuery 


//Initial array of animals

var animals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'parrot', 
'ferret', 'sugar glider', 'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 
'pygmy goat', 'chicken','capybara', 'teacup pig', 'serval', 'salamander', 'frog'];



// ===========================================================

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



//renderButtons();






renderButtons(); 