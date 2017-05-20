var people = [];


function hozzaad() {
    //A hozzáad gomb megnyomásakor 
    //ki kell olvasni a két értéket
    //az inputból, és egy objektumként
    //el kell tárolnunk a tömbben.
    var person = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value
    }

    people.push(person);
    localAdd();
    hozzaFuz(person);
}

function localAdd(){
	var people_String = JSON.stringify(people);
	localStorage.setItem("people",  people_String);
}

function hozzaFuz(person){
	var people_div = document.querySelector("#result_people");
	var person_div = document.createElement("div");

	person_div.innerHTML = "<label>" + person.firstName + " " + person.lastName + "</label>";
	people_div.appendChild(person_div); 
}

function kiolvas(){
	var people_div = document.querySelector("#result_people");
	people_div.innerHTML = " ";
	var people_str = localStorage.getItem('people');
	people = JSON.parse(people_str);
	for (var i = 0; i < people.length; i++) {
		hozzaFuz(people[i]);
	}
}