document.addEventListener("DOMContentLoaded",function(){
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");
    const clear =document.getElementById("clear"); 
    const counter = document.getElementById("counter");
    const error = document.querySelector(".error");

    let count =0;
    clear.style.display= "none";
    error.style.display= "none";

    increment.addEventListener("click" , function(){
        count++;
        if(count>0){
            error.style.display="none"
        }
        counter.innerHTML = count;
        updateButtons();
    });
     decrement.addEventListener("click" , function(){
        if(count>0){
            count--;
            counter.innerHTML = count;
            updateButtons();
        }else{
            showError();
        }
     });

     function showError(){
        error.style.display = "block";
     }


    function updateButtons(){
        if(count == 0){
            clear.style.display = "none";
            error.style.display= "none";
        }
        else{
            clear.style.display ="block";
        }
    }
    clear.addEventListener("click" , function(){
        count=0;
        counter.innerHTML = count;
        updateButtons();
    });
});