


AFRAME.registerComponent('registerevents', {


  init: function () {
    var marker = this.el;

    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      console.log('markerFound', markerId);
      var favoritemovie = "Shrek";
      sessionStorage.setItem("favoriteMovie", favoritemovie);
      window.location.href = "smoelenboek.html";
    });

    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });
  }
});
