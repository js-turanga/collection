'use strict';

/*
 * collection.eachSpread(cb)
 *
 * The eachSpread method iterates over the collection's items, passing each nested item value into the given callback
 *
 */

module.exports = function eachSpread( cb ) {
    
    this.each( ( values, key ) => {
        cb( ...values, key );
    } );

    return this;
};
