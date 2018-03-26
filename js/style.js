function navbar(){
	let nav = document.querySelector(".nav ul");
	nav.classList.toggle("responsive");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropDown() {
    document.getElementById("lang").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("lang");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showtrendDropDown() {
    document.getElementById("trend").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("trend");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

function myMap() {
  var myCenter = new google.maps.LatLng(40.6529731,-73.9461878);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5, disableDefaultUI: true};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}