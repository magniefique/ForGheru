let doorLight = false;
let isPlaying = false;
let bgActive = false;
const bgmusic = [];
bgmusic[0] = document.getElementById("bgm1");
bgmusic[1] = document.getElementById("bgm2");
bgmusic[2] = document.getElementById("bgm3");
bgmusic[3] = document.getElementById("bgm4");
var musicCount = 0;
let musicLength = bgmusic.length;
const lyrics = [];
var lrcs = document.getElementById("lyrics");
lyrics[0] = "\"With nothing to do, I could lay and just look in your eyes.\"";
lyrics[1] = "\"Girl, I wanna see you undo it, I wanna see you but you're not mine.\"";
lyrics[2] = "\"Don't you see me I, I think I'm falling, I'm falling for you.\"";
lyrics[3] = "\"Collapse my veins, wearing beautiful shoes, It's not living, if it's not with you.\"";

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

async function activate(){
    var door = document.getElementById("door");
    var subt = document.getElementById("subt");
    var defbg = document.getElementById("defbg")
    var actBg = document.getElementById("bg");
    var pbtn = document.getElementById("nbl");
    var nbtn = document.getElementById("nbr");

    if(!doorLight){
        door.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        door.style.color = "whitesmoke";
        door.style.border = "solid whitesmoke 7px";
        door.style.boxShadow = "0 0 50px 5px rgba(255, 255, 255, 0.5), inset 0 0 20px 2px rgba(255, 255, 255, 0.3)";
        door.style.textShadow = "0 0 30px rgba(255, 255, 255, 1)";
        subt.style.textShadow = "0 0 8px rgba(255, 255, 255, 1)";
        defbg.style.background = "none";
        pbtn.style.visibility = "visible";
        pbtn.style.opacity = "1";
        nbtn.style.visibility = "visible";
        nbtn.style.opacity = "1";
        lrcs.style.visibility = "visible";
        lrcs.style.width = "300px";
        lrcs.style.marginLeft = "5%";
        await sleep(2000)
        lrcs.style.opacity = "1";
        lrcs.innerHTML = lyrics[musicCount];
    }
    else{
        door.style.backgroundColor = "";
        door.style.color = "";
        door.style.border = ""
        door.style.boxShadow = "";
        door.style.textShadow = "";
        subt.style.textShadow = "";
        defbg.style.background = "";
        pbtn.style.visibility = "";
        pbtn.style.opacity = "";
        nbtn.style.visibility = "";
        nbtn.style.opacity = "";
        lrcs.style.visibility = "";
        lrcs.style.opacity = "";
        lrcs.style.marginLeft = "";
        lrcs.style.width = "";
        lrcs.innerHTML = "";
    }
    doorLight = !doorLight;
    
    if(!bgActive){
        actBg.classList.add("makeactive");
    }
    else if (bgActive){
        await sleep(1000);
        actBg.classList.remove("makeactive");
    }
    bgActive = !bgActive;
}

async function playMusic(){
    if(!isPlaying){
        bgmusic[musicCount].play();
    }
    else{
        bgmusic[musicCount].pause();
        bgmusic[musicCount].currentTime = 0;
    }
    isPlaying = !isPlaying;
}

async function autochangeMusic(){
    bgmusic[musicCount].pause();
    bgmusic[musicCount].currentTime = 0;
    if(musicCount<musicLength-1){
        musicCount += 1;
        lrcs.style.opacity = "0";
        await sleep(2000);
        lrcs.style.opacity = "1";
        lrcs.innerHTML = lyrics[musicCount];
    }
    else{
        musicCount = 0;
        lrcs.style.opacity = "0";
        await sleep(2000);
        lrcs.style.opacity = "1";
        lrcs.innerHTML = lyrics[musicCount];
    }
    bgmusic[musicCount].play();
}

async function prevMusic(){
    bgmusic[musicCount].pause();
    bgmusic[musicCount].currentTime = 0;
    if(musicCount<=0){
        musicCount = musicLength-1;
        lrcs.style.opacity = "0";
        await sleep(2000);
        lrcs.style.opacity = "1";
        lrcs.innerHTML = lyrics[musicCount];
    }
    else{
        musicCount -= 1;
        lrcs.style.opacity = "0";
        await sleep(2000);
        lrcs.style.opacity = "1";
        lrcs.innerHTML = lyrics[musicCount];
    }
    bgmusic[musicCount].play();
}