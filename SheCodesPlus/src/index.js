let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let currentDate = new Date();
console.log(currentDate);
let date = currentDate.getDate();
let months = [
	"Jan",
	"Feb",
	"March",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
let month = months[currentDate.getMonth()];
let day = days[currentDate.getDay()];
let time =currentDate.getHours();
if (time< 10) {
	time = `0${time}`;
}
let timeMin = currentDate.getMinutes();

if (timeMin < 10) {
	timeMin = `0${timeMin}`;
}

let year = currentDate.getFullYear();

let heading = document.querySelector("h3");
heading.innerHTML = `${day} ${month} ${date}, ${year}  ${time}:${timeMin}`;

// function search() {
// 	let text = document.querySelector(`#searchBar`)
// 	console.log(text.value)

function searchBar(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-text-input");

	let h1 = document.querySelector("h1");

	if (searchInput.value) {
		h1.innerHTML = `Giving you the weather in ${searchInput.value}...`;
	}
	let city = document.querySelector("h2");
	city.innerHTML = `${searchInput.value}`;
}

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchBar);

function searchButton(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-text-input");

	let h1 = document.querySelector("h1");

	if (searchInput.value) {
		h1.innerHTML = `Giving you the weather in ${searchInput.value}...`;
	}
	let city = document.querySelector("h2");
	city.innerHTML = `${searchInput.value}`;
}
let searchButtonIcon = document.querySelector("button");
searchButtonIcon.addEventListener("click", searchButton);