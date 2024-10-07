function rotation(identifiant){
var i=identifiant;
var pivot=0;
var r=setInterval(function(){
if(i==1){pivot="face"+identifiant;}
if(i==2){pivot="profiledroit"+identifiant;}
if(i==3){pivot="dos"+identifiant;}
if(i==4){pivot="profilegauche"+identifiant;}
document.getElementById(pivot).style.display="none";
i++;
if(i>4){i=1;}
if(i==1){pivot="face"+identifiant;}
if(i==2){pivot="profiledroit"+identifiant;}
if(i==3){pivot="dos"+identifiant;}
if(i==4){pivot="profilegauche"+identifiant;}
document.getElementById(pivot).style.display="inline";
},1500);};