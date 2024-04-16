window.onload = function() 
{
    var textMore = "Read the whole article";
    var textLess = "[Hide]";
    var whatToHide = document.getElementById("show-hide");
    var moreLess = document.getElementById("more-less");
    whatToHide.className = "hidden";
    moreLess.innerHTML = textMore;
    //moreLess.onclick = function() 
    moreLess.addEventListener("click",()=>
    {
        if (moreLess.innerHTML == textMore) 
        {
            moreLess.innerHTML = textLess;
            whatToHide.className = "visible";
        }
        else 
        {
            moreLess.innerHTML = textMore;
            whatToHide.className = "hidden";
        }
    });

    var image = document.getElementById("flowChart");
    image.onmouseover = function() 
    {  //implement this function }
        image.src = "./images/TheMammothInternet-hover.jpeg"; 
    }
    image.onmouseout = function() {  image.src = "./images/TheMammothInternet-hover.jpeg"; }
    
    var h1 = document.getElementById("heading1");
    h1.onclick = function() { 
        if (h1.style.position==="static")
        {
            h1.style.position = "fixed";
        }
            //complete this line
        else
        {
            h1.style.position="static";
        }
    }

    var absractDiv = document.getElementById("absractDiv");
    absractDiv.addEventListener("click", function(){changePadding(absractDiv)});
    
    var introDiv = document.getElementById("introDiv");
    introDiv.addEventListener("click", function(){changePadding(introDiv)});

    var controDiv = document.getElementById("controDiv");
    controDiv.addEventListener("click", function(){changePadding(controDiv)});

    var resultDiv = document.getElementById("resultDiv");
    resultDiv.addEventListener("click", function(){changePadding(resultDiv)});
    
    function changePadding(divElm) 
    { 
     //implement this function

        if(divElm.classList.contains("Extra-padding1"))
        {
            divElm.classList.remove("Extra-padding1");
            divElm.classList.add("Extra-padding2");
        }
        else
        {
            divElm.classList.remove("Extra-padding2");
            divElm.classList.add("Extra-padding1");
        }
    }
    
    var table = document.getElementById("tableId");
     // complete the code so that the table label change its colour when mouseover "#0000ff" 
    // and mouseout "#1ee62f"
    
    table.addEventListener("mouseover",()=>
    {
        table.style.backgroundColor = "#0000ff";
    });
    table.addEventListener("mouseout",()=>
    {
        table.style.backgroundColor = "#lee62f"
    });
}
