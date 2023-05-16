function snow() {
    var flake = document.createElement('div');
    flake.innerHTML = '❅';
    flake.style.cssText = 'position:absolute;color:#fff;';
    var documentHieght = window.innerHeight;
    var documentWidth = window.innerWidth;
    var millisec =50;
    setInterval(function() { 
        var startLeft = Math.random() * documentWidth;
        var endLeft = Math.random() * documentWidth;
        var flakeSize = 10 + 20 * Math.random();
        var durationTime = 5000 + 5000 * Math.random();
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.2 + 0.2 * Math.random();
        var cloneFlake = flake.cloneNode(true);
        cloneFlake.style.cssText += `
                left: ${startLeft}px;
                opacity: ${startOpacity};
                font-size:${flakeSize}px;
                top:-25px;
                    transition:${durationTime}ms;`;

        document.body.appendChild(cloneFlake);
        setTimeout(function() {
            cloneFlake.style.cssText += `
                        left: ${endLeft}px;
                        top:${documentHieght}px;
                        opacity:${endOpacity};`;
            setTimeout(function() {
                cloneFlake.remove();
            }, durationTime);
        }, 0);
    }, millisec);
}
snow();

function Onclick(){
    var Con_1=document.getElementById("con_1");
    var Con_2=document.getElementById("con_2");
    Con_1.style.transform="scale(0, 0) rotate(360deg)";
    Con_2.style.transform="scale(0, 0) rotate(360deg)";
    setTimeout(function(){
        window.location.replace("./index.html");
    }, 500); 
}

function Back(){
    var Con_3=document.getElementById("con_3");
    Con_3.style.opacity="0.5";
    Con_3.style.transition="0.8s";
    setTimeout(function(){
        window.location.replace("./infor.html");
    }, 500); 
}