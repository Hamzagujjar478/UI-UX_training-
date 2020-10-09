// function navFunction() {
//   const element = document.querySelector('.mynav');
//   const style = getComputedStyle(element);
//   const display = style.display
//   if(display === 'none'){
//     document.getElementById("mynav").style.display = 'block';
//   }
//   else{
//     document.getElementById("mynav").style.display = 'none';
//   }

// }

// function hideNav(){
//   document.getElementById("mynav").style.display = 'none';
// }

function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
