// fibonnachi rij is rij waarbij elk getal gelijk is aan de som van de twee vorige (0,1 is begin)
// elke seconde hetvolgende getal van fibo
// functie zonder recursie
function verlengRij() {
	let nextNumber = fibo[fibo.length - 1] + fibo[fibo.length - 2];
	fibo.push(nextNumber);
	console.log(fibo.join(', '));
}

let fibo = [0, 1];

for (let i = 0; i < 10; i++) {
	verlengRij();
}
