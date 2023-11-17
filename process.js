function setProcess(){
    page = "process";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "New": null,
            "Existing": null,
            "Report": null
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Group Entities into Clusters."
    };

    viewAll();
}