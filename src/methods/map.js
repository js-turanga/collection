'use strict';

/*
 * collection.map(cb)
 *
 * The map method iterates through the collection and passes each value to the given callback.
 * The callback is free to modify the item and return it, thus forming a new collection of modified items
 */

const { isArray } = require( '../common.js' );

module.exports = function map( cb ) {

    if ( isArray( this.items ) ) 
        return new this.constructor( this.items.map( cb ) );

    const obj = {};

    Object.keys( this.items ).forEach( ( key ) => {
        obj[key] = cb( this.items[key], key );
    } );

    return new this.constructor( obj );
    
};
