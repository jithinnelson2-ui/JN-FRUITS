$(function(){
    $('#read_more-btn').on('click',function(){
        $('#more_details').slideToggle();
    });

    $('.scroll_to').on('click', function(e){
        e.preventDefault();

        var a = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(a).offset().top
        }, 2000);
		
		$('#subscribe').on('click',function(e){
		e.preventDefault();
		alert('You are subscribed');
	});
    });
});
