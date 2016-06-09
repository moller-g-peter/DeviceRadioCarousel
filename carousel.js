
// adds swipe function together with "carousel-swipe.js"
// $("#myCarousel").carousel(function(){});
  // $('.container-fluid').remove();
  // $('.row').unwrap('.row');
  // $('div').removeClass('.col-sm-6');
  // $('div').removeClass('.col-sm-12');
  // $('.desktopOnly').removeClass();



  // var cnt = $(".row").contents();
  // $(".row").replaceWith(cnt);

$(window).resize(function(){
    //console.log($(window).width());
    if ($(window).width() < 638) {
      console.log("Marco tha man");
      
      var cnt = $(".desktopOnly").contents();
      $(".desktopOnly").replaceWith(cnt);

      $('.chatDiv').detach().insertBefore('.beforeDiv');
    }






  }).resize();

// $('.row').removeClass('.desktopOnly');



  
$('.exe_button_1').hide();
$('.exe_button_2').hide();
$('.exe_button_3').hide();
$('.reload_exe').hide();


// $("#myCarousel").swiperight(function() {
//   $("#myCarousel").carousel('prev');
// });
// $("#myCarousel").swipeleft(function() {
//   $("#myCarousel").carousel('next');
// });

//$('#myCarousel').carousel({
//    interval: 2000
//});



var clickEvent = false;
// when you click the a tag, do following:
$('#myCarousel').on('click', '.nav a', function() {
    clickEvent = true;

    // remove 'active' from previous button
    $('.nav li').removeClass('active');

    // add 'active' on the button you pressed
    $(this).parent().addClass('active');

    // after one slide is finished, do following:
}).on('slid.bs.carousel', function(e) {

  // right now clickEvent is false
  if(!clickEvent) {


    // this counts how may slides ('item' divs) we have (0,1,2)
    var count = $('.nav').children().length -1;
    var direction=$('.item').html();
    if($(".carousel-inner > .item").hasClass("active")){
        
     //   alert($(".carousel-inner > .item").attr('id'));
    }


    ///fake change
    var current = $('.nav li.active');
    var carosalClass=$('.col-xs-4');

    // remove 'active' from current and add it to the next
   carosalClass.removeClass('active');
   



    // parseInt makes string "data-slide-to=0" to int 0
    var id = parseInt(current.data('slide-to'));
    
    
var totalItems = $('.item').length;
var currentIndex = $('div.active').index();


$('.col-xs-4[data-slide-to="'+currentIndex+'"]').addClass('active');

//  }

  // console.log('current index', ''+currentIndex);
    //console.log('current: ', current);

    // if slide amount is the same as "data-slide-to= num":
    if(count == id) {

//console.log('i am if');
      // add 'active' to the first li element in the list
     // $('.nav li').first().addClass('active');
    }else{

    //  console.log('else');
    }
  }

  // reset the click event
  clickEvent = false;
});



// Create the orange background(focused div)

  // $("body").click(function(e) {
  //     // alert("clicked");
  //   if (e.target.id == "chatlioWidgetPlaceholder" || $(e.target).parents("#chatlioWidgetPlaceholder").size()) {
  //     $('.desktopChat').css('background-color', '#f95c3d');
  //     $('.desktopIDE').css('background-color', '#10232e');
  //     // alert("Inside chatlioWidgetPlaceholder");
  //   } else {
  //     $('.desktopChat').css('background-color', '#10232e');
  //     $('.desktopIDE').css('background-color', '#f95c3d');
  //     // $buttonBoolean = false;
  //     // alert("Outside chatlioWidgetPlaceholder");
  //   }
  // });


// console.log("outside button");














   // document.addEventListener('chatlio.ready', function (e) {

// $(window).load(function(){
    // $(window).resize(function(){
    //   if ($(window).width() < 1040) {
    //     $('#desktopWrapper').appendTo('#mobileIDE', function(){
    //       // console.log('hellowee');
    //     });
    //     console.log("hello");
    //   }
    //   else {
    //     console.log('nope');
    //   }
    // }).resize();
  // }, false);




// });







