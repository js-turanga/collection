'use strict';

/*
 * collection.transform(cb)
 *
 * The transform method iterates over the collection and calls the given callback 
 * with each item in the collection. The items in the collection will be replaced 
 * by the values returned by the callback:
 */

const { isArray } = require( '../common' );

module.exports = function transform( cb ) {

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( ( key ) => {

        isArray( this.items ) ? 
            collection.push( cb( this.items[key], key ) ) :
            collection[key] = cb( this.items[key], key );

    } );

    this.items = collection;
    
    return this;
};