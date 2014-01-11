$(function(){
	$('.netflix--search form').on('submit', function(){
		var $searchTerm = $('.netflix--search-term');
		var adjustedSearch = 'http://movies.netflix.com/WiSearch?v1=' + encodeURIComponent($searchTerm.val());
		$searchTerm.val(adjustedSearch);

		return true;
	});	
});
