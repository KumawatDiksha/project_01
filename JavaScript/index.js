// for bottom navigation for mobile

window.onscroll = function () { a(), b() };
var prevScrollpos = window.pageYOffset;
function a() {

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.bottom = "0px";
    } else {
      document.getElementById("navbar").style.bottom = "-13vw";
      // document.getElementById('slider_box').style.display='none'

    }
    prevScrollpos = currentScrollPos;
  }

document.getElementById('search').addEventListener('click', function show() {
  if (screen.width >= 1000) {

    document.getElementById('search').firstElementChild.getElementsByTagName('select')[0].style.display = 'block'
    document.getElementById('search').firstElementChild.getElementsByTagName('select')[1].style.display = 'block'
    document.getElementById('search').firstElementChild.getElementsByTagName('hr')[0].style.display = 'block'
    document.getElementById('search').firstElementChild.getElementsByTagName('hr')[1].style.display = 'block'
    document.getElementById('search').firstElementChild.getElementsByTagName('hr')[2].style.display = 'block'
  }
})
// for stinkey search bar

var searchbar = document.getElementById("search-bar")
var search = document.getElementById("search");
var a1 = document.getElementById("property")
var logo = document.getElementById("logo")
var usericon = document.getElementById("usericon")
var sticky = search.offsetTop;

function b() {
  if (screen.width >= 1000) {

    if (window.pageYOffset >= sticky) {
      document.getElementById('search').firstElementChild.getElementsByTagName('select')[0].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('select')[1].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[0].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[1].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[2].style.display = 'none'
      logo.classList.add("logo2")
      search.classList.add("sticky")
      searchbar.classList.add("searchbar2")
      usericon.classList.add("usericon2")

    } else {
      document.getElementById('search').firstElementChild.getElementsByTagName('select')[0].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('select')[1].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[0].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[1].style.display = 'none'
      document.getElementById('search').firstElementChild.getElementsByTagName('hr')[2].style.display = 'none'
      logo.classList.remove("logo2");
      search.classList.remove("sticky");
      searchbar.classList.remove("searchbar2")
     usericon.classList.remove("usericon2")
    }
  }
}



// for close the submenu list
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menu() {
  document.getElementById("menulist").classList.toggle("show");
  document.getElementById('foot').style.display = 'none';

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(' .account_icon-mobile, .account_icon-laptop')) {
    var dropdowns = document.getElementsByClassName("menulist0");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// for menu open on click 


