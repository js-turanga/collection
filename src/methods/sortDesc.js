'use strict';

/*
 * collection.sortDesc(cb)
 *
 * This method will sort the collection in the opposite order as the sort method
 *
 */

module.exports = function sort( cb ) {

    return this.sort( cb ).reverse();

};
