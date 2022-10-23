'use strict';

/*
 * collection.sortByDesc(arg)
 *
 * This method has the same signature as the sortBy method, 
 * but will sort the collection in the opposite order.
 *
 */

module.exports = function sortByDesc( arg ) {

    return this.sortBy( arg ).reverse();

};