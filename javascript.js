let cookietotal  = 0 ;
var cookiepower = 1;
var cookiesecond = 0;

let audio = new Audio("POP.mp3");
var count = document.getElementById("count");

function myFunction() {
    cookietotal += cookiepower;
    document.querySelector("#count span").innerHTML = cookietotal;
}


    function myUpgrade(){
        
    if(cookietotal >= 30 ){
        cookiepower += 2;
        cookietotal -= 30;

        document.querySelector("#ppc").innerHTML = cookiepower;
        document.querySelector("#count span").innerHTML = cookietotal;
        
        console.log("bruh")
    }
    }
    function myUpgrade2(){
        if(cookietotal >= 500) {
            cookiepower += 10;
            cookietotal -= 500;
            document.querySelector("#ppc").innerHTML = cookiepower;
        document.querySelector("#count span").innerHTML = cookietotal;
        }
        }
    function myUpgrade3(){
        if(cookietotal >= 1000) {
            cookiepower += 30;
            cookietotal -= 1000;
            document.querySelector("#ppc").innerHTML = cookiepower;
        document.querySelector("#count span").innerHTML = cookietotal;
        }
        }
    function myUpgrade4(){
        if(cookietotal >= 100000) {
            cookiepower += 1000;
            cookietotal -= 100000;
            document.querySelector("#ppc").innerHTML = cookiepower;
        document.querySelector("#count span").innerHTML = cookietotal;
        }
        }
        
function myBooster(){
   
    if(cookietotal>= 100){
        cookiesecond += 1;
        cookietotal -= 100;
    }
    
    document.querySelector("#ppc").innerHTML = cookiepower;
    document.querySelector("#count span").innerHTML = cookietotal;
}

        setInterval(function() {
        
           cookietotal += cookiesecond;
          

           document.querySelector("#count span").innerHTML = cookietotal;
            document.querySelector("#pps").innerHTML = cookiesecond;
          }, 1000);


  document.getElementById("cat").addEventListener("mousedown",() => {
    document.getElementById("cat").src = 'images/popcatn.png';
    var myAudio1 = document.getElementById("audio1");

    audio.play(); 

   
  })
  
  document.getElementById("cat").addEventListener("mouseup",() => {
    document.getElementById("cat").src = 'images/popcato.png'; 
    
  })

 

  
 