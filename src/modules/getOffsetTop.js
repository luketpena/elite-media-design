module.exports = function getOffsetTop( elem ) {
  let targetElem = document.getElementById(elem);
  console.log(targetElem);
  
  if (targetElem) { 
  let offsetTop = 0;
    do {
      if ( !isNaN( targetElem.offsetTop ) )
      {
          offsetTop += targetElem.offsetTop;
      }
    } while( targetElem === targetElem.offsetTop );
    return offsetTop;
  } else {
    return null;
  }
}