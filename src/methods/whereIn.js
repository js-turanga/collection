'use strict';

/*
 * collection.whereIn(key, values)
 *
 * The whereIn method removes elements from the collection that do not have 
 * a specified item value that is contained within the given array
 */

const { isArray, nested, values: extractValues } = require( '../common' );

module.exports = function whereIn( key, values ) {

    const collection = isArray( this.items ) ? [] : {}

    let  compare = extractValues( values );

    if ( ! isArray( compare ) )
        compare = [ compare ]

    Object.keys( this.items ).forEach( index => {

        const value = nested( this.items[index], key )

        if ( compare.indexOf( value ) !== -1 )

        { isArray( this.items ) ? 
            collection.push( this.items[index] ) :
            collection[key] = this.items[index]; }

    } )

    return new this.constructor( collection );

};