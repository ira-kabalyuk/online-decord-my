console.log('\'Allo \'Allo!');

 
$(function () {
	$('#datetimepicker').datetimepicker({
			format: 'MM/dd/YYYY',
			locale: 'ru',
			inline: true,
			sideBySide: true,
		
	});

	$('#datetimepicker').on('dp.change', function(date){
		$('#data').val(date.date.format('DD MM YYYY')).css("display", "block");
		$('#data').parents(".panel-title").find(".control--checkbox input").prop("checked", true );
		$('#modalDat').modal('hide')
	});	 

	$(".time-btn").click(function() {
		var text = $(this).text();
		$('#time').text(text).css("display", "block");
		$('#time').parents(".panel-title").find(".control--checkbox input").prop("checked", true );
		$('#modalTime').modal('hide')
	});

	/*$(document).ready(function() {
		$('select').niceSelect();
	});*/

});

$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });
	


 

	
	


