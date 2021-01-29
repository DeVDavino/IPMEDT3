
window.onload=function(){

var receivedOData = sessionStorage.getItem('olifantOutfit');
const olifant = 'img/olifant_preview.png';
const olifant_phoed = 'img/olifant_phoed_preview.png';
const olifant_bhoed = 'img/olifant_bhoed_preview.png';
const olifant_stropdas = 'img/olifant_stropdas_preview.png';
const olifant_phoed_stropdas = 'img/olifant_phoed_stropdas_preview.png';
const olifant_bhoed_stropdas = 'img/olifant_bhoed_stropdas_preview.png';



var olifantKledingOnloadDier = () => {

        switch (receivedOData) {

            case "1":
                veranderAfbeelding(olifant);
                break;

            case "2":
                veranderAfbeelding(olifant_phoed);
                break;

            case "3":
                veranderAfbeelding(olifant_bhoed);
                break;

            case "4":
                veranderAfbeelding(olifant_stropdas);
                break;

            case "5":
                veranderAfbeelding(olifant_phoed_stropdas);
                break;

            case "6":
                veranderAfbeelding(olifant_bhoed_stropdas);
                break;

        }


}

function veranderAfbeelding(afbeelding){
    document.getElementById("--js-dier").src = afbeelding;

}


olifantKledingOnloadDier();
}
