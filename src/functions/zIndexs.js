export const ZIndehandler = (zIndex) => {
  zIndex.map( (currentValue, index) => {
    var element = document.getElementById(currentValue);
    if (element) {
      element.style.zIndex = index + 2;
    }
  }
)}
