'use strict';

/*
 * collection.when(value, cb, final)
 *
 * The when method will execute the given callback when the first argument given to the method evaluates to true:
 */

module.exports = function when( value, cb, final ) {

    if ( value )
        return cb( this, value );

    if ( final )
        return final( this, value );

    return this;
};