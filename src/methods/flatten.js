'use strict';

/*
 * collection.flatten(depth)
 *
 * The flatten method flattens a multi-dimensional collection into a single dimension
 *
 */

const { isArray, isObject, values } = require( '../common' );

module.exports = function flatten( depth ) {

    depth = depth || Infinity;

    let items = values( this.items );

    let isNested = items.filter( item => { return isArray( item ) || isObject( item ) } ).length > 0

    while ( isNested && depth > 0 ) {

        items = isArray( items ) ? flattenArray( items ) : flattenObject( items );

        isNested = values( items ).filter( item => { return isArray( item ) || isObject( item ) } ).length > 0

        depth -= 1;
    }

    return new this.constructor( items );
};


/*
 * Flatten Array
 */
function flattenArray( arr ) {
    return arr.reduce( ( acc, val ) => {

        if ( isObject( val ) )
            val = flattenObject( val )

        return acc.concat( val ) }, [] );
}


/*
 * Flatten Object (without keys)
 */
function flattenObject( obj ) {
    return Object.keys( obj ).reduce( ( acc, key ) => { return acc.concat( obj[key] ) }, [] );
}