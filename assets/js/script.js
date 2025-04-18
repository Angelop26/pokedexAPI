var pokedexInfo = {};
var card_html='';

$(document).ready(function(){
    var url = "https://pokeapi.co/api/v2/pokemon";
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        success: function(result){
            console.log(result)
            result.results.forEach(function(item,index){
                    $.ajax({
                        url:item.url,
                        type:"get",
                        dataType: "json",
                        success:function (resultItem){
                            // console.log(resultItem)
                            addCard(resultItem.sprites.front_default,resultItem.id,resultItem.name);
                        }
                    })
            })
        },
        error:function(result){
            // console.log(result)
        }
    })



    $(".")

})


function addCard(img,number,name){
    card_html +='        <div class="col">\n' +
        '            <div class="card border border-0">\n' +
        '                <div class="bg-light rounded">\n' +
        '                    <a href="card.php"><img src="'+ img + '" class="card-img-top immagine-pokemon" alt="..."></a>\n' +
        '                </div>\n' +
        '                <div class="card-body ps-2">\n' +
        '                    <h6 class="card-subtitle text-body-secondary mb-3 numero-pokedex">'+ number +'</h6>\n' +
        '                    <h5 class="card-title nome-pokemon"><a href="card.php">'+ String(name).charAt(0).toUpperCase() + String(name).slice(1) + '</a></h5>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    $(".row-cols-4").html(card_html);
}