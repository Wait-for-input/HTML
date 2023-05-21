var bont =document.getElementById('bont');
var botton = document.querySelector('.botton');
var body = document.getElementById('body');
var temp = 1;
bont.addEventListener('click',function(){
    if(temp==1){
        this.className = 'bont_s';
        temp=0;
        botton.style. border= '2px solid  rgb(11, 243, 81)';
        body.style. backgroundColor= 'rgb(7, 7, 29)';
        body.style.color = 'white';
    }else{
        this.className = 'bont';
        temp=1;
        botton.style. border= '2px solid black';
        body.style. backgroundColor= 'white';
        body.style.color = 'black';
    }

})
