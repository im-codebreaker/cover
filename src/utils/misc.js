function formatTimeDisplay(time) {
  return time < 10 ? `0${time}` : time;
}

function millisecondsToMinutesAndSeconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  return formatTimeDisplay(minutes) + ':' + formatTimeDisplay(seconds);
}

export { millisecondsToMinutesAndSeconds };
