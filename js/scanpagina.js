
AFRAME.registerComponent('giraf', {


  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      console.log('markerFound', markerId);
      var markerGevonden1 = "Giraf";
      sessionStorage.setItem("marker1", markerGevonden1);
      giraf_geluid.play();





    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });

  }

});


AFRAME.registerComponent('pinguin', {


  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      console.log('markerFound', markerId);
      var markerGevonden2 = "Pinguin";
      sessionStorage.setItem("marker2", markerGevonden2);
      pinguin_geluid.play();


    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });

  }

});

AFRAME.registerComponent('olifant', {


  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      console.log('markerFound', markerId);
      var markerGevonden3 = "Olifant";
      sessionStorage.setItem("marker3", markerGevonden3);
      olifant_geluid.play();


    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });

  }

});
