/* Responsive NavBar */
/* Create the NavBar */

document.open();

document.write(
    '<div class="topnav" id="myTopnav"><a href="index.html" class="active" id="index">Home</a><a href="Portfolio.html" id="Portfolio">Portfolio</a><a href="Contacts.html" id="Contacts">Contacts</a><a href="About.html" id="About">About</a><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></div>'

);

document.close();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";

    } else {
      x.className = "topnav";

    }
}

function setActive(pageName) {
    var Names = pageName.split(".");
    var Name = Names[0];
    document.getElementsByClassName("active")[0].classList.remove('active');
    document.getElementById(Name).classList.add('active');

}

var pageNames = window.location.pathname.split("/");
var pageName = pageNames[pageNames.length - 1];
setActive(pageName)