/*!
 * jQuery SameSize Plugin
 * https://github.com/nicsco/jquery-samesize
 *
 * Makes elements have the same height, width, or both.
 *
 * Released under the MIT License.
 * Copyright (c) 2025 Nicola Scotti di Uccio
 */

(function ($) {
    $.fn.extend({
        sameHeight: function () {
            var maxHeight = Math.max.apply(null, this.map(function () {
                return $(this).height();
            }).get());
            return this.height(maxHeight);
        },

        sameWidth: function () {
            var maxWidth = Math.max.apply(null, this.map(function () {
                return $(this).width();
            }).get());
            return this.width(maxWidth);
        },

        sameSize: function () {
            return this.sameHeight().sameWidth();
        }
    });
}(jQuery));