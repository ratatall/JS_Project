window.addEventListener("load", msg_generator);
window.addEventListener("load", vid_changer);

const message1 = "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!";
const message2 = "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!";
const message3 = "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!";
const messages = new Array(message1, message2, message3);

setInterval(msg_generator, 3000);
class Randomizer {
    constructor(a, b){
        this.text = Math.floor(Math.random() * a);
        this.video = Math.floor(Math.random() * b);
    }
}

var ran = new Randomizer(3, 2);

var i = ran.text;
function msg_generator(){
    if(i >= 3){
        i = 0;
    }
    document.getElementById("message").innerHTML = messages[i];
    i += 1;
}

var j = ran.video;
function vid_changer(){
    if(j == 0){
        var vid = document.getElementById("vid2");
        document.getElementById("vid1").setAttribute("style", "display: none;");
        
    } else {
        var vid = document.getElementById("vid1");
        document.getElementById("vid2").setAttribute("style", "display: none;");
    }
    vid.setAttribute("style", "display: block;");
    vid.currentTime = 0;
    vid.play();
    j += 1;
    if(j >= 2){
        j = 0;
    }
    vid.onended = vid_changer;
}

