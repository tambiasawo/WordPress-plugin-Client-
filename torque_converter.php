<?php  
add_shortcode('converter', 'wuc_convertor');
function wuc_convertor( $atts, $content = null ){
	
	$out .= '
	<div class="conertor_cont tw-bs">
		<div class="tabs_line">
			<ul class="nav nav-tabs">  
				<li class="active"> 
					<a href="#torq"><h3>Torque Calculator</h3></a>
				</li>    
				</ul> 
		</div>
		<div class="content_line">
			<div class="s_content col_2" id="torq">
				<table class="table">  
					<tbody>  
					  <tr>  
						<td><input id="torq_1" value="0" ></td>  
						<td><input id="torq_2" value="0" ></td>   
					  </tr>  
					  <tr>  
						<td>
							<select id="torq_picker_1">
								<option value="0">Newton-meter
								<option value="1">Kilogram-meter
								<option value="2">Pounds-foot
							</select>
						</td>  
						<td>
							<select id="torq_picker_2">
								<option value="0">Newton-meter
								<option value="1">Kilogram-meter
								<option value="2">Pounds-foot
							</select>
						</td>    
					  </tr>   
					</tbody>  
				  </table>  
			</div>
			
		</div>
	</div>
	';
	return $out;
}

?>