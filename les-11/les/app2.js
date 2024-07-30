// fibonnachi rij is rij waarbij elk getal gelijk is aan de som van de twee vorige (0,1 is begin)
// elke seconde hetvolgende getal van fibo
// functie MET recursie!!!! functie in functie
function verlengRij(number1, number2) {
	let nextNumber = number1 + number2;
    console.log(nextNumber);

    if (nextNumber > 10000) {
        return console.log("Done!");
    }

    number1 = number2;
    number2 = nextNumber;
    verlengRij(number1, number2);
}

verlengRij(0, 1);

// let fibo = [0, 1];


