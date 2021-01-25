const olifant = 'img/olifant_preview.png';
const olifant_phoed = 'img/olifant_phoed_preview.png';
const olifant_bhoed = 'img/olifant_bhoed_preview.png';
const olifant_stropdas = 'img/olifant_stropdas_preview.png';
const olifant_phoed_stropdas = 'img/olifant_phoed_stropdas_preview.png';
const olifant_bhoed_stropdas = 'img/olifant_bhoed_stropdas_preview.png';

var olifantData = 0;
var strop = false;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(olifant_phoed_stropdas);
        sessionStorage.setItem('olifantData', 5);
        break;

      case "bhoed" :
        veranderAfbeelding(olifant_bhoed_stropdas);
        sessionStorage.setItem('olifantData', 6);
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(olifant_phoed);
        sessionStorage.setItem('olifantData', 2);
        break;

      case "bhoed" :
        veranderAfbeelding(olifant_bhoed);
        sessionStorage.setItem('olifantData', 3);
        break;

        case "stropdas" :
          veranderAfbeelding(olifant_stropdas);
          sessionStorage.setItem('olifantData', 4);
          strop = true;
          break;
    }
  }
};

function veranderAfbeelding(afbeelding){
  document.getElementById("--js-dier").src = afbeelding;
}

function resetKleding(giraffe){
  document.getElementById("--js-dier").src = olifant;
  sessionStorage.setItem('olifantData', 1);
  strop = false;
}
