// Characters

let mrGreen = {
	first_name: "Jacob",
	last_name: "Green",
	color: "green",
	description: "He has a lot of connections",
	age: 45,
	image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
	occupation: "Entrepreneur",
};

let drOrchid = {
	first_name: "Doctor",
	last_name: "Orchid",
	color: "white",
	description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
	age: 26,
	image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
	ocupation: "Scientist",
};

let profPlum = {
	first_name: "Victor",
	last_name: "Plum",
	color: "purple",
	description: "Billionare video game designer",
	age: 22,
	image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
	occupation: "Designer",
};

let missScarlet = {
	first_name: "Kasandra",
	last_name: "Scarlet",
	color: "red",
	description: "She is an A - list movie star with a dark past",
	age: 31,
	image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
	occupation: "Actor",
};

let mrsPeacock = {
	first_name: "Eleanor",
	last_name: "Peacock",
	color: "blue",
	description: "She is from a wealthy family and uses her status and money to earn popularity",
	age: 36,
	image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
	occupation: "Socialité",
};

let mrMustard = {
	first_name: "Jack",
	last_name: "Mustard",
	color: "yellow",
	description: "He is a former football player who tries to get by on his former glory",
	age: 62,
	image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
	occupation: "Retired Football player",
};

// Weapons
let rope = { name: "rope", weight: 10 };
let knife = { name: "knife", weight: 8 };
let candelstic = { name: "candlestick", weight: 2 };
let dumbbel = { name: "dumbbell", weight: 30 };
let poison = { name: "poison", weight: 2 };
let axe = { name: "axe", weight: 15 };
let bat = { name: "bat", weight: 13 };
let trophy = { name: "trophy", weight: 25 };
let piston = { name: "pistol", weight: 20 };

// Rooms
let DinningRoom = { name: "DinningRoom" };
let Conservatory = { name: "Conservatory" };
let Kitchen = { name: "Kitchen" };
let Study = { name: "Study" };
let Library = { name: "Library" };
let BilliardRoom = { name: "BilliardRoom" };
let Lounge = { name: "Lounge" };
let Ballroom = { name: "Ballroom" };
let Hall = { name: "Hall" };
let Spa = { name: "Spa" };
let LivingRoom = { name: "LivingRoom" };
let Observatory = { name: "Observatory" };
let Theater = { name: "Theater" };
let GuestHouse = { name: "GuestHouse" };
let Patio = { name: "Patio" };

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = ["rope", "knife", "candelstick", "dumbbel", "poison", "axe", "bat", "trophy", "piston"];

// Rooms' Collection
var roomsArray = ["DinningRoom", "Conservatory", "Kitchen", "Study", "Library", "BilliardRoom", "Lounge", "Ballroom", "Hall", "Spa", "LivingRoom", "Observatory", "Theater", "GuestHouse", "Patio"];

function randomSelector(array) {
	let arrayLength = array.length;
	return array[Math.floor(Math.random() * arrayLength)];
};

var randomPersonajeFirstName,randomPersonajeLasttName, randomArma, randomHabitacion, misteryEnvelope;
function pickMistery(personaje, arma, habitacion) {
	randomPersonajeFirstName = randomSelector(personaje).first_name;
	randomPersonajeLasttName = randomSelector(personaje).last_name;
	randomArma = randomSelector(arma);
	randomHabitacion = randomSelector(habitacion);
	misteryEnvelope = [randomPersonajeFirstName, randomArma, randomHabitacion];
	return misteryEnvelope;
};

function revealMistery(arrayy) {
	return (randomPersonajeFirstName + " " + randomPersonajeLasttName + " killed Mr.Boddy using the " + arrayy[1] + " in the " + arrayy[2])
};

