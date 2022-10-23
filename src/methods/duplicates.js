'use strict';

/*
 * collection.duplicates(key)
 *
 * The duplicates method retrieves and returns duplicate values from the collection
 *
 */

const { isArray, isObject } = require( '../common.js' );

module.exports = function duplicates( key ) {

    const existing = [];

    const duplicate = {};

    Object.keys( this.items ).forEach( index => {

        let value = this.items[index];

        if ( isArray( value ) && value.length == 2 ) {
            index = key !== undefined ? index : value[0];
            value = value[1];
        }

        if ( key !== undefined && value[key] )
            value = value[key];

        const compareValue = stringified( value )

        existing.indexOf( compareValue ) === -1 ? 
            existing.push( compareValue ) : 
            duplicate[index] = value;

    } )

    return new this.constructor( duplicate );
    
};


/*
 * Stringify value for comparing reason
 */
function stringified( value ) {

    if ( isArray( value ) || isObject( value ) ) 
        return JSON.stringify( value );

    return value;
}
