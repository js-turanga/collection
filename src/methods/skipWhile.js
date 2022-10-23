'use strict';

/*
 * collection.skipWhile(arg)
 *
 * The skipWhile method skips over items from the collection while the given callback 
 * returns true and then returns the remaining items in the collection as a new collection
 *
 */

const { isArray, isFunction } = require( '../common.js' );

module.exports = function skipWhile( arg ) {

    let fulfilled = true;

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( key => {

        if ( fulfilled && isFunction( arg ) )
            fulfilled = arg( this.items[key], key, this.items )

        if ( fulfilled && !isFunction( arg ) )
            fulfilled = this.items[key] == arg

        if ( !fulfilled )
        { isArray( this.items ) ? 
            collection.push( this.items[key] ) :
            collection[key] = this.items[key]; }

    } )

    return new this.constructor( collection );
};
