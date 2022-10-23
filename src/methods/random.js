'use strict';

/*
 * collection.random(length)
 *
 * The random method returns a random item from the collection
 *
 */

const { values } = require( '../common' );

module.exports = function random( length = null ) {

    const items = values( this.items );

    const collection = new this.constructor( items ).shuffle();

    // If not a length was specified
    if ( length !== parseInt( length, 10 ) ) 
        return collection.first();
    

    return collection.take( length );
};
