function myFunction() {
  var marker1 = sessionStorage.getItem("marker1");
  console.log(marker1);
  goedeMarker="Tijger";

  var sec1 = document.getElementById("antwoord1");
  var vraagteken1 = document.getElementById("vraagteken1");
  sec1.hidden = true;
  vraagteken1.hidden = false;

  if (goedeMarker==marker1){
    sec1.hidden = false;
    vraagteken1.hidden = true;

  }

}
