// Globally available data and helper functions

// "Parameterize" a string similar to Ruby
// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-7.php
const string_parameterize = function (str1) {
	return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, '').replace(/\s/g, '-');
};
