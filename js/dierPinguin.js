
window.onload=function(){

var receivedGData = sessionStorage.getItem('pinguinOutfit');
const pinguin = 'img/pinguin_preview.png';
const pinguin_phoed = 'img/pinguin_phoed_preview.png';
const pinguin_bhoed = 'img/pinguin_bhoed_preview.png';
const pinguin_stropdas = 'img/pinguin_stropdas_preview.png';
const pinguin_phoed_stropdas = 'img/pinguin_phoed_stropdas_preview.png';
const pinguin_bhoed_stropdas = 'img/pinguin_bhoed_stropdas_preview.png';



var pinguinKledingOnloadDier = () => {

        switch (receivedGData) {

            case "1":
                veranderAfbeelding(pinguin);
                break;

            case "2":
                veranderAfbeelding(pinguin_phoed);
                break;

            case "3":
                veranderAfbeelding(pinguin_bhoed);
                break;

            case "4":
                veranderAfbeelding(pinguin_stropdas);
                break;

            case "5":
                veranderAfbeelding(pinguin_phoed_stropdas);
                break;

            case "6":
                veranderAfbeelding(pinguin_bhoed_stropdas);
                break;

        }


}

function veranderAfbeelding(afbeelding){
  document.getElementById("--js-dier").src = afbeelding;

}


console.log(receivedGData);
pinguinKledingOnloadDier();
}
