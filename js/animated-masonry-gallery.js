$(window).load(function () {

var size = 1;
var button = 0;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : 'img'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==0){
		$("#filter-gallery0").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==1){
		$("#filter-gallery1").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-gallery2").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==3){
		$("#filter-gallery3").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}	
	if(button==4){
		$("#filter-gallery4").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==5){
		$("#filter-gallery5").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==6){
		$("#filter-gallery6").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==7){
		$("#filter-gallery7").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==8){
		$("#filter-gallery8").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==9){
		$("#filter-gallery9").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==10){
		$("#filter-gallery10").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==11){
		$("#filter-gallery11").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==12){
		$("#filter-gallery12").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==13){
		$("#filter-gallery13").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==14){
		$("#filter-gallery14").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==15){
		$("#filter-gallery15").addClass(button_class);
		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : 'img'});
}


	
$("#filter-gallery0").click(function() { $container.isotope({ filter: '.gallery0' }); button = 0; check_button(); });
$("#filter-gallery1").click(function() { $container.isotope({ filter: '.gallery1' }); button = 1; check_button(); });
$("#filter-gallery2").click(function() {  $container.isotope({ filter: '.gallery2' }); button = 2; check_button();  });
$("#filter-gallery3").click(function() {  $container.isotope({ filter: '.gallery3' }); button = 3; check_button();  });
$("#filter-gallery4").click(function() {  $container.isotope({ filter: '.gallery4' }); button = 4; check_button();  });
$("#filter-gallery5").click(function() {  $container.isotope({ filter: '.gallery5' }); button = 5; check_button();  });
$("#filter-gallery6").click(function() {  $container.isotope({ filter: '.gallery6' }); button = 6; check_button();  });
$("#filter-gallery7").click(function() {  $container.isotope({ filter: '.gallery7' }); button = 7; check_button();  });
$("#filter-gallery8").click(function() {  $container.isotope({ filter: '.gallery8' }); button = 8; check_button();  });
$("#filter-gallery9").click(function() {  $container.isotope({ filter: '.gallery9' }); button = 9; check_button();  });
$("#filter-gallery10").click(function() {  $container.isotope({ filter: '.gallery10' }); button = 10; check_button();  });
$("#filter-gallery11").click(function() {  $container.isotope({ filter: '.gallery11' }); button = 11; check_button();  });
$("#filter-gallery12").click(function() {  $container.isotope({ filter: '.gallery12' }); button = 12; check_button();  });
$("#filter-gallery13").click(function() {  $container.isotope({ filter: '.gallery13' }); button = 13; check_button();  });
$("#filter-gallery14").click(function() {  $container.isotope({ filter: '.gallery14' }); button = 15; check_button();  });
$("#filter-gallery15").click(function() {  $container.isotope({ filter: '.gallery15' }); button = 15; check_button();  });
$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});