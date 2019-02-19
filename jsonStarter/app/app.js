function loadData() {
    $.getJSON("data/data.json", function(data) {
        console.log(data.Nav)
    });
}

$(document).ready(function(){
    loadData();
})