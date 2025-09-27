var i = 0;
var speed = 50;

var Fname = "Name: Bhavish Agrawal"
var Faddress = "Address: B-885 UPSIDC SITE-C Surajpur Near Tilpta Gol chakkar"
var Fcontact = "Contact: +91 9625024445"
var Femail = "Email: agrawalbhavish07@gmail.com"

let name = document.getElementById("name");
let address = document.getElementById("address");
let contact = document.getElementById("Contact");
let email = document.getElementById("email");

function typeWriter() {
  if (i < Fname.length || i < Faddress.length || i < Fcontact.length || i < Femail.length) {
    name.innerHTML += Fname.charAt(i);
    address.innerHTML += Faddress.charAt(i);
    contact.innerHTML += Fcontact.charAt(i);
    email.innerHTML += Femail.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}