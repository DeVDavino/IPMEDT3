const pinguin = 'img/pinguin_preview.png';
const pinguin_phoed = 'img/pinguin_phoed_preview.png';
const pinguin_bhoed = 'img/pinguin_bhoed_preview.png';
const pinguin_stropdas = 'img/pinguin_stropdas_preview.png';
const pinguin_phoed_stropdas = 'img/pinguin_phoed_stropdas_preview.png';
const pinguin_bhoed_stropdas = 'img/pinguin_bhoed_stropdas_preview.png';

var strop = false;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed_stropdas);
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed_stropdas);
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(pinguin_phoed);
        break;

      case "bhoed" :
        veranderAfbeelding(pinguin_bhoed);
        break;

        case "stropdas" :
          veranderAfbeelding(pinguin_stropdas);
          strop = true;
          break;
    }
  }
};

function veranderAfbeelding(afbeelding){
  document.getElementById("--js-dier").src = afbeelding;
}

function resetKleding(giraffe){
  document.getElementById("--js-dier").src = giraffe;
  strop = false;
}
