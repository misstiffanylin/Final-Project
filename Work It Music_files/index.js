// $(function(){
// 	getPlaylist();

    $('#emailForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
// });


    // function getPlaylist() {
    //     $.ajax({
    //           type: 'GET',
    //           url: 'https://api.spotify.com/v1/search?q=sia&type=album', success: function(result){
    //             $("#playlist").html(result.albums.items[0].name);
    //           }
    //           })
    //     // $('#playlist').html('');
    //     }

var mood = ['Happy', 'Energetic', 'Chill', 'Confident'];
var happyEmbed = ['<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Axsugaasweetx%3Aplaylist%3A5iKaqCZm2tGrGU1t8n2b5I" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'];
mood.forEach(function(value, key){
    $('#playlist').append('<button class="btn btn-default" value=' + key + '>' + value + '</button> ');
});

var action = ['moodBoost','energize','relax','pepTalk'];
$('button').click(function(){
    index = $(this).val();
    $('#playlist').removeClass();
    $('#playlist').addClass(action[index]);
    console.log(action[index]);
});

$(document).ready(
    function(){
        $("button").click(function () {
            $("#happyPlaylist").toggle();
        });
    });

$(document).ready(
    function(){
        $("button").click(function () {
            $("#happyPlaylist").fadeToggle();
        });
    });

