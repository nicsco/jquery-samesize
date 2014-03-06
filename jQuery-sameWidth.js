/*
 * jQuery sameWidth v1.0
 * Copyright 2014 Nicola Scotti di Uccio
 * License: GPL v3
 */

(function ( $ ) {
	$.fn.sameWidth = function() {
		return this.width( Math.max.apply(this, $.map( this , function(e){ return $(e).width() }) ) );
	}
}( jQuery ));
