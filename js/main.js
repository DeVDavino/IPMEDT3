window.onload = function () {
    var marker1 = sessionStorage.getItem("marker1");
    var marker2 = sessionStorage.getItem("marker2");
    var marker3 = sessionStorage.getItem("marker3");
    goedeMarker1 = "Giraf";
    goedeMarker2 = "Pinguin";
    goedeMarker3 = "Olifant";

    const places = document.getElementsByClassName("js--place");
    const camera = document.getElementById("js--camera");
    const scene = document.querySelector('a-scene');
    // Recieved Data
    var receivedPData = sessionStorage.getItem('pinguinOutfit');
    var receivedOData = sessionStorage.getItem('olifantOutfit');
    var receivedGData = sessionStorage.getItem('giraffeOutfit');


    console.log(marker2);
    console.log(marker3);

    // dynamically create a-entity with according values.
    const giraffe = () => {
        if (goedeMarker1 == marker1) {


            const model = document.createElement("a-entity");
            model.setAttribute("position", {
                x: -5,
                y: -2.2,
                z: -5
            });
            model.setAttribute("rotation", {
                x: 0,
                y: 110,
                z: 0
            });
            model.setAttribute("animation-mixer", "loop:repeat");
            model.setAttribute("scale", {
                x: 0.4,
                y: 0.4,
                z: 0.4
            });
            model.setAttribute("gltf-model", "#rafrafwalking")

            // Chose the right gltf 3D model based on recieved data.
            switch (receivedGData) {

                case "1":
                    model.setAttribute("gltf-model", "#rafrafwalking")
                    break;

                case "2":
                    model.setAttribute("gltf-model", "#rafrafwalking_phoed")
                    break;

                case "3":
                    model.setAttribute("gltf-model", "#rafrafwalking_bhoed")
                    break;

                case "4":
                    model.setAttribute("gltf-model", "#rafrafwalking_stropdas")
                    break;

                case "5":
                    model.setAttribute("gltf-model", "#rafrafwalking_phoed_stropdas")
                    break;

                case "6":
                    model.setAttribute("gltf-model", "#rafrafwalking_bhoed_stropdas")
                    break;

            }

            scene.appendChild(model);

            console.log(receivedGData);
        } else {
            console.log("geen giraffe")
        }
    }

    const olifant = () => {
        if (goedeMarker3 == marker3) {

            const model = document.createElement("a-entity");
            model.setAttribute("position", {
                x: 6,
                y: -2.1,
                z: -6
            });
            model.setAttribute("rotation", {
                x: 0,
                y: -20,
                z: 0
            });
            model.setAttribute("animation-mixer", "loop:repeat");
            model.setAttribute("scale", {
                x: 0.7,
                y: 0.7,
                z: 0.7
            });
            model.setAttribute("gltf-model", "#olifant")

            switch (receivedOData) {

                case "1":
                    model.setAttribute("gltf-model", "#olifant")
                    break;

                case "2":
                    model.setAttribute("gltf-model", "#olifant_phoed")
                    break;

                case "3":
                    model.setAttribute("gltf-model", "#olifant_bhoed")
                    break;

                case "4":
                    model.setAttribute("gltf-model", "#olifant_stropdas")
                    break;

                case "5":
                    model.setAttribute("gltf-model", "#olifant_phoed_stropdas")
                    break;

                case "6":
                    model.setAttribute("gltf-model", "#olifant_bhoed_stropdas")
                    break;

            }

            scene.appendChild(model);

            console.log(receivedOData);

        } else {
            console.log("geen olifant")
        }
    }

    const pinguin = () => {
        if (goedeMarker2 == marker2) {

            const model = document.createElement("a-entity");
            model.setAttribute("position", {
                x: 0,
                y: -1.90,
                z: 3
            });
            model.setAttribute("rotation", {
                x: 0,
                y: 180,
                z: 0
            });
            model.setAttribute("animation-mixer", "loop:repeat");
            model.setAttribute("scale", {
                x: .3,
                y: .3,
                z: .3
            });
            model.setAttribute("gltf-model", "#pinguin")

            switch (receivedPData) {

                case "1":
                    model.setAttribute("gltf-model", "#pinguin")
                    break;

                case "2":
                    model.setAttribute("gltf-model", "#pinguin_phoed")
                    break;

                case "3":
                    model.setAttribute("gltf-model", "#pinguin_bhoed")
                    break;

                case "4":
                    model.setAttribute("gltf-model", "#pinguin_stropdas")
                    break;

                case "5":
                    model.setAttribute("gltf-model", "#pinguin_phoed_stropdas")
                    break;

                case "6":
                    model.setAttribute("gltf-model", "#pinguin_bhoed_stropdas")
                    break;

            }

            scene.appendChild(model);

            console.log(receivedPData);
        } else {
            console.log("geen pinguin");
        }
    }


    olifant();
    giraffe();
    pinguin();

    console.log(sessionStorage.getItem('giraffeOutfit'));
    console.log(sessionStorage.getItem('olifantOutfit'));
    console.log(sessionStorage.getItem('pinguinOutfit'));

    for (let i = 0; i < places.length; i++) {
        places[i].addEventListener("click", function (evt) {
            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 2000; to: " +
                this.getAttribute("position").x + " 1.6 " + this.getAttribute("position").z;
            camera.setAttribute("animation", att.value);
        });
    }


};
