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
        window.location.replace("./infor.html");
    }, 500); 
}

function Back(){
    var Con_3=document.getElementById("con_3");
    Con_3.style.opacity="0.5";
    Con_3.style.transition="0.8s";
    setTimeout(function(){
        window.location.replace("./index.html");
    }, 500); 
}



//夜间模式
var brightness;
function cover(brightness) {
    if (typeof(div) == 'undefined') {
        div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
        document.body.appendChild(div);
    } else {
        div.style.display = '';
    }
    div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
var open=document.getElementById('open');
var bott = document.querySelector('.botton');
var body = document.getElementById('body');
var temp = 1;
open.addEventListener('click',function(){
    if(temp==1){
        this.className = 'close';
        temp=0;
        cover(brightness = 0.3);

        bott.style. border= '2px solid  rgb(11, 243, 81)';
    }else{
        this.className = 'open';
        temp=1;
        cover(brightness = 0);
        bott.style. border= '2px solid black';
    }

})