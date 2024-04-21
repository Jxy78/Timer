
        var h=0,m=0,s=0;
        var aama=1;
        var nimi=document.getElementById("idea");
        var maple=document.getElementById("tit");
        var hour=document.getElementById("ho");
        var minutes=document.getElementById("min");
        var seconds=document.getElementById("neco");
        var parent=document.getElementById("con");
        var clock=document.getElementById("clo");
        var front=document.getElementById("fro");
        var min2=document.getElementById("min2");
        var honda=document.getElementById("mudi");
        avi1=document.getElementById("idea1");
        avi2=document.getElementById("idea2");
        var parent2=document.getElementById("minutes");
        var parent1=document.getElementById("hours");
        parent.removeChild(clock);
       body=document.getElementsByTagName("body");
       container=document.getElementById("con");
        analog();
       
       
        var interid;

        function callTimer()
        {
          
             seconds.style.animation="slide 1.0s infinite";
             hour.style.animation="thambi 1.0s infinite";
             minutes.style.animation="thambi 1.0s infinite";
        
            h=parseInt(document.getElementById("i1").value)
            m=parseInt(document.getElementById("i2").value)
            s=parseInt(document.getElementById("i3").value)

            if(isNaN(h))
            {
                h=0
            }
             if(isNaN(m))
            {
                m=0
            }
             if(isNaN(s))
            {
                s=0
            }
            if(m>60){window.alert("Set Minutes Within 60 Min.");return}
            if(s>60){window.alert("Set Seconds Within 60 Sec.");return}
            flip();
                if(m==0 && h>0)
                {
                    h=h-1;
                    m=60;
                    hour.style.animation="thambi 1.0s";
                    setTimeout(function(){ hour.style.visibility="hidden";},1000);
                   
                }
                if(s==0)
                {
                    minutes.style.animation="thambi 1.0s";
                    setTimeout(function(){ minutes.style.visibility="hidden";},1000)
                    m=m-1;
                    s=60;
                }
                if(s==0 && m==0 && h>=1)
                {
                    h=h-1;
                    m=60;
                    s=60;
                }
                if(s!=60)
                    s+=1
           interid=setInterval(check,1000);
            }


        function check()
        {
            var n=s;
            if(s==12 && m==0 && h==0){
                setTimeout(function(){ var count=new Audio("count.mp3")
                count.play()
               },350);
              setTimeout(function(){
                container.style.animation="timeup 1.0s infinite";
              },800)
               
            }
            s=parseInt(s-1);
            
              if(s<10)
            {
                    s="0"+s;
            }
            if(s>=0)
                nimi.innerHTML=s;
                avi1.innerHTML=h;
                avi2.innerHTML=m;
             if(aama==1)
             {
             hour.style.visibility="hidden"; honda.style.visibility="visible"
             minutes.style.visibility="hidden"; min2.style.visibility="visible"
             aama+=1
            }
            
           
          
            if(s==0)
            {
                if(m-1>=0)
                {
                    s=59;  
                    minutes.innerHTML=m;
                    m=parseInt(m-1); 
                    minutes.style.visibility="visible";
                    min2.style.visibility="hidden";
                    setTimeout(function(){min2.style.visibility="visible"; minutes.style.visibility="hidden"},1000) 
                    
                }
            }
            if(m==0 && h-1>=0 && s<=0)
            {
                m=59;
                hour.innerHTML=h;
                h=h-1;
                s=59;
                hour.style.visibility="visible";
                honda.style.visibility="hidden";
                setTimeout(function(){hour.style.visibility="hidden";honda.style.visibility="visible"},1000) 
                
            }
            s=parseInt(s);

           
           
            if(m == 0 && s==0 && h == 0){ 
                seconds.style.animation="none"
                seconds.innerHTML="00"
                var audio=new Audio("ring.mp3");
                audio.play();
                clearInterval(interid);
                setTimeout(function(){
                    audio.pause();
                    reflip();
                },5000)
               

                return(0);
            }
             if(m<=0 && s<0)
             {
               
                       
                }
                if(s<10)
                {
                        s="0"+s;
                       
                }
                
                //minutes.innerHTML=m;
               
                seconds.innerHTML=s;
                min2.innerHTML=m;
                honda.innerHTML=h;
                
         }
        
         function flip()
         {
            parent.style.animation="flip 2.0s ease-in-out"; 
            setTimeout(function(){
            parent.appendChild(clock);
            parent.removeChild(front);
            parent.style.animation="pangu 3.0s infinite ease-in-out"
            },1600);
           
           
         }

         function reflip()
         {

            seconds.style.animation="none";
            parent.style.animation="reflip 2.0s ease-in-out"
            setTimeout(function(){
                parent.appendChild(front);
                parent.removeChild(clock);
                parent.style.animation="pangu 3.0s infinite ease-in-out"
            },1400)
            
         }

function analog()
{
    var hour_hand=document.getElementById("lead1");
    var min_hand=document.getElementById("lead2");
    var sec_hand=document.getElementById("lead3");

    var settext1=document.getElementById("pa1");
    var settext2=document.getElementById("pa2");
    var settext3=document.getElementById("pa3");

    var date=document.getElementById("assign");


    setInterval(() => 
    {
        var hour_value=new Date().getHours();
        var sec_value=new Date().getSeconds();
        var min_value=new Date().getMinutes();
        sec_value=6*sec_value;
        sec_hand.style.transform="rotate("+sec_value+"deg)";

        min_value=6*min_value;
        min_value+=(new Date().getSeconds())/60*6;
        min_hand.style.transform="rotate("+min_value+"deg)";
        
        hour_value=30*hour_value;
        hour_value+=(new Date().getMinutes())/60*30;
        hour_hand.style.transform="rotate("+hour_value+"deg)";
       
        settext1.innerHTML="Hour Value : "+hour_value;
        settext2.innerHTML="Minute Value : "+min_value;
        settext3.innerHTML="Second Value : "+sec_value; 

        date.innerHTML=new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+(new Date().getFullYear()-2000);
       
       
}, 1000);

}
stop_watch()

function stop_watch()
{
    var circle=document.getElementById("cover1");
    var text=document.getElementById("text1");
    var input=document.getElementById("inp");
    text.style.visibility="hidden";
    var input_value=200000;
    var number=0;

    input.addEventListener("keypress",function(event){
        if(event.keyCode === 13)
        {
            event.preventDefault();
            input_value= parseInt(input.value);
            input.style.visibility="hidden";
            text.style.visibility="visible";
           getsetgo();
        }
    });

   
   function getsetgo()
   {
    circle.style.animation="thirumbu 1.0s infinite ease";
   var id=setInterval(function()
    {
        
        text.innerHTML=number;
        number+=1;
        0
        if(number>input_value+1)
        {
            input.style.visibility="visible";
            text.style.visibility="hidden";
            clearInterval(id);
            circle.style.animation="none";
            number=0;
            text.innerHTML="";
            return
        }
        
    },1000)
}
}