/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var likeIsAan = false;
var image = document.getElementById('likebutton');
var likeAan = './images/hart-grijs.svg';
var likeUit = './images/hart-orangje.svg';
var beoordelingen = document.getElementById('likes');

function klik() {
    if (likeIsAan == false) {
        image.src = likeAan;
        likeIsAan = true;
        beoordelingen.textContent++;

    } else {
        image.src = likeUit;
        likeIsAan = false;
        beoordelingen.textContent--;
    }

}

image.addEventListener('click', klik);


//lamp opdracht jaar 1 inleiding programmeren
