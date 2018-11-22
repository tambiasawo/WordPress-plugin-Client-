jQuery(document).ready( function($){
	$('.nav-tabs li a').click(function(e){
		e.preventDefault();
		$('.nav-tabs li').removeClass('active');
		$(this).parents('li').addClass('active');
		var id = $(this).attr('href');
		console.log( id );
		//id = id.split('#');
		//id = id[0];
		$('.s_content').hide();
		$(id).show();
	})
	
	
	
	
	
$('#torq_picker_1, #torq_picker_2, #torq_1, #torq_2').on( 'change keyup',function(){
	var factors1= new Array(1, 0.10197162129779283, 0.73756214927727);
	var factors2 = new Array(9.80665, 1, 7.233013851209894);
	var factors3 = new Array(1.355817948331392, 0.138254954376, 1);
	
	    var factors = new Array(factors1,factors2,factors3);
            var val1 = $('#torq_1').val();
	    var val2 = $('#torq_2').val();
        
        var picker_1= $('#torq_picker_1').val();
        var picker_2 = $('#torq_picker_2').val();
	
	
	
	if ($(this).attr('id') == 'torq_2' ){
			$('#torq_1').val( factors[picker_1][picker_2] * val2 );
	}
	if ($(this).attr('id') == 'torq_1' ){
			$('#torq_2').val( factors[picker_1][picker_2] * val1 );
	}
	
	if( $(this).attr('id') == 'torq_picker_1' || $(this).attr('id') == 'torq_picker_2' ){
			$('#torq_2').val( factors[picker_1][picker_2] * val1 );
		}
		})
	
	
	function commafy( num ) {
		var str = num.toString().split('.');
		if (str[0].length >= 5) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 5) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		//return num;
		return str.join('.');
	}
}) // global end