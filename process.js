function setNewProcessType(){
    subpage = ["Process Type", "New Process Type"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Process Type Name"},
            "python file": {"t": "file"}
        },
        "update": null
    };

    viewAll();
}
function setNewProcess(){
    subpage = ["My Process", "New Process"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Process Name"},
            "source": {"t": "search", "p": "Select Table"},
            "output": {"t": "text", "p": "Output Table"},
            "process type": {"t": "search", "p": "Select Process"},
            "schedule": {"t": "checkbox", "v": "Set Schedule"}
        },
        "update": null
    };

    viewAll();
}
function setProcess(){
    page = "process";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "My Process": {
                "New Process": setNewProcess,
                "Process List": null,
                "Process Report": null
            },
            "Process Type": {
                "New Process Type": setNewProcessType,
                "Process Type List": null
            }
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Group Entities into Clusters."
    };

    viewAll();
}