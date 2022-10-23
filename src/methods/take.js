'use strict';

/*
 * collection.take(length)
 *
 * The take method returns a new collection with the specified number of items
 *
 */

const { isArray } = require( '../common' );

module.exports = function take( length ) {

    if ( isArray( this.items ) && length < 0 )
        return new this.constructor( this.items.slice( length ) );

    if ( isArray( this.items ) )
        return new this.constructor( this.items.slice( 0, length ) );

    const keys = length < 0 ?
        Object.keys( this.items ).slice( length ) :
        Object.keys( this.items ).slice( 0, length );

    const collection = {};

    keys.forEach( key => {
        collection[key] = this.items[key];
    } )

    return new this.constructor( collection );

};
