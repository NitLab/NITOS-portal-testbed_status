// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-modal

/**
 * @author	Chrysostomos Chatzigeorgiou
 * @e-mail	hrhatzig@gmail.com
 */

$ (function () {
	var open_dialog_id = -1;
	$ ( "*" ).on( "click", function() {
		class_name = $(this).attr('class')+"";

		if (class_name.split(' ').indexOf("node_icon") != -1) {
			dialog_id = parseInt($ (this).attr('id').substring(7), 10);
			if (open_dialog_id != -1) {
				$ ('#dialog' + open_dialog_id).dialog('close');
			}

			var position = $ (this).offset(); // position = { left: 42, top: 567 }
			open_dialog_id = dialog_id;
			$ ('#dialog' + dialog_id).dialog('open');
			$ ('#dialog' + dialog_id).parent().css({'top':(position.top+10)+"px", 
				'left':(position.left+20)+"px"});
			return false;
		} else if (open_dialog_id != -1) {
			$ ('#dialog' + open_dialog_id).dialog('close');
			open_dialog_id = -1;
		}
	});

	for (var i=1; i<36; i++) {	
		$ ( "#dialog" + i ).dialog( {
    		autoOpen: false,
    		open: function() {
        		$ ('.ui-widget-overlay').bind('click',function(){
            		$ ('#dialog' + i).dialog('close');
        		})
    		}
    	});  
	}

	var closedialog;
	function overlayclickclose() {
	    if (open_dialog_id != -1) {
	        $ ('#dialog' + open_dialog_id).dialog('close');
	    }
	}

	$ ('#dialog\d').dialog({
	    autoOpen: false,
	    open: function() {
	        $ ("body").bind('click', overlayclickclose);
	    },
	    focus: function() {
	    },
	    close: function() {
	        $ ("body").unbind('click');
	    },
	    buttons: {
	        Submit: function() {
	            $ (this).dialog('close');
	        }
	    }
	});
});