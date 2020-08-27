$(document).ready(function(){
    $(".card1").mouseover(function(){
    $("#layer1").show();
    }).mouseout(function(){
    $("#layer1").hide();
    });

      $(".card2").mouseover(function(){
        $("#layer2").show();
       }).mouseout(function(){
        $("#layer2").hide();
       });

       $(".card3").mouseover(function(){
        $("#layer3").show();
       }).mouseout(function(){
        $("#layer3").hide();
       });

       $(".card4").mouseover(function(){
        $("#layer4").show();
       }).mouseout(function(){
        $("#layer4").hide();
       });

       $(".card5").mouseover(function(){
        $("#layer5").show();
       }).mouseout(function(){
        $("#layer5").hide();
       });

       $(".card6").mouseover(function(){
        $("#layer6").show();
       }).mouseout(function(){
        $("#layer6").hide();
       });

       $(".card7").mouseover(function(){
        $("#layer7").show();
       }).mouseout(function(){
        $("#layer7").hide();
       });

       $(".card8").mouseover(function(){
        $("#layer8").show();
       }).mouseout(function(){
        $("#layer8").hide();
       });

});

$(document).ready(function(){
    $(".img-design").click(function(){
        $(".img-design").slideDown(1200).hide(1000);
        $("#design").show();
    });
    $("#design").click(function(){
     $("#design").slideUp(1200);
      $(".img-design").slideDown(1200);
    });
});

$(document).ready(function(){
    $(".img-development").click(function(){
        $(".img-development").slideDown(1200).hide(1000);
        $("#development").show();
    });
    $("#development").click(function(){
     $("#development").slideUp(1200);
      $(".img-development").slideDown(1200);
    });
});

$(document).ready(function(){
    $(".img-product").click(function(){
        $(".img-product").slideDown(1200).hide(1000);
        $("#product").show();
    });
    $("#product").click(function(){
     $("#product").slideUp(1200);
      $(".img-product").slideDown(1200);
    });
});


$(document).ready(function(){
    $("form#form").submit(function(event){
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#textarea").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        swal(name + ", Thank you for Subscribing to Delani Studio.");
      }
      else {
        swal("Please provide your credentials!");
        event.preventDefault();
        return false;
      }
      
    });
});

