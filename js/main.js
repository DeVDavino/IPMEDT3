window.onload = function () {
    const scene = document.querySelector('a-scene');
    // Recieved Data
    var receivedPData = sessionStorage.getItem('pinguinOutfit');
    var receivedOData = sessionStorage.getItem('olifantOutfit');
    var receivedGData = sessionStorage.getItem('giraffeOutfit');

    // dynamically create a-entity with according values.
    const giraffe = () => {

        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: -4,
            y: -1.90,
            z: -8
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

        // Chose the right gltf 3D model based on recieved data.
        switch ("5") {

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
    }
    console.log(receivedGData);

    const olifant = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: 4,
            y: -1.90,
            z: -8
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

        switch ("5") {

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
    }
    console.log(receivedOData);

    const pinguin = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: 3,
            y: -1.90,
            z: 3
        });
        model.setAttribute("rotation", {
            x: 0,
            y: 200,
            z: 0
        });
        model.setAttribute("animation-mixer", "loop:repeat");
        model.setAttribute("scale", {
            x: .3,
            y: .3,
            z: .3
        });

        switch ("5") {

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
    }
    console.log(receivedPData);

    giraffe();
    olifant();
    pinguin();
    console.log(sessionStorage.getItem('giraffeOutfit'));
    console.log(sessionStorage.getItem('olifantOutfit'));
    console.log(sessionStorage.getItem('pinguinOutfit'));

};