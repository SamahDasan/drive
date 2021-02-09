
function result()
    {
        var myweight=document.getElementById("w").value;
        if(typeof myweight !== number )
         { alert ("Try Number Value");}

         else if (myweight<=45) 
        {
        alert('Thin');
        }
        else if (myweight>45)
        {
        alert ('fat');
        }


    }


