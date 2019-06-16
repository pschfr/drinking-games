// Gets the name of the specific game
const game_name = string_parameterize(document.getElementById('title').innerText);

// Add to the total drink count
function incrementTotal() {
	// Reference the counter
	const total_elem = document.getElementById('total');
	
	// Increment the counter
	total_elem.innerText++;

	// Add it to localStorage
	localStorage.setItem(`drinking-game-${game_name}-total-count`, total_elem.innerText);
}

// The individual 'drink!' function
function drink(game) {
	// Increments the counter
	game.parentElement.dataset.counter++;

	// Name of individual drink
	const drink_name = string_parameterize(game.innerText);

	// Save to localStorage
	localStorage.setItem(`drinking-game-${game_name}-${drink_name}`, game.parentElement.dataset.counter);

	// Add to grand total
	incrementTotal();
}

// Load saved drinks from localStorage
function fetchDrinks() {
	// Create array of drinks on the page
	const drink_links = Array.from(document.getElementsByTagName('a'));

	// Then iterate over them
	drink_links.forEach(function(current_drink) {
		// Get current drink name from text
		const current_drink_name = string_parameterize(current_drink.innerText);

		// Get current drink value from localStorage
		const current_drink_count = localStorage.getItem(`drinking-game-${game_name}-${current_drink_name}`);

		// Set counter to localStorage value if set
		if (current_drink_count > 0) {
			current_drink.parentElement.dataset.counter = current_drink_count;
		}
	});

	// Fetch total counter value if set
	const total_drink_count = localStorage.getItem(`drinking-game-${game_name}-total-count`);

	if (total_drink_count > 0) {
		document.getElementById('total').innerText = total_drink_count;
	}
}

// Run fetchDrinks after DOM is loaded
document.addEventListener('DOMContentLoaded', function(event) {
	fetchDrinks();
});
