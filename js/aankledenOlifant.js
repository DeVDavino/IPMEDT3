const  olifant = 'img/olifant_preview.png';
const olifant_phoed = 'img/olifant_phoed_preview.png';
const olifant_bhoed = 'img/olifant_bhoed_preview.png';
const olifant_stropdas = 'img/olifant_stropdas_preview.png';
const olifant_phoed_stropdas = 'img/olifant_phoed_stropdas_preview.png';
const olifant_bhoed_stropdas = 'img/olifant_bhoed_stropdas_preview.png';


var strop = false;

var olifantKleding = 1;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(olifant_phoed_stropdas);
        var olifantKleding = 5;
        sessionStorage.setItem('olifantOutfit', olifantKleding);
        console.log(sessionStorage.getItem('olifantOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(olifant_bhoed_stropdas);
        var olifantKleding = 6;
        sessionStorage.setItem('olifantOutfit', olifantKleding);
        console.log(sessionStorage.getItem('olifantOutfit'));
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(olifant_phoed);
        var olifantKleding = 2;
        sessionStorage.setItem('olifantOutfit', olifantKleding);
        console.log(sessionStorage.getItem('olifantOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(olifant_bhoed);
        var olifantKleding = 3;
        sessionStorage.setItem('olifantOutfit', olifantKleding);
        console.log(sessionStorage.getItem('olifantOutfit'));
        break;

        case "stropdas" :
          veranderAfbeelding(olifant_stropdas);
          var olifantKleding = 4;
          sessionStorage.setItem('olifantOutfit', olifantKleding);
          console.log(sessionStorage.getItem('olifantOutfit'));
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
  strop = false;
  var olifantKleding = 1;
  sessionStorage.setItem('olifantOutfit', olifantKleding);
  console.log(sessionStorage.getItem('olifantOutfit'));
}
