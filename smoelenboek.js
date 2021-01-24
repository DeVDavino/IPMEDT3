function myFunction() {
  var marker1 = sessionStorage.getItem("marker1");
  console.log(marker1);
  var marker2 = sessionStorage.getItem("marker2");
  console.log(marker2);
  var marker3 = sessionStorage.getItem("marker3");
  console.log(marker3);
  goedeMarker1="Giraf";
  goedeMarker2="Pinguin";
  goedeMarker3="Olifant";

  var sec1 = document.getElementById("antwoord1");
  var vraagteken1 = document.getElementById("vraagteken1");
  var sec2 = document.getElementById("antwoord2");
  var vraagteken2 = document.getElementById("vraagteken2");
  var sec3 = document.getElementById("antwoord3");
  var vraagteken3 = document.getElementById("vraagteken3");

  sec1.hidden = true;
  vraagteken1.hidden = false;
  sec2.hidden = true;
  vraagteken2.hidden = false;
  sec3.hidden = true;
  vraagteken3.hidden = false;



  if (goedeMarker1==marker1){
    sec1.hidden = false;
    vraagteken1.hidden = true;

  }
  if (goedeMarker2==marker2){
    sec2.hidden = false;
    vraagteken2.hidden = true;

  }
  if (goedeMarker3==marker3){
    sec3.hidden = false;
    vraagteken3.hidden = true;

  }

}
