const pinguin = 'img/pinguin_preview.png';
const pinguin_phoed = 'img/pinguin_phoed_preview.png';
const pinguin_bhoed = 'img/pinguin_bhoed_preview.png';
const pinguin_stropdas = 'img/pinguin_stropdas_preview.png';
const pinguin_phoed_stropdas = 'img/pinguin_phoed_stropdas_preview.png';
const pinguin_bhoed_stropdas = 'img/pinguin_bhoed_stropdas_preview.png';

var pinguinData = 0;
var strop = false;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed_stropdas);
        sessionStorage.setItem('pinguinData', 5);
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed_stropdas);
        sessionStorage.setItem('pinguinData', 6);
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed);
        sessionStorage.setItem('pinguinData', 2);
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed);
        sessionStorage.setItem('pinguinData', 3);
        break;

        case "stropdas" :
          veranderAfbeelding(pinguin_stropdas);
          sessionStorage.setItem('pinguinData', 4);
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
  sessionStorage.setItem('pinguinData', 1);
  strop = false;
}
