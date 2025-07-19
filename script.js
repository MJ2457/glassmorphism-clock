function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate angles for each hand with smooth millisecond precision
    const hourAngle = (hours * 30) + (minutes * 0.5) + (seconds * 0.008333); // 30 degrees per hour + minute and second adjustments
    const minuteAngle = (minutes * 6) + (seconds * 0.1); // 6 degrees per minute + second adjustment
    const secondAngle = (seconds * 6) + (milliseconds * 0.006); // 6 degrees per second + millisecond adjustment for smooth movement

    // Apply rotations to clock hands
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('seconds');

    if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;

    // Continue the animation loop
    requestAnimationFrame(updateClock);
}

// Start the clock animation
updateClock();