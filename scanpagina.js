AFRAME.registerComponent('giraf', {


  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      console.log('markerFound', markerId);
      var markerGevonden1 = "Tijger";
      sessionStorage.setItem("marker1", markerGevonden1);


    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });

  }

});
