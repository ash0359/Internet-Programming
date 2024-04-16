window.onload= function(){
    var button = document.getElementById("add_button");
    var notePaper = document.getElementById("stickies");
    
    button.addEventListener("click", function(){
        notePaper.innerHTML = "";// clear the ul 
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'partB_json/programmingLanguagesStory.json');     //local file.  partB_json/programmingLanguagesStory.json
        xhr.onload = function(){
            var dataStored = JSON.parse(xhr.responseText);
            process(dataStored);
        }
        xhr.send();
    });

    var del_button = document.getElementById("del_button");
    del_button.addEventListener('click', function(){
        notePaper.innerHTML = "";
    });
}
 
function process(myObject)
{
    var objCopy = myObject;

    for(const obj of objCopy)
    {
        var txt = "";
        createNote(obj.name + " (" + obj.year + ")<br>"+obj.contribution);
    }
}

function createNote(txt) 
{
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var value = txt; //document.getElementById("note_text").value;

    var item = {stickyId: key, stickyValue: value};
    addNoteToDOM(item);
}

function addNoteToDOM(obj) {
    var notePaper = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    //span.classList.add("sticky");
    span.innerHTML = obj.stickyValue;
    sticky.appendChild(span);
    sticky.addEventListener('click', function () {
        sticky.parentNode.removeChild(sticky);
    });

    var number1 = Math.random();
    number1 = number1 * 256;
    Math.floor(number1);

    var number2 = Math.random();
    number2 = number2 * 256;
    Math.floor(number2);

    var number3 = Math.random();
    number3 = number3 * 256;
    Math.floor(number3);

    sticky.style.backgroundColor=`rgb(${number1},${number2},${number3})`;
    notePaper.appendChild(sticky);
}