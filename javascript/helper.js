removePrevButtonForFirstMenu = function() {

    console.log($("#cssmenu ul li:first-child").attr('class'));

    if($("#cssmenu ul li:first-child").attr('class').indexOf("active") >= 0) {
        $("#navigation button:first-child").hide();
    }
    else {
        $("#navigation button:first-child").show();
    }
}

removeNextButtonForLastMenu = function() {

    console.log($("#cssmenu ul li:last-child").attr('class'));

    if($("#cssmenu ul li:last-child").attr('class').indexOf("active") >= 0) {
        $("#navigation button:last-child").hide();
    }
    else {
        $("#navigation button:last-child").show();
    }
}

prevStep = function() {
  $("#cssmenu").find('li.active').prev().find('a')[0].click() 
}

nextStep = function() {
  $("#cssmenu").find('li.active').next().find('a')[0].click();
}

menuButtonClicked = function(menu) {
 
     $("#cssmenu ul li").removeClass('active');
     $(menu).addClass('active');

     removePrevButtonForFirstMenu();

     removeNextButtonForLastMenu();
 }

$(document).ready(function() {

    removePrevButtonForFirstMenu();

    $("#cssmenu ul li").click(function(){menuButtonClicked(this);});

    $('#add_button').click(function() {
      $('#target_organ_table').show();
    });

    $('#torgan_submit_button').click(function() {

      console.log("Target Organ readings submitted");
      $('#target_organ_table').hide();
      $('#target_organ_table').find('input:text').val('');
      $('#target_organ_table').find('input:file').val('');
    });

    $('#oar_add_button').click(function() {
      $('#organ_in_risk_table').show();
    });

    $('#oar_organ_submit_button').click(function() {

      console.log("Organ risk readings submitted");
      $('#organ_in_risk_table').hide();
      $('#organ_in_risk_table').find('input:text').val('');
      $('#organ_in_risk_table').find('input:file').val('');
    });
});
