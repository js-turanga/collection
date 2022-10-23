'use strict';

/*
 * collection.slice(start, limit)
 *
 * The slice method returns a slice of the collection starting at the given index
 *
 */

module.exports = function slice( start, limit ) {

    let collection = this.items.slice( start );

    if ( limit !== undefined )
        collection = collection.slice( 0, limit );

    return new this.constructor( collection );
};
