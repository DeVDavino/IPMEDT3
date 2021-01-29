
window.onload=function(){

var receivedGData = sessionStorage.getItem('giraffeOutfit');
const giraffe = 'img/giraffe_preview.png';
const giraffe_phoed = 'img/giraffe_phoed_preview.png';
const giraffe_bhoed = 'img/giraffe_bhoed_preview.png';
const giraffe_stropdas = 'img/giraffe_stropdas_preview.png';
const giraffe_phoed_stropdas = 'img/giraffe_phoed_stropdas_preview.png';
const giraffe_bhoed_stropdas = 'img/giraffe_bhoed_stropdas_preview.png';



var giraffeKledingOnloadDier = () => {

        switch (receivedGData) {

            case "1":
                veranderAfbeelding(giraffe);
                break;

            case "2":
                veranderAfbeelding(giraffe_phoed);
                break;

            case "3":
                veranderAfbeelding(giraffe_bhoed);
                break;

            case "4":
                veranderAfbeelding(giraffe_stropdas);
                break;

            case "5":
                veranderAfbeelding(giraffe_phoed_stropdas);
                break;

            case "6":
                veranderAfbeelding(giraffe_bhoed_stropdas);
                break;

        }


}

function veranderAfbeelding(afbeelding){
  document.getElementById("--js-dier").src = afbeelding;

}


console.log(receivedGData);
giraffeKledingOnloadDier();
}
