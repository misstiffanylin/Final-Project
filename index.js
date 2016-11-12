

$(document).ready(
    function(){

        $('#emailForm').submit(function(submitEvent){
            submitEvent.preventDefault();
         })

        var genre = ['Chill House', 'Deep House', 'Trap/Hip Hop', 'Progressive House'];
            genre.forEach(function(value, key){
            $('#playlist').append('<button class="btn btn-default" value=' + key + '>' + value +'</button> ');
        });

        $("#playlist .btn").click ( function() {
            var button = $(this);
            $("#playlist .btn").removeClass("black");
            button.addClass("black");
        });

        $("ul.nav li a").click( function() {
            var button = $(this);
            $("ul.nav li a").removeClass("black");
            button.addClass("black");
        });

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

        //
    }
);


