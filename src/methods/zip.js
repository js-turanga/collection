'use strict';

/*
 * collection.zip(arg)
 *
 * The zip method merges together the values of the given array with the
 * values of the original collection at their corresponding index
 */

const { isCollection } = require( '../common' );

module.exports = function zip( arg ) {

    if ( isCollection( arg ) )
        arg = arg.all();

    const collection = this.items.map( ( item, index ) => new this.constructor( [ item, arg[index] ] ) );

    return new this.constructor( collection );
};