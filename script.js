about = document.getElementById("abt-content");
nav = document.getElementById("navbar");
contacont = document.getElementById("contact-content");
upcont = document.getElementById("update-content");
abt = document.getElementById("abt-me");
cont = document.getElementById("contact");
upd = document.getElementById("updates");

msElem = document.getElementById("abtmusic-list");
amusic = document.getElementById("abtmusic");

elliotly = document.getElementById("elliotly");
happyfits = document.getElementById("happyfits");
blackdresses = document.getElementById("blackdresses");
jstauber = document.getElementById("jstauber");
roar = document.getElementById("roar");



gmElem = document.getElementById("abtgames-list");
agame = document.getElementById("abtgames");

hbElem = document.getElementById("abthobbs-list");
ahobbs = document.getElementById("abthobbs");






abt.addEventListener("click", function() {

    if (nav.classList.contains("if-invis")) {

        if (contacont.classList.contains("is-visible")) {

            contacont.classList.remove("is-visible");
            cont.classList.remove("selected");
            if (upcont.classList.contains("is-visible")) {

                upcont.classList.remove("is-visible");
                upd.classList.remove("selected");
                about.classList.toggle("is-visible");
                abt.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                about.classList.toggle("is-visible");
                abt.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };


            };
        } else {
            if (upcont.classList.contains("is-visible")) {

                upcont.classList.remove("is-visible");
                upd.classList.remove("selected");
                about.classList.toggle("is-visible");
                abt.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                about.classList.toggle("is-visible");
                abt.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };

            };


        };

    } else {

        nav.classList.toggle("if-invis");
        about.classList.toggle("is-visible");
        abt.classList.toggle("selected");
    };

});

cont.addEventListener("click", function() {

    if (nav.classList.contains("if-invis")) {

        if (about.classList.contains("is-visible")) {

            about.classList.remove("is-visible");
            abt.classList.remove("selected");
            if (upcont.classList.contains("is-visible")) {

                upcont.classList.remove("is-visible");
                upd.classList.remove("selected");
                contacont.classList.toggle("is-visible");
                cont.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                contacont.classList.toggle("is-visible");
                cont.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };


            };
        } else {
            if (upcont.classList.contains("is-visible")) {

                upd.classList.remove("selected");
                upcont.classList.remove("is-visible");
                contacont.classList.toggle("is-visible");
                cont.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                contacont.classList.toggle("is-visible");
                cont.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };

            };


        };

    } else {

        nav.classList.toggle("if-invis");
        contacont.classList.toggle("is-visible");
        cont.classList.toggle("selected");
    };


});

upd.addEventListener("click", function() {

    if (nav.classList.contains("if-invis")) {

        if (about.classList.contains("is-visible")) {

            about.classList.remove("is-visible");
            abt.classList.remove("selected");
            if (contacont.classList.contains("is-visible")) {

                contacont.classList.remove("is-visible");
                cont.classList.remove("selected");
                upcont.classList.toggle("is-visible");
                upd.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                upcont.classList.toggle("is-visible");
                upd.classList.toggle("selected");
                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };


            };
        } else {
            if (contacont.classList.contains("is-visible")) {

                contacont.classList.remove("is-visible");
                cont.classList.remove("selected");
                upcont.classList.toggle("is-visible");
                upd.classList.toggle("selected");

                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };
            } else {
                upcont.classList.toggle("is-visible");
                upd.classList.toggle("selected");

                if (upcont.classList.contains("is-visible") == false && contacont.classList.contains("is-visible") == false && about.classList.contains("is-visible") == false) {
                    nav.classList.toggle("if-invis");
                };

            };


        };

    } else {

        nav.classList.toggle("if-invis");
        upcont.classList.toggle("is-visible");
        upd.classList.toggle("selected");
    };


});

