'use strict';

/*
 * collection.unless(value, cb, final)
 *
 * The unless method will execute the given callback unless the first argument given to the method evaluates to true
 */

const { isFunction } = require( '../common' );

module.exports = function unless( value, cb, final ) {

    if ( !value )
        cb( this );

    if ( isFunction( final ) )
        final( this );

};