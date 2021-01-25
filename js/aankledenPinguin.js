const pinguin = 'img/pinguin_preview.png';
const pinguin_phoed = 'img/pinguin_phoed_preview.png';
const pinguin_bhoed = 'img/pinguin_bhoed_preview.png';
const pinguin_stropdas = 'img/pinguin_stropdas_preview.png';
const pinguin_phoed_stropdas = 'img/pinguin_phoed_stropdas_preview.png';
const pinguin_bhoed_stropdas = 'img/pinguin_bhoed_stropdas_preview.png';


var strop = false;

var pinguinKleding = 1;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed_stropdas);
        var pinguinKleding = 5;
        sessionStorage.setItem('pinguinOutfit', pinguinKleding);
        console.log(sessionStorage.getItem('pinguinOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed_stropdas);
        var pinguinKleding = 6;
        sessionStorage.setItem('pinguinOutfit', pinguinKleding);
        console.log(sessionStorage.getItem('pinguinOutfit'));
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed);
        var pinguinKleding = 2;
        sessionStorage.setItem('pinguinOutfit', pinguinKleding);
        console.log(sessionStorage.getItem('pinguinOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed);
        var pinguinKleding = 3;
        sessionStorage.setItem('pinguinOutfit', pinguinKleding);
        console.log(sessionStorage.getItem('pinguinOutfit'));
        break;

        case "stropdas" :
          veranderAfbeelding(pinguin_stropdas);
          var pinguinKleding = 4;
          sessionStorage.setItem('pinguinOutfit', pinguinKleding);
          console.log(sessionStorage.getItem('pinguinOutfit'));
          strop = true;
          break;
    }
  }
};

function veranderAfbeelding(afbeelding){
  document.getElementById("--js-dier").src = afbeelding;
}

function resetKleding(giraffe){
  document.getElementById("--js-dier").src = pinguin;
  strop = false;
  var pinguinKleding = 1;
  sessionStorage.setItem('pinguinOutfit', pinguinKleding);
  console.log(sessionStorage.getItem('pinguinOutfit'));
}
