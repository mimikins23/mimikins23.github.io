$(function () {

//code for javascript media queries
var mq = window.matchMedia( "(min-width: 640px)" );

//code to tell me which part of the code is causing horiztonal scrolling
var docWidth = document.documentElement.offsetWidth;


[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

//initial states of fruits 
	var selectedFruits= [];
	var watermelonClicked = false;
	var bananaClicked= false;
	var appleClicked= false;
	var orangeClicked= false;
	var strawberryClicked= false;
	var mangoClicked= false;
	var pineappleClicked= false;
	var peachClicked= false;

	//hiding the recipe section initilly
	$('#recipes2').hide();
	//trying to hide scrolling
	$('html').css('overflow', 'hidden');


	//scrolling header
	var $head = $( '#ha-header' );
	$( '.ha-waypoint' ).each( function(i) {
		var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'ha-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'ha-header ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	//scrolling states and movements - parallax movements + fading from screen
	$("#container").scroll(function (eventObject) {
		var scrollTop = $(this).scrollTop();
		// console.log("top: ", scrollTop);

		$("#grid").css({
			top: -scrollTop*0.4
		});

	    // $("#marble").css({
	    //   top: -scrollTop*0.6
	    // });

	//scrolling header colour changes + dots 

    if ((scrollTop-$(window).scrollTop())>80) { 
        $('header').css({"color":"#f2d1d4"});
    } else {
    	$('header').css({"color":"#1d58ff"});
    }

    if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot1').css({"background":"#1d58ff"});
    } else {
    	$('#dot1').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot2').css({"background":"#1d58ff"});
    } else {
    	$('#dot2').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot3').css({"background":"#1d58ff"});
    } else {
    	$('#dot3').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot4').css({"background":"#1d58ff"});
    } else {
    	$('#dot4').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot5').css({"background":"#1d58ff"});
    } else {
    	$('#dot5').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot6').css({"background":"#1d58ff"});
    } else {
    	$('#dot6').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot7').css({"background":"#1d58ff"});
    } else {
    	$('#dot7').css({"background":"#f2d1d4"});
    }

     if ((scrollTop-$(window).scrollTop())>80) { 
        $('#dot8').css({"background":"#1d58ff"});
    } else {
    	$('#dot8').css({"background":"#f2d1d4"});
    }
	


	//scrolling dots
		$("#dot1").css({
		top: +scrollTop*0.1 + 190
		});

		$("#dot2").css({
		top: +scrollTop*0.2 + 280
		});

		$("#dot3").css({
		top: -scrollTop*0.4 + 380
		});

		$("#dot4").css({
		top: +scrollTop*0.1 + 387
		});

		$("#dot5").css({
		top: -scrollTop*0.3 + 570
		});

		$("#dot6").css({
		top: +scrollTop*0.6 + 90
		});

		$("#dot7").css({
		top: -scrollTop*0.3 + 476
		});

		$("#dot8").css({
		top: -scrollTop*0.6 + 668
		});

	if ((scrollTop-$(window).scrollTop())>720) {
		$(".circle").stop().fadeTo(100,0);
	} else {
		$(".circle").stop().fadeTo('fast',10);
	}


	//scrolling fruits

	if (mq.matches) {

			$("#watermelon").css({
			top: -scrollTop*0.2 + 200
			});

			$("#banana").css({
			top: -scrollTop*0.35 + 200
			});

		if ((scrollTop-$(window).scrollTop())>650) {
		$("#watermelon").stop().fadeTo(100,0);
		} else {
		$("#watermelon").stop().fadeTo('fast',10);
	}
	// window width is at least 640px
		}
	else {
		$("#watermelon").css({
			top: -scrollTop*0.3 + 100
			});

		$("#banana").css({
			top: +scrollTop*0.65 + 100
			});

	// window width is less than 640px
		}
	

	


	


	if ((scrollTop-$(window).scrollTop())>650) {
		$("#banana").stop().fadeTo(100,0);
	} else {
		$("#banana").stop().fadeTo('fast',10);
	}

	$("#apple").css({
		top: -scrollTop*0.2 + 200
	});

	if ((scrollTop-$(window).scrollTop())>650) {
		$("#apple").stop().fadeTo(100,0);
	} else {
		$("#apple").stop().fadeTo('fast',10);
	}

	$("#orange").css({
		top: -scrollTop*0.35 + 200
	});

	if ((scrollTop-$(window).scrollTop())>650) {
		$("#orange").stop().fadeTo(100,0);
	} else {
		$("#orange").stop().fadeTo('fast',10);
	}

	$("#strawberry").css({
		top: +scrollTop*0.2 + 390
	});

	if ((scrollTop-$(window).scrollTop())>650) {
		$("#strawberry").stop().fadeTo(100,0);
	} else {
		$("#strawberry").stop().fadeTo('fast',10);
	}

	$("#mango").css({
		top: +scrollTop*0.35 + 390
	});

	if ((scrollTop-$(window).scrollTop())>650) {
		$("#mango").stop().fadeTo(100,0);
	} else {
		$("#mango").stop().fadeTo('fast',10);
	}

	$("#pineapple").css({
		top: +scrollTop*0.2 + 390
	})


	if ((scrollTop-$(window).scrollTop())>650) {
		$("#pineapple").stop().fadeTo(100,0);
	} else {
		$("#pineapple").stop().fadeTo('fast',10);
	}

	$("#peach").css({
		top: +scrollTop*0.35 + 390
	});


	if ((scrollTop-$(window).scrollTop())>650) {
		$("#peach").stop().fadeTo(100,0);
	} else {
		$("#peach").stop().fadeTo('fast',10);
	}

	});

	//hovering states switching out images to sliced fruit
	$("#watermelon").hover(function() {
		$("#watermelon img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-09.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#watermelon img").attr('src', 'img/FEWD51_FinalProject_Fruits-01.png' );
	});

	$("#banana").hover(function() {
		$("#banana img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-10.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#banana img").attr('src', 'img/FEWD51_FinalProject_Fruits-02.png' );
	});

	$("#apple").hover(function() {
		$("#apple img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-11.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#apple img").attr('src', 'img/FEWD51_FinalProject_Fruits-03.png' );
	});

	$("#orange").hover(function() {
		$("#orange img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-12.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#orange img").attr('src', 'img/FEWD51_FinalProject_Fruits-04.png' );
	});

	$("#strawberry").hover(function() {
		$("#strawberry img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-13.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#strawberry img").attr('src', 'img/FEWD51_FinalProject_Fruits-05.png' );
	});

	$("#mango").hover(function() {
		$("#mango img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-14.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#mango img").attr('src', 'img/FEWD51_FinalProject_Fruits-06.png' );
	});

	$("#pineapple").hover(function() {
		$("#pineapple img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-15.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#pineapple img").attr('src', 'img/FEWD51_FinalProject_Fruits-07.png' );
	});

	$("#peach").hover(function() {
		$("#peach img").attr('src', 'img/FEWD51_FinalProject_FruitsNewType-16.png' );
		// 	console.log("showing new image");
	}, function () {
		$("#peach img").attr('src', 'img/FEWD51_FinalProject_Fruits-08.png' );
	});

	// var watermelonline = document.getElementById('myLine')
	// var bananaline = document.getElementById('myLine2')
	// var appleline = document.getElementById('myLine3')
	// var orangeline = document.getElementById('myLine4')
	// var strawberryline = document.getElementById('myLine5')
	// var mangoline = document.getElementById('myLine6')
	// var pineappleline = document.getElementById('myLine7')
	// var peachline = document.getElementById('myLine8')

//slicing fruit animation
  var slice = function(fruit, line) {
    fruit.mouseenter(function(){
      var count = 0;
      var interval = window.setInterval(function() {
	line.setAttribute('y2', 20 + +line.getAttribute('y2'));
	line.setAttribute('x2', 20 + +line.getAttribute('x2'));
	if (count++ > 10)
	  window.clearInterval(interval);
      }, 30);
    });

    fruit.mouseleave(function(){
      var count = 0;
      var interval = window.setInterval(function() {
	line.removeAttribute('y2', 20 + +line.removeAttribute('y2'));
	line.removeAttribute('x2', 20 + +line.removeAttribute('x2'));
	if (count++ > 10)
	  window.clearInterval(interval);
      }, 30);
    });
  };

  slice( $("#watermelon"), document.getElementById('myLine'));
  slice( $("#banana"), document.getElementById('myLine2'));
  slice( $("#apple"), document.getElementById('myLine3'));
  slice( $("#orange"), document.getElementById('myLine4'));
  slice( $("#strawberry"), document.getElementById('myLine5'));
  slice( $("#mango"), document.getElementById('myLine6'));
  slice( $("#pineapple"), document.getElementById('myLine7'));
  slice( $("#peach"), document.getElementById('myLine8'));


  //clicking to select and deselect fruit 
  var setup_clicked_fruit = function(fruit, clickedVariable) {
  	fruit.click(function () {
		if (clickedVariable == true) {
			var fruit_image = fruit.children('img');
			fruit_image.css("background", "");

			var fruitIndex = selectedFruits.indexOf(fruit);
			if (fruitIndex > -1) {
				selectedFruits.splice(fruitIndex, 1);
			}
			clickedVariable = false;
		} else {
			event.preventDefault();
			var fruit_image = fruit.children('img');
			fruit_image.css("background", "#ffebee");
			selectedFruits.push(fruit);
			clickedVariable = true;
		}	
	});
  };

	setup_clicked_fruit($("#watermelon"), watermelonClicked);
	setup_clicked_fruit($("#banana"), bananaClicked);
	setup_clicked_fruit($("#apple"), appleClicked);
	setup_clicked_fruit($("#orange"), orangeClicked);
	setup_clicked_fruit($("#strawberry"), strawberryClicked);
	setup_clicked_fruit($("#mango"), mangoClicked);
	setup_clicked_fruit($("#pineapple"), pineappleClicked);
	setup_clicked_fruit($("#peach"), peachClicked);

	
	 
	// using the api and getting the recipes
	$("#submitAPI").click(function() {

		// scrolled=scrolled+1000;
        
		// 		$("#container").animate({
		// 		        scrollTop:  scrolled
		// 		   });

		//showing recipe div
		
  		$( "#recipes2" ).show( "slow", function() {
  		});

  		// $( "#recipes2" ).show( "scale" );



		//auto scroll on submit
		console.log("scrolling to recipe");
		// $("#container").animate({scrollTop: $("#recipes").[0].scrollHeight},1000);

		$("#container").animate({scrollTop: $("#recipes").offset().top},2000);
		// $("#container").animate({ scrollTop: $(document).height()-$(window).height() });
		// $('#recipes').scrollTo(1000);
         


		//api stuff
		var ajaxData = "_app_id=96f1576a&_app_key=fe8e5004e7f3420ecb7f22459277514f&allowedCourse[]=course^course-Beverages";
		for (var i = 0; i < selectedFruits.length; i++) {
			var ingredient = selectedFruits[i].attr('id');
			ajaxData+= "&allowedIngredient[]="+ ingredient;
		}
		
		var url = "https://api.yummly.com/v1/api/recipes";
		$.ajax(url, {
			dataType: "jsonp",
			data: ajaxData,
			success: function(yummlyData) {

				// get yummly data here and write a section for the recipe to appear
				console.log(yummlyData);

				random_number = Math.floor(Math.random() * 10);
				recipe_data = yummlyData['matches'][random_number];
				number_of_matches= yummlyData.totalMatchCount;

				console.log(number_of_matches);



				if (number_of_matches==0) {

							console.log("no matches");
							$("#recipename").text("Sorry, no matches. Please try another selection.");
							$("#ingredientstitle").hide();
							$("#preptime").hide();
							$("#rating").hide();
							$("#directions").hide();
							$("#ingredients").hide();
						} else {


				// get actual recipe
				var ajaxData = "_app_id=96f1576a&_app_key=fe8e5004e7f3420ecb7f22459277514f";
				var url = "https://api.yummly.com/v1/api/recipe/" + recipe_data['id'];
				$.ajax(url, {
					dataType: "jsonp",
					data: ajaxData,
					success: function(recipeData) {
						console.log(recipeData);
						// debugger;

					

						var name = recipeData.name
						var ingredients = recipeData.ingredientLines
						var preptime= recipeData.totalTime
						var rating= recipeData.rating
						var directions= recipeData.source.sourceRecipeUrl
		
					$("ul").empty();

						//to make ingredients a string instead of list
						// var ingredientsString = "";
						// for (var i = 0; i < ingredients.length; i++) {
						// 	ingredientsString += ingredients[i] + " ";
						// }


						



						

						
				
						
						// display ingredientsString
						// $("#ingredients").text(ingredientsString);
						
						$("#recipename").text(name);
						$("#preptime").text("Prep Time:" + preptime);
						$("#rating").text("Rating:" + rating + " out of 5");
						$("#directions").text(directions);

						//to display ingredients as a list
						
						ingredients.forEach(function (ingredients, index) {
						console.log(ingredients);
						$("#ingredients").append("<li>" + ingredients + "</li>");
					});

					}






						// get all these from https://developer.yummly.com/documentation



				});

				$("#back").click(function() {

					console.log('clicking');
					$('#recipes2').hide();
					// jQuery('#container').animate({scrollTop: 0}, duration);
					$("#container").animate({scrollTop: $("#container").offset().top},1500);

						
				});

				$(".x").click(function() {

					console.log('clicking');
					$('#recipes2').hide();
					// jQuery('#container').animate({scrollTop: 0}, duration);
					$("#container").animate({scrollTop: $("#container").offset().top},1500);

						
				});
			}
			}
		});
	});
});
