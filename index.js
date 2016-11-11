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

var genre = ['Chill House', 'Deep House', 'Trap/Hip Hop', 'Progressive House'];
// for(var i=0;i<genre.length; i++){
//     $('#playlist').append('<button class="btn btn-default" value=' + key + 'id='+ genre[i] + '>' + value +'</button> ');

// };
genre.forEach(function(value, key){
    $('#playlist').append('<button class="btn btn-default" value=' + key + '>' + value +'</button> ');
});

// var abbrv = ['chill','deep','trapHipHop','progressive'];
// $('button').click(function(){
//     switch()
//     index = $(this).val();
//     // $(this).toggle(abbrv[index]);
//     console.log(abbrv[index]);
// });
$(document).ready(
    function(){
        $("#playlist button:nth-child(2)").click(function(){
            $(".list").addClass('hiddenPlaylist');
            $("#chill").removeClass('hiddenPlaylist');
            
        });
    
   
        $("#playlist button:nth-child(3)").click(function(){
            $(".list").addClass('hiddenPlaylist');
            $("#deep").removeClass('hiddenPlaylist')
        });

    

    
        $("#playlist button:nth-child(4)").click(function(){
            $(".list").addClass('hiddenPlaylist');
            $("#trapHipHop").removeClass('hiddenPlaylist')
        });
    

    
        $("#playlist button:nth-child(5)").click(function(){
            $(".list").addClass('hiddenPlaylist');
            $("#progressive").removeClass('hiddenPlaylist')
        });
 });

// $(document).ready(
//     function(){
//         $("button").click(function () {
//             $("#chill").toggle();
//         });
//     });



// $(document).ready(
//     function(){
//         $("button").click(function () {
//             $("#happyPlaylist").fadeToggle();
//         });
//     });

