(function ($) {	
  Drupal.behaviors.custom_modal = {
    attach: function (context, settings) {
      if (!$('#mask').length) {	
        $('body').append('<div id="mask"></div>');
      }   
      $('a[name=modal]').unbind().bind().click(function(e) {     
        $("html, body").animate({ scrollTop: "100px" });  	
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href_priority') ? $(this).attr('href_priority') : $(this).attr('href');
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect        
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.6);    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top', 50); // winH/2-$(id).height()/2
        $(id).css('left', winW/2-$(id).width()/2);
         
        //transition effect
        $(id).fadeIn(2000); 
        return false; 
      });
    
      //if close button is clicked
      $('.window .close').unbind().bind().click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
        $("html, body").animate({ scrollTop: "0px" }); 
      });        
    
      //if mask is clicked
      $('#mask').unbind().bind().click(function () {
        $(this).hide();
        $('.window').hide();
      });    
    }
  }
})(jQuery);  