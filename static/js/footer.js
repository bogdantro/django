function closeLtr(){
    document.getElementById('mainWrapper').style.left = '2000px';
    document.getElementById('openLtrBtn').style.left = '1865px';
    if (desktopView.matches) { // If media query matches
        document.getElementById('openLtrBtn').style.left = '1225px';
      }
      if (mobileView.matches) { // If media query matches
        document.getElementById('openLtrBtn').style.left = '336px';
      }
}
function openLtr(){
    document.getElementById('mainWrapper').style.left = '1090px';
    document.getElementById('openLtrBtn').style.left = '2090px';
    if (desktopView.matches) { // If media query matches
        document.getElementById('mainWrapper').style.left = '730px';
      }
      if (mobileView.matches) { // If media query matches
        document.getElementById('mainWrapper').style.left = '30px';
        document.getElementById('openLtrBtn').style.left = '436px';
      }
}


