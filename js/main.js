$(document).ready(function(){
	currentDateTime();
	setInterval(currentDateTime, 1000);
});

// Displaying FeaturesDiscovery Popup Menu
function featureDiscoveryOn()
{
	$('#bottom-fixed-menu-opener').addClass('display-none');
	$('#small-menu-opener').html('<span class="bottom-menu-left-icon" id="bottom-fixed-menu-opener-small"><a href="javascript:void(0);" onclick="featureDiscoveryOff();"><i class="fas fa-list-ul" id="opener-icon-small"></i></a></span>');
    $('#bottom-fixed-features-discovery').addClass("open");
}

// Hiding featureDiscovery Popup Menu
function featureDiscoveryOff()
{
	$('#bottom-fixed-features-discovery').removeClass("open");
	$('#bottom-fixed-menu-opener').removeClass('display-none');
	$('#small-menu-opener').html('');
}

// Toggling Side Panel
function toggleSidePanel()
{
  $('#toggleSidePanelTrigger').toggleClass('panelClosed');
  if(!$('#toggleSidePanelTrigger').hasClass('panelClosed'))
  {
    $('#side-panel').show();
    $('#side-panel').css('opacity',1);
  }
  else
  {
    $('#side-panel').hide();
    $('#side-panel').css('opacity',0);
  }
}

// Dismissing alerts
$('.alert span.alert-dismiss').on('click',function(alert){
  $(this).parent().fadeTo(500, 0).slideUp(500, function(){
        $(this).parent().remove(); 
    });
});

// Toggling Box Collapsible
$('.box h4.box-header-action').on('click',function(collapse){
  $(this).parent().parent().find('.box-body').slideToggle(30);
})

function currentDateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  $('#current_time').html(strTime);

  var day = date.getDate();
  var month = date.getMonth()+1;;
  var year = date.getFullYear();
  if (day < 10) {
	  day = '0' + day;
	}

	if (month < 10) {
	  month = '0' + month;
	}
  var strDate = day + '/' + month + '/'+ year;
  $('#current_date').html(strDate); 
}