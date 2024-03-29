function setDataUpload(){
    subpage = ["My Data", "Upload"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Table Name"},
            "upload": {"t": "file"}
        }
    };

    viewAll();
}
function setDataManage(){
    subpage = ["My Data", "Manage"];

    function onEdit(data){
        editData(data["name"], data, function(result){
            console.log("edit", data["name"], result);
            if(result){
                viewContent();
            }
        });
    }

    function onCB(key){
        getData(key, (data) => {
            focusContent = {
                "type": "data",
                "data": data,
                "update": onEdit
            };

            viewContent();
        });
    }

    listData((arr) => {
        rightContent = {
            "collapse": false,
            "type": "select",
            "data": arr,
            "update": onCB
        };

        viewAll();
    });

    focusContent = {
        "type": "static",
        "data": "Select 1 Dataset from the Right-Bar"
    };

    viewAll();
}
function setData(){
    page = "data";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "My Data": {
                "Upload": setDataUpload,
                "Manage": setDataManage
            }
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Upload, View, or Edit Datasets"
    };

    viewAll();
}