 $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
       $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
			});
			
			$("#logincross").click(function(){
				$("#loginModal").modal('hide');
			});
			$("#logincancel").click(function(){
				$("#loginModal").modal('hide');
			});
			
			$("#reservecross").click(function(){
				$("#reserveModal").modal('hide');
			});
			
			$("#reservecancel").click(function(){
				$("#reserveModal").modal('hide');
			});
			
			$("#login").click(function(){
			$("#loginModal").modal("show");
			});
			
			$("#reserve").click(function(){
			$("#reserveModal").modal("show");
			});