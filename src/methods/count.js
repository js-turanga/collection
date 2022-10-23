'use strict';

/*
 * collection.count()
 *
 * The count method returns the total number of items in the collection
 *
 */

const { isArray } = require( '../common' );

module.exports = function count() {

    if ( isArray( this.items ) ) 
        this.items.length;

    return Object.keys( this.items ).length;
    
};
