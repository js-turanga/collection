'use strict';

/*
 * collection.skipUntil(arg)
 *
 * The skipUntil method skips over items from the collection until the given 
 * callback returns true and then returns the remaining items in the 
 * collection as a new collection instance
 *
 */

const { isArray, isFunction } = require( '../common.js' );

module.exports = function skipUntil( arg ) {

    let fulfilled = false;

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( key => {

        if ( !fulfilled && isFunction( arg ) )
            fulfilled = arg( this.items[key], key, this.items )

        if ( !fulfilled && !isFunction( arg ) )
            fulfilled = this.items[key] == arg

        if ( fulfilled )
        { isArray( this.items ) ? 
            collection.push( this.items[key] ) :
            collection[key] = this.items[key]; }

    } )

    return new this.constructor( collection );
};
