const giraffe = 'img/giraffe_preview.png';
const giraffe_phoed = 'img/giraffe_phoed_preview.png';
const giraffe_bhoed = 'img/giraffe_bhoed_preview.png';
const giraffe_stropdas = 'img/giraffe_stropdas_preview.png';
const giraffe_phoed_stropdas = 'img/giraffe_phoed_stropdas_preview.png';
const giraffe_bhoed_stropdas = 'img/giraffe_bhoed_stropdas_preview.png';


var strop = false;

var giraffeKleding = 1;

function veranderKleding(kleding){
  console.log(strop);
  if (strop == true) {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed_stropdas);
        var giraffeKleding = 5;
        sessionStorage.setItem('giraffeOutfit', giraffeKleding);
        console.log(sessionStorage.getItem('giraffeOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed_stropdas);
        var giraffeKleding = 6;
        sessionStorage.setItem('giraffeOutfit', giraffeKleding);
        console.log(sessionStorage.getItem('giraffeOutfit'));
        break;
    }
  } else {

    switch(kleding){
      case "phoed" :
        veranderAfbeelding(giraffe_phoed);
        var giraffeKleding = 2;
        sessionStorage.setItem('giraffeOutfit', giraffeKleding);
        console.log(sessionStorage.getItem('giraffeOutfit'));
        break;

      case "bhoed" :
        veranderAfbeelding(giraffe_bhoed);
        var giraffeKleding = 3;
        sessionStorage.setItem('giraffeOutfit', giraffeKleding);
        console.log(sessionStorage.getItem('giraffeOutfit'));
        break;

        case "stropdas" :
          veranderAfbeelding(giraffe_stropdas);
          var giraffeKleding = 4;
          sessionStorage.setItem('giraffeOutfit', giraffeKleding);
          console.log(sessionStorage.getItem('giraffeOutfit'));
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
  var giraffeKleding = 1;
  sessionStorage.setItem('giraffeOutfit', giraffeKleding);
  console.log(sessionStorage.getItem('giraffeOutfit'));
}
