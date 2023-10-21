function setAnalysis(){
    page = "analysis";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "Data": null,
            "Cluster": null,
            "Fine-Tune": null
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Group Entities into Clusters."
    };

    viewAll();
}