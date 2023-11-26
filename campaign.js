function setNewCampaign(){
    subpage = ["My Campaign", "New Campaign"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "fill",
        "data": {
            "name": {"t": "text", "p": "Campaign Name"},
            "source": {"t": "search", "p": "Select Table"},
            "campaign type": {"t": "search", "p": "Select Campaign"},
            "schedule": {"t": "checkbox", "v": "Set Schedule"}
        },
        "update": null
    };

    viewAll();
}
function setCampaignReport(){
    subpage = ["My Campaign", "Campaign Report"];

    rightContent = {"collapse": true};
    focusContent = {
        "type": "list",
        "data": {
            "Campaign 1": {"t": "cluster", "n": "User Campaign Analysis 1"},
            "Campaign 2": {"t": "cluster", "n": "User Campaign Analysis 2"},
            "Campaign 3": {"t": "cluster", "n": "User Campaign Analysis 3"}
        }
    };

    viewAll();
}
function setCampaign(){
    page = "campaign";
    subpage = null;
    leftContent = {
        "collapse": false,
        "type": "flist",
        "data": {
            "My Campaign": {
                "New Campaign": setNewCampaign,
                "Campaign List": null,
                "Campaign Report": setCampaignReport
            },
            "Campaign Type": {
                "New Campaign Type": null,
                "Campaign Type List": null
            }
        }
    };
    rightContent = {"collapse": true};
    focusContent = {
        "type": "static",
        "data": "Campaign and Campaign Reports."
    };

    viewAll();
}