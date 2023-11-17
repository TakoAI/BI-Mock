function setNewAnalysis(){
    subpage = "NewAnalysis";

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Analysis Name"},
            "source": {"t": "search", "p": "Select Table"},
            "analysis type": {"t": "search", "p": "Select Analysis"},
            "run analysis": {"t": "button", "v": "Start Running"}
        }
    };

    viewAll();
}
function setAnalysisReport(){
    subpage = "AnalysisReport";

    rightContent = {"collapse": true};
    focusContent = {
        "type": "list",
        "data": [
            "Analysis 1",
            "Analysis 2",
            "Analysis 3",
            "Analysis 4"
        ]
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
            "New": setNewAnalysis,
            "Report": setAnalysisReport
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Group Entities into Clusters."
    };

    viewAll();
}