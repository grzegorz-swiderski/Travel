var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	
	countriesList.empty();
	
	var filterCountry = resp.filter(function(item, index){
    	return (item.name.charAt(item.length-1) == 'po')
	});
	
	console.log(filterCountry);

	resp.forEach(function(item) {
   		var nameC = $('<li class="nameC">');
		
   		nameC.text(item.name).appendTo(countriesList);
   	
   		nameC.click(function(){
   		
   			countriesList.empty();
   			
   			nameC.text(item.name).appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 left">').text('Region: ').appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 right">').text(item.subregion).appendTo(countriesList);
   			$('<li class="col-xs-6 col-md-6 left">').text('Capitol: ').appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 right">').text(item.capital).appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 left">').text('Area: ').appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 right">').text(item.area + 'km^2').appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 left">').text('Currencies: ').appendTo(countriesList);
			$('<li class="col-xs-6 col-md-6 right">').text(item.currencies).appendTo(countriesList);
		});
	});	
}


$('a[href^="#"]').on('click', function(event) {
	
	var target = $( $(this).attr('href') );
	
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});