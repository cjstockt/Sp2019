var appUsers = {};

function showUsers() {
    $(".wrapper").html("");

    $.each(appUsers, function(idx, user) {
        $(".wrapper").append(`<div><p>${user.name}</p><p>${user.email}</p><p>${user.twitter}</p></div>`)
    })
}

function initListeners() {
    $("#add").click(function(e) {
        let userObject = {
            "name": "John",
            "twitter": "tweenout",
            "email": "john@jon.com"
        };

        appUsers.push(userObject);
        showUsers();
    });

    $("#delete").click(function(e) {
        e.preventDefault();
        appUsers.splice(1, 1);
        showUsers();
    });

    $('#add').attr('disabled', false);
    $('#delete').attr('disabled', false);
}

function loadData() {
    $.getJSON("data/data.json", function(data) {
        appUsers = data.Users;
        initListeners();

    });
}

$(document).ready(function(){
    //initListeners();
    loadData();
})