
window.addEventListener("load", starter);
function starter(){
    document.getElementById("checkAval").addEventListener("click", submit);
    document.getElementById("re-enter").setAttribute("style", "display: none");
    document.getElementById("nan").setAttribute("style", "display: none");
}

function submit(){
    event.preventDefault();
    var date = new Date();
    var time = document.getElementById("time").value;
    val = document.getElementById("visitors").value;
    date = document.getElementById("date").value;
    document.getElementById("time").value = "9:30-10:30am";
    document.getElementById("visitors").value = "";
    document.getElementById("date").value = "";
    if(!val || !date){
        document.getElementById("re-enter").setAttribute("style", "display: block");
        return;
    } else{
        document.getElementById("re-enter").setAttribute("style", "display: none");
    }

    if(!isNaN(val) && parseInt(val) >= 1){
        document.getElementById("nan").setAttribute("style", "display: none");
    } else{
        document.getElementById("nan").setAttribute("style", "display: block");
        document.getElementById("re-enter").setAttribute("style", "display: none");
        return;
    }
    var check = reserve(date, time, parseInt(val));
    if(check == true){
        alert("Your reservation is successful!");
    } else{
        alert("Sorry, the reservation is full!");
    }
}