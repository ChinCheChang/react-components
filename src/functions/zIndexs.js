export const ZIndehandler = (zIndex) => {
  zIndex.filter((currentValue, index) => {
    return document.getElementById(currentValue);
  })
  .forEach((currentValue, index) => {
    document.getElementById(currentValue).style.zIndex = index + 2;
  })
}
