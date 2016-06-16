
// adds swipe function together with "carousel-swipe.js"
// $("#myCarousel").carousel(function(){});

$("#myCarousel").swiperight(function() {
  // console.log('right');
  $("#myCarousel").carousel('prev');
  var activeMenuItem = $('.nav').find('li.active');
  var navNumber = activeMenuItem.data('slide-to');
  activeMenuItem.removeClass('active');
  var nextMenuItem;

  // console.log('if number:', navNumber - 1);

  if ((navNumber - 1) < 0) {
    nextMenuItem = $('.nav').find('[data-slide-to="2"]');
  }
  else {
    nextMenuItem = $('.nav').find('[data-slide-to="' + (navNumber - 1) + '"]');
  }
  nextMenuItem.addClass('active');

  // console.log('navNumber: ', navNumber);
});
$("#myCarousel").swipeleft(function() {
  $("#myCarousel").carousel('next');
  var activeMenuItem = $('.nav').find('li.active');
  var navNumber = activeMenuItem.data('slide-to');
  activeMenuItem.removeClass('active');
  var nextMenuItem;

  // console.log('if number:', navNumber + 1);

  if ((navNumber + 1) > 2) {
    nextMenuItem = $('.nav').find('[data-slide-to="0"]');
  }
  else {
    nextMenuItem = $('.nav').find('[data-slide-to="' + (navNumber + 1) + '"]');
  }
  nextMenuItem.addClass('active');
});


$('.nav li').click(function(){
  $(this).toggleClass("active");
  $(this).siblings().removeClass('active');
});


//$('#myCarousel').carousel({
//    interval: 2000
//});

// $(function() {
//   $("#notshurethisworks").swipe( {
//     //Generic swipe handler for all directions
//     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//       $(this).text("You swiped " + direction );
//     }
//   });

//   //Set some options later
//   // $("#test").swipe( {fingers:2} );
// });





$('.exe_button_1').hide();
$('.exe_button_2').hide();
$('.exe_button_3').hide();
$('.reload_exe').hide();

$(window).resize(function(){
  if ($(window).width() < 1025) {
    var cnt = $(".desktopOnly").contents();
    $(".desktopOnly").replaceWith(cnt);
    // console.log("vad är ditt problem");
    $('.chatDiv').detach().insertBefore('.beforeDiv');
    $( ".logDiv" ).appendTo( $( ".ideDiv" ) );
    // $( ".logDiv" ).appendTo( '$( ".ideDiv" ');
  }
}).resize();







$(window).resize(function(){
  if ($(window).width() > 1025) {

    $("body").click(function(e) {
        // alert("clicked");
      if (e.target.id == "chatlioWidgetPlaceholder" || $(e.target).parents("#chatlioWidgetPlaceholder").size()) {
        $('.chatDiv').css('background-color', '#f95c3d');
        $('.ideDiv').css('background-color', '#10232e');
        // alert("Inside chatDiv");
      } else {
        $('.chatDiv').css('background-color', '#10232e');
        $('.ideDiv').css('background-color', '#f95c3d');
        // $buttonBoolean = false;
        // alert("Inside ideDiv");
      }


      if (e.target.id == "exec_button" || $(e.target).parents(".exec_button").size()) {
        $('.chatDiv').css('background-color', '#10232e');
        $('.ideDiv').css('background-color', '#10232e');
        // alert("Inside chatDiv");
      }
      // if($('#myModal').css('display') === 'block'){
      //   console.log("heelooo");
      // }
    });
  }
}).resize();


// var clickEvent = false;
// // when you click the a tag, do following:
// $('#myCarousel').on('click', '.nav a', function() {
//     clickEvent = true;

//     // remove 'active' from previous button
//     $('.nav li').removeClass('active');

//     // add 'active' on the button you pressed
//     $(this).parent().addClass('active');

//     // after one slide is finished, do following:
// }).on('slid.bs.carousel', function(e) {

//   // right now clickEvent is false
//   if(!clickEvent) {


//     // this counts how may slides ('item' divs) we have (0,1,2)
//     var count = $('.nav').children().length -1;
//     var direction=$('.item').html();
//     if($(".carousel-inner > .item").hasClass("active")){
        
//      //   alert($(".carousel-inner > .item").attr('id'));
//     }


//     ///fake change
//     var current = $('.nav li.active');
//     var carosalClass=$('.col-xs-4');

//     // remove 'active' from current and add it to the next
//    carosalClass.removeClass('active');
   



//     // parseInt makes string "data-slide-to=0" to int 0
//     var id = parseInt(current.data('slide-to'));
    
    
// var totalItems = $('.item').length;
// var currentIndex = $('div.active').index();


// $('.col-xs-4[data-slide-to="'+currentIndex+'"]').addClass('active');

// //  }

//   // console.log('current index', ''+currentIndex);
//     //console.log('current: ', current);

//     // if slide amount is the same as "data-slide-to= num":
//     if(count == id) {

// //console.log('i am if');
//       // add 'active' to the first li element in the list
//      // $('.nav li').first().addClass('active');
//     }else{

//     //  console.log('else');
//     }
//   }

//   // reset the click event
//   clickEvent = false;
// });










// Create the orange background(focused div)










