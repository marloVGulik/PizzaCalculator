// Marlo van gulik
// Pizza calculator



// Variablen maken

// Pizza variablen
const Small = [Name='Kleine pizza', Price=8.99, Size=25];
const Medium = [Name='Middel pizza', Price=11.50, Size=30];
const Large = [Name='Grote pizza', Price=13.50, Size=35];
var Pizzas = [Small, Medium, Large];
var PizzaList = [];
var PizzaCount = [0, 0, 0];

// Variablen uitgerekent of submit variablen
var AddedPizza;
var PriceTotal = 0;
var PriceSmall = 0;
var PriceMedium = 0;
var PriceLarge = 0;


// Main functie (Update wanneer er op de post knop gedrukt word)
function AddPizza() {
	AddedPizza = document.getElementById("AddNewPizza"); // Krijgt de submit informatie

	//Pizza counter
	for (var i = 0; i < AddedPizza.length; i++) { // For loop om iedere knop te checken
		if(AddedPizza[i].checked) { // If om te checken of de knop is geselecteerd
			if(AddedPizza[i].value == "Small") { // First check of kleine pizza knop is ingedrukt
				for(f = 0; f < document.getElementById("AmountOfPizzaAdded").value; f++) { // For loop voor het aantal pizza's
					PizzaList.push(Small); // Pizza bij de lijst doen
					PizzaCount[0] += 1; // Een optellen bij het aantal kleine pizza's
					console.log("Added small pizza"); // Debug log
				}
			} else if(AddedPizza[i].value == "Medium") { // 2e check, dit is een repeated functie, comments zijn hetzelfde
				for(f = 0; f < document.getElementById("AmountOfPizzaAdded").value; f++) {
					PizzaList.push(Medium);
					PizzaCount[1] += 1;
					console.log("Added medium pizza");
				}
			} else if(AddedPizza[i].value == "Large") {
				for(f = 0; f < document.getElementById("AmountOfPizzaAdded").value; f++) {
					PizzaList.push(Large);
					PizzaCount[2] += 1;
					console.log("Added large pizza");
				}
			} else {
				console.log("Error while adding pizza"); // Debug log voor error
			}
		}
	}

	// Verander de div door de informatie bij elkaar op te tellen en in de div te stoppen
	document.getElementById("AllPizzaList").innerHTML = 'Kleine pizzas: ' + PizzaCount[0] + ', medium pizzas: ' + PizzaCount[1] + ' en large pizzas: ' + PizzaCount[2];

	// Pizza calculator (prijs), ook zet hij de pizza's in een <p>
	PriceSmall = PizzaCount[0] * Small[1];
	PriceMedium = PizzaCount[1] * Medium[1];
	PriceLarge = PizzaCount[2] * Large[1];
	Price = PriceSmall + PriceMedium + PriceLarge;
	document.getElementById("SmallPrice").innerHTML = 'Kleine pizza prijs: €' + PriceSmall;
	document.getElementById("MediumPrice").innerHTML = 'Medium pizza prijs: €' + PriceMedium;
	document.getElementById("LargePrice").innerHTML = 'Grote pizza prijs prijs: €' + PriceLarge;
	document.getElementById("TotalPrice").innerHTML = 'Totale prijs: €' + Price;
}


