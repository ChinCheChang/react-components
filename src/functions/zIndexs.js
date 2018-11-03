export const ZIndehandler = (zIndex) => {
  var layers = 1;
  zIndex.filter((currentValue, index) => {
    return document.getElementsByClassName(currentValue).length !== 0;
  }).map((value, index) => {
    let elements = document.getElementsByClassName(value);
    let elemantsArray = [];
    for (var i=0; i<elements.length; i++) {
      elemantsArray.push(elements[i]);
    }
    return elemantsArray;
  }).forEach((value, index) => {
    value.forEach((value, index) => {
      layers++
      value.style.zIndex = layers;
    })
  })
}
