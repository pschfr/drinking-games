function fetchTotalDrinks() {
	const games = Array.from(document.getElementsByTagName('a'));

	games.forEach(function(game) {
		// Get current drink name from text
		const game_name = string_parameterize(game.innerText);

		// Get current drink value from localStorage
		const game_count = localStorage.getItem(`drinking-game-${game_name}-total-count`);

		// Set counter to localStorage value if set
		if (game_count > 0) {
			game.dataset.counter = game_count;
		}
	})
}

// Run fetchTotalDrinks after DOM is loaded
document.addEventListener('DOMContentLoaded', function(event) {
	fetchTotalDrinks();
});
