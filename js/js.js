const fontName = "Fraunces";
const fontTimeOut = 5000; // In milliseconds

// Set up FontFaceObserver
const font = new FontFaceObserver(fontName);
font.load(null, fontTimeOut).then(
	() => {
		console.log("Font is available");
		document.documentElement.className += " fonts-loaded";
	},
	() => {
		console.log("Font is not available");
	}
);

// Interactive contols (sliders that tweak axes)
const interactives = document.querySelectorAll(".interactive-controls");
for (const interactive of interactives) {
	const area = interactive.querySelector(".interactive-controls-text");

	const varset = el => {
		area.style.setProperty("--" + el.name, el.value);
	};

	const sliders = interactive.querySelectorAll("input[type=range]");
	for (const slider of sliders) {
		varset(slider);
		slider.oninput = e => varset(e.target);
	}
}
