window.onload = function () {
    const scene = document.querySelector('a-scene');
    var blendermodel = document.getElementById('rafi')
    var savedData = sessionStorage.getItem('data');
    console.log(savedData);

    // dynamically create a-entity with according values.
    let giraffe = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: -4,
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
        model.setAttribute("gltf-model", "#rafi")
        scene.appendChild(model);
    }

    let olifant = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: -4,
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
        model.setAttribute("gltf-model", "#")
        scene.appendChild(model);
    }

    let penguin = () => {
        const model = document.createElement("a-entity");
        model.setAttribute("position", {
            x: -4,
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
        model.setAttribute("gltf-model", "#")
        scene.appendChild(model);
    }

    if (savedData == 1) {
        console.log('triggerd')
        giraffe();
    }
};