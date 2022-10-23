'use strict';

/*
 * collection.takeUntil(arg)
 *
 * The takeUntil method returns items in the collection until the given callback returns true
 *
 */

const { isArray, isFunction } = require( '../common' );

module.exports = function takeUntil( arg ) {

    let fulfilled = false;

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( key => {

        if ( !fulfilled && isFunction( arg ) )
            fulfilled = arg( this.items[key], key, this.items )

        if ( !fulfilled && !isFunction( arg ) )
            fulfilled = this.items[key] == arg

        if ( !fulfilled )
        { isArray( this.items ) ? 
            collection.push( this.items[key] ) :
            collection[key] = this.items[key]; }

    } )

    return new this.constructor( collection );

};