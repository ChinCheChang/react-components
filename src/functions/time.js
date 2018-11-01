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

export const startTime = (clockList) => {
  var today = new Date();
  var clockString = time2String(today);
  clockList.map((value,index) => {
    document.getElementById(value).innerHTML = clockString;
  })
  setTimeout(() => {startTime(clockList)}, 500)
}
