/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var uitgeklapt = false;
var hamburger = document.getElementById('hamburger');
var navigatie = document.getElementById('nav');

function klik() {

    if (uitgeklapt == false) {
        navigatie.style.transform = "translateY(330px)";
        uitgeklapt == true;
    } else {
        navigatie.style.transform = "translateY(-330px)";
        uitgeklapt == false;
    }
}

hamburger.addEventListener('click', klik);


