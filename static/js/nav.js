const desktopView = window.matchMedia("(max-width: 1320px)")
const mobileView = window.matchMedia("(max-width: 450px)")

function showMenu(){
    document.getElementById('sidebar').style.left = '-200px';
    document.body.style.background = 'lightgrey';
    document.getElementById('navBottom').style.border = 'transparent';
}

function hideMenu(){
  document.getElementById('sidebar').style.left = '-2000px';
  document.body.style.background = 'white';
  document.getElementById('navBottom').style.border = '1px solid lightgrey';

}

function showSearch(){
    document.getElementById('searchForm').style.top = '45px';
    document.getElementById('close').style.top = '-3px';
      if (desktopView.matches) { // If media query matches
        document.getElementById('close').style.top = '5px';
      } 
      if (mobileView.matches) { // If media query matches
        document.getElementById('searchForm').style.top = '25px';
      } 
      if (mobileView.matches) { // If media query matches
        document.getElementById('close').style.top = '50px';
      } 
      if (mobileView.matches) { // If media query matches
        document.getElementById('close').style.left = '157px';
      } 
      if (mobileView.matches) { // If media query matches
        document.body.style.background = 'lightgrey';
      } 
      if (mobileView.matches) { // If media query matches
        document.getElementById('navBottom').style.border = '10px solid transparent';
      } 
    

}

function closeSearch(){
  document.getElementById('navBottom').style.border = '1px solid lightgrey';
    document.getElementById('searchForm').style.top = '-448px';
    document.getElementById('close').style.top = '-443px';
    document.body.style.background = 'white';
    
   


}




