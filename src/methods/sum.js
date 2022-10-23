'use strict';

/*
 * collection.sum()
 * collection.sum(key)
 * collection.sum(items => items.dimensions.width)
 *
 * The sum method returns the sum of all items in the collection
 * You may pass a key in dotted notation to sum a nested key within the object
 * In addition, you may pass your own callback to determine which values of the collection to sum
 *
 */

const { isArray, isFunction } = require( '../common.js' );

module.exports = function sum( key ) {

    const items = isArray( this.items ) ? this.items : Object.values( this.items );

    const total = items.reduce( ( acc, item ) => {

        if ( key == undefined ) 
            acc += parseFloat( item );
        
        else if ( isFunction( key ) ) 
            acc += parseFloat( key( item ) );
        
        else if ( key.includes( '.' ) ) {
            const value = key.split( '.' ).reduce( ( o, i ) => o[i] || 0, item ) || 0;

            acc += parseFloat( value );

        } else 
            acc += parseFloat( item[key] );

        



        return acc;
    }, 0 ); 

    return parseFloat( total.toPrecision( 12 ) );
};
