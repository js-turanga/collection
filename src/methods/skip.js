'use strict';

/*
 * collection.skip(number)
 *
 * The skip method returns a new collection, with the given number
 * of elements removed from the beginning of the collection
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function skip( number = 0 ) {

    if ( number == 0 )
        return this

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( ( key, index ) => {

        if ( index + 1 > number )
        { isArray( this.items ) ? 
            collection.push( this.items[key] ) :
            collection[key] = this.items[key]; }

    } )

    return new this.constructor( collection );

};