var delay = function(elem, callback) {
    var timeout = null;
    elem.onmouseover = function() {
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(callback, 300);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};

var arrnum1 = 0;
var arrnum2 = 0;
var arrnum3 = 0;

amusic.addEventListener("mouseenter", function() {
    ahobbs.innerHTML = "<i>My hobbies include</i>";
    ahobbs.style.backgroundColor = "";
    agame.innerHTML = "<i>My favourite games are</i>";
    agame.style.backgroundColor = "";
    console.log("onmouseover");
    const colours = ['#FFC5CD', '#EDD4AB', '#E4BAF1', '#95D8DC'];
    const music = (msElem.getAttribute("data-music")).split(",");
    amusic.innerHTML = music[arrnum1];

    switch (arrnum1) {
        case 1:
            console.log("happyfits");
            happyfits.classList.add("visible");
            blackdresses.classList.remove("visible");
            jstauber.classList.remove("visible");
            roar.classList.remove("visible");
            elliotly.classList.remove("visible");

            break;
        case 2:
            console.log("blck");
            blackdresses.classList.add("visible");
            jstauber.classList.remove("visible");
            roar.classList.remove("visible");
            elliotly.classList.remove("visible");
            happyfits.classList.remove("visible");
            break;
        case 3:
            console.log("jstaub");
            jstauber.classList.add("visible");
            blackdresses.classList.remove("visible");
            happyfits.classList.remove("visible");
            roar.classList.remove("visible");
            elliotly.classList.remove("visible");
            break;
        case 4:
            console.log("roar");
            roar.classList.add("visible");
            blackdresses.classList.remove("visible");
            jstauber.classList.remove("visible");
            happyfits.classList.remove("visible");
            elliotly.classList.remove("visible");
            break;
        case 0:
            console.log("elliotly");
            elliotly.classList.add("visible");
            blackdresses.classList.remove("visible");
            jstauber.classList.remove("visible");
            roar.classList.remove("visible");
            happyfits.classList.remove("visible");
            break;
        default:
            break;
    }
    if (arrnum1 === 4) {
        arrnum1 = 0;
    } else { arrnum1++; };
    amusic.style.backgroundColor = colours[arrnum1];


});
ahobbs.addEventListener("mouseenter", function() {

    amusic.innerHTML = "<i>My favourite music artists include</i>";
    amusic.style.backgroundColor = "";
    elliotly.classList.remove("visible");
    blackdresses.classList.remove("visible");
    jstauber.classList.remove("visible");
    roar.classList.remove("visible");
    happyfits.classList.remove("visible");
    agame.innerHTML = "<i>My favourite games are</i>";
    agame.style.backgroundColor = "";

    console.log("onmouseover");
    const colours = ['#FFC5CD', '#EDD4AB', '#E4BAF1', '#95D8DC'];
    const hobbs = (hbElem.getAttribute("data-hobbs")).split(",");
    ahobbs.innerHTML = hobbs[arrnum2];
    if (arrnum2 === 3) {
        arrnum2 = 0;
    } else { arrnum2++; };
    ahobbs.style.backgroundColor = colours[arrnum2];
});
agame.addEventListener("mouseenter", function() {
    amusic.innerHTML = "<i>My favourite music artists include</i>";
    amusic.style.backgroundColor = "";
    elliotly.classList.remove("visible");
    blackdresses.classList.remove("visible");
    jstauber.classList.remove("visible");
    roar.classList.remove("visible");
    happyfits.classList.remove("visible");

    ahobbs.innerHTML = "<i>My hobbies include</i>";
    ahobbs.style.backgroundColor = "";

    console.log("onmouseover");
    const colours = ['#FFC5CD', '#EDD4AB', '#E4BAF1', '#95D8DC'];
    const games = (gmElem.getAttribute("data-games")).split(",");
    agame.innerHTML = games[arrnum3];
    if (arrnum3 === 3) {
        arrnum3 = 0;
    } else { arrnum3++; };
    agame.style.backgroundColor = colours[arrnum3];
});




// canvas = document.getElementById("backdrop");
// ctx = canvas.getContext("2d");



// timeout = null;


// abt.onmouseover = function() {

//     timeout = setTimeout(function() {

//         canvas = document.getElementById("backdrop");
//         ctx = canvas.getContext("2d");
//         fromLeft = abt.getBoundingClientRect().left;

//         canvas.style.width = String(abt.offsetWidth + "px");


//         canvas.style.height = String(window.innerHeight + "px");
//         canvas.style.left = String(fromLeft + "px");

//     }, 500)


// };


// abt.onmouseout = function() {
//     clearTimeout(timeout);
//     canvas = document.getElementById("backdrop");
//     ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     canvas.style.width = "0px";
//     canvas.style.height = "0px";
//     canvas.style.top = "0px";


// };