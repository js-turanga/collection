'use strict';

/*
 * collection.sortBy(arg)
 *
 * The sortBy method sorts the collection by the given key. The sorted collection keeps 
 * the original array keys, so in the following example we will use the values method 
 * to reset the keys to consecutively numbered indexes:
 *
 */

const { isArray, isFunction, nested } = require( '../common' );

module.exports = function sortBy( arg ) {

    const collector = isArray( this.items ) ? [] : {}

    const sorted = Object.entries( this.items )
        .sort( ( [ ,a ], [ ,b ] ) => {

            const valueA = resolveValue( a, arg );

            const valueB = resolveValue( b, arg );

            if ( valueA === null || valueA === undefined )
                return 1;

            if ( valueB === null || valueB === undefined )
                return -1;

            if ( valueA < valueB )
                return -1;

            if ( valueA > valueB )
                return 1;

            return 0;

        } )
        .reduce( ( acc, [ , value ], index ) => { 

            acc[index] = value;

            return acc;

        }, collector );

    return new this.constructor( sorted );

};


/*
 * Resolve Value
 *
 */
function resolveValue( item, arg ) {

    if ( isFunction( arg ) )
        return arg( item );

    return nested( item, arg );
}