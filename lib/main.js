
// open/close the profile out menu
function profDrop() {
    var fmenu = document.getElementById("menuDrop");
  
    if (menuState === 0) {
      fmenu.classList.remove("opacity-0", "-translate-y-40");
      fmenu.classList.add("opacity-100", "translate-y-0");
      menuState = 1;
    }
  }
  
  window.addEventListener('mouseup', function(event){
      var fmenu = document.getElementById("menuDrop");
  
      if (event.target != fmenu && event.target.parentNode != fmenu){
      fmenu.classList.remove("opacity-100", "translate-y-0");
      fmenu.classList.add("opacity-0", "-translate-y-40");
      menuState = 0;
      }
  });

  //----------------------------------------------------------------------//

  // open/close mobile menu
function openMob() {
    var mMenu = document.getElementById("mobMenu");
    var mShroud = document.getElementById("mobShroud");
    var cButt = document.getElementById("closButt");
  
      mMenu.classList.remove("-translate-x-full");
      mShroud.classList.remove("hidden", "bg-opacity-0");
      cButt.classList.remove("hidden");
      mMenu.classList.add("translate-x-0");
      mShroud.classList.add("fixed", "bg-opacity-75");
      cButt.classList.add("block");
  
  }
  
  function closeMob() {
    var mMenu = document.getElementById("mobMenu");
    var mShroud = document.getElementById("mobShroud");
    var cButt = document.getElementById("closButt");
  
      mMenu.classList.remove("translate-x-0");
      mShroud.classList.remove("fixed", "bg-opacity-75");
      cButt.classList.remove("fixed");
      mMenu.classList.add("-translate-x-full");
      mShroud.classList.add("hidden", "bg-opacity-0");
      cButt.classList.add("hidden");
  
  }