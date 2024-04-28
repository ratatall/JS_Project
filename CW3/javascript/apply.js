var majors = new Array(0);
ranks = [0]; // added 0 to prevent situations when table started from 10
window.addEventListener("load", showhide);
window.addEventListener("load", buttons);
const missed_ranks = new Map([
    [1, "1st"],
    [2, "2nd"],
    [3, "3rd"],
    [4, "4th"],
    [5, "5th"],
    [6, "6th"],
    [7, "7th"],
    [8, "8th"],
    [9, "9th"],
    [10, "10th"],
])

function submit(){
    msg = "You have not chosen your ";
    var isGap = false;
    event.preventDefault();
    forgotten_ranks = new Set();//[];
    ranks.sort(function(a, b){return a - b});  //sort the array
    for (let i = 0; i < ranks.length - 1; i++) {
        if (ranks[i + 1] !== ranks[i] + 1) {
            var rankInt = parseInt(ranks[i]);
            var rankInt2 = parseInt(ranks[i + 1]);
            for(let j = rankInt; j < rankInt2; j++){
            if(majorIn(j)) {forgotten_ranks.add(j);
            }
            }
        }
    }
    let is_first = true;

    for(const i of forgotten_ranks){
        if(!is_first){
            msg += " and "            
        }
        is_first = false;
       msg += missed_ranks.get(parseInt(i)) + " major";
        isGap = true;
    }
    msg += ", you can not leave any gap between your chosen majors";
    if(isGap) document.getElementById("checker").innerHTML = msg;
    else document.getElementById("checker").innerHTML = "You have successfully submitted your application at time " + convertDate(new Date);
    return;
}




// write the Date correctly
function convertDate(date){
    return (date.getYear() + 1900) + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.toLocaleTimeString(); 
}
function majorIn(j){
    for(let i = 0; i < ranks.length; i++){
        if(j == ranks[i]) return false;
    }
    return true;
}

function updateTable(rank, major, college){
    col = "col" + rank;
    ran = "ran" + rank;
    document.getElementById(col).innerHTML = college;
    document.getElementById(ran).innerHTML = major;
}



//show/hide effect

function showhide(){
    event.preventDefault();
    document.getElementById("sci").addEventListener("click", clicksci);
    document.getElementById("eng").addEventListener("click", clickeng);
    document.getElementById("is").addEventListener("click", clickis);
}

// all the buttons except show/hide ones

function buttons(){
    document.getElementById("csr").addEventListener("click", clickcs); //csr - CS rank
    document.getElementById("eir").addEventListener("click", clickei);
    document.getElementById("mser").addEventListener("click", clickmse);
    document.getElementById("mcr").addEventListener("click", clickmc);
    document.getElementById("estr").addEventListener("click", clickest);
    document.getElementById("phyr").addEventListener("click", clickphy);
    document.getElementById("chemr").addEventListener("click", clickchem);
    document.getElementById("bior").addEventListener("click", clickbio);
    document.getElementById("cogsr").addEventListener("click", clickcogs);
    document.getElementById("ber").addEventListener("click", clickbe);
    document.getElementById("bmr").addEventListener("click", clickbm);
    document.getElementById("submit").addEventListener("click", submit);
    document.getElementById("clear").addEventListener("click", clear);
}

function clear(){
    event.preventDefault();
    for(let i = 1; i < 11; i++){
        updateTable(i, "", " ");
    }
    document.getElementById("changeTime").innerHTML = "Last change time: " + convertDate(new Date);
    document.getElementById("completedNumber").innerHTML = "Total number of majors applied : 0";
    document.getElementById("checker").innerHTML = "";
    ranks = [0];
    majors = [];
}

function workWithMajor(rank, major, college){
    if(checkMajor(rank, major)){
        alertMajor(rank, college, bachelor);
        updateTable(rank, major, college);
        document.getElementById("completedNumber").innerHTML = "Total number of majors applied : " + (ranks.length - 1);
        document.getElementById("changeTime").innerHTML = "Last change time: " + convertDate(new Date);
    }
    return;
} 




function checkMajor(rank, major){
    if(isNaN(rank) || !rank){
        alert("Please enter the rank of chosen major");
        return false;
    }
    if(rank < 1 || rank > 10){
        alert("Please enter the rank of chosen major between 1 and 10");
        return false;
    }
    if(checkDupMajor(major) == true){
        alert("You have already chosen this major");
        return false;
    }
    if(checkDupRank(rank) == true){
        alert("You have already chosen this rank");
        return false;
    }
    majors[majors.length] = major;
    ranks[ranks.length] = rank;
    return true;
}

