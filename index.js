// index

function initTop(){
    let topbar = document.getElementById("topbar");
    let takoTag = document.createElement("text");
    takoTag.innerHTML = "TakoAI - ";
    let titleTag = document.createElement("button");
    titleTag.innerHTML = "Business Intelligence Platform";
    titleTag.onclick = setCover;
    let dataTag = document.createElement("button");
    dataTag.className = "w3-right";
    dataTag.innerHTML = "Data";
    dataTag.onclick = setData;
    let proTag = document.createElement("button");
    proTag.className = "w3-right";
    proTag.innerHTML = "Process";
    proTag.onclick = setProcess;
    let anaTag = document.createElement("button");
    anaTag.className = "w3-right";
    anaTag.innerHTML = "Analysis";
    anaTag.onclick = setAnalysis;
    let camTag = document.createElement("button");
    camTag.className = "w3-right";
    camTag.innerHTML = "Campaign";
    topbar.append(takoTag);
    topbar.append(titleTag);
    topbar.append(camTag);
    topbar.append(anaTag);
    topbar.append(proTag);
    topbar.append(dataTag);
}
function initBottom(){
    let bottombar = document.getElementById("bottombar");
    let tmp = document.createElement("div");
    tmp.innerHTML = "TakoAI Copy Right 2023";
    bottombar.append(tmp);
}
function initContent(){
    setCover();
    viewAll();
}

initTop();
initBottom();
initContent();
