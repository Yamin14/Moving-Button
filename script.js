
$(document).ready(function(){
	//animation
	var flag = 0;
	var flag2 = 0;
	var flag3 = 0;

	$("div").on("mouseover", function(){
		if (flag3 == 0) {
			flag3 = 1;

			if (flag == 0) {
				if (flag2 == 0) {
					$("div").animate({
						left: "-=200px"
					});
					flag2++;
				} else {
					$("div").animate({
						left: "-=400px"
					});
				}
				flag++;
			} else if (flag == 1) {
				$("div").animate({
					top: "-=150px"
				});
				flag++;
			} else if (flag == 2) {
				$("div").animate({
					left: "+=400px"
				});
				flag++;
			} else if (flag == 3) {
				$("div").animate({
					top: "+=150px"
				});
				flag++;
			}

			if (flag == 4) {
				flag = 0;
			}

		}
	});

	$("div").on("mouseleave", function(){ flag3 = 0;});

});