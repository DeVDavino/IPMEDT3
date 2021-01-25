window.onload = function () {
    const scene = document.querySelector('a-scene');
    // Recieved Data
    var recievedPenguinData = sessionStorage.getItem('');
    var recievedOlifantData = sessionStorage.getItem('');
    var recviedGiraffeData = sessionStorage.getItem('');

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
            y: 90,
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

            case "0":
                model.setAttribute("gltf-model", "#rafrafwalking")
                break;

            case "1":
                model.setAttribute("gltf-model", "#rafrafwalking_phoed")
                break;

            case "2":
                model.setAttribute("gltf-model", "#rafrafwalking_bhoed")
                break;

            case "3":
                model.setAttribute("gltf-model", "#rafrafwalking_phoed_stropdas")
                break;

            case "4":
                model.setAttribute("gltf-model", "#rafrafwalking_bhoed_stropdas")
                break;

            case "5":
                model.setAttribute("gltf-model", "#rafrafwalking_stropdas")
                break;

        }

        scene.appendChild(model);
    }

    const olifant = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: 4,
            y: -1.99,
            z: -8
        });
        model.setAttribute("rotation", {
            x: 0,
            y: 90,
            z: 0
        });
        model.setAttribute("animation-mixer", "loop:repeat");
        model.setAttribute("scale", {
            x: 0.4,
            y: 0.4,
            z: 0.4
        });

        switch ("5") {

            case "0":
                model.setAttribute("gltf-model", "#olifant")
                break;

            case "1":
                model.setAttribute("gltf-model", "#olifant_phoed")
                break;

            case "2":
                model.setAttribute("gltf-model", "#olifant_bhoed")
                break;

            case "3":
                model.setAttribute("gltf-model", "#olifant_phoed_stropdas")
                break;

            case "4":
                model.setAttribute("gltf-model", "#olifant_bhoed_stropdas")
                break;

            case "5":
                model.setAttribute("gltf-model", "#olifant_stropdas")
                break;

        }

        scene.appendChild(model);
    }

    const pinguin = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: 4,
            y: -1.99,
            z: 8
        });
        model.setAttribute("rotation", {
            x: 0,
            y: 90,
            z: 0
        });
        model.setAttribute("animation-mixer", "loop:repeat");
        model.setAttribute("scale", {
            x: 0.4,
            y: 0.4,
            z: 0.4
        });
        model.setAttribute("gltf-model", "#pinguin")

        switch ("5") {

            case "0":
                model.setAttribute("gltf-model", "#pinguin")
                break;

            case "1":
                model.setAttribute("gltf-model", "#pinguin_phoed")
                break;

            case "2":
                model.setAttribute("gltf-model", "#pinguin_bhoed")
                break;

            case "3":
                model.setAttribute("gltf-model", "#pinguin_phoed_stropdas")
                break;

            case "4":
                model.setAttribute("gltf-model", "#pinguin_bhoed_stropdas")
                break;

            case "5":
                model.setAttribute("gltf-model", "#pinguin_stropdas")
                break;

        }

        scene.appendChild(model);
    }

    giraffe();
    olifant();
    pinguin();

};