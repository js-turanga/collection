'use strict';

/*
 * collection.each(cb)
 *
 * The each method iterates over the items in the collection and passes each item to a closure:
 *
 */

const { isObject, values } = require( '../common.js' );

module.exports = function each( cb ) {

    const collection = values( this.items );

    for ( let [ index, ] of collection.entries() ) { 

        if ( isObject( this.items ) ) 
            index = Object.keys( this.items )[index];

        if ( cb( this.items[index], index, this.items ) === false ) 
            break; 
    }

    return this;
    
};