function checkDupMajor(major){
    for(let i = 0; i < majors.length; i++){
        if(majors[i] == major){
            return true;
        }
    }
    return false;
}
function checkDupRank(rank){
    for(let i = 0; i < ranks.length; i++){
        if(ranks[i] == rank){
            return true;
        }
    }
    return false;
}











//alert when clicked

function alertMajor(rank){
    if(rank == 1){
        alert("You have chosen " + bachelor + " in " + major + " as your 1st chosen major in " + college + " successfully" );
        return;
    }
    if(rank == 2){
        alert("You have chosen " + bachelor + " in " + major + " as your 2nd chosen major in " + college + " successfully");
        return;
    }
    if(rank == 3){
        alert("You have chosen " + bachelor + " in " + major + " as your 3rd chosen major in " + college + " successfully ");
        return;
    }
    alert("You have chosen " + bachelor + " in " + major + " as your " + rank + "th chosen major in " + college + " successfully ");
}










// hide/show effect

function clicksci() {
    document.getElementById("science").setAttribute("style", "display: block;");
    document.getElementById("engineering").setAttribute("style", "display: none");
    document.getElementById("interdisciplinary").setAttribute("style", "display: none");
    document.getElementById("sci").setAttribute("style", "background-color: white !important;");
    document.getElementById("eng").setAttribute("style", "background-color: rgb(223, 202, 166)");
    document.getElementById("is").setAttribute("style", "background-color: rgb(223, 202, 166)");
}

function clickeng() {
    document.getElementById("engineering").setAttribute("style", "display: block");
    document.getElementById("science").setAttribute("style", "display: none");
    document.getElementById("interdisciplinary").setAttribute("style", "display: none");
    document.getElementById("eng").setAttribute("style", "background-color: white !important;");
    document.getElementById("sci").setAttribute("style", "background-color: rgb(223, 202, 166)");
    document.getElementById("is").setAttribute("style", "background-color: rgb(223, 202, 166)");
}

function clickis() {
    document.getElementById("interdisciplinary").setAttribute("style", "display: block");
    document.getElementById("engineering").setAttribute("style", "display: none");
    document.getElementById("science").setAttribute("style", "display: none");
    document.getElementById("is").setAttribute("style", "background-color: white !important;");
    document.getElementById("eng").setAttribute("style", "background-color: rgb(223, 202, 166)");
    document.getElementById("sci").setAttribute("style", "background-color: rgb(223, 202, 166)");
}




//Check every click

function clickcs(){
    event.preventDefault();
    rank = document.getElementById("cs").value;
    bachelor = "BSc";
    major = "Computer Science";
    college = "College of Engineering";
    workWithMajor(rank, major, college);
}

function clickei(){
    event.preventDefault();
    bachelor = "BEng";
    rank = document.getElementById("ei").value;
    major = "Electronic Information";
    college = "College of Engineering";
    workWithMajor(rank, major, college);
}

function clickmse(){
    event.preventDefault();
    bachelor = "BEng";
    rank = document.getElementById("mse").value;
    major = "Materials Science and Engineering";
    college = "College of Engineering";
    workWithMajor(rank, major, college);
}

function clickmc(){
    event.preventDefault();
    bachelor = "BEng";
    rank = document.getElementById("mc").value;
    major = "Materials and Chemicals";
    college = "College of Engineering";
    workWithMajor(rank, major, college);
}

function clickest(){
    event.preventDefault();
    bachelor = "BEng";
    rank = document.getElementById("est").value;
    major = "Electronic Science and Technology";
    college = "College of Engineering";
    workWithMajor(rank, major, college);
}

function clickphy(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("phy").value;
    major = "Physics";
    college = "College of Science";
    workWithMajor(rank, major, college);
}

function clickchem(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("chem").value;
    major = "Chemistry";
    college = "College of Science";
    workWithMajor(rank, major, college);
}

function clickbio(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("bio").value;
    major = "Biology";
    college = "College of Science";
    workWithMajor(rank, major, college);
}

function clickchem(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("chem").value;
    major = "Chemistry";
    college = "College of Science";
    workWithMajor(rank, major, college);
}

function clickcogs(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("cogs").value;
    major = "Cognitive Science";
    college = "College of Interdisciplinary Studies";
    workWithMajor(rank, major, college);
}

function clickbe(){
    event.preventDefault();
    bachelor = "BEng";
    rank = document.getElementById("be").value;
    major = "Biomedical Engineering";
    college = "College of Interdisciplinary Studies";
    workWithMajor(rank, major, college);
}

function clickbm(){
    event.preventDefault();
    bachelor = "BSc";
    rank = document.getElementById("bm").value;
    major = "Biology and Medicine";
    college = "College of Interdisciplinary Studies";
    workWithMajor(rank, major, college);
}