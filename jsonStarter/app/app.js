function loadData() {
    $.getJSON("data/data.json", function(data) {
        //console.log(data.Nav)
        //for( let i=0; i < data.Nav.length; i++){
        //    console.log(data.Nav[i].linkName.toLowerCase());
        //}

        $.each(data.Nav, function(idx, value){
            let ln = '<a href="' + value.linkURL + '" id="' + value.idName.toLowerCase() + '">' + value.linkName + '</a>';
            $("nav").append(ln)
        });

        $.each(data.Section, function(idx, value){
            let section = '<section id="' + value.idName + '">' + value.headerName + '</section>';
            $("#content").append(section);
        })
    });
}

$(document).ready(function(){
    loadData();
})