const button=document.querySelector('#btn');
const heading=document.querySelector('#heading');
 button.addEventListener('click',function(event){
    heading.style.color='purple';
    heading.style.fontSize='70px';
    console.log("button clicked",event);
 });
  const bulbswitch=document.querySelector('#bulbswitch');
  const bulb=document.querySelector('#bulb');
  bulbswitch.addEventListener('click',function(event){
    console.log(bulb.src);
    if(bulb.src.match('off')){
      bulb.src ='buld-on.jpg';
      bulbswitch.innerHTML="Turn off";
    }
    else{
      bulb.src ="bulb-off.jpg"
      bulbswitch.innerHTML="Turn On";

    }
    

    
  }); 