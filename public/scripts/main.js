$(function(){
	var prevX, prevY = 0;
	var sensor = $('.trackpad--sensor').get(0);
	sensor.addEventListener('touchstart', function(evt){
		var touch = evt.touches[0];
		prevX = touch.clientX;
		prevY = touch.clientY;
	});
	sensor.addEventListener('touchmove', function(evt){
		evt.preventDefault();
		var touches = evt.changedTouches;
		for (var i=0; i < touches.length; i++) {
			var touch = touches[i];
			var deltaX = touch.clientX - prevX;
			var deltaY = touch.clientY - prevY;

			$.ajax({url: '/mouse/moveRelative', type: 'POST', data: { xrel: deltaX * 2, yrel: deltaY * 2 } });

			prevX = touch.clientX;
			prevY = touch.clientY;
		}
	}, false);

	$('.trackpad--click').on('click', function(){
		$.ajax({ url:$(this).data('url'), type: 'POST' })
	});
});
