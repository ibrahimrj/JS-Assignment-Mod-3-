/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'Brasília'
];

var countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil'
];

/******** Answers Section ********/

// 1. Create a for loop to iterate over 'cities'
for (var i =0 ; i<cities.length; i++){
    console.log(cities[i])
}

console.log("--------------------------------------------") // This is just to seperate the answers in the console :)

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'
for (var i =0 ; i<cities.length; i++){
    if(countries[i] !== "???" || cities[i] !== "???"){
        console.log(cities[i],",",countries[i])
}
};


console.log("--------------------------------------------") // This is just to seperate the answers in the console :)

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")
for (var i =0 ; i<cities.length; i++){

    if(countries[i] === "???" || cities[i] === "???"){
        console.log("Oops!")
    } else {
    console.log(cities[i],",",countries[i])
}
};
// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!