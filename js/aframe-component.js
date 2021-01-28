var sky = document.querySelector('a-sky')
var text = document.getElementById('js--text')
var check = 0;  
AFRAME.registerComponent("reloader", {
    init: function(){

        const BASE_URL = "http://worldtimeapi.org/api/timezone/Europe/Amsterdam/";
        var obj;

        this.newTime = function(){
            fetch(BASE_URL)
                .then(response => response.json())
                .then(data => obj = data.dst)
                .then(
                    function(obj){
                        if(obj == false){
                            sky.setAttribute("color", "#99faff");
                        }
                        else if(obj == true){
                            sky.setAttribute("color", "black");
                            text.setAttribute("color", "white");
                        } 
                    }
                )
        }
        this.el.addEventListener("click", this.newTime);
        
    },
    update: function(){
        console.log("ik ben geupdate");
    },
    tick: function(){},
    remove: function(){},
    pause: function(){},
    play: function(){},
});