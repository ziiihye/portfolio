$(document).ready(function(){
	$('.imgal-img').click(function(){
		let imageSrc = $(this).attr("src");
		let imageAlt = $(this).attr("alt");
		$('.imgal-container').css("opacity","0.5");
		$('.graphic').append(
			'<div class="imgal-modal">'+
			'<img src="' + imageSrc + '" alt="' + imageAlt + '" class="imgal-modal-img"></img>'+
			'</div>'
		);

		$('.imgal-modal-img').click(function(){
			$('.imgal-container').css("opacity","1");
			$('.imgal-modal').fadeOut('fast', function(){
				$(this).remove();
			});
		});
	});
});
