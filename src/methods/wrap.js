'use strict';

/*
 * collection.wrap()
 *
 * The static wrap method wraps the given value in a collection when applicable
 */

const { isArray, isObject, isCollection } = require( '../common' );

module.exports = function wrap( value ) {

    if ( isCollection( value ) )
        return value;

    if ( isArray( value ) || isObject( value ) )
        return new this.constructor( value );

    return new this.constructor( [ value ] );
};