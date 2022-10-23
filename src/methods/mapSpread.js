'use strict';

/*
 * collection.mapSpread(cb)
 *
 * The mapSpread method iterates over the collection's items, passing each nested
 * item value into the given closure. The closure is free to modify the item 
 * and return it, thus forming a new collection of modified items
 *
 */

module.exports = function mapInto( cb ) {

    return this.map( ( values, key ) => cb( ...values, key ) );
    
};
