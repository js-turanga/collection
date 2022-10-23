'use strict';

/*
 * collection.unwrap(value)
 *
 * The static unwrap method returns the collection's underlying items from the given value when applicable:
 */

const { isCollection } = require( '../common' );

module.exports = function unwrap( value ) {

    if ( isCollection( value ) )
        return value.all();

    return value;
};