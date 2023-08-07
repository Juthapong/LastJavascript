function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"