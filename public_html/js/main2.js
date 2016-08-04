/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
		$('.fotodiashow').fancybox();
			$(".fotodiashow-a").fancybox({
				helpers: {
					title : {
						type : 'over'
					},
					overlay : {
						speedOut : 0
					}
				}
			});
});
