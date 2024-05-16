const favicon = document.getElementById("favicon");

document.getElementById("inputForm").addEventListener("submit", (e) => {
	e.preventDefault();
	let hours = document.querySelector(".hours").value;
	let minutes = document.querySelector(".minutes").value;
	let seconds = document.querySelector(".seconds").value;

	let duration = {
		hours: parseInt(hours),
		minutes: parseInt(minutes),
		seconds: parseInt(seconds),
	};

	startTimer(duration);
});

function startTimer(duration) {
	favicon.setAttribute("href", "images/focus.ico");
	let timerDisplay = document.querySelectorAll(".timer");
	let timeLeft = duration;

	let intervalID = setInterval(() => {
		timerDisplay.forEach((timer) => {
			timer.textContent = `Focus! ${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
		});

		if (timeLeft.seconds === 0 && timeLeft.minutes === 0 && timeLeft.hours === 0) {
			clearInterval(intervalID);
			timerDisplay.forEach((timer) => {
				timer.textContent = "Time's up!";
			});
			favicon.setAttribute("href", "/images/timeup.ico");
		} else {
			timeLeft.seconds--;
			if (timeLeft.seconds === 0) {
				if (timeLeft.minutes > 0) {
					timeLeft.minutes--;
					timeLeft.seconds += 60;
				}
			}
			if (timeLeft.minutes === 0) {
				if (timeLeft.hours > 0) {
					timeLeft.hours--;
					timeLeft.minutes += 60;
				}
			}
		}
	}, 1000);
}
