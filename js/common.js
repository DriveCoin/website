$(document).ready(function(){
     $('.audience-block').each(function(){
       // For each set of tabs, we want to keep track of
       // which tab is active and its associated content
       var $active, $content, $links = $(this).find('a');

       // If the location.hash matches one of the links, use that as the active tab.
       // If no match is found, use the first link as the initial active tab.
       $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
       $active.addClass('active');

       $content = $($active[0].hash);

       // Hide the remaining content
       $links.not($active).each(function () {
         $(this.hash).hide();
       });

       // Bind the click event handler
       $(this).on('click', 'a', function(e){
         // Make the old tab inactive.
         $active.removeClass('active');
         $content.hide();

         // Update the variables with the new link and content
         $active = $(this);
         $content = $(this.hash);

         // Make the tab active.
         $active.addClass('active');
         $content.show();

         // Prevent the anchor's default click action
         e.preventDefault();
       });
     });

 //  $(".version").on('click', function () {
 //    var selectedCar = $(this).data('value');
 //    $('#selectedCar').val(selectedCar);
 //    $('#yourcar').html(selectedCar);
 //      $(".b-popup").show();
 //  })

 //    $(".btn-want").click(function(){
 //     $(".b-popup").show();
  // });

 //    $(".cross").click(function(){
 //     $(".b-popup").hide();
  // });

 //    $(".cross2").click(function(){
 //      $(".b-popup1").hide();
 //  });
$('#clock').countdown('2017/9/22', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});

    $( function() {
       $( "#tabs" ).tabs();
     } );


     $.ajax({
       type: 'GET',
       url: 'http://tweetfeed.herokuapp.com/tweets_search/tweets_feed.js',
       success: function(data) {
         eval(data);
       }
     });

     window.fbAsyncInit = function() {
             FB.init({
               appId: "350154272086925",
               xfbml: true,
               version: "v2.6"
             });

           };

           (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) { return; }
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));


 //    $(".model").click(function(){
 //     $(".select-menu").slideToggle();
 //      $(".arrow-up").toggleClass("active");
  // });

 //    $(".version").click(function(){
 //     $(".select-menu").slideToggle();
 //      $(".arrow-up").toggleClass("active");

 //  });

  // $("#form").submit(function() {
  // $.ajax({
  //  type: "POST",
  //  url: "mail.php",
  //  data: $(this).serialize()
  // }).then(function(data) {
  //  $(this).find("input").val("");
  //  $("#form").trigger("reset");
 //     $(".b-popup").hide();
 //      $(".b-popup1").show();
  // });
  // return false;
  // });




});
