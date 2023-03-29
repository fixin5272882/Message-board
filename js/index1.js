$(document).ready( function () {

    $.ajax({
        url: "http://localhost:3000/comments",
        type: "GET",
        dataType: "json",
    })
    .done(function(msq){
    });

    var card_contant = document.getElementById("card_contant");//所有新增的卡片放置的div區塊

    $('#postbtn').click(function() {
        var Name = document.getElementById("Name");
        var contant = document.getElementById("contant");
        var cardid = 0

        $.ajax({
            url: "http://localhost:3000/comments",
            type: "post",
            dataType: "json",
            data:{
                cardID: cardid,
                userName: Name,
                content: contant
            },
        });

        var Name = "";
        var contant = "";
    });
});