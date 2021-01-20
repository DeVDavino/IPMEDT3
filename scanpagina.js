const cursor = document.getElementById("js--scene");

let box = document.createElement("a-box");
box.setAttribute("width",1);
box.setAttribute("height",1);
box.setAttribute("depth",1);
box.setAttribute("color","tomato");
box.setAttribute("position","-3 -2 -20");
box.setAttribute("id","js--box2");
cursor.appendChild(box);

// animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true

document.getElementById("js--marker").addEventListener("markerFound",() => {
  box.setAttribute("animation","property: position; to: 1 8 -10; dur: 5000; easing: linear; loop: true");
});
