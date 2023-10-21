// data

const collapseSize = "50px";
const leftExpandSize = "150px";
const rightExpandSize = "250px";
const columnTypes = ["id", "date", "time", "category", "number"];

var page = "cover";
var subpage = null;
var leftContent = {"collapse": true};
var rightContent = {"collapse": true};
var focusContent = {};

function addExpandButton(obj, size, content, cb){
    let tmp = document.createElement("button");
    if(content["collapse"]){
        obj.style.width = collapseSize;
        tmp.innerHTML = "+";
    }else{
        obj.style.width = size;
        tmp.innerHTML = "×";
    }
    tmp.onclick = function(){
        content["collapse"] = !content["collapse"];;
        cb();
    }
    obj.append(tmp);
}
function addSelectButton(obj, arr, value, cb){
    let select = document.createElement("select");
    let option0 = document.createElement("option");
    if(value == null){
        option0.innerHTML = "Select";
        option0.setAttribute("disabled", null);
        option0.setAttribute("selected", null);
        option0.value = "";
        select.appendChild(option0);
    }
    for(let name of arr){
        let option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;
        select.appendChild(option);
    }
    if(value){
        select.value = value;
    }
    if(cb){
        select.onchange = cb;
    }
    obj.append(select);
}
function viewLeft(){
    let leftbar = document.getElementById("leftbar");
    leftbar.innerHTML = "";
    addExpandButton(leftbar, leftExpandSize, leftContent, viewLeft);
    if(leftContent["collapse"]){
        return null;
    }
    if(leftContent["type"] == "flist"){
        for(let key in leftContent["data"]){
            let tmp = document.createElement("button");
            if(key == subpage){
                tmp.innerHTML = "<b>"+key+"</b>";
            }else{
                tmp.innerHTML = key;
            }
            tmp.onclick = leftContent["data"][key];
            leftbar.appendChild(document.createElement("br"));
            leftbar.appendChild(tmp);
        }
    }
}
function viewRight(){
    let rightbar = document.getElementById("rightbar");
    rightbar.innerHTML = "";
    addExpandButton(rightbar, rightExpandSize, rightContent, viewRight);
    if(rightContent["collapse"]){
        return null;
    }
    if(rightContent["type"] == "select"){
        let data = rightContent["data"];
        let currentValue = null;
        if(focusContent["type"] == "data"){
            currentValue = focusContent["data"]["name"];
        }
        addSelectButton(rightbar, data, currentValue, function(v){
            rightContent["update"](v);
        });
    }
}
function viewContent(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    if(focusContent["type"] == "static"){
        content.innerHTML = focusContent["data"];
    }else if(focusContent["type"] == "upload"){
        for(let key in focusContent["data"]){
            let keyid = document.createElement("text");
            keyid.innerHTML = key + ": ";
            let keyvalue = document.createElement("input");
            keyvalue.placeholder = focusContent["data"][key];
            content.appendChild(keyid);
            content.appendChild(keyvalue);
        }
        content.appendChild(document.createElement("br"));
        let file = document.createElement("input");
        file.setAttribute("type", "file");
        content.appendChild(file);
    }else if(focusContent["type"] == "data"){
        let data = focusContent["data"];
        let scroller = document.createElement("div");
        scroller.className = "scroll";
        let table = document.createElement("table");
        let header = document.createElement("tr");
        table.append(header);
        for(let ci in data["column"]){
            let col = document.createElement("th");
            let tmp1 = document.createElement("text");
            tmp1.innerHTML = "Column: ";
            let cname = document.createElement("input");
            cname.value = data["column"][ci];
            let tmp2 = document.createElement("text");
            tmp2.innerHTML = "Type: ";
            let tmp3 = document.createElement("text");
            tmp3.innerHTML = "Weight: ";
            let weight = document.createElement("input");
            weight.value = data["weight"][ci];
            col.appendChild(tmp1);
            col.appendChild(cname);
            col.appendChild(document.createElement("br"));
            col.appendChild(tmp2);
            addSelectButton(col, columnTypes, data["meta"][ci], null);
            col.appendChild(document.createElement("br"));
            col.appendChild(tmp3);
            col.appendChild(weight);
            header.appendChild(col);
        }
        for(let r of data["sample"]){
            let row = document.createElement("tr");
            table.append(row);
            for(let v of r){
                let col = document.createElement("td");
                col.innerHTML = v;
                row.appendChild(col);
            }
        }
        scroller.appendChild(table);
        let update = document.createElement("button");
        update.innerHTML = "Update";
        update.style.border = "1px solid #ccc";
        update.className = "w3-right";
        update.onclick = focusContent["update"];
        let datatext = document.createElement("span");
        datatext.innerHTML = "Data Name: ";
        let namebox = document.createElement("input");
        namebox.value = data["name"];
        content.appendChild(datatext);
        content.appendChild(namebox);
        content.appendChild(update);
        content.appendChild(scroller);
    }
}
function viewAll(){
    viewLeft();
    viewRight();
    viewContent();
}