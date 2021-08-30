const times = document.getElementById("times");

for (let i = 0; i < 30; i++) {
	const d = document.createElement("div");
	d.className = "t";

	d.textContent = `${i}`;

	times.appendChild(d);
}

const e1 = document.getElementById("E1");
const e2 = document.getElementById("E2");

for (let i = 0; i < 30; i++) {
	const d = document.createElement("div");
	const d2 = document.createElement("div");

	d.className = "e";
	d2.className = "e";

	d.textContent = `${i + 1000}`;
	d2.textContent = `${i + 2000}`;

	e1.appendChild(d);
	e2.appendChild(d2);
}

const main = document.getElementById("main");

main.scrollTop = "100";
