const celciusInput = document.querySelector("#cel input");
const fahrenheitInput = document.querySelector("#fah input");
const kelvinInput = document.querySelector("#kel input");
const numericInput = document.querySelectorAll(".numeric-limit");

numericInput.forEach((input) => {
	input.addEventListener("input", () => {
		const maxValue = 9999;
		const decimalIndex = input.value.indexOf(".");

		if (decimalIndex !== -1) {
			const decimalDigits = input.value.substring(decimalIndex + 1);
			if (decimalDigits.length > 3) {
				input.value = input.value.slice(0, decimalIndex + 4);
			}
		}

		if (parseInt(input.value) > maxValue) {
			input.value = input.value.slice(0, 4);
			window.alert(` Maximum allowed value is ${maxValue}`);
		}
	});
});

celciusInput.addEventListener("input", celcuisConverter);
fahrenheitInput.addEventListener("input", fahrenheitConverter);
kelvinInput.addEventListener("input", kelvinConverter);

function roundNumber(number) {
	return Number(number.toFixed(2));
}

function celcuisConverter() {
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = cTemp * (9 / 5) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheitInput.value = roundNumber(fTemp);
	kelvinInput.value = roundNumber(kTemp);
}
function fahrenheitConverter() {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5 / 9);
	let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
	celciusInput.value = roundNumber(cTemp);
	kelvinInput.value = roundNumber(kTemp);
}
function kelvinConverter() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (kTemp - 273.15) * (9 / 5) + 32;
	celciusInput.value = roundNumber(cTemp);
	fahrenheitInput.value = roundNumber(fTemp);
}
