/*
 * jQuery sameHeight v1.0
 * Copyright 2014 Nicola Scotti di Uccio
 * License: GPL v3
 */

(function ( $ ) {
	$.fn.sameHeight = function() {
		return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
	}
}( jQuery ));
