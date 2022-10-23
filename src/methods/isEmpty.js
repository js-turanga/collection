'use strict';

/*
 * collection.isEmpty()
 *
 * The isEmpty method returns true if the collection is empty; otherwise, false is returned
 *
 */

module.exports = function isEmpty( ) {

    return !Object.keys( this.items ).length;

};
