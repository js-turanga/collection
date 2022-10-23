'use strict';

/*
 * collection.takeUntil(arg)
 *
 * The takeWhile method returns items in the collection until the given callback returns false
 *
 */

const { isArray, isFunction } = require( '../common' );

module.exports = function takeWhile( arg ) {

    let fulfilled = true;

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( key => {

        if ( fulfilled && isFunction( arg ) )
            fulfilled = arg( this.items[key], key, this.items )

        if ( fulfilled && !isFunction( arg ) )
            fulfilled = this.items[key] == arg

        if ( fulfilled )
        { isArray( this.items ) ? 
            collection.push( this.items[key] ) :
            collection[key] = this.items[key]; }

    } )

    return new this.constructor( collection );
};