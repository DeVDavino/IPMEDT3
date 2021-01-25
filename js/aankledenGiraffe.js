const giraffe = 'img/giraffe_preview.png';
const giraffe_phoed = 'img/giraffe_phoed_preview.png';
const giraffe_bhoed = 'img/giraffe_bhoed_preview.png';
const giraffe_stropdas = 'img/giraffe_stropdas_preview.png';
const giraffe_phoed_stropdas = 'img/giraffe_phoed_stropdas_preview.png';
const giraffe_bhoed_stropdas = 'img/giraffe_bhoed_stropdas_preview.png';

var giraffeData = 0;
var strop = false;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed_stropdas);
        sessionStorage.setItem('giraffeData', 5);
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed_stropdas);
        sessionStorage.setItem('giraffeData', 6);
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed);
        sessionStorage.setItem('giraffeData', 2);
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed);
        sessionStorage.setItem('giraffeData', 3);
        break;

        case "stropdas" :
          veranderAfbeelding(giraffe_stropdas);
          sessionStorage.setItem('giraffeData', 4);
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
  sessionStorage.setItem('giraffeData', 1);
  strop = false;
}
