const giraffe = 'img/giraffe_preview.png';
const giraffe_phoed = 'img/giraffe_phoed_preview.png';
const giraffe_bhoed = 'img/giraffe_bhoed_preview.png';
const giraffe_stropdas = 'img/giraffe_stropdas_preview.png';
const giraffe_phoed_stropdas = 'img/giraffe_phoed_stropdas_preview.png';
const giraffe_bhoed_stropdas = 'img/giraffe_bhoed_stropdas_preview.png';

var strop = false;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed_stropdas);
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed_stropdas);
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed);
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed);
        break;

        case "stropdas" :
          veranderAfbeelding(giraffe_stropdas);
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
