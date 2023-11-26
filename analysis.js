function setNewAnalysis(){
    subpage = ["My Analysis", "New Analysis"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Analysis Name"},
            "source": {"t": "search", "p": "Select Table"},
            "analysis type": {"t": "search", "p": "Select Analysis"},
            "schedule": {"t": "checkbox", "v": "Set Schedule"}
        },
        "update": null
    };

    viewAll();
}
function setAnalysisReport(){
    subpage = ["My Analysis", "Analysis Report"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "list",
        "data": {
            "Analysis 1": {"t": "cluster", "n": "User Cluster Analysis 1"},
            "Analysis 2": {"t": "cluster", "n": "User Cluster Analysis 2"},
            "Analysis 3": {"t": "summary", "n": "User Summary 1"},
            "Analysis 4": {"t": "cluster", "n": "User Cluster Analysis 3"}
        }
    };

    viewAll();
}
function setAnalysis(){
    page = "analysis";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "My Analysis": {
                "New Analysis": setNewAnalysis,
                "Analysis List": null,
                "Analysis Report": setAnalysisReport
            },
            "Analysis Type": {
                "New Analysis Type": null,
                "Analysis Type List": null
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