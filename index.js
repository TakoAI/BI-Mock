let topbar = document.getElementById("topbar");
let leftbar = document.getElementById("leftbar");
let rightbar = document.getElementById("rightbar");
let bottombar = document.getElementById("bottombar");
let content = document.getElementById("content");

function initTop(){
    let tmp = document.createElement("text");
    tmp.innerHTML = "Header";
    topbar.append(tmp);
}
function initLeft(){
    let tmp = document.createElement("text");
    tmp.innerHTML = "Left";
    tmp.onclick = function(){
        if(leftbar.style.width == "50px"){
            leftbar.style.width = "150px";
            tmp.innerHTML = "Left";
        }else{
            leftbar.style.width = "50px";
            tmp.innerHTML = ">";
        }
    }
    leftbar.append(tmp);
}
function initRight(){
    let tmp = document.createElement("text");
    tmp.innerHTML = "Right";
    tmp.onclick = function(){
        if(rightbar.style.width == "50px"){
            rightbar.style.width = "250px";
            tmp.innerHTML = "Right";
        }else{
            rightbar.style.width = "50px";
            tmp.innerHTML = "<";
        }
    }
    rightbar.append(tmp);
}
function initBottom(){
    let tmp = document.createElement("text");
    tmp.innerHTML = "Footer";
    bottombar.append(tmp);
}
function initContent(){
    let tmp = document.createElement("text");
    tmp.innerHTML = "Content";
    content.append(tmp);
}

initTop();
initLeft();
initRight();
initBottom();
initContent();
