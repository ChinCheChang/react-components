export const time2String = (today) => {
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s;
}

export const checkTime = (i) => {
    if (i < 10) {i = "0" + i};
    return i;
}

export const startTime = (onTimeChange) => {
  var clock = document.getElementById('clock');
  var today = new Date();
  onTimeChange(today);
  clock.innerHTML = time2String(today);
  setTimeout(() => startTime(onTimeChange), 500)
}
