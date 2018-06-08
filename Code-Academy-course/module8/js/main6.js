function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').fadeIn(1000);
  });
  
}

$(document).ready(main);



function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $('.projects').show();
  });
  
}

$(document).ready(main);


function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $('.projects').toggle();
  });
  
}

$(document).ready(main);




function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $('.projects-button').toggleClass('active');
  });
  
}

$(document).ready(main);




function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $(this).toggleClass('active');
  });
  
}

$(document).ready(main);




function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $(this).next().toggle();
  });
  
}

$(document).ready(main);

function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
  $(this).toggleClass('active');
    $(this).text('projects viewed');
  });
  
}

$(document).ready(main);