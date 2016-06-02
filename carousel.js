
// adds swipe function together with "carousel-swipe.js"
// $("#myCarousel").carousel(function(){});
  

$("#myCarousel").swiperight(function() {
  $("#myCarousel").carousel('prev');
});
$("#myCarousel").swipeleft(function() {
  $("#myCarousel").carousel('next');
});




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

    
    var current = $('.nav li.active');

    // remove 'active' from current and add it to the next
   current.removeClass('active').next().addClass('active');

    var direction=$('.item').html();
    console.log('dir',direction);

    // parseInt makes string "data-slide-to=0" to int 0
    var id = parseInt(current.data('slide-to'));

   // console.log('id:', id);
    //console.log('current: ', current);

    // if slide amount is the same as "data-slide-to= num":
    if(count == id) {

console.log('i am if');
      // add 'active' to the first li element in the list
     // $('.nav li').first().addClass('active');
    }else{

      console.log('else');
    }
  }

  // reset the click event
  clickEvent = false;
});













