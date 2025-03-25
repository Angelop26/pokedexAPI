$(document).ready(function(){
    var url = "https://pokeapi.co/api/v2/pokemon";
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        success: function(result){
            console.log(result)
        },
        error:function(result){
            console.log(result)
        }
    })
})