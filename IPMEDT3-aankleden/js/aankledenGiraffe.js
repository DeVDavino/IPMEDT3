const giraffe = 'img/giraffe_preview.png';
const giraffe_phoed = 'img/giraffe_phoed_preview.png';
const giraffe_bhoed = 'img/giraffe_bhoed_preview.png';
const giraffe_stropdas = 'img/giraffe_stropdas_preview.png';
const giraffe_phoed_stropdas = 'img/giraffe_phoed_stropdas_preview.png';
const giraffe_bhoed_stropdas = 'img/giraffe_bhoed_stropdas_preview.png';


var strop = false;
var giraffeData = 0;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){ 
      case "phoed" :
        veranderAfbeelding(giraffe_phoed_stropdas);
        var giraffe_phoed_stropdas_global = 1;
        sessionStorage.setItem('giraffeData', giraffe_phoed_stropdas_global);
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
        console.log('updated');
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

console.log(sessionStorage.getItem('giraffeData'));
