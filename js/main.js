$(".places li").click(function(){

	console.log(1)
	var place = "https://www.google.com.mx/maps/place/";
	switch($(this).attr("class"))
	{
		case "foodbox":
			place+="31-00+47th+Ave/@40.7428895,-73.9355809,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25ed3518c3573:0x26e97dd56878ecfc"
		break;

		case "hester":
			place+="Essex+St+%26+Hester+St/@40.7155152,-73.9897764,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25a29edb5d959:0x49e75f7559c54ba4"
		break;

		case "5th":
			place+="46th+Ave+%26+5th+St/@40.7473339,-73.95505,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259214022fe03:0x1abda26ecb6e6ec9"
		break;
	}

	window.open(place,'_blank');
})
